const express = require('express');
const router = express.Router();

// data
// const todos = [] // easy to order; default return from a database query
// const todos = {} // objects are easy to update; easy to delete keys from; must transform it before we send it to the client

const todos = {
  abc: {
    id: 'abc',
    task: 'wash the dishes',
    completed: false
  },
  def: {
    id: 'def',
    task: 'walk the dog',
    completed: true
  },
};

// BROWSE
// GET /todos/
router.get('/', (req, res) => {
  const arrayOfTodos = Object.values(todos);
  res.json(arrayOfTodos);
});

// READ
// GET /todos/:id
router.get('/:id', (req, res) => {
  const todoId = req.params.id;
  const todo = todos[todoId];
  res.json(todo); // response.rows[0]
});

// axios.post('http://localhost:54321/abc', { newTask: 'do something new' })
//   .then(response => {
//     setTodos([...todos, response.data])
//   });

// EDIT
// POST /todos/:id
router.post('/:id', (req, res) => {
  const todoId = req.params.id;
  const newTask = req.body.newTask; // error cannot read property newTask of undefined
  todos[todoId].task = newTask;
  console.log(todos);

  res.status(201).json(todos[todoId]);
});

// ADD
// POST /todos/
router.post('/', (req, res) => {
  const task = req.body.task;
  const id = Math.random().toString(36).substring(2, 5);

  const newTask = {
    id,
    task,
    completed: false
  };

  todos[id] = newTask;
  console.log(todos);

  res.status(201).json(newTask);
});

// DELETE
// DELETE /todos/:id
router.delete('/:id', (req, res) => {
  const todoId = req.params.id;

  delete todos[todoId];

  res.status(200).send({ success: true });
});

module.exports = router;
