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
}