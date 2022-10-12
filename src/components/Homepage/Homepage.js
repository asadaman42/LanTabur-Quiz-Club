import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Homepage = () => {
    const mainData = useLoaderData();
    const data = mainData.data;
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`quiz/${id}`);
    }
    const headerURL = 'https://i.ibb.co/jzxLbM3/1.jpg';

    return (
        <div>
            <div className="card m-5">
                <div className="row g-0">
                    <div className="col-md-4">                        
                        <img src={headerURL} className="w-75 rounded-start" alt=""/>
                    </div>
                    <div className="col-md-8 my-auto">
                        <div className="card-body">
                            <h5 className="card-title">LanTabur Quiz Club </h5>
                            <p className="card-text">Test your brain by exploring the quiz section of this quiz club. This quiz club includes React, JavaScript, CSS and git quiz store. Let's explore.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Row xs={1} md={2} lg={4} className="g-5 m-5">
                {
                    data.map(category => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={category.logo} />
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
                                    <Card.Text> {category.total} Quizes</Card.Text>
                                    <Button variant="primary" onClick={() => handleNavigate(category.id)}>Start Quiz</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))

                }
            </Row>
        </div>
    );
};

export default Homepage;