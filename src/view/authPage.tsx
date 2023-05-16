//create a component for the auth page who print the login form

import React from 'react';
import Register from '../composant/register';




const AuthPage = () => {
    return (
        <div className="AuthPage" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
            <Register/>
        </div>
    );
    };


export default AuthPage;