import React from 'react';

function GuessInput({handleSubmitGuess} ) {

    const [tentativeGuess, setTentativeGuess] = React.useState('');
    const [error, setError] = React.useState('');


    function handleSubmit(event) {
      event.preventDefault();
      if (tentativeGuess.length !== 5) {
        setError('Guess must be exactly 5 letters');
        return;
      }

      handleSubmitGuess(tentativeGuess);

      setTentativeGuess('');
    }


    const handleChange = (e) => {
      const upperCaseInput = e.target.value.toUpperCase()
      setTentativeGuess(upperCaseInput)
    };


    return (
        <div>
            {error && <p className="error-message">{error}</p>}
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input 
                    id="guess-input" 
                    type="text" 
                    value={tentativeGuess} 
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
