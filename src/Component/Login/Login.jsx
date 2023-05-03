import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase_config';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

   



    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user =result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error =>{
            console.log('error',error.message)
        })
    }
    
    const handleGithubSigIn =() =>{
        signInWithPopup(auth,githubprovider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true});
        })    
        .catch(error =>{
            console.log('error',error.message)
        


        })
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from,{replace:true});
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mb-3' variant="primary" type="submit">
                    Login
                </Button> <br />
                <Button className='me-3' onClick={handleGoogleSignIn} variant="outline-primary">Google Login</Button>
                <Button onClick={handleGithubSigIn} variant="outline-primary">Github Login</Button> <br />

                Don't Have An Accpunt?<Link to="/register">Register</Link>
            </Form>
        </Container>
    );
};

export default Login;