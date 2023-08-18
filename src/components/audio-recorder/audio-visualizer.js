import React, { useRef, useEffect } from "react";

const AudioVisualizer = ({ audioStream }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!audioStream) return;

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(audioStream);

    analyser.fftSize = 256;
    source.connect(analyser);

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / dataArray.length) * 0.5;
      let x = 0;

      dataArray.forEach((value) => {
        const barHeight = Math.floor(value) - (Math.floor(value) % 5);

        canvasCtx.fillStyle = "rgb(255, 255, 255)";
        canvasCtx.fillRect(
          x,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2
        );

        x += barWidth + 1;
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [audioStream]);

  return <canvas style={{ height: "70px", width: "100%" }} ref={canvasRef} />;
};

export default AudioVisualizer;
