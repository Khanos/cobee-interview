require('dotenv-safe').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const apiVersion = process.env.API_VERSION || 'v1';
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Setters
app.set('port', port);
app.set('host', host);
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').renderFile);

// Uses
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

// Setting up the routes
app.use(`/api/${apiVersion}`, require('./src/routes'));
app.get('/', (req, res) => {
  return res.render('index.html')
});
app.get('*', (req, res) => {
  return res.redirect('/');
});

// Server initialization
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
