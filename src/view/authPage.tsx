//create a component for the auth page who print the login form

import React from 'react';
import Register from '../composant/register';



/**
 * 
 * @returns the auth page
 */
const AuthPage = () => {
    if (localStorage.getItem("name") !== null) {
        alert("You are already logged in");
        window.location.href = "/home";
        
    }
    return (
        <div className="AuthPage" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
            <Register/>
        </div>
    );
    };


export default AuthPage;