import React, { useEffect, useState } from 'react';
import '../css/404.css';
import Score from '../composant/score';
import {useParams} from "react-router-dom";
import { QuizAttempt} from '../class/quizz';


import '../css/score.css'


/**
 * Score page
 * @returns the score of the user
 */
const ScorePage = () => {


    const {id} = useParams();

    const [quizzs, setQuizzs] = useState<QuizAttempt>();

    useEffect(() => {
        fetch("http://localhost:3001/user-quiz/score/"+id, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                setQuizzs(data)
            })
            .catch(error => console.log(error));
    }, [id]);


    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

           <Score quizz={quizzs}/>
        </div>
    );
};

export default ScorePage;