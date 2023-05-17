/**
 * Score class
 * @class Score
 * @constructor
 * @param {string} username - The username of the score
 * @param {number} score - The score of the user
 * @param {number} nomQuestionnaire - The id of the quiz
 * 
 */
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