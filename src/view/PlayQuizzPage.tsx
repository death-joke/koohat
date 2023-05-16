//create a component for the playquizz page who print "play quizz" who get a quizz as props

import React from 'react';

import { Quizz } from '../class/quizz';
import { useParams } from 'react-router-dom';

const PlayQuizzPage = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Play Quizz Page</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default PlayQuizzPage;


