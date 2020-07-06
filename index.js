const express = require('express');
const bodyParser = require('body-parser');


const carsAndBids = require('./cars-and-bids');
const bringATrailer = require('./bring-a-trailer');

const env = process.env;
const app = express();
const port = env.PORT || 5000;
app.set('port', port);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/health', (req, res) => {
  res.status(200).json({health: 'good'});
});

app.get('/c-and-b', carsAndBids);
app.get('/b-a-t', bringATrailer);

app.listen(port, () => {
  console.log(`Node app is running on http://0.0.0.0:${port}`);
});