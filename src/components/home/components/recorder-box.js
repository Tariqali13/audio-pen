import React, { useState, useEffect, useRef } from "react";
import { Pause, Close, Restart, Delete, Copy, Save } from "@/src/icons";
import AudioRecorder from "@/src/components/audio-recorder";
import { UPLOAD_FILE, SPEACH_TO_TEXT, SUMMARIZE_TEXT } from "../queries";
import { useMutation } from "react-query";
import { useTimer } from "react-timer-hook";
import { ResultBox, ProcessingBox } from "./index";
const inittime = new Date();
inittime.setSeconds(inittime.getSeconds() + 179); // 3 minutes timer

const RecorderBox = ({
  isRecorderClicked,
  setIsRecorderClicked,
  handleOpenLoginSignUpModel,
}) => {
  const abortController = useRef(null);
  const [isRecoderClose, setIsRecorderClose] = useState(false);
  const [isRestartClick, setIsRestartClicked] = useState(false);
  const [timeCompleted, setTimerCompleted] = useState(false);
  const [uploadRecordingClicked, setUploadRecordingClicked] = useState(false);
  const { seconds, minutes, isRunning, pause, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: inittime,
    onExpire: () => setTimerCompleted(true),
  });
  const {
    mutate: uploadAudio,
    isLoading: isLoadingUploading,
    isSuccess: isSuccessUploadFile,
    reset: resetUploadFile,
  } = useMutation(UPLOAD_FILE);
  const {
    mutate: speachToText,
    isLoading: isLoadingSpeachToText,
    isSuccess: isSuccessSpeachToText,
    data: speachToTextData,
    reset: resetSpeachToText,
  } = useMutation(SPEACH_TO_TEXT);
  const {
    mutate: summarizeText,
    isLoading: isLoadingSummarizeText,
    isSuccess: isSuccessSummarizeText,
    data: summarizeTextData,
    reset: resetSummarizeText,
  } = useMutation(SUMMARIZE_TEXT);

  const handleClose = () => {
    setIsRecorderClicked(false);
    setIsRecorderClose(true);
    pause();
  };
  const handleRestart = () => {
    setIsRecorderClicked(false);
    setIsRecorderClose(false);
    setIsRestartClicked(!isRestartClick);
    setUploadRecordingClicked(false);
    setTimerCompleted(false);
    setTimeout(() => {
      setIsRecorderClicked(true);
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + 179); // 3 minutes timer
      restart(newTime);
    }, 100);
  };
  useEffect(() => {
    if (isRecorderClicked) {
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + 179); // 3 minutes timer
      restart(newTime);
      setIsRecorderClose(false);
      setUploadRecordingClicked(false);
    }
  }, [isRecorderClicked]);
  const handleUploadClicked = () => {
    pause();
    setTimerCompleted(false);
    setUploadRecordingClicked(true);
  };
  const handleCancel = () => {
    pause();
    setUploadRecordingClicked(false);
    setIsRecorderClicked(false);
    setIsRecorderClose(true);
    setIsRestartClicked(false);
    setTimerCompleted(false);
    resetUploadFile();
    resetSpeachToText();
    resetSummarizeText();
    abortController.current?.abort();
  };

  const handleDelete = () => {
    setUploadRecordingClicked(false);
    setIsRecorderClicked(false);
    setIsRecorderClose(true);
    setIsRestartClicked(false);
    setTimerCompleted(false);
    resetUploadFile();
    resetSpeachToText();
    resetSummarizeText();
    pause();
  };
  const showProcessingBox =
    isLoadingSummarizeText || isLoadingSpeachToText || isLoadingUploading;

  //   console.log("heightValue", heightValue);
  const showResult =
    isSuccessUploadFile && isSuccessSpeachToText && isSuccessSummarizeText;

  return (
    <div className={`w-full justify-center items-center`}>
      <div className="w-[460px] mx-auto  flex justify-center flex-col items-center relative bg-gradient-to-tr from-orange-600 via-orange-600 to-orange-600 rounded-[30px]">
        <div
          className={`${
            isRecorderClicked &&
            !showResult &&
            !isLoadingSpeachToText &&
            !isLoadingUploading &&
            !isLoadingSummarizeText
              ? "flex"
              : "hidden"
          } w-[full] flex justify-between flex-col items-center`}
        >
          <div className="w-full pb-9 px-[88px] pt-[51px] flex flex-col justify-center items-center">
            <div className="text-center text-stone-100 text-[32.21px] font-semibold leading-[64.42px]">
              0{minutes}:{seconds}
            </div>
            <div className="w-full">
              <AudioRecorder
                uploadAudio={uploadAudio}
                speachToText={speachToText}
                summarizeText={summarizeText}
                isRestartClick={isRestartClick}
                isRecoderClose={isRecoderClose}
                isRecorderClicked={isRecorderClicked}
                timeCompleted={timeCompleted}
                uploadRecordingClicked={uploadRecordingClicked}
                abortController={abortController}
              />
            </div>
          </div>
          <div className="w-full h-5 mb-6 px-8 flex justify-between items-end ">
            <Restart handleRestart={handleRestart} />
            <button
              className="mb-[-55px] cursor-pointer"
              onClick={handleUploadClicked}
            >
              <Pause />
            </button>
            <Close handleClose={handleClose} />
          </div>
        </div>
        {showProcessingBox && (
          <ProcessingBox
            handleCancel={handleCancel}
            isLoadingSpeachToText={isLoadingSpeachToText}
            isLoadingSummarizeText={isLoadingSummarizeText}
            isLoadingUploading={isLoadingUploading}
          />
        )}
      </div>
      {showResult && (
        <ResultBox
          speachToTextData={speachToTextData}
          summarizeTextData={summarizeTextData}
          handleDelete={handleDelete}
          handleOpenLoginSignUpModel={handleOpenLoginSignUpModel}
        />
      )}
    </div>
  );
};

export { RecorderBox };
