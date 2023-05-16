//create a component for the quiz editor page who print "quiz editor page"
import React from 'react';
import CreateQuizz from '../composant/CreateQuizz';

const QuizzEditorPage = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '75vh'}}>
           <CreateQuizz/>
        </div>
    );
};

export default QuizzEditorPage;