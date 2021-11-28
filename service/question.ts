import { QuestionDAO } from './../dao/question';


export class QuestionService {
    private questionDAO = new QuestionDAO()

    async getQuestion(level: String, nbQuestion: String, category: String) {
        return this.questionDAO.getQuestion(level, nbQuestion, category)
    }
}