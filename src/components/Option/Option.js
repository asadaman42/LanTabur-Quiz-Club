import React from 'react';

const Option = ({option, correctAnswer, key, id}) => {
    const checkAnswerCorrect = (event) => {

        if(event.target.value === correctAnswer){
            console.log('correct')
        }
        else{
            console.log('incorrct')
        }

        
        



    };
    
    return (
        <div>
            <input onClick={checkAnswerCorrect} type="radio" name={correctAnswer} id={key} value={option}/>
            <label for={key}> {option} </label>            
        </div>
    );
};

export default Option;