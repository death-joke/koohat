import React from "react";

/**
 * Composant question pour la création d'un quizz
 * @param props number: Numéro de la question
 * @returns Composant HTML d'une question pour la création d'un quizz
 */
export default function Question(props: any) {
    return (
        <div>
            <label>Question {props.number}: </label>
            <input type="text" id={"question"+props.number}/>
            <br />
            <label>Réponse 1 : </label>
            <input type="text" id={"reponse1"+props.number}/>
            <br />
            <label>Réponse 2 : </label>
            <input type="text" id={"reponse2"+props.number}/>
            <br />
            <label>Réponse 3 : </label>
            <input type="text" id={"reponse3"+props.number}/>
            <br />
            <label>Réponse 4 : </label>
            <input type="text" id={"reponse4"+props.number}/>
            <br />
            <label>Bonnes réponses : </label>
            <label>1</label>
            <input type="checkbox" id={"good1"+props.number}></input>
            <label>2</label>
            <input type="checkbox" id={"good2"+props.number}></input>
            <label>3</label>
            <input type="checkbox" id={"good3"+props.number}></input>
            <label>4</label>
            <input type="checkbox" id={"good4"+props.number}></input>
        </div>
    )
}