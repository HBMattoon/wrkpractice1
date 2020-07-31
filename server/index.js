const express = require('express');

const port = process.env.PORT || 3001;

const app = express();

app.get('/api/test', (req, res) => {
  console.log('test: ', req);

  res.end();
});

app.listen(port);
