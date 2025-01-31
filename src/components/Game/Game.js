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

const [guessList, setGuessList] = React.useState([])

  return <>
      <GuessTable guessList={guessList}></GuessTable>
      <GuessInput guessList={guessList} setGuessList={setGuessList}></GuessInput>
    </>;
}

export default Game;
