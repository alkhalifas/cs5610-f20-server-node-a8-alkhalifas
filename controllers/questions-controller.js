const questionsService = require("../services/questions-service")

module.exports = (app) => {

    const findQuestionsForQuiz = (req, res) => {
        res.send(questionsService.findQuestionsForQuiz(req.params["qid"]))
    };

    app.get("/quizzes/:qid/questions", findQuestionsForQuiz)

};
