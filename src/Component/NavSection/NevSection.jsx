import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NevSection = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='text-primary fw-bold' href="#home">Chef Hunter</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            {user && <Nav.Link href="#deets">
              <FaUserCircle style={{fontSize:'1.7rem'}}></FaUserCircle>
            </Nav.Link>}
            {/* <Nav.Link href="login">Login</Nav.Link> */}
           { user ?
           <button onClick={handleLogout} className='btn btn-primary'>Logout</button>:
            <Link to='login'>
            <button className='btn btn-primary'>Login</button>
            </Link>
            }
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NevSection;