<<<<<<< HEAD
import React, { useState, useRef,useEffect } from 'react';
=======
import './Eyegame.css'

import React, { useState, useRef, useEffect } from "react";
>>>>>>> d22c18a13ec79f4bedbfa8d85814133e7a76793e

function Eyegame() {
    //   const [timer, setTimer] = useState(30);
    const [instruction, setInstruction] = useState(
        "Follow the red dot with your eyes"
    );
    const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
    const [score, setScore] = useState(0);
    const intervalRef = useRef(null);

<<<<<<< HEAD
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

  const [seconds, setSeconds] = useState(30);

  function Timer() {
=======
>>>>>>> d22c18a13ec79f4bedbfa8d85814133e7a76793e
    const [seconds, setSeconds] = useState(30);

<<<<<<< HEAD
    return <div>{seconds} seconds left</div>;
  
  }
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
=======
    function Timer() {
        const [seconds, setSeconds] = useState(30);

        useEffect(() => {
            // Decrease the seconds every second until it reaches 0
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }
            }, 1000);

            // Clear the interval when the component is unmounted
            return () => clearInterval(interval);
        }, [seconds]);
>>>>>>> d22c18a13ec79f4bedbfa8d85814133e7a76793e

        return <div>{seconds} seconds left</div>;
    }

    //   const startTimer = () => {
    //     let element = document.getElementById("timer");
    //     setInterval(function() {
    //         let i = 30;
    //             setTimer(i);
    //         i = i-1;
    //     }, 1000);
    //   }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleClick = (e) => {
        setScore((prevScore) => prevScore + 1);
        setDotPosition({ x: Math.random() * 90 + 5, y: Math.random() * 90 + 5 });
    };

<<<<<<< HEAD
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
        ></div>
          <div style={{position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'red',
              top: `${dotPosition.y}%`,
              left: `${dotPosition.x}%`,
            }}
          >
            <div
=======
    const handleStartClick = () => {
        setScore(0);
        setTimer(30);
        setInstruction("Follow the red dot with your eyes");
        Timer();
    };

    const handleStopClick = () => {
        stopTimer();
        setInstruction(`You scored ${score} points in 30 seconds`);
    };

    return (
        <div className="eyegame-container">
            <h1>Eye Training Exercise</h1>
            <p>{instruction}</p>

            <>
                <div
                    style={{
                        position: "relative",
                        width: "300px",
                        height: "300px",
                        border: "1px solid black",
                        margin: "20px",
                        backgroundColor: "white",
                    }}
                >
                    <div
>>>>>>> d22c18a13ec79f4bedbfa8d85814133e7a76793e
              style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'red',
                top: `${dotPosition.y}%`,
                left: `${dotPosition.x}%`,
              }}
              onClick={handleClick}
            ></div>
<<<<<<< HEAD
          </div>
          <p id='time'>Time remaining: {seconds} seconds</p>
          <p>Score: {score}</p>
          <button onClick={handleStopClick}>Stop</button>
        </>
      
        <>
          <p>Your session has ended</p>
          <button onClick={handleStartClick}>Start</button>
        </>
     
     
    </div>
  );
}

export default Eyegame
=======
                </div>
                <p id="time">Time remaining: {seconds} seconds</p>
                <p>Score: {score}</p>
                <button onClick={handleStopClick}>Stop</button>
            </>

            <>
                <p>Your session has ended</p>
                <button onClick={handleStartClick}>Start</button>
            </>
        </div>
    );
}

export default Eyegame;
>>>>>>> d22c18a13ec79f4bedbfa8d85814133e7a76793e
