import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    // this return statement prevent of execution several handle keyup function
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>current guess: {currentGuess}</div>
    </div>
  );
};

export default Wordle;
