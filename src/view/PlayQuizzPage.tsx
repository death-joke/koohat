//create a component for the playquizz page who print "play quizz" who get a quizz as props

import React, {useEffect, useState} from 'react';

import {QuestionAttempt, QuizAnswer, QuizAttempt, Quizz} from '../class/quizz';
import {useParams} from "react-router-dom";

import '../css/PlayQuizz.css';

const PlayQuizzPage = (/*props: { quizz: Quizz }*/) => {

    if (localStorage.getItem("name") == null) {
        alert("You are not logged in");
        window.location.href = "/login";
        
    }
    // console.log("quiz");
    const {id} = useParams();
    // console.log(id);

    const [quizz, setQuizz] = useState<Quizz>();



    useEffect(() => {
        fetch("http://localhost:3001/quiz/"+id, {method: "GET", headers: {"Content-Type": "application/json"}})
            .then((response) => response.json())
            .then(data => setQuizz(data))
            .catch(error => console.log(error));
    }, [id]);


    function submitQuiz() {
        fetch("http://localhost:3001/quiz-answer/",
            {
                method: "POST",
                body: JSON.stringify(quizAttempt),
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => response.json())
            .then(data => {console.log(data);
                window.location.href = "/score/"+data.id;
            
            })
            .catch(error => console.log(error));
    }

    const [quizAttempt, setQuizAttempt] = useState<QuizAttempt>();

    //initilize the selectedResponses to the quiz response
    useEffect(() => {
        let userId = localStorage.getItem("id");
        if (!quizz && !id && !userId) {
            return;
        }
        let quizAttempt: QuizAttempt = {
            quizId: id!,
            userId: userId!,
            questions: [],
            score: 0
        };
        quizz?.questions.forEach((question) => {
            let questionAttempt : QuestionAttempt = {questionAnswer: [], number: question.number};
            question.responses.forEach((response,index) => {
                let answer : QuizAnswer = {number: index, name: response.name, isChecked: false};
                questionAttempt.questionAnswer.push(answer);
            });
            quizAttempt.questions.push(questionAttempt);

        });
        setQuizAttempt(quizAttempt);
        console.log("quizAttempt : ");
        console.log(quizAttempt);
    }, [id, quizz]);

    const handleResponseSelection = (responseName: string, questionNumber : number, event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        console.log("responseName : " + responseName + " questionNumber : " + questionNumber);
        setQuizAttempt((quizAttempt) => {
            let inputs = document.getElementsByName("question-"+questionNumber) as NodeListOf<HTMLInputElement>;

            inputs.forEach((input) => {
                if (input === event.target) {
                    quizAttempt?.questions[questionNumber-1].questionAnswer.forEach((answer) => {
                        if (answer.name === input.value) {
                            answer.isChecked = input.checked;
                            console.log(quizAttempt)
                        }
                    });
                }
            });
            return quizAttempt;
        });
    };


    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '75vh'}} >
            <div id='playQuizz_div'>
            <h1>Play Quizz Page</h1>
            <h2 className="">{quizz?.name}</h2>
            <h2>{quizz?.description}</h2>
            {quizz?.questions.map((question, index) => (
                <div key={index}>
                    <h3>{question.libelle   +  "  (  Question number:"+ question.number +" )" }</h3>

                    <ul>
                        {question.responses.map((response, index) => {
                            return (
                                <li key={response.name}>
                                     <input
                                            type="checkbox"
                                            name={`question-${question.number}`}
                                            value={response.name}
                                            onChange={(event) =>
                                                handleResponseSelection(response.name, question.number, event)}
                                        />
                                    <label>
                                       
                                        {response.name}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
            <button className="btn btn-primary" onClick={() => submitQuiz()}>Submit</button>
            </div>
        </div>
    );
};

export default PlayQuizzPage;


