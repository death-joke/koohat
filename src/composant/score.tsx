import React from "react";
import { QuizAttempt } from "../class/quizz";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

//create a componenement who print a score 
const Score = (props: { quizz: QuizAttempt | undefined; }) => {
    console.log(props.quizz);

    var iscongretualation  = false;
    var nbrBonneReponse =0;
    var nbrQuestion = 1;

  //test if props.quizz!.score and props.quizz?.questions.length is not undefined

    if ((props.quizz !== undefined)&&(props.quizz.score !== undefined) && (props.quizz.questions.length !== undefined)) {
        nbrBonneReponse = props.quizz!.score;
        nbrQuestion = props.quizz?.questions.length;

    }

    var pourcentage = (nbrBonneReponse / nbrQuestion) * 100;

    //test if pourcentage is more than 50
    if (pourcentage >= 50) {
        iscongretualation = true;
    }

    const { width, height } = useWindowSize();




    return (
        <div id="score_div"> 
            
            {iscongretualation ? <Confetti width={width} height={height}  />: null}
            <h1>Score</h1>
            {iscongretualation ? <h2>Congratulations</h2> : <h2>Sorry</h2>}
            <h2>{iscongretualation ? <span role="img" aria-label="smile">😀</span> : <span role="img" aria-label="smile">😔</span>}</h2>
            <h2>You get the score of :</h2>  
            

            
        

            <h2>{props.quizz?.score+"/"+props.quizz?.questions.length}</h2>
            <br />
            <br />

            <button onClick={() => { window.location.href = "/search-quizz/*"; }}>Home</button>
        </div>
    );
};

export default Score;