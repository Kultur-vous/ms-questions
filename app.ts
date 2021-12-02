//const express = require("express");
import express from "express";
import { QuestionService } from "./service/question";
const app = express();
const cors = require("cors");
require("dotenv").config();

import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import auth from "./middleware/auth";
const db = new JsonDB(new Config("Questions", true, false, "/"));

const questionService = new QuestionService();

app.use(cors());
app.use(express.json());

const categories = ["Divers", "Mathematiques"];

const levels = ["Facile", "Difficile"];

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:4200"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization, email"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});


//TODO l'auth ne renvois rien si le token est pas bon
app.get("/", (req: any, res: any) => {
  //db.push("/questions[]", question, true)
  res.status(200).send({ message: "Salut" });
});

app.get("/questions", auth, async (req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const getQuestion = await questionService.getQuestion(
      req.query.level,
      req.query.nbQuestion,
      req.query.category
    );
    res.status(200).send(getQuestion);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/categories", (req: any, res: any) => {
  res.status(200).send(categories);
});

app.get("/levels", (req: any, res: any) => {
  res.status(200).send(levels);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server app listening on port 5000");
});
