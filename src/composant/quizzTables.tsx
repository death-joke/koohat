

import React from 'react';
import { Table } from 'react-bootstrap';
import { Quizz } from '../class/quizz';
import { Link} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

import PlayQuizzPage from '../view/PlayQuizzPage';
/**
 * 
 * @param props 
 * @returns  composant who print all the quizz pass in props to play it, and permit to lauch the play quizz page
 */
const QuizzTables = (props: { quizzs: Quizz[] }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Quizz Name</th>
                        <th>Quizz Description</th>
                        <th>Quizz Author</th>
                      
                    </tr>
                </thead>
                <tbody>
                 
                    {props.quizzs.map((quizz: Quizz, index) => {
                        return (
                            
                            <tr key={quizz._id} id={quizz._id.toString()}>
                                
                                <td><Link to={`/play-quizz/${quizz._id}`}>{quizz.name}</Link></td>
                                <td>{quizz.description}</td>
                                <td>{quizz.userId}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </Table>
            <Routes>
                <Route path={`/search-quizz/:id`} Component={PlayQuizzPage}/>
            </Routes>

        
        </div>
    );
};

export default QuizzTables;