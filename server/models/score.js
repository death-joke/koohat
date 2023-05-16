import mongoose, {Schema} from 'mongoose';

let scoreSchema = new Schema({
    userId : String,
    scoreId : String,
    quizId : String
})
export const Score = mongoose.model('Score', scoreSchema);
