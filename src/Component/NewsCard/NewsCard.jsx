import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegHandPointRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';


const NewsCard = ({ info }) => {
    const { id, name, experience, address, picture,items,like }= info;

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
                                <p><FaRegHandPointRight></FaRegHandPointRight> Like:{like} </p>
                            
                            </Card.Text>
                            <Button variant="outline-primary " >
                                <Link className='text-secondary' to="/viewDetails">View Details</Link> 
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default NewsCard;