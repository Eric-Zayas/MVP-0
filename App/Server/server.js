var express = require('express');
var mongoose = require('mongoose');
var gameInfo = require(__dirname + '/config.js');
// var rp = require('request-promise');
var request = require("request");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/file',function(req,res){
  // console.log(req.body);
  var options = { method: 'GET',
  url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/',
  qs:
   { fields: 'name,esrb.synopsis,cover',
     limit: '10',
     offset: '0',
     order: 'release_dates.date:desc',
     search: req.body.key },
  headers:
   { 'postman-token': '40561b7e-546f-3cb4-6510-67d29abe25d4',
     'cache-control': 'no-cache',
     accept: 'application/json',
     'x-mashape-key': 'uw6gmmY9rVmshLmB0OdTga3iqkfSp1vf3WUjsnA7vIRNU0gVpc' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // query db to get everything
  // send that



res.send(body);


  console.log(body);
});



});

app.use(express.static(__dirname + '/../Client'));

app.listen(4000,function(){
  console.log("Listening on port 4000");
})
module.exports = app;


mongoose.connect('mongodb://localhost/game');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log('database is now connected');
});
