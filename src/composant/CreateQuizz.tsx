import React, { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import "../css/quizz_editor.css";

import Question from "./question";

export default function CreateQuizz() {
    const [question, setQuestion] = useState<React.ReactNode[]>([]);
    const [i, setI] = useState<number>(2);

    /**
     * Add a question to the form
     */
    function AddQuestion(){
        setQuestion([...question, <Question number={i} key={i}/>]);
        setI(i+1);
    }

    /**
     * Get all data of the quizz and send the quizz to the server
     */
    function sendQuizz(){
        let name = (document.getElementById("nameform") as HTMLInputElement).value;
        let description = (document.getElementById("description") as HTMLInputElement).value;
        let questions = [];
        for(let j = 1; j < i; j++){
            let question = (document.getElementById("question"+j) as HTMLInputElement).value;
            let reponses = [];
            for(let k = 1; k < 5; k++){
                let reponse = (document.getElementById("reponse"+k+j) as HTMLInputElement).value;
                let correct = (document.getElementById("good"+k+j) as HTMLInputElement).checked;
                reponses.push({isCorrect: correct, name: reponse});
            }
            questions.push({libelle: question, number: j, responses: reponses});
        }
        let data = {userId: localStorage.getItem("id"), name: name, description: description, questions: questions};
        fetch("http://localhost:3001/quiz", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })
        .then((response) => {
            if (response.status === 200){
                alert("Formulaire créé");
            }
            else if (response.status === 409){
                alert("Nom du formulaire déjà utilisé");
            }
        })
    }

    return(
        <div id="quizz_edit_div">
            <h1>Create a Quizz</h1>
            <div id="form">

            <FloatingLabel
            controlId="floatingInput"
            label="Quizz name"
            className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" id="nameform" />
            </FloatingLabel>
          
                
                {/* <input type="text" id="nameform" placeholder="Nom du formulaire"/> */}


                <br />

                <FloatingLabel controlId="floatingPassword" label="Description du formulaire">
                    <Form.Control type="text" as="textarea" placeholder="Password" rows={9} id="description"/>
                </FloatingLabel>

            


                {/* <textarea id="description" placeholder="Description du formulaire"></textarea> */}


            <br />
            <br /><br />
                <Question number={1} key={2}/>
            </div>
            {question}
            <button onClick={AddQuestion}>Ajouter une question</button>
            <button onClick={sendQuizz}>Créer le formulaire</button>
        </div>
    )
}