import React from "react";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


/**
 * Composant question pour la création d'un quizz
 * @param props number: Numéro de la question
 * @returns Composant HTML d'une question pour la création d'un quizz
 */
export default function Question(props: any) {
    return (
        <div className="question_edit">
            {/* <label>Question {props.number}: </label>
            <input type="text" id={"question"+props.number}/> */}

            <FloatingLabel
            controlId="floatingInput"
            label={"Question "+ props.number.toString()}
            className="mb-3"
            >
                <Form.Control type="text" placeholder="your question" id={"question"+props.number} />
            </FloatingLabel>



            {/* <br /> */}
            {/* <label>Réponse 1 : </label>
            <input type="text" id={"reponse1"+props.number}/> */}

            <FloatingLabel
            controlId="floatingInput"
            label="Réponse 1 "
            className="mb-3"
            >
                <Form.Control type="text" placeholder="your question" id={"reponse1"+props.number} />
            </FloatingLabel>



            {/* <br />
            <label>Réponse 2 : </label>
            <input type="text" id={"reponse2"+props.number}/> */}

            <FloatingLabel
            controlId="floatingInput"
            label="Réponse 2 "
            className="mb-3"
            >
                <Form.Control type="text" placeholder="your question" id={"reponse2"+props.number} />
            </FloatingLabel>





            {/* <br /> */}
            {/* <label>Réponse 3 : </label>
            <input type="text" id={"reponse3"+props.number}/> */}

<FloatingLabel
            controlId="floatingInput"
            label="Réponse 3 "
            className="mb-3"
            >
                <Form.Control type="text" placeholder="your question" id={"reponse3"+props.number} />
            </FloatingLabel>



            {/* <br /> */}
            {/* <label>Réponse 4 : </label>
            <input type="text" id={"reponse4"+props.number}/> */}

<FloatingLabel
            controlId="floatingInput"
            label="Réponse 4"
            className="mb-3"
            >
                <Form.Control type="text" placeholder="your question" id={"reponse4"+props.number} />
            </FloatingLabel>


            <br />


            <label className="checkmark_label">Bonnes réponses : </label>

         
            




            <label className="checkmark_label" >1</label>
            <input type="checkbox" id={"good1"+props.number} ></input>
            <label className="checkmark_label">2</label>
            <input type="checkbox" id={"good2"+props.number}></input>
            <label className="checkmark_label">3</label>
            <input type="checkbox" id={"good3"+props.number}></input>
            <label className="checkmark_label">4</label>
            <input type="checkbox" id={"good4"+props.number}></input>
        </div>
    )
}