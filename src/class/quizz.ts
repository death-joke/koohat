//create a quizz class with the field creator,Id,name ,summary question and response 
export class Quizz {
    creator: string;
    id: number;
    name: string;
    summary: string;
    questions: String[];
    responses: Response[];
    constructor(creator: string, id: number, name: string, summary: string, questions: String[], responses: Response[]) {
        this.creator = creator;
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.questions = questions;
        this.responses = responses;
    }

    //create a static function to generate randdom quizz
    static generateRandomQuizz(): Quizz {
        return new Quizz("creator" + Math.floor(Math.random() * 1000000), Math.floor(Math.random() * 1000000), "name" + Math.floor(Math.random() * 1000000), "summary" + Math.floor(Math.random() * 1000000), ["question" + Math.floor(Math.random() * 1000000)], [Response.generateRandomResponse()]);
    }

    //create a static function to generate an array of random quizz
    static generateRandomQuizzArray(size: number): Quizz[] {
        let quizzArray: Quizz[] = [];
        for (let i = 0; i < size; i++) {
            quizzArray.push(Quizz.generateRandomQuizz());
        }
        return quizzArray;
    }


}

//create a response class with the field name and isCorrect
export class Response {
    name: string;
    isCorrect: boolean;
    constructor(name: string, isCorrect: boolean) {
        this.name = name;
        this.isCorrect = isCorrect;
    }

    //create a static function to generate randdom response
    static generateRandomResponse(): Response {
        return new Response("response" + Math.floor(Math.random() * 1000000), Math.random() < 0.5);
    }
}


