import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    // Ending the game when the user find the correct word
    if(isCorrect) {
      console.log("Congrats, you win!🎉🎉🎉");
      window.removeEventListener("keyup", handleKeyup);
    }
    // Ending the game when the user is out of the turns
    if(turn > 5) {
      console.log("unlucky, out of guesses!");
      window.removeEventListener("keyup", handleKeyup);
    }

    // this return statement prevent of execution several handle keyup function
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
};

export default Wordle;
