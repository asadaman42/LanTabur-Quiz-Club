import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizBundle = useLoaderData();
    const quizes = quizBundle.data.questions;
    
    return (
        <div>
            {
                quizes.map(quiz => <Question
                key={quiz.id} 
                quiz = {quiz}
                ></Question>)
            }
            
        </div>
    );
};

export default Quiz;