import React from 'react';
import './composant/navBar'
//import './App.css';
import NavBar from './composant/navBar';
import { BrowserRouter } from 'react-router-dom';

import Login from './login';
import CreateQuizz from './CreateQuizz';

function App() {
  return (

    <div className="App">
       <header className="App-header">
      <BrowserRouter>     
        <NavBar/>
      </BrowserRouter>       
      </header>
    </div>
  );
}

export default App;
