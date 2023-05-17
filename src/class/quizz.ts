/**
 * Quizz class
 * @class Quizz
 * @constructor
 * @param {string} creator - The creator of the quizz
 * @param {string} id - The id of the quizz
 * @param {string} name - The name of the quizz
 * @param {string} summary - The summary of the quizz
 * @param {Question[]} questions - The questions of the quizz
 */
export class Quizz {
    _id: string;
    userId: string;
    name: string;
    description: string;
    questions: Question[];
    constructor(creator: string, id: string, name: string, summary: string, questions: Question[]) {
        this.userId = creator;
        this._id = id;
        this.name = name;
        this.description = summary;
        this.questions = questions;
    }




}

/**
 * Question class
 * @class Question
 * @constructor
 * @param {string} libelle - The libelle of the question
 * @param {number} number - The number of the question
 * 
 */
export interface Response {
    name: string;
    isCorrect: boolean;



}

/**
 * Question class
 * @class Question
 * @constructor
 * @param {string} libelle - The libelle of the question
 * @param {number} number - The number of the question
 * @param {Response[]} responses - The responses of the question
 */
export interface Question {
    libelle: string;
    number: number;
    responses: Response[];
}

/**
 * QuizAttempt class
 * @class QuizAttempt
 * @constructor
 * @param {string} quizId - The id of the quiz
 * @param {string} userId - The id of the user
 * @param {number} score - The score of the user
 * @param {QuestionAttempt[]} questions - The questions of the quiz
 * 
 */
export interface QuizAttempt {
    _id?: string;
    quizId: string;
    userId: string;
    score?: number;
    questions: QuestionAttempt[] // [question][responses]
}

/**
 * QuestionAttempt class
 * @class QuestionAttempt
 * @constructor
 * @param {number} number - The number of the question
 * @param {QuizAnswer[]} questionAnswer - The answers of the question
 * 
 */
export interface QuestionAttempt {
    number: number;
    questionAnswer: QuizAnswer[];
}


/**
 * QuizAnswer class
 * @class QuizAnswer
 * @constructor
 * @param {number} number - The number of the response
 * @param {string} name - The name of the response
 * @param {boolean} isChecked - The state of the response
 * 
 */
export interface QuizAnswer {
    number: number,
    name: string,
    isChecked: boolean,

}