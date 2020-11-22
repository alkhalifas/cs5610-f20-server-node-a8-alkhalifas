const quizzes = require("./quizzes")


const findAllQuizzes = () => {
    return quizzes
};

const findQuizById = (qid) => {
    const quiz = quizzes.find(quiz => quiz._id === qid);
    return quiz
};

const createQuiz = () => {
    const quiz = {_id: (new Date()).getTime()+"", title: "New Quiz"};
    quizzes.push(quiz);
    return quiz
};

const deleteQuiz = (qid) => {
    quizzes = quizzes.filter(quiz => quiz._id !== qid);
    return 200;
};

const updateQuiz = (qid, newQuiz) => {
    quizzes = quizzes.map(quiz => quiz._id === qid ? newQuiz : quiz);
    return 1;
};

module.exports = {
    findAllQuizzes,findQuizById, createQuiz, deleteQuiz, updateQuiz
}
