const express = require('express');
const trivia = require('./trivia');

const app = express();
app.use(require('helmet')());


app.get('/questions', async (req, res) => {
  const questions = await trivia.service.questions(req.query);
  res.json(questions);
});

app.listen(process.env.PORT);
