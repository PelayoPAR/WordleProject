import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessTable from '../GuessTable';

// Pick a random word on every pageload. 
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

const [guessWord, setGuessWord] = React.useState([])

  return <>
      <GuessTable guessWord={guessWord}></GuessTable>
      <GuessInput guessWord={guessWord} setGuessWord={setGuessWord}></GuessInput>
    </>;
}

export default Game;
