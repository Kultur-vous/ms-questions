export interface Question {
    title: String
    response: Response[]
    category: String
    level: String
}

interface Response {
    title: String
    goodAnswer: Boolean
}