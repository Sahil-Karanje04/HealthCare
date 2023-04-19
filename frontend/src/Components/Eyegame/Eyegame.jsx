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

import React, { useState, useRef } from 'react';

function Eyegame() {
  const [timer, setTimer] = useState(30);
  const [instruction, setInstruction] = useState('Follow the red dot with your eyes');
  const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
        setTimer((prevTimer) =>{
          console.log("Timer tick"); // add this line
        setTimer(timer - 1)
      } );
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
    <div>
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
            }}
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
          <p>Time remaining: {timer} seconds</p>
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


