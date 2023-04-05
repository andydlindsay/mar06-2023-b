require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const client = require('./connection');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));

// GET /villains
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains;')
    .then((response) => {
      const villains = response.rows;

      // res.render('villain', {villains}); // MPA
      // res.send(villains);
      // res.redirect()
      res.json(villains); // SPA
    });
});

// GET /villains/:id
app.get('/villains/:id', (req, res) => {
  const id = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
