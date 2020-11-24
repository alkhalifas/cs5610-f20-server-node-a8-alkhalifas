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

require("./controllers/questions-controller")(app);
require("./controllers/quizzes-controller")(app);

// app.listen(3001)

app.listen(process.env.PORT || 3001, () =>
    console.log("Server is running...")
);
