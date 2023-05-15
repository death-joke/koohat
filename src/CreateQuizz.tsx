import React, { useState } from "react";

import Question from "./question";

export default function CreateQuizz() {
    const [composant, setComposant] = useState<React.ReactNode[]>([]);
    const [i, setI] = useState<number>(2); //i = number of questions [1, i

    function AddQuestion(){
        //add a Question element to div with id form
        setComposant([...composant, <Question number={i}/>]);
        setI(i+1);
    }

    return(
        <div>
            <div id="form">
                <input type="text" id="nameform" placeholder="Nom du formulaire"/>
                <br />
                <Question number={1}/>
            </div>
            {composant}
            <button onClick={AddQuestion}>Ajouter une question</button>
            <button>Créer le formulaire</button>
        </div>
    )
}