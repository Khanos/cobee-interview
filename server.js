require('dotenv-safe').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const apiVersion = process.env.API_VERSION || 'v1';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

// Setters
app.set('port', port);
app.set('host', host);
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').renderFile);


// Uses
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use(`/api/${apiVersion}`, require('./src/routes'));
app.get('/', (req, res) => {
  return res.render('index.html');
});
app.get('*', (req, res) => {
  return res.redirect('/');
})

// Start server
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})
