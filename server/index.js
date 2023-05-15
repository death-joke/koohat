import express from 'express';
import mongoose from 'mongoose';
export const mongo = mongoose.connect("mongodb://127.0.0.1:27017").then(r => console.log("Mongoose ok"))
const app = express();
import {User} from './models/user.js';
import {Quiz} from './models/quiz.js';
import {Score} from "./models/score.js";
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

// Options - Accept prefight requests from client
app.options('*', function(req, res) {
    res.send(200);
});

//Score - Endpoints
app.get("/score/:id",(req, res) => {
    console.log("score")
    let id = req.params.id;
    Score.findOne({userId: id}).then(r => {
        res.status(200);
        res.send(r);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération du score`);
    })
});


// Quiz - Endpoints
app.post("/quiz",(req, res) => {
    console.log("Create quiz")
    let quiz = new Quiz(req.body);
    quiz.save().then(r => {
        res.status(200);
        res.send(`Quiz créé`);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la création du quiz`);
    });
});

app.get("/quiz", (req, res) => {
    console.log(" get quiz")
    Quiz.find().then(r => {
        res.status(200);
        res.send(r);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération des quiz`);
    })
});

app.delete("/quiz/:id", (req, res) => {
    let id = req.params.id;
    if (id == null) {
        res.status(400);
        res.send(`Id manquant`);
    }
    Quiz.findOneAndDelete({_id: id}).then(r => {
        res.status(200);
        res.send(`Quiz supprimé`);
        console.log("Quiz supprimé");
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la suppression du quiz`);
        console.log("Erreur lors de la suppression du quiz");

    })
});

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



