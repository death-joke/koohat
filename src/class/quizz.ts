//create a quizz class with the field creator,Id,name ,summary question and response 
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

    //create a static function to generate randdom quizz
    // static generateRandomQuizz(): Quizz {
    //     return new Quizz("creator" + Math.floor(Math.random() * 1000000), Math.floor(Math.random() * 1000000), "name" + Math.floor(Math.random() * 1000000), "summary" + Math.floor(Math.random() * 1000000), ["question" + Math.floor(Math.random() * 1000000)], [Response.generateRandomResponse()]);
    // }

    //create a static function to generate an array of random quizz
    // static generateRandomQuizzArray(size: number): Quizz[] {
    //     let quizzArray: Quizz[] = [];
    //     for (let i = 0; i < size; i++) {
    //         quizzArray.push(Quizz.generateRandomQuizz());
    //     }
    //     return quizzArray;
    // }


}

//create a response class with the field name and isCorrect
export interface Response {
    name: string;
    isCorrect: boolean;
    // constructor(name: string, isCorrect: boolean) {
    //     this.name = name;
    //     this.isCorrect = isCorrect;
    // }

    //create a static function to generate randdom response
    // static generateRandomResponse(): Response {
    //     return new Response("response" + Math.floor(Math.random() * 1000000), Math.random() < 0.5);
    // }


}

export interface Question {
    libelle: string;
    number: number;
    responses: Response[];
}

export interface QuizAttempt {
    _id?: string;
    quizId: string;
    userId: string;
    score?: number;
    questions: QuestionAttempt[] // [question][responses]
}

export interface QuestionAttempt {
    number: number;
    questionAnswer: QuizAnswer[];
}

export interface QuizAnswer {
    number: number,
    name: string,
    isChecked: boolean,

}