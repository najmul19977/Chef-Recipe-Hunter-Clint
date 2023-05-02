import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const NewsCard = ({ info }) => {
    const { id, name, experience, address, picture,items } = info;

    return (
        <Container >
            <Row >
                <Col>
                    <Card className='m-4 w-full'>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                <p>Name: {name}</p>
                                <p>Experience: {experience} years</p>
                                <p>Number of Recipes: {items} items</p>
                                <p>Address: {address}</p>
                                

                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default NewsCard;