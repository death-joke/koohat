//create a component for the login page who print "login page"
import React from 'react';
import Login from '../composant/login';




const LoginPage = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
            <Login/>
        </div>
    );
};

export default LoginPage;