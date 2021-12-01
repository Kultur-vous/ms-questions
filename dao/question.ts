import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { Question } from "../models/question";
//var shuffleList = require('shuffle-list');
import shuffleList from 'shuffle-list'

const db = new JsonDB(new Config("Questions", true, false, "/"));

export class QuestionDAO {
  async getQuestion(level: String, nbQuestion: String, category: String) {
    const getQuestion = db.getData("questions/");
    const questions = getQuestion.questions.filter(
      (question: Question) =>
        question.category === category && question.level === level
    );
    const shuffle = shuffleList(questions)
    return shuffle.slice(0, nbQuestion)
  }
}
