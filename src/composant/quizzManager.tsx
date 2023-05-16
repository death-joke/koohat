//create a componement who print all the quizz pass in props

import React from 'react';
import { Table } from 'react-bootstrap';
import { Quizz } from '../class/quizz';


const QuizzManager = (props: {quizzList: Quizz[]}) => {
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
                            <td>{quizz.summary}</td>
                            <td><button className="btn btn-danger" onClick={
                                () => {
                                   //send a get request to the server to delete the quizz
                                   fetch("http://localhost:3001/delete-quizz", {method: "GET", body: JSON.stringify({quizzId: quizz.id}), headers: {"Content-Type": "application/json"}})

                                }
                            }>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
         
        </div>
    );
};

export default QuizzManager;


