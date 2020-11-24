const express = require("express")
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});



require("./controllers/questions-controller")(app)
require("./controllers/quizzes-controller")(app)

// app.listen(3001)

index.listen(process.env.PORT || 3000, () =>
    console.log("Server is running...")
);
