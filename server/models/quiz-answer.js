import mongoose, {Schema} from 'mongoose';

let quizAnswerSchema = new Schema({
    id: Number,//id of the question (1 to nbMaxQuestions)
    answers:  [Boolean,Boolean,Boolean,Boolean] //answer of the user
})

export const QuizAnswer = mongoose.model('Quiz', quizAnswerSchema);
