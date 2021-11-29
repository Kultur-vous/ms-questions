export interface Question {
    title: String
    response: Response[]
    emote: String
    category: String
    level: String
}

interface Response {
    title: String
    goodAnswer: Boolean
}
