//create a boostrap navbar component
import React from 'react';

import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import QuizzEditorPage from '../view/quizzEditorPage';
import LoginPage from '../view/loginPage';
import HomePage  from '../view/homePage';
import AuthPage from '../view/authPage';
import FindQuizzPage from '../view/findQuizzPage';

const NavBar = () => {
    return (
        <div className="NavBar">
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/auth">sign in</Nav.Link>
            <NavDropdown title="Quizz" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search-quizz">fund a quizz</NavDropdown.Item>
              <NavDropdown.Item href="/quizz-editor">
                Quizz Editor
              </NavDropdown.Item>
             
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <Routes>
            <Route  path="/home" element={<HomePage/>}/>
            <Route  path="/quizz-editor" element={<QuizzEditorPage/>}/>
            <Route  path="/search-quizz" element={<FindQuizzPage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route  path="/auth" element={<AuthPage/>}/>
        </Routes>
        </div>


            
     
    );
    };



export default NavBar;