import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'; // Add this line

import todos from './routes/todos';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// Load the environment variables from .env file
dotenv.config(); // Add this line

let app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/todos', todos);

const port = parseInt(process.env.PORT, 10) || 3000;
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port);

export default app;

