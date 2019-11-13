const fetch = require('node-fetch');
const qs = require('querystring');

const BASE_URL = 'https://opentdb.com/api.php?';

const shuffleArray = (a) => {
  const shuffled = [...a];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const questions = async (options = { amount: 10 }) => {
  const { results } = await fetch(`${BASE_URL}${qs.encode(options)}`).then((res) => res.json());
  return results
    .map((q, i) => ({
      nr: i + 1,
      category: q.category,
      type: q.type,
      difficulty: q.difficulty,
      question: q.question,
      correct: q.correct_answer,
      alternatives: shuffleArray([
        q.correct_answer,
        ...q.incorrect_answers,
      ]),
    }));
};

module.exports = { questions };
