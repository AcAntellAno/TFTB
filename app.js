var express = require('express');
var mongoose = require('mongoose');
var app = express();
var request = require('request');
const _PORT = 8080;

mongoose.connect('mongodb://localhost/tftb');
app.use(express.static('public')); //serve contents in public directory
app.set('view engine', 'ejs');

 app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(_PORT, () => {
  console.log('thongzfortheboiz.com server is running...');
});
