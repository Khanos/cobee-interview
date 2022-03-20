require('dotenv-safe').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const apiVersion = process.env.API_VERSION || 'v1';
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();

// Setters
app.set('port', port);
app.set('host', host);
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').renderFile);


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use(`/api/${apiVersion}/`, require('./src/routes'));
app.use('/', (req, res) => {
  res.render('index.html');
  return;
});
app.use('*', (req, res) => {
  res.redirect('/');
})

// Lift the app
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

module.exports = app;