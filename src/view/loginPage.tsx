//create a component for the login page who print "login page"
import React from 'react';
import Login from '../composant/login';



/**
 * 
 * @returns the login page
 */
const LoginPage = () => {
    if (localStorage.getItem("name") !== null) {
        alert("You are already logged in");
        window.location.href = "/home";
        
    }
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
            <Login/>
        </div>
    );
};

export default LoginPage;