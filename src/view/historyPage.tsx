import ScorePage from "./scorePage";
import '../css/history.css'
import {QuizAttempt} from "../class/quizz";
import {useEffect, useState} from "react";
import History from "../composant/History";

const HistoryPage = () => {
    const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);

    useEffect(() => {
        let id = localStorage.getItem("id");
        if (id === null) {
            window.location.href = "/login";
        }
        fetch("http://localhost:3001/user-quiz/score/"+id, {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setQuizAttempts(data)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1 className="text-center">History Page</h1>
            <History quizAttemptList={quizAttempts}/>
        </div>
    )
}
export default HistoryPage;