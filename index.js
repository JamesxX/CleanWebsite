'use strict';
const express = require('express');
const app = express();
const api = require('./server/api.js');

app.get('/', function (req, res) {
  res.sendFile( __dirname + '/client/index.html');
});

app.use(express.static('client'));
app.use('/api', api);

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});