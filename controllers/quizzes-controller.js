const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes())
    };

    const findQuizById = (req, res) => {
        res.send(quizzesService.findQuizById(req.params["qid"]))
    };

    const createQuiz = (req, res) => {
        res.send(quizzesService.createQuiz())
    };

    const deleteQuiz = (req, res) => {
        res.send(quizzesService.deleteQuiz(req.params["qid"]))
    };

    const updateQuiz = (req, res) => {
        const qid = req.params.qid;
        const newQuiz = req.body;
        res.send(quizzesService.updateQuiz(qid, newQuiz))
    };

    app.get("/quizzes/:qid", findQuizById);
    app.get("/quizzes", findAllQuizzes);
    app.post("/quizzes", createQuiz);
    app.delete("/quizzes/:qid", deleteQuiz);
    app.put("/quizzes/:qid", updateQuiz)
};
