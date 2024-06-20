import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  // function for starting a new game
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>🎉 You Win! 🎉</h1>
          <p className="solution">{solution}</p>
          <p>You found the correct word in {turn} guesses :)</p>
          <button onClick={refreshPage}>New Game</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind 😔</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={refreshPage}>New Game</button>
        </div>
      )}
    </div>
  );
}
