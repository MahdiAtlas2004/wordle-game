import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({solution}) => {
    const {currentGuess, handleKeyup} = useWordle(solution);
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        // this return statement prevent of execution several handle keyup function
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>current guess: {currentGuess}</div>
    )
}
 
export default Wordle;
