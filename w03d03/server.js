const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const languages = require('./languages.json'); // JSON.parse() => JS object
// console.log(languages);

const users = {
  abc: {
    id: 'abc',
    email: 'a@a.com',
    password: '1234'
  },
  def: {
    id: 'def',
    email: 'b@b.com',
    password: '1234'
  },
};

const app = express();
const port = 3000;

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // (req, res, next) => {}
app.use(cookieParser()); // populate req.cookies
app.use(express.urlencoded({ extended: false })); // populates req.body

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  console.log(req.body); // undefined
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
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // they are who they say they are!!
  // set a cookie and then redirect the user
  res.cookie('userId', foundUser.id);

  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // check if the user is logged in
  const userId = req.cookies.userId;

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
  res.clearCookie('userId');

  // redirect the user
  res.redirect('/login');
});

// GET /home
app.get('/home', (req, res) => {
  const languagePref = req.cookies.languagePref;

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  res.render('home', templateVars); // const render = (templateName, locals) => {}
});

// GET /about
app.get('/about', (req, res) => {
  // console.log(req.cookies);

  const languagePref = req.cookies.languagePref;

  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  const languagePref = req.params.languagePref;
  // console.log(languagePref);

  // set a cookie
  res.cookie('languagePref', languagePref);

  // redirect the user
  res.redirect('/home');
});

// turn the server on
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
