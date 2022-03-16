require('dotenv-safe').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const apiVersion = process.env.API_VERSION || 'v1';
const helmet = require('helmet');
const cors = require('cors');
const bodyParse = require('body-parser');
const path = require('path');
const dbConnection = require('./src/models').connectToServer;
const express = require('express');
const app = express();

// Setters
app.set('port', port);
app.set('host', host);
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').renderFile);

// Uses
app.use(helmet());
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use(`/api/${apiVersion}`, require('./src/routes'));
app.use('/', (req, res) => {
    return res.render('index.html');
});
app.use('*', (req, res) => {
  return res.redirect('/');
});

// start server
dbConnection((err) => {
  if(err) {
    console.log(err);
    return
  }
  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  })
});