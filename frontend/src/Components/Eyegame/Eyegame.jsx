<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import './Eyegame.css'
=======
// import React, { useState, useEffect } from 'react';

// function Eyegame() {
//   const [score, setScore] = useState(0);
//   const [level, setLevel] = useState(1);
//   const [time, setTime] = useState(60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleCatch = (event) => {
//     setScore((prevScore) => prevScore + 1);
//     if (score % 10 === 0) {
//       setLevel((prevLevel) => prevLevel + 1);
//     }
//   };

//   const handleTimeout = () => {
//     alert(`Game over! Your score is ${score}`);
//   };

//   return (
//     <div>
//       <h1>Lazy Eye Game</h1>
//       <p>Score: {score}</p>
//       <p>Level: {level}</p>
//       <p>Time remaining: {time}</p>
//       <div onClick={handleCatch}>
//         {/* Game graphics here */}
//       </div>
//       {time === 0 && handleTimeout()}
//     </div>
//   );
// }

// export default Eyegame;


// import React, { useState } from 'react';

// function Eyegame() {
//   const [timer, setTimer] = useState(0);
//   const [exercise, setExercise] = useState(0);

//   const startExercise = () => {
//     setExercise(1);
//     setTimer(60);
//   };

//   const stopExercise = () => {
//     setExercise(0);
//     setTimer(0);
//   };

//   const decrementTimer = () => {
//     setTimer(timer - 1);
//   };

//   setInterval(() => {
//     if (exercise === 1 && timer > 0) {
//       decrementTimer();
//     }
//   }, 1000);

//   return (
//     <div>
//       <h1>Eye Exercise</h1>
//       {exercise === 0 && (
//         <button onClick={startExercise}>Start Exercise</button>
//       )}
//       {exercise === 1 && (
//         <div>
//           <h2>Exercise in progress</h2>
//           <p>Time remaining: {timer} seconds</p>
//           <button onClick={stopExercise}>Stop Exercise</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Eyegame;

import React, { useState, useRef,useEffect } from 'react';
>>>>>>> 031cde72189c97cdd6e50b9c55a14f58e8c89b77

function Eyegame() {

//   const [timer, setTimer] = useState(30);
  const [instruction, setInstruction] = useState('Follow the red dot with your eyes');
  const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

<<<<<<< HEAD
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        console.log("Timer tick");
        setTimer(timer - 1)
      });
    }, 1000);
  };

=======
  const [seconds, setSeconds] = useState(30);

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
  
  
>>>>>>> 031cde72189c97cdd6e50b9c55a14f58e8c89b77

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
    Timer();
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
<<<<<<< HEAD
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

=======
          >
            <div
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
          </div>
          <p id='time'>Time remaining: {seconds} seconds</p>
          <p>Score: {score}</p>
          <button onClick={handleStopClick}>Stop</button>
        </>
      
        <>
          <p>Your session has ended</p>
          <button onClick={handleStartClick}>Start</button>
        </>
     
>>>>>>> 031cde72189c97cdd6e50b9c55a14f58e8c89b77
    </div>
  );
}

export default Eyegame;


