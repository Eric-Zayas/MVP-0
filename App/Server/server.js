var express = require('express');
var mongoose = require('mongoose');
var gameInfo = require(__dirname + '/config.js');
var app = express();

app.use(express.static(__dirname + '/../Client'));
//
// "/Users/ericzayas/desktop/mvp-0/App/Client"

app.listen(4000,function(){
  console.log("Listening on port 4000");
})
module.exports = app;


mongoose.connect('mongodb://localhost/gameInfo');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log('database is now connected');
});
