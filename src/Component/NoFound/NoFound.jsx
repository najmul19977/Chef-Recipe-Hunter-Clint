import React from 'react';
import { Card } from 'react-bootstrap';

const NoFound = () => {
    return (
        <Card className="text-center w-25 mx-auto mt-5">
            <Card.Header>404 page</Card.Header>
            <Card.Body>
                <Card.Title>Data is not Found</Card.Title>
                <Card.Text>
                   <p>No Data Found In This Page.Please Try Anather Time .</p>
                </Card.Text>
               
            </Card.Body>
            <Card.Footer className="text-muted">Thank You For visit This Error Page</Card.Footer>
        </Card>
    );
};

export default NoFound;