import React from 'react';
import Option from '../Option/Option';


const Question = ({quiz}) => {    
    const {correctAnswer, options, question, id} = quiz;
    return (
        <div>
            <h6>{question}</h6>
            <h5>{correctAnswer}</h5>
            {
                options.map((option, index) =>
                <Option
                key={index}
                option = {option}
                correctAnswer = {correctAnswer}
                id = {id}
                ></Option>)
            }
        </div>
    );
};

export default Question;