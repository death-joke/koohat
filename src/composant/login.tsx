import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../css/login.css';

export default function Login() {

    function connecter(){
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;
        fetch("http://localhost:3001/login", {method: "POST", body: JSON.stringify({name: name, password: password}), headers: {"Content-Type": "application/json"}})
        .then((response) => {
            if (response.status === 200){
                localStorage.setItem("name", name);
                window.location.href = "/home";
                
                //alert("ok");
            }
            else if (response.status === 404){
                alert("Nom d'utilisateur ou mot de passe incorrect");
            }
        })
    }

    return (
        <div id="login_div">
            <h1>Se connecter</h1>

            <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
        >
        <Form.Control type="texte" placeholder="username"  id="name"/>
        </FloatingLabel>
{/* 
            <label>Nom d'utilisateur : </label>
            <input type="text" id="name"/> */}

            <br />

            <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
        >
        <Form.Control type="password" placeholder="********"  id="password"/>
        </FloatingLabel>

            {/* <label>Mot de passe : </label>
            <input type="password" id="password"/> */}
            <br />
            <button onClick={connecter}>Se connecter</button>
        </div>
    );
}