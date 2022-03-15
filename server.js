require('dotenv-safe').config();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const routes = require('./src/routes');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const { default: helmet } = require('helmet');
const app = express();

// Setters
app.set('port', port);
app.set('views', path.join(__dirname, './src/views'))
app.engine('html', require('ejs').renderFile);

// Uses
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(express.static('public'));

// Setting the entry point for the routes
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  return res.render('index.html');
})

app.get('*', (req, res) => {
  return res.redirect('/');
})

// Enable only on developement HTTP request logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Init the server
app.listen(port, host, () => {
  console.log(`Server running on: http://${host}:${port}`);
});

module.exports = app;