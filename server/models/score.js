import mongoose, {Schema} from 'mongoose';

//modele pour la base de données via l'ORM mongoose
let scoreSchema = new Schema({
    userId : String,
    quizId : String,
    correctAnswers : Number,
    totalAnswers : Number,
})
export const Score = mongoose.model('Score', scoreSchema);
