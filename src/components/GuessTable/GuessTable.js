import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import GuessRow from './GuessRow';
import { range } from '../../utils';

function GuessTable({guesses}) {
  return (
  <div className="guess-results">
    {guesses.map((guess, i) => (
      <p key={i} className="guess">
      {guess}
      </p>
    ))}
 </div> );
}

export default GuessTable;
