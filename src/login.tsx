import React from "react";

export default function Login() {

    function connecter(){
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;
        fetch("http://localhost:3001/login", {method: "POST", body: JSON.stringify({name: name, password: password}), headers: {"Content-Type": "application/json"}})
        .then((response) => {
            if (response.status === 200){
                localStorage.setItem("name", name);
            }
            else if (response.status === 404){
                alert("Nom d'utilisateur ou mot de passe incorrect");
            }
        })
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