import React from "react";

export default function Register() {

    function checkConnected(){}
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
            }
            else if (response.status === 409){
                alert("Nom d'utilisateur déjà utilisé");
            }
        })
    }

    return(
        <div>
            <h1>Créer un compte</h1>
            <label>Nom d'utilisateur : </label>
            <input type="text" id="name"/>
            <br />
            <label>Adresse mail : </label>
            <input type="email" id="email"/>
            <br />
            <label>Mot de passe : </label>
            <input type="password" id="password"/>
            <br />
            <label>Confirmer le mot de passe : </label>
            <input type="password" id="password2"/>
            <br />
            <button onClick={createAccount}>Créer un compte</button>
        </div>
    )
}