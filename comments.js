// Create web server
const express = require('express');
const app = express();

// Use the public directory
app.use(express.static('public'));

// Use the comments.js file
const comments = require('./comments.js');

// Use the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Use the ejs module
app.set('view engine', 'ejs');

// GET request to load the comments page
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// POST request to add a comment
app.post('/comments', (req, res) => {
  comments.push({ name: req.body.name, comment: req.body.comment });
  res.redirect('/comments');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});