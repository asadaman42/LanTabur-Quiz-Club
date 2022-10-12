import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({quiz}) => {    
    const {correctAnswer, options, question, id} = quiz;
    const notify = ()=>{
        toast(`Correct Answer is: ${correctAnswer}`)
    }


    return (
        <div>
            <h6>{question}</h6>
            <FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon>

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
            <ToastContainer />
        </div>
    );
};

export default Question;