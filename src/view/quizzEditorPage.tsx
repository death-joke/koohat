//create a component for the quiz editor page who print "quiz editor page"
import React from 'react';
import CreateQuizz from '../composant/CreateQuizz';

/**
 * Quiz editor page
 * @returns the quiz editor page
 */
const QuizzEditorPage = () => {
    if (localStorage.getItem("name") == null) {
        alert("You are not logged in");
        window.location.href = "/login";
        
    }
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
           <CreateQuizz/>
        </div>
    );
};

export default QuizzEditorPage;