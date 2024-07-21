// src/components/RockPaperScissors.js
import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

const choices = ['Rock', 'Paper', 'Scissors'];

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'Draw';
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
};

const getResultClassName = (result) => {
  if (result === 'You Win!') return 'win';
  if (result === 'You Lose!') return 'lose';
  return 'draw';
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const handleChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(choice, computerRandomChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(gameResult);

    if (gameResult === 'You Win!') {
      setScore({ ...score, player: score.player + 1 });
    } else if (gameResult === 'You Lose!') {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  return (
    <div className="game">
      <h1>Rock-Paper-Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button type="button" class="btn btn-outline-success" key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        <h1>Player Choice: {playerChoice}</h1>
        <h1>Computer Choice: {computerChoice}</h1>
        <p>
          Result: <span className={getResultClassName(result)}>{result}</span>
        </p>
      </div>
      <div className="score">
        <p>Player Score: {score.player}</p>
        <p>Computer Score: {score.computer}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
