var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../Client'));
//
// "/Users/ericzayas/desktop/mvp-0/App/Client"

app.listen(4000,function(){
  console.log("Listening on port 4000");
})
module.exports = app;
