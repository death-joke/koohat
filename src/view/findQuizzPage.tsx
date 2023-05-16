//create a component for the find-quizz who print find-quizz form

import React from 'react';
import QuizzTables from '../composant/quizzTables';
import { Quizz } from '../class/quizz';
import { BrowserRouter as Router } from 'react-router-dom';

const FindQuizzPage = () => {
    return (
        <div className="FindQuizzPage">
        
                <QuizzTables quizzs={Quizz.generateRandomQuizzArray(9)} />
        


        </div>
    );
    };


export default FindQuizzPage;