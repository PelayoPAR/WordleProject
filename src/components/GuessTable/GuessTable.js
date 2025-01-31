import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import GuessRow from './GuessRow';

function GuessTable({guessList}) {

  return (<div class="guess-results">
  {/* Show guessed words
  {guessList?.map((guess, i) => <p key={i}>{guess.toUpperCase()}</p>)} */}

  {/* Show empty cells based on allowed number of guesses */}
  {Array.from({ length: NUM_OF_GUESSES_ALLOWED}).map((_,index) => (
    <GuessRow key={index} guess={guessList[index]}></GuessRow>
  ))}
  
 </div> );
}

export default GuessTable;
