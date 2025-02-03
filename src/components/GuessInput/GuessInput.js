import React from 'react';

function GuessInput({setGuessWord, guessWord} ) {

    const [guess, setGuess] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //  console.log({guess})
        if (guessWord.includes(guess)) {
          setError('You already tried this word!: ' + guess)
          return;
        }
        setError('');
        setGuessWord([...guessWord, guess]);
    }

    const handleChange = (e) => {
      const upperCaseInput = e.target.value.toUpperCase()
      setGuess(upperCaseInput)
    };


    return (
        <div>
            {error && <p className="error-message">{error}</p>}
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input 
                    id="guess-input" 
                    type="text" 
                    value={guess} 
                    onChange={handleChange}
                    minLength={5}
                    maxLength={5}
                    pattern='^[A-Z]{5}$'
                    title="5 letter word 😇"
                    required
                    />
            </form>
        </div>
    )

}

export default GuessInput;
