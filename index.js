const express = require('express');
const cors = require('cors');
const trivia = require('./trivia');

const app = express();
app.use(require('helmet')());

const whitelist = ['https://trivia.zetterstrom.dev'];

const corsOptions = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin) || process.env.NODE_ENV === 'development') {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
};

app.get('/questions', cors(corsOptions), async (req, res) => {
  const questions = await trivia.service.questions(req.query);
  res.json(questions);
});

app.listen(3001, () => 'Listening on port 3001');
