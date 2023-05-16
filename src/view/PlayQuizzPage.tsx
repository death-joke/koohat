//create a component for the playquizz page who print "play quizz" who get a quizz as props

import React from 'react';

import { Quizz } from '../class/quizz';

const PlayQuizzPage = (props: { quizz: Quizz }) => {
    return (
        <div>
            <h1>Play Quizz Page</h1>
            <h2>{props.quizz.name}</h2>
            <p>{props.quizz.summary}</p>
        </div>
    );
};

export default PlayQuizzPage;


