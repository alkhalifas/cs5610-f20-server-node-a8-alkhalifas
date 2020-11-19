let quizzes = require('./quizzes.json');

const findAllQuizzes = () => quizzes;

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId);

const createQuiz = () => {
    const newQuiz = {_id: (new Date()).getTime() + "", titel: "New Quiz"}
    quizzes.push(newQuiz)
    return newQuiz
}

const deleteQuiz = (qid) =>
    quizzes = quizzes.filter(quiz => quiz._id !== qid)



module.exports = {
    findAllQuizzes: findAllQuizzes,
    findQuizById: findQuizById,
    deleteQuiz, createQuiz
}


console.log(findAllQuizzes)
