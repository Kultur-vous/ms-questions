const express = require("express");
import { QuestionService } from './service/question';
const app = express();
require("dotenv").config();


import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import auth from './middleware/auth';
const db = new JsonDB(new Config("Questions", true, false, '/'));


const questionService = new QuestionService();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const question = {
    tilte: "Oui ?",
    response: [
        {
            title: "Oui",
            goodAnswer: true
        },
        {
            title: "Non",
            goodAnswer: false
        },
        {
            title: "Peut etre",
            goodAnswer: false
        },
        {
            title: "Jamais",
            goodAnswer: false
        }
    ],
    category: "Divers",
    level: "Facile"
}

//TODO l'auth ne renvois rien si le token est pas bon
app.get("/", auth, (req: any, res: any) => {
    db.push("/questions[]", question, true)
    res.status(200).send({message: "Salut mec"})
})

app.get("/questions", async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const getQuestion = await questionService.getQuestion(req.query.level, req.query.nbQuestion, req.query.category)
    res.status(200).send(getQuestion)
  } catch (e) {
      res.status(400).send(e)
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server app listening on port 3001");
});
