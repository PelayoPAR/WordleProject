import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import GuessRow from './GuessRow';
import { range } from '../../utils';

function GuessTable({guesses, answer}) {
  return (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <GuessRow key={num} value={guesses[num]} answer={answer}/>
    ))}
 </div> );
}

export default GuessTable;
