import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../css/register.css';

export default function Register() {

    function checkConnected(){
        if (localStorage.getItem("name") !== null){
            //window.location.href = "/";
            alert("Vous êtes déjà connecté");
        }
    }

    function createAccount(){
        var name = (document.getElementById("name") as HTMLInputElement).value;
        var email = (document.getElementById("email") as HTMLInputElement).value;
        var password = (document.getElementById("password") as HTMLInputElement).value;
        var password2 = (document.getElementById("password2") as HTMLInputElement).value;
        if (password !== password2){
            alert("Les mots de passe ne correspondent pas");
            return;
        }
        fetch("http://localhost:3001/register", {method: "POST", body: JSON.stringify({name: name, email: email, password: password}), headers: {"Content-Type": "application/json"}})
        .then((response) => {
            if (response.status === 200){
                alert("Compte créé");
                localStorage.setItem("name", name);
            }
            else if (response.status === 409){
                alert("Nom d'utilisateur déjà utilisé");
            }
        })
    }

    return(
        <div id="register_div">
            <h1>Créer un compte</h1>
        <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="username"  id="name"/>
        </FloatingLabel>

            {/* <label>Nom d'utilisateur : </label>
            <input type="text" id="name"/> */}
            <br />

            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        >
        <Form.Control type="email" placeholder="name@example.com"  id="email"/>
        </FloatingLabel>

{/* 
            <label>Adresse mail : </label>
            <input type="email" id="email"/> */}
            <br />

            <FloatingLabel
        controlId="floatingInput"
        label="Password"
        className="mb-3"
        >
        <Form.Control type="password" placeholder="***"  id="password"/>
        </FloatingLabel>

            
            {/* <label>Mot de passe : </label>
            <input type="password" id="password"/> */}
            <br />


            <FloatingLabel
        controlId="floatingInput"
        label="Password confirmation"
        className="mb-3"
        >
        <Form.Control type="password" placeholder="***"  id="password2"/>
        </FloatingLabel>


            {/* <label>Confirmer le mot de passe : </label>
            <input type="password" id="password2"/> */}
            <br />
            <button onClick={createAccount}>Créer un compte</button>
        </div>
    )
}