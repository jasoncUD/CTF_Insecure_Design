import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [result, setResult] = useState('');

  // Simulated "correct" answers
  const correctAnswers = {
    q1: 'Vancouver',
    q2: 'Trenton',
    q3: 'Ronaldo',
    q4: 'Blue',
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const isCorrect = Object.keys(correctAnswers).every(
      (key) => answers[key] === correctAnswers[key]
    );

    if (isCorrect) {
      setResult('You have successfully been verified and logged in as John! Your flag is: FLAG{jchan_is_the_man}');
    } else {
      setResult('Verification failed. Please try again.');
    }
  };

  return (
    <div class='container'>
        <h1>Verifying credentials for John</h1>
        <p>Please answer the following questions:</p>
        <form>
          <label>
            Which city would you like to retire in?
            <input type="text" name="q1" onChange={handleChange} />
          </label>
          <br />
          <label>
            What city were you born in?
            <input type="text" name="q2" onChange={handleChange} />
          </label>
          <br />
          <label>
            Who is your favorite celebrity?
            <input type="text" name="q3" onChange={handleChange} />
          </label>
          <br />
          <label>
            What is your favorite color?
            <input type="text" name="q4" onChange={handleChange} />
          </label>
          <br />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <p>{result}</p>
    </div>
  );
};

export default App;