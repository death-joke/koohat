import mongoose, {Schema} from 'mongoose';

let quizSchema = new Schema({
    userId: String,//id of the creator
    name: String,//name of the quiz
    description: String,//description of the quiz
    questions: [{
        libelle: String,
        number: Number,
        responses : [{
            answerStatus: Boolean,
            answerText: String   //if the answer is true or false for the question
        }],
    }]
})

export const Quiz = mongoose.model('Quiz', quizSchema);
