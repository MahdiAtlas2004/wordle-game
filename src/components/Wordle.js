import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    // this return statement prevent of execution several handle keyup function
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
};

export default Wordle;
