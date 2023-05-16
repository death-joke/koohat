//create a score class with the field usernema,score and nom questionaire
export class Score {
    username: string;
    score: number;
    nomQuestionnaire: number;
    constructor(username: string, score: number, nomQuestionnaire: number) {
        this.username = username;
        this.score = score;
        this.nomQuestionnaire = nomQuestionnaire;
    }

    //create a static function to generate randdom score
    static generateRandomScore(): Score {
        return new Score("user" + Math.floor(Math.random() * 1000000), Math.floor(Math.random() * 100), Math.floor(Math.random() * 1000000));
    }
}