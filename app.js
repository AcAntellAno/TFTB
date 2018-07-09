var express = require('express');
var app = express();
var request = require('request');
const _PORT = 8080;

app.use(express.static('public')); //serve contents in public directory
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.listen(_PORT, () => {
  console.log('thongzfortheboiz.com server is running...');
});
