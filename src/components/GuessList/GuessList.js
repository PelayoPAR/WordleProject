import React from 'react';

function GuessList({guessList}) {

  return <div class="guess-results">
  {guessList?.map((guess, i) => <p key={i}>{guess.toUpperCase()}</p>)}

</div>; 
}

export default GuessList;
