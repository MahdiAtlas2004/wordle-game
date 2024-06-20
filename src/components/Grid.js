import React from "react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        // checking if there is a current guess that user typing
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        // returning different rows
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
