import React, { useState, useRef } from 'react';
import './Eyegame.css'

function Eyegame() {
  const [timer, setTimer] = useState(30);
  const [instruction, setInstruction] = useState('Follow the red dot with your eyes');
  const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        console.log("Timer tick");
        setTimer(timer - 1)
      });
    }, 1000);
  };


  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleClick = (e) => {
    setScore((prevScore) => prevScore + 1);
    setDotPosition({ x: Math.random() * 90 + 5, y: Math.random() * 90 + 5 });
  };

  const handleStartClick = () => {
    setScore(0);
    setTimer(30);
    setInstruction('Follow the red dot with your eyes');
    startTimer();
  };

  const handleStopClick = () => {
    stopTimer();
    setInstruction(`You scored ${score} points in 30 seconds`);
  };

  return (
    <div className='eyegame-container'>
      <h1>Eye Training Exercise</h1>
      <p>{instruction}</p>

      <>
        <div
          style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            border: '1px solid black',
            margin: '20px',
            backgroundColor:"white"
          }}
        >
          <div style={{position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'red',
              top: `${dotPosition.y}%`,
              left: `${dotPosition.x}%`,
            }}
            onClick={handleClick}
          ></div>
        </div>
        <p style={{backgroundColor: "#0cb8b6",padding:"1rem",borderRadius:"5px"}}>Time remaining: {timer} seconds</p>
        <p>Score: {score}</p>
        <button onClick={handleStopClick} style={{backgroundColor: "#0cb8b6",padding:".3rem 1rem",borderRadius:"5px"}}>Stop</button>
      </>

      <>
        <p>Your session has ended</p>
        <button onClick={handleStartClick} style={{backgroundColor: "#0cb8b6",padding:".3rem 1rem",borderRadius:"5px"}}>Start</button>
      </>

    </div>
  );
}

export default Eyegame;


