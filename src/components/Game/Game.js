import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessTable from '../GuessTable';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameOverBanner from '../GameOverBanner'

// Pick a random word on every pageload. 
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
const [guesses, setGuesses] = React.useState([])
const [gameStatus, setGameStatus] = React.useState("running")

function handleSubmitGuess(tentativeGuess) {
  const nextGuesses = [...guesses, tentativeGuess] // trigger rerender to update guesses.length instead of using NUM_OF_GUESSES_ALLOWED - 1 in order to lose the game on last try + 1
  setGuesses(nextGuesses);

  if (tentativeGuess.toUpperCase() === answer) {
    setGameStatus("won")
  } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED)  {
    setGameStatus("lost")
  }
}

  return <>
      {gameStatus}
      <GuessTable guesses={guesses} answer={answer}></GuessTable>
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}></GuessInput>
      {gameStatus !== 'running' && (<GameOverBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer}/>)}
    </>;
}

export default Game;
