import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import AudioVisualizer from "./audio-visualizer";

const AudioRecorder = ({
  isRecorderClicked,
  isRecoderClose,
  isRestartClick,
  uploadAudio,
  speachToText,
  summarizeText,
  timeCompleted,
  uploadRecordingClicked,
  abortController,
}) => {
  const [audioStream, setAudioStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  useEffect(() => {
    if (isRecorderClicked) {
      setupRecorder();
      return () => {
        if (recorder) {
          recorder
            .stop()
            .getMp3()
            .then(() => {
              recorder?.stop();
            });
        }
      };
    }
  }, [isRecorderClicked]);
  const setupRecorder = async () => {
    const newRecorder = new MicRecorder({
      bitRate: 128,
    });
    setRecorder(newRecorder);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setAudioStream(stream);
    } catch (error) {
      console.error("Error setting up audio:", error);
    }
  };

  const startRecording = () => {
    if (recorder && audioStream) {
      recorder
        .start(audioStream)
        .then(() => {
          // SpeechRecognition.startListening();
        })
        .catch((error) => {
          console.error("Error starting recording:", error);
        });
    }
  };

  const stopRecording = async () => {
    if (recorder) {
      try {
        await recorder.stop();
        await audioStream.getTracks().forEach((track) => {
          if (track.readyState == "live") {
            track.stop();
          }
        });
        setRecorder(null);
        setAudioStream(null);
      } catch (error) {
        console.error("Error stopping recording:", error);
      }
    }
  };

  const uploadRecording = async () => {
    if (recorder && (uploadRecordingClicked || timeCompleted)) {
      try {
        const [buffer, blob] = await recorder.stop().getMp3();
        await audioStream.getTracks().forEach((track) => {
          if (track.readyState == "live") {
            track.stop();
          }
        });
        setRecorder(null);
        setAudioStream(null);
        const formData = new FormData();
        formData.append("audio", blob);
        await uploadAudio(
          { data: formData, abort: abortController },
          {
            onSuccess: async (res) => {
              console.log("res", res);
              speachToText(
                {
                  data: { fileName: res.data.data },
                  abort: abortController,
                },
                {
                  onSuccess: async (res) => {
                    console.log("res", res);
                    summarizeText(
                      {
                        data: { text: res.data.data },
                        abort: abortController,
                      },
                      {
                        onSuccess: async (res) => {
                          console.log("res", res);
                        },
                        onError: (e) => {
                          console.log("error", e);
                        },
                      }
                    );
                  },
                  onError: (e) => {
                    console.log("error", e);
                  },
                }
              );
            },
            onError: (e) => {
              console.log("error", e);
            },
          }
        );
      } catch (error) {
        console.error("Error stopping recording:", error);
      }
    }
  };
  const restartRecording = async () => {
    if (recorder) {
      await stopRecording(); // Stop the previous recording, if any
    }
  };

  useEffect(() => {
    if (isRecorderClicked) {
      startRecording();
    }
  }, [isRecorderClicked, recorder, audioStream]);

  useEffect(() => {
    if (isRecoderClose) {
      stopRecording();
    }
  }, [isRecoderClose, recorder]);

  useEffect(() => {
    restartRecording();
  }, [isRestartClick]);
  useEffect(() => {
    if (uploadRecordingClicked || timeCompleted) {
      uploadRecording();
    }
  }, [timeCompleted, uploadRecordingClicked]);
  return <>{audioStream && <AudioVisualizer audioStream={audioStream} />}</>;
};

export default AudioRecorder;
