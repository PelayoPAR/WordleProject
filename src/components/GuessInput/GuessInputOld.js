import React from 'react'

// function GuessInputOld() {

//    const [guess, setGuess] = React.useState('')

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        console.log({guess})
//        setGuess('')
//    }

//    const handleChange = (e) => {
//     const upperCaseInput = e.target.value.toUpperCase()
//     setGuess(upperCaseInput)};


//     return (
//         <div>
//             <form className="guess-input-wrapper" onSubmit={handleSubmit}>
//                 <label htmlFor="guess-input">Enter guess:</label>
//                 <input 
//                     id="guess-input" 
//                     type="text" 
//                     value={guess} 
//                     onChange={handleChange}
//                     pattern='^[A-Z]{5}$'
//                     title="Input must have exactly five upper case letters"
//                     required
//                     />
//             </form>
//         </div>
//     )
// }

export default GuessInputOld

// UNCONTROLLED: 
// import React from 'react'

// function GuessInput() {

//     function handleSubmit(e) {
//         e.preventDefault();
//         const guess = e.target.elements.guess.value;
//         console.log({guess})
//         // console.dir(e.target.elements) /* Para coger el nodo del dom y mostrarlo como objeto JS */
//     }


//     return (
//         <div>
//             <form className="guess-input-wrapper" onSubmit={handleSubmit}>
//                 <label htmlFor="guess-input">Enter guess:</label>
//                 <input id="guess-input" type="text" name='guess'/>
//                 {/* <button type="submit">Submit</button> */}
//             </form>
//         </div>
//     )
// }

// export default GuessInput
