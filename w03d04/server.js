const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const users = {
  abc: {
    id: 'abc',
    email: 'a@a.com',
    password: '$2a$10$rP4IevOmt2JN7eFGyq/S9.JTGL3ik2StIdfyBAPfaKPKwvW5VFUz2'
  },
  def: {
    id: 'def',
    email: 'b@b.com',
    password: '$2a$10$rP4IevOmt2JN7eFGyq/S9.JTGL3ik2StIdfyBAPfaKPKwvW5VFUz2'
  },
};

const app = express();
const port = 3000;

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // (req, res, next) => {}
app.use(express.urlencoded({ extended: false })); // populates req.body

// app.use(cookieParser()); // populates req.cookies
app.use(cookieSession({
  name: 'my-cookie-name',
  keys: ['secret'],
}));

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // get the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // check if email and password were NOT provided
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND a password');
  }

  // check if a user with this email already exists
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found a duplicate email
      foundUser = user;
    }
  }

  // did we find a user (ie. is a user with that email already registered)
  if (foundUser) {
    return res.status(400).send('a user with that email already exists');
  }

  // happy path! create the new user object
  const uniqueId = Math.random().toString(36).substring(2, 5);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    id: uniqueId,
    email: email,
    password: hash
  };

  // add the new user object to the `users` object
  users[uniqueId] = newUser;
  console.log(users);

  // redirect to the login page
  res.redirect('/login');
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  console.log('req.method', req.method)
  req.method = 'DELETE'

  // get the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // check if email and password were NOT provided
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND a password');
  }

  // look up the user based on their email address
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user!!
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // do the passwords NOT match
  const result = bcrypt.compareSync(password, foundUser.password);
  if (!result) {
  // if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // they are who they say they are!!
  // set a cookie and then redirect the user
  req.session.userId = foundUser.id;
  // res.cookie('userId', foundUser.id);

  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // check if the user is logged in
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // lookup the user based on their id
  const user = users[userId];

  const templateVars = {
    user: user,
  };

  // happy path is render the protected template
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  // res.clearCookie('userId');
  req.session = null;
  // req.session.user_id = null; // {user_id: null}

  // redirect the user
  res.redirect('/login');
});

// turn the server on
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
