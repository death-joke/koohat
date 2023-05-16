import React, { useState } from "react";

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
        var name = (document.getElementById("nameform") as HTMLInputElement).value;
        var description = (document.getElementById("description") as HTMLInputElement).value;
        var questions = [];
        for(var j = 1; j < i; j++){
            var question = (document.getElementById("question"+j) as HTMLInputElement).value;
            var reponses = [];
            for(var k = 1; k < 5; k++){
                var reponse = (document.getElementById("reponse"+k+j) as HTMLInputElement).value;
                var correct = (document.getElementById("correct"+k+j) as HTMLInputElement).checked;
                reponses.push({answerStatus: correct, anserText: reponse});
            }
            questions.push({libelle: question, number: j, responses: reponses});
        }
        var data = {name: name, description: description, questions: questions};
        fetch("http://localhost:3001/createQuizz", {
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
        <div>
            <div id="form">
                <input type="text" id="nameform" placeholder="Nom du formulaire"/>
                <br />
                <textarea id="description" placeholder="Description du formulaire"></textarea>
                <Question number={1} key={2}/>
            </div>
            {question}
            <button onClick={AddQuestion}>Ajouter une question</button>
            <button onClick={sendQuizz}>Créer le formulaire</button>
        </div>
    )
}