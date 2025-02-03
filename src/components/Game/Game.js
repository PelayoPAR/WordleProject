import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessTable from '../GuessTable';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload. 
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
const [guesses, setGuesses] = React.useState([])

function handleSubmitGuess(tentativeGuess) {
  setGuesses([...guesses, tentativeGuess]);
}

  return <>
      <GuessTable guesses={guesses}></GuessTable>
      <GuessInput handleSubmitGuess={handleSubmitGuess}></GuessInput>
    </>;
}

export default Game;
