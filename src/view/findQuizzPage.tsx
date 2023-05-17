//create a component for the find-quizz who print find-quizz form

import React, {useEffect, useState} from 'react';
import QuizzTables from '../composant/quizzTables';


const FindQuizzPage = () => {

    const [quizzs, setQuizzs] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/quiz", {method: "GET", headers: {"Content-Type": "application/json"}})
            .then((response) => response.json())
            .then(data => setQuizzs(data))
            .catch(error => console.log(error));
    }, []);//retourne l'effet qu'une fois

    return (
        <div className="FindQuizzPage">
            <QuizzTables quizzs={quizzs} />
        </div>
    );
};


export default FindQuizzPage;