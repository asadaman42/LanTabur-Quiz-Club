import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, correctAnswer, key, id }) => {
    const checkAnswerCorrect = (event) => {
        if (event.target.value === correctAnswer) {
            toast("Correct")
        }
        else {
            toast("Incorrect")
        }
    };

    return (
        <div className='my-2'>
            <div className='d-flex align-items-center'>
                <input onClick={checkAnswerCorrect} type="radio" name={correctAnswer} id={key} value={option} />
                <label for={key} className='ms-2 text-start'> {option} </label>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Option;