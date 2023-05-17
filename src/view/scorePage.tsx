import React, { useEffect, useState } from 'react';
import '../css/404.css';
import Score from '../composant/score';
import {useParams} from "react-router-dom";
import { QuizAttempt} from '../class/quizz';
import {useParams} from "react-router-dom";
import { QuizAttempt} from '../class/quizz';


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
        <div >
            <Score score={quizzs?.score}/>

          

            
        </div>
    );
};

export default ScorePage;