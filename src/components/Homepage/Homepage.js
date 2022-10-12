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

    return (
        <div>
            <Row xs={1} md={2} lg={4} className="g-5 m-5 p-5">
                {
                    data.map(category => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={category.logo} />
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
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