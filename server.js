const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

// -------------------------- MIDDLEWARE -------------------------- //

// BodyParser
// Takes data out of the req object and convert it into an object and puts it in req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
  console.table({ url, method, requestedAt });
  next();
});

// User Session
app.use(session({
  secret: 'Shhhh, this is a secret...!',
  resave: false,
  saveUninitialized: false // Only save the session if a property has been added to req.session
}));


app.use(cors());

// -------------------------- ROUTES -------------------------- //

// GET Root Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome my Wedding App</h1>');
});

// Auth Routes
app.use('/api/v1/auth', routes.auth);

// User Routes
app.use('/api/v1/users', routes.users);

// Post Routes
app.use('/api/v1/posts', routes.posts);



// -------------------------- START SERVER -------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));