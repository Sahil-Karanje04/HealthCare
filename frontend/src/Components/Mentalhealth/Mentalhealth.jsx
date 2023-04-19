import React, { useState } from 'react';
import axios from 'axios';

function Mentalhealth() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const analyzeText = async () => {
    try {
      const response = await axios.post('/api/analyze_text', { text });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Mental Health Detection</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={analyzeText}>Analyze Text</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default Mentalhealth;
