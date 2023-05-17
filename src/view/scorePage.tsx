import React from 'react';
import '../css/404.css';
import Score from '../composant/score';

const ScorePage = () => {
    return (
        <div >
            <h1>Score</h1>
            <Score score={localStorage.getItem("score")}/>
            
          

            
        </div>
    );
};

export default ScorePage;