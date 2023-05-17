import mongoose, {Schema} from 'mongoose';

let quizAnswerSchema = new Schema({
    quizId: String,
    userId: String,
    date : Date,
    score : Number,
    questions: [{
        number: Number,
        questionAnswer : [{
            number: Number,
            name: String,
            isChecked: Boolean,
        }]
    }]
})

export const QuizAnswer = mongoose.model('QuizAttempt', quizAnswerSchema);
