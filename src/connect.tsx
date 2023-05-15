import React from "react";

export default function Connect() {

    function connecter(){
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;
        console.log(name, password); //TODO: pass data to backend
    }

    return (
        <div>
            <label>Nom d'utilisateur : </label>
            <input type="text" id="name"/>
            <br />
            <label>Mot de passe : </label>
            <input type="password" id="password"/>
            <br />
            <button onClick={connecter}>Se connecter</button>
        </div>
    );
}