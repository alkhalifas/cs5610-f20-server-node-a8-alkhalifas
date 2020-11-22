const express = require("express")
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./controllers/questions-controller")(app)
require("./controllers/quizzes-controller")(app)

app.listen(3001)
