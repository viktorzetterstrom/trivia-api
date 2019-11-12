const fetch = require('node-fetch');
const qs = require('querystring');

const BASE_URL = 'https://opentdb.com/api.php?';

const questions = async (options = { amount: 10 }) => {
  const url = `${BASE_URL}${qs.encode(options)}`;
  const response = await fetch(url).then((res) => res.json());
  return response;
};

module.exports = { questions };
