import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
        const {createUser} =useContext(AuthContext);

        const handleRegister = (event) =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password =form.password.value;

            console.log(name,photo,email,password);
            createUser(email,password)
            .then(result =>{
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error =>{
                console.log(error);
            })

        }

    
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h1>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control  type="text" name='name' placeholder="Enter Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name label="accept terms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button> <br />
                Already Have An Account?<Link to="/login">Login</Link>
            </Form>
        </Container>
    );
};

export default Register;