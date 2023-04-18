import React, { useState, useEffect, useRef } from "react";

const LazyEyeDetector = () => {
  const [videoStream, setVideoStream] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [isLazyEyeDetected, setIsLazyEyeDetected] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    setCanvasContext(context);
  }, []);

  useEffect(() => {
    if (canvasContext && videoStream) {
      const video = videoRef.current;
      video.srcObject = videoStream;
      video.addEventListener("canplay", () => {
        const detectLazyEye = () => {
          canvasContext.drawImage(video, 0, 0);
          const imageData = canvasContext.getImageData(
            0,
            0,
            canvasContext.canvas.width,
            canvasContext.canvas.height
          );
          const isLazyEye = detectLazyEyeAlgorithm(imageData);
          setIsLazyEyeDetected(isLazyEye);
        };
        const intervalId = setInterval(detectLazyEye, 1000);
        return () => clearInterval(intervalId);
      });
      if (videoRef.current) videoRef.current.play().catch(console.error);
    }
  }, [canvasContext, videoStream]);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        setVideoStream(stream);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const detectLazyEyeAlgorithm = (imageData) => {
    const width = imageData.width;
    const height = imageData.height;
    const pixels = imageData.data;
    const halfWidth = Math.floor(width / 2);

    let leftEyeSum = 0;
    let rightEyeSum = 0;

    // Compute the average brightness of the left and right halves of the image
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const index = (i * width + j) * 4;
        const brightness =
          (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3;
        if (j < halfWidth) {
          leftEyeSum += brightness;
        } else {
          rightEyeSum += brightness;
        }
      }
    }

    const leftEyeAvg = leftEyeSum / (halfWidth * height);
    const rightEyeAvg = rightEyeSum / (halfWidth * height);

    // Determine if the difference between the average brightness of the two halves of the image
    // exceeds a certain threshold, indicating a lazy eye
    const threshold = 10;
    if (Math.abs(leftEyeAvg - rightEyeAvg) > threshold) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h1>Lazy Eye Detector</h1>
      {isLazyEyeDetected ? (
        <p>A lazy eye has been detected.</p>
      ) : (
        <>
          <canvas id="canvas" />
          <video ref={(video) => setVideoStream(video?.srcObject)} />
          <button onClick={handleStartCamera}>Start Camera</button>
        </>
      )}
    </div>
  );
};

export default LazyEyeDetector;
