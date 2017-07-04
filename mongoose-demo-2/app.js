const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const router = express.Router();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')
// app.set('layout', 'layout');
app.use('/static', express.static('static'));

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Cat = require('./cats.js');
mongoose.connect('mongodb://localhost:27017/cute-cats');

let cats = Cat;


app.get('/', function(req, res) {
  res.render('index', {cats});
});

// with specifications
// var cat = new Cat({name: "Kipling", age: 7, fur: "ginger"});

// with defaults
var cat = new Cat({});

cat.save().then(function(){
  console.log("a cute cat has been added to the database")
}).catch(function(){
  console.log("no cats for you D:")
});




app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});

console.log(cat);
