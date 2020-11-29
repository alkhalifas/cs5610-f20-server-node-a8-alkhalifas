const express = require("express");
const app = express();
var cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

// require("./controllers/questions-controller")(app);
// require("./controllers/quizzes-controller")(app);

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/whiteboard',
//                  {useNewUrlParser: true,
//                      useUnifiedTopology: true});

mongoose.connect('mongodb+srv://dbuser:Rdn10sNNuZgqVz1a@5610assignment9.szxuz.mongodb.net/whiteboard?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                     useUnifiedTopology: true});


require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

// app.listen(3001)

app.listen(process.env.PORT || 3001, () =>
    console.log("Server is running...")
);
