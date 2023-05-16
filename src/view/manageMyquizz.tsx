//create a component for tmanage quizz page who print "manage your quizz"

import React from 'react';
import QuizzManager from '../composant/quizzManager';
import { Quizz } from '../class/quizz';
import '../css/quizzManager.css'

const ManageMyQuizzPage = () => {
    return (
        <div id='QuizzManager_div'>
            <h1>manage your quizz</h1>
            <QuizzManager quizzList={Quizz.generateRandomQuizzArray(20)}/>
            
        </div>
    );
};

export default ManageMyQuizzPage;