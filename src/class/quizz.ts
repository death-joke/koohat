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
}

//create a response class with the field name and isCorrect
export class Response {
    name: string;
    isCorrect: boolean;
    constructor(name: string, isCorrect: boolean) {
        this.name = name;
        this.isCorrect = isCorrect;
    }
}


