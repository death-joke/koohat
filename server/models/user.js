import mongoose, {Schema} from 'mongoose';

//modele pour la base de données via l'ORM mongoose
let userSchema = new Schema({
    name : String,
    email : String,
    password : String
})
export const User = mongoose.model('User', userSchema);
