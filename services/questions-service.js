const questions = require("./questions")

const findQuestionsForQuiz = (qid) => {
    const questionsForQuiz = questions.filter(question => question.quizId === qid)
    return questionsForQuiz;
}

module.exports = {findQuestionsForQuiz};
