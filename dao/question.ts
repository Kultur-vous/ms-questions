import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { Question } from "../models/question";

const db = new JsonDB(new Config("Questions", true, false, "/"));

export class QuestionDAO {
  async getQuestion(level: String, nbQuestion: String, category: String) {
    const getQuestion = db.getData("questions/");
    const questions = getQuestion.questions.filter(
      (question: Question) =>
        question.category === category && question.level === level
    );
    console.log("questions", questions)
    const random = Math.floor(Math.random() * questions.length);
    console.log(random, questions[random]);
  }
}
