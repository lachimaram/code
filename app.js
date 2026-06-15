import React, { useState } from "react";
import "./app.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("Draw");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <div className="buttons">
        <button onClick={() => playGame("Rock")}>Rock</button>
        <button onClick={() => playGame("Paper")}>Paper</button>
        <button onClick={() => playGame("Scissors")}>Scissors</button>
      </div>

      <div className="result">
        <p><strong>Your Choice:</strong> {userChoice}</p>
        <p><strong>Computer Choice:</strong> {computerChoice}</p>
        <h2>{result}</h2>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
