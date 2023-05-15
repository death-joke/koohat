import express from 'express';
import mongoose from 'mongoose';
export const mongo = mongoose.connect("mongodb://localhost:27017").then(r => console.log("Mongoose ok"))
const app = express();
import {User} from './models/user.js';
app.use(express.json())

//Server listen on port 3001
app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

// Options
app.options('*', function(req, res) {
    res.send(200);
});

// Quiz - Endpoints
app.post("/quiz",(req, res) => {
    console.log("quiz")
    res.send("You just called the post method at '/quiz'!\n");

})

//User - Endpoints
app.post("/login", (req, res) => {
    console.log("user")
    let user = new User(req.body);
    User.findOne({name: user.name}).then(u => {
        if (u != null) {
            if (u.password === user.password) {
                res.status(200);
                res.send(`OK`);
            } else {
                res.status(404);
                res.send(`Mot de passe incorrect`);
            }
        }
        console.log(user);
    res.send("You just called the post method at '/user'!\n");
    //200 si ok sinon 404 not found
    })
})

app.post("/register", (req, res) => {
    console.log("user")
    let user = new User(req.body);
    User.findOne({name: user.name}).then(u => {
        if (u != null) {
            res.status(404);
            res.send(`Le nom ${user.name} est déjà pris`);
        } else {
            user.save().then(res => {
                res.status(200);
                res.send(`Compte créé`);
            }, error => {
                console.log(error);
                res.status(500);
                res.send(`Erreur lors de la création du compte`);
            })
        }
    });
})



