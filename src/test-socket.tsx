import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3001", {
    autoConnect: false,
});

export default function TestSocket() {

    function connecter(){
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;
        fetch("http://localhost:3001/login", {method: "POST", body: JSON.stringify({name: name, password: password}), headers: {"Content-Type": "application/json"}})
            .then((response) => {
                if (response.status === 200){
                    localStorage.setItem("name", name);
                    socket.connect();
                    alert("ok");
                }
                else if (response.status === 404){
                    alert("Nom d'utilisateur ou mot de passe incorrect");
                }
            })
    }

    return (
        <div>
            <label>Nom Room : </label>
            <input type="text" id="room"/>
            <br />
            <button onClick={connecter}>Rejoindre</button>
            <button onClick={connecter}>Créer</button>
        </div>
    );
}