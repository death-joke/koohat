import {QuizAttempt, Quizz} from "../class/quizz";
import {Table} from "react-bootstrap";
import React from "react";

const History =  (props: { quizAttemptList: QuizAttempt[] }) => {
    return (
        <div className="w-50 m-sm-auto">

            <Table className="table ">
                <thead>
                <tr>
                    <th>Quizz name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {props.quizAttemptList.map((quizz, index) => (
                    <tr key={index}>
                        <td>{quizz.quizId}</td>
                        <td>{quizz.score}/{quizz.questions.length}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default History;