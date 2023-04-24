const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = 54321;

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // HTML forms, jQuery's serialize()
app.use(express.json()); // populates req.body
// app.use(cors());
app.use(express.static('../frontend/build'));

// import the routers
const todoRouter = require('./routes/todo-router');

// use the routers
app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
