
import React from 'react';

// eslint-disable-next-line 
import {redirect, Route, BrowserRouter as Router, Routes} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import QuizzEditorPage from '../view/quizzEditorPage';
import LoginPage from '../view/loginPage';
import HomePage  from '../view/homePage';
import AuthPage from '../view/authPage';
import FindQuizzPage from '../view/findQuizzPage';
import ManageMyQuizzPage  from '../view/manageMyquizz';
import PlayQuizzPage from "../view/PlayQuizzPage";
const NavBar = () => {

  var isUserConnected = (localStorage.getItem("name") == null);
    return (
        <div className="NavBar">
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/home"><img
              src="./images/koohat_logo.svg"
              width="75"            
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 

            { !isUserConnected?            
            <Nav.Link href="/auth">sign in</Nav.Link>: null 
            }

            { !isUserConnected?
             <Nav.Link href="/login">login</Nav.Link> :null            
            }  


           
           <NavDropdown title="Quizz" id="basic-nav-dropdown">
              <NavDropdown.Item href={ /*isUserConnected?*/'/search-quizz'/*:'#'*/} /*onClick={
                () => {
                  if(!isUserConnected){
                    alert("you must be logged in to play a quizz");
                  }
                }
              }*/>fund a quizz</NavDropdown.Item>
              <NavDropdown.Item href={ isUserConnected?'/quizz-editor':'#'} onClick={
                () => {
                  if(!isUserConnected){
                    alert("you must be logged in to create a quizz");
                  }
                }
              }>Quizz Editor</NavDropdown.Item>      


               <NavDropdown.Item href={ isUserConnected?'/manage-my-quizz':'#'} onClick={
                () => {
                  if(!isUserConnected){
                    alert("you must be logged in to manage your quizz");
                  }
                }
              }>manage my quizz</NavDropdown.Item>         
            </NavDropdown>

           

            { isUserConnected?
            
            <Nav.Item className="ml-auto" >
              <Nav.Link  href="/login">sign out</Nav.Link>
            </Nav.Item> : null 
            }

            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <Routes>
            <Route  path="/home" element={<HomePage/>}/>
            <Route  path="/quizz-editor" element={<QuizzEditorPage/>}/>
            <Route  path="/search-quizz/*" element={<FindQuizzPage/>}/>
            <Route  path="/play-quizz/:id" element={<PlayQuizzPage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route  path="/auth" element={<AuthPage/>}/>
            <Route  path="/manage-my-quizz" element={<ManageMyQuizzPage/>}/>
        </Routes>
        </div>


            
     
    );
    };



export default NavBar;