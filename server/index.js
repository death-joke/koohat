import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import {User} from './models/user.js';
import {Quiz} from './models/quiz.js';
import {Score} from "./models/score.js";
import {getId} from "./utils.js";
import {QuizAnswer} from "./models/quiz-answer.js";
// import dotenv from 'dotenv';
// console.log(dotenv.config());
mongoose.connect("mongodb://127.0.0.1:27017").then(r => {
    console.log("Mongoose ok");
})
// export const ObjectId = mongoose.Types.ObjectId;
const app = express();
app.use(express.json())

const server = http.createServer(app);
export const io = new Server(server, {
    cors: {origin: "*", methods: ["GET", "POST"]}
});


io.on("connection", (socket) => {
    console.log('a user connected : ' + socket.id);
    io.on("join-room", (roomId, userId, cb) => {
        socket.join(roomId);
        socket.to(roomId).emit("user-connected", userId);
        cb("Vous avez rejoint la room "+roomId+" avec l'id "+userId);
    });
});

// Start the server
server.listen(3001, () => {
    console.log('Express server is running on localhost:3001')
});

// Headers for all requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

// Options - Accept preflight requests from client
app.options('*', function (req, res) {
    res.sendStatus(200);
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
        QuizAnswer.findOneAndDelete({userId: id}).then(r => {
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
        QuizAnswer.findOne({userId: id}).then(r => {
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
        // console.log(u)
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
/**
 * /user-quiz/:id
 * GET - Get all quiz of a user
 */
app.get("/user-quiz/:id", (req, res) => {
    console.log("GET /user-quiz/:id - retrieving all quiz of a user")
    let id = getId(req.params.id, res);
    Quiz.find({userId: id}).then(r => {
        res.status(200);
        res.send(r);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération des quiz`);
    })
});

/**
 * /user-quiz/score/
 * GET - Get all quiz of a user
 */
app.post("/user-quiz/score/:id", (req, res) => {
    console.log("GET /user-quiz/score - retrieving all quiz of a user")
    let id = getId(req.params.id, res);
    QuizAnswer.find({userId: id}).then(r => {
        console.log("res")
        console.log(r)
        res.status(200);
        res.send(r);

    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération des essais de quiz d'un user`);
    })
});

app.get("/user-quiz/score/:id", (req, res) => {//one score
    console.log("GET /user-quiz/score/:id - retrieving all quiz of a user")
    let id = getId(req.params.id, res);
    console.log(id)
    QuizAnswer.findOne({_id: id}).then(r => {
        res.status(200);
        res.send(r);
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur lors de la récupération des essais de quiz d'un user`);
    })
});

/**
 * /quiz-answer - user attempt for a quiz
 */
app.post("/quiz-answer", (req, res) => {
    console.log("POST /quiz-answer - saving quiz answer")
    let quizAnswer = new QuizAnswer(req.body);
    quizAnswer.date = new Date();
    quizAnswer.score = 0;

    console.log(quizAnswer.quizId)
    //calcul du score
    Quiz.findOne({_id: quizAnswer.quizId}).then(q => {
        let score = 0;
        let quiz = q;
        // console.log(quiz.questions[0].responses)
        for (let i = 0; i < quiz.questions.length; i++) {
            let allAnswersOk = true;
            for (let j = 0; j < quiz.questions[i].responses.length; j++) {
                if (quiz.questions[i].responses[j].isCorrect != quizAnswer.questions[i].questionAnswer[j].isChecked) {
                    allAnswersOk = false;
                    console.log("all ok")
                    break;
                }
            }
            if (allAnswersOk) {
                quizAnswer.score += 1;
            }
        }
        console.log(quizAnswer.score)
        console.log(quizAnswer)
        quizAnswer.save().then(quiz => {
            res.status(200);
            res.send(quiz);
        }, error => {
            console.log(error);
            res.status(500);
            res.send(`Erreur lors de la création du quizAnswer`);
        });
    }, error => {
        console.log(error);
        res.status(500);
        res.send(`Erreur du traitement du quizAnswer`);
    });
});

