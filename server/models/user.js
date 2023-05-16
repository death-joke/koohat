import mongoose, {Schema} from 'mongoose';

let userSchema = new Schema({
    name : String,
    password : String
})
export const User = mongoose.model('User', userSchema);
