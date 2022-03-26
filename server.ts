require('dotenv-safe').config({
  allowEmptyValues: true
});
const port: number = Number(process.env.PORT) || 3000;
const host: string = process.env.HOST || 'localhost';
const apiVersion: string = process.env.API_VERSION || 'v1';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import express, { Request, Response } from 'express';
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
app.use('/', (req: Request, res: Response) => {
  res.render('index.html');
  return;
});
app.use('*', (req: Request, res: Response) => {
  res.redirect('/');
})

// Lift the app
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

module.exports = app;