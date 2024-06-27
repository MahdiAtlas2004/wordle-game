import React, { useRef } from "react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative' }}>
      {guesses.map((g, i) => {
        // checking if there is a current guess that user is typing
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        // returning different rows
        return <Row key={i} guess={g} />;
      })}
      <input 
        ref={inputRef} 
        type="text" 
        readOnly 
        style={{
          position: 'absolute',
          opacity: 0,
          height: 0,
          width: 0,
          border: 'none',
          padding: 0,
          margin: 0,
          outline: 'none'
        }} 
      />
    </div>
  );
}
