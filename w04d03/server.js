const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 1234; 

const tweets = [
  {
    id: 'abc',
    author: 'alice',
    content: 'big thoughts'
  },
  {
    id: 'def',
    author: 'bob',
    content: 'bigger thoughts'
  },
];

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // populates req.body

app.get('/tweets', (req, res) => {
  res.json(tweets);
});

app.post('/tweets', (req, res) => {
  const author = req.body.author;
  const content = req.body.content;
  const id = Math.random().toString(36).substring(2, 5);

  const newTweet = {
    id,
    author,
    content
  };

  tweets.push(newTweet);
  console.log(tweets);

  // res.status(201).json(newTweet);
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
