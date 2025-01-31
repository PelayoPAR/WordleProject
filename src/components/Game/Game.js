import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// const [guess, setGuess] = React.useState('');

function Game() {
  return <>
  <GuessList></GuessList>
    <GuessInput ></GuessInput>
  </>;
}

export default Game;


// guess={guess} setGuess={setGuess}