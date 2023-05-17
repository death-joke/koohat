//create a component for tmanage quizz page who print "manage your quizz"

import React, {useEffect, useState} from 'react';
import QuizzManager from '../composant/quizzManager';
import { Quizz } from '../class/quizz';
import '../css/quizzManager.css'

const ManageMyQuizzPage = () => {
    if (localStorage.getItem("name") == null) {
        alert("You are not logged in");
        window.location.href = "/login";
        
    }

    const [quizzs, setQuizzs] = useState([]);


    useEffect(() => {
        let id = localStorage.getItem("id");
        if (id === null) {
            window.location.href = "/login";
        }
        fetch("http://localhost:3001/user-quiz/"+id, {method: "GET", headers: {"Content-Type": "application/json"}})
            .then((response) => response.json())
            .then(data => setQuizzs(data))
            .catch(error => console.log(error));
    }, []);//retourne l'effet qu'une fois

    return (
        <div id='QuizzManager_div'>
            <h1>manage your quizz</h1>
            <QuizzManager quizzList={quizzs}/>
            
        </div>
    );
};

export default ManageMyQuizzPage;