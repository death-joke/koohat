import React from "react";

export default function Question(props: any) {
    return (
        <div>
            <label>Question {props.number}: </label>
            <input type="text" id="question"/>
            <br />
            <label>Réponse 1 : </label>
            <input type="text" id="reponse1"/>
            <br />
            <label>Réponse 2 : </label>
            <input type="text" id="reponse2"/>
            <br />
            <label>Réponse 3 : </label>
            <input type="text" id="reponse3"/>
            <br />
            <label>Réponse 4 : </label>
            <input type="text" id="reponse4"/>
            <br />
            <label>Bonnes réponses : </label>
            <label>1</label>
            <input type="checkbox"></input>
            <label>2</label>
            <input type="checkbox"></input>
            <label>3</label>
            <input type="checkbox"></input>
            <label>4</label>
            <input type="checkbox"></input>
        </div>
    )
}