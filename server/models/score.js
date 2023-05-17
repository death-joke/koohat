import mongoose, {Schema} from 'mongoose';

let scoreSchema = new Schema({
    userId : String,
    quizId : String,
    correctAnswers : Number,
    totalAnswers : Number,
})
export const Score = mongoose.model('Score', scoreSchema);
