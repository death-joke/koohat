//create a componement who print all the quizz pass in props

import React from 'react';
import {Table} from 'react-bootstrap';
import {Quizz} from '../class/quizz';

/**
 * 
 * @param props 
 * @returns composant who print all the quizz pass in props to manage it
 */
const QuizzManager = (props: { quizzList: Quizz[] }) => {
    return (
        <div>

            <Table className="table">
                <thead>
                <tr>
                    <th>Quizz name</th>
                    <th>Quizz description</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {props.quizzList.map((quizz, index) => (
                    <tr key={index}>
                        <td>{quizz.name}</td>
                        <td>{quizz.description}</td>
                        <td>
                            <button className="btn btn-danger" onClick={
                                () => {
                                    //send a get request to the server to delete the quizz
                                    fetch("http://localhost:3001/quiz/"+quizz._id, {
                                        method: "DELETE",
                                        headers: {"Content-Type": "application/json"}
                                    })
                                        .then((response) => {
                                            if (response.status === 200) {
                                                window.location.reload();
                                            }
                                        })


                                }
                            }>delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    );
};

export default QuizzManager;


