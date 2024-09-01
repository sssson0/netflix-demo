import React from 'react';
import './AppLayout.style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" >
    <Container fluid >
      <Navbar.Brand href="/">
        <img  className='logo' src='https://about.netflix.com/images/logo.png'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" className='nav-button'>Home</Nav.Link>
          <Nav.Link href="/movies" className='nav-button'>Movies</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet/>
  </div>
  );
}

export default AppLayout;
