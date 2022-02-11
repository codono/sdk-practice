import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import morgan from 'morgan';
import path from 'path';
//import db from './utils/db.js';
const db = require('./utils/db.js');

import routes from './routes';

const app = express();

const env = process.env.NODE_ENV;
const envPath = '.env';

const options = {
  ca: fs
    .readFileSync(path.resolve(__dirname, '../sslKey/ca-chain-bundle.pem'))
    .toString(),
  key: fs
    .readFileSync(
      path.resolve(__dirname, '../sslKey/aris.club_20210913K83T.key.pem'),
    )
    .toString(),
  cert: fs
    .readFileSync(
      path.resolve(__dirname, '../sslKey/aris.club_20210913K83T.crt.pem'),
    )
    .toString(),
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: path.resolve(__dirname, '../' + envPath),
});
const port = 13467;

app.use(morgan('dev')); // Log every request to the console

app.use(cookieParser(process.env.COOKIE_SECRET)); //  Read cookies (* secret parameter is used when signing cookie)
app.use(bodyParser.json()); // Parsing json objects
app.use(bodyParser.urlencoded({ extended: true })); // Parsing bodies from URL

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:80',
      'https://test.sendia.io',
      'https://aris.club',
    ],
    credentials: true,
  }),
);

//  set up the template engine
app.use(express.static(path.join(__dirname, '../../react/build')));

// app.use(authenticateJWT); // Authenticate every request
app.use('/', routes);
app.get('/*', function (req, res) {
  res.sendfile(path.join(__dirname, '../../react/build', 'index.html'));
});

db.init((err) => {
  if (err) {
    console.log('Fatal error during initializing Database: ');
    console.log(err);
    return;
  }

  if (env !== 'local') {
    http
      .createServer(function (req, res) {
        res.writeHead(301, {
          Location: 'https://' + req.headers['host'] + req.url,
        });
        res.end();
      })
      .listen(port);
    https.createServer(options, app).listen(12345);
  } else {
    app.listen(port);
  }
  console.log(`Now, the server starts on port ${port}`);
});
