var express = require('express')
var bodyParser = require('body-parser');
var app = express()
const log4js = require('./log4js');

var logs = function(req, res, next) {
  const start = Date.now();
  next();
  const ms = Date.now() - start;
  console.log(`${new Date().toLocaleString()} ${req.method} ${req.ip} ${req.path}- ${ms / 1000}s`);
  log4js.info(`${req.method} ${req.url}- ${ms / 1000}s`);
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logs);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  // console.log(`${req.method} ${req.ip} ${req.path}`);
  res.send('hello world')
})

app.post('/', function(req, res) {
  // console.log(`${req.method} ${req.ip} ${req.path}: request body: %j`, req.body);
  res.json(req.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))