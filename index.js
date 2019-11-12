const express = require('express');
const trivia = require('./trivia');

const app = express();

app.get('/test', (_, res) => {
  res.send('Hello, World!');
});

app.get('/questions', async (req, res) => {
  const questions = await trivia.service.questions(req.body);
  res.json(questions);
});

app.listen(6000, () => 'Listening on port 6000');
