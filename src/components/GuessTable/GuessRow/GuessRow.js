import React from 'react';

function GuessRow({guess}) {
  const letters = guess? guess.toUpperCase().split("") : Array(5).fill("");

  return (
    <p className="guess">
    {letters.map((letter, i) => (
      <span key={i} className="cell">{letter}</span>
    ))}
    </p>
  );
}

export default GuessRow;
