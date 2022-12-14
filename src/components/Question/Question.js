import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';


const Question = ({ quiz }) => {
    const { correctAnswer, options, question, id } = quiz;
    const notify = () => {
        toast(`Correct Answer is: ${correctAnswer}`)
    }


    return (
        <Card className='m-4 bg-success text-white'>
            <Card.Body>
                <Row className='mb-4'>
                    <Col xs={10} md={11}>
                        <h6> {question}</h6>
                    </Col>
                    <Col xs={2} md={1} className='my-auto'>
                        <FontAwesomeIcon onClick={notify} icon={faEye} className='me-1'></FontAwesomeIcon>
                    </Col>
                </Row>
                {
                    options.map((option, index) =>
                        <Option
                            key={index}
                            option={option}
                            correctAnswer={correctAnswer}
                            id={id}
                        ></Option>)
                }
                <ToastContainer />
            </Card.Body>
        </Card>
    );
};

export default Question;



