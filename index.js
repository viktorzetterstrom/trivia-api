require('dotenv').config();
const express = require('express');
const trivia = require('./trivia');

const app = express();
app.use(require('helmet')());


app.get('/questions', async (req, res) => {
  const options = Object.keys(req.query).length > 0
    ? req.query
    : { amount: 10 };
  const questions = await trivia.service.questions(options);
  res.json(questions);
});

app.listen(process.env.PORT);
