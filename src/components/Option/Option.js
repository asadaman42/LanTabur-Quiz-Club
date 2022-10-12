import React from 'react';

const Option = ({option, correctAnswer, key, id}) => {
    const checkAnswerCorrect = (event) => {

        
        console.log(event.target.value);



    };
    
    return (
        <div>
            <input onClick={checkAnswerCorrect} type="radio" name={correctAnswer} id={key} value={option}/>
            <label for={key}> {option} </label>            
        </div>
    );
};

export default Option;