import express from 'express';
import mongoose from 'mongoose';

export const mongo = mongoose.connect("mongodb://127.0.0.1:27017").then(r => {
    console.log("Mongoose ok");
})
// export const ObjectId = mongoose.Types.ObjectId;
const app = express();
import {User} from './models/user.js';
import {Quiz} from './models/quiz.js';
import {Score} from "./models/score.js";
import {getId} from "./utils.js";
// import dotenv from 'dotenv';
// console.log(dotenv.config());
app.use(express.json())

//Server listen on port 3001
app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

// Headers for all requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

// Options - Accept preflight requests from client
app.options('*', function (req, res) {
    res.send(200);
});

//Score - Endpoints
/**
 * /score/:id
 * DELETE - Delete a score
 * GET - Get a score
 */
app.route("/score/:id")
    .delete((req, res) => {
        let id = getId(req.params.id, res);
        Score.findOneAndDelete({userId: id}).then(r => {
            res.status(200);
            res.send(`Score supprimé`);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la suppression du score`);
        })
    })
    .get((req, res) => {
        let id = getId(req.params.id, res);
        Score.findOne({userId: id}).then(r => {
            res.status(200);
            res.send(r);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la récupération du score`);
        })
    });

/**
 * /score/user/:id
 * GET - Get all scores of a user
 */
app.get("/score/user/:id", (req, res) => {
    let id = getId(req.params.id, res);
    Score.find({userId: id}).then(r => {
        res.status(200);
        res.send(r);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération du score`);
    })
});

// Quiz - Endpoints
/**
 * /quiz
 * POST - Create a quiz
 * GET - Get all quiz
 */
app.route("/quiz")
    .post((req, res) => {
        console.log("POST /quiz - saving quiz")
        let quiz = new Quiz(req.body);
        quiz.save().then(r => {
            res.status(200);
            res.send(`Quiz créé`);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la création du quiz`);
        });
    })
    .get((req, res) => {
        console.log("GET /quiz - retrieving all quiz")
        Quiz.find().sort({name: 1}).then(r => {
            res.status(200);
            res.send(r);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la récupération des quiz`);
        })
    })
/**
 * /quiz/:id
 * DELETE - Delete a quiz
 * GET - Get a quiz
 * PUT - Update a quiz
 */
app.route("/quiz/:id")
    .delete((req, res) => {
        console.log("GET /quiz/:id - delete quiz")
        let id = getId(req.params.id, res);
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
    })
    .get((req, res) => {
        console.log("GET /quiz/:id - get one quiz")
        let id = getId(req.params.id, res);
        console.log(id)
        Quiz.findOne({_id: id}).then(r => {
            res.status(200);
            res.send(r);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la récupération du quiz`);
        })
    })
    .put((req, res) => {
        console.log("PUT /quiz/:id - update quiz")
        let id = getId(req.params.id, res);
        Quiz.findOneAndUpdate({_id: id}, req.body).then(r => {
            res.status(200);
            res.send(`Quiz mis à jour`);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la mise à jour du quiz`);
        })
    });

//User - Endpoints
/**
 * /login
 * POST - Login a user
 */
app.post("/login", (req, res) => {
    console.log("POST /login - logging user");
    let user = new User(req.body);
    User.findOne({name: user.name}).then(u => {
        console.log(u)
        if (u != null) {
            if (u.password === user.password) {
                res.status(200);
                res.send(u);
            } else {
                res.status(404);
                res.send(`Mot de passe incorrect`);
            }
        } else {
            res.status(404);
            res.send(`Identifiant ou mot de passe incorrect`);
        }
    })
})

/**
 * /register/
 * POST - Create a user
 */
app.post("/register", (req, res) => {
    console.log("POST /register - creating user");
    let user = new User(req.body);
    User.findOne({name: user.name}).then(u => {
        if (u != null) {
            res.status(404);
            res.send(`Le nom ${user.name} est déjà pris`);
        } else {
            user.save().then(r => {
                res.status(200);
                res.send(u);
            }, error => {
                console.log(error);
                res.status(500);
                res.send(`Erreur lors de la création du compte`);
            })
        }
    });
})



