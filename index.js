const express = require('express');

const app = express();

app.get('/test', (_, res) => {
  res.send('Hello, World!');
});

app.listen(6000, () => 'Listening on port 6000');
