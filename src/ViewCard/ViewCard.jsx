import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ViewCard = ({ info }) => {
    const { name, img,items } = info;
    return (
        <Container>
            <Card className='m-4 w-full'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <p>{items}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ViewCard;