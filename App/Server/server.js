var express = require('express');
var app = express();
var path = require('path')
app.use(express.static("/Users/ericzayas/desktop/mvp-0/App/Client"));
// path.join(__dirname, '/../Client'))
// "/Users/ericzayas/desktop/mvp-0/App/Client"
app.listen(4000,function(){
  console.log("Listening on port 4000");
})
module.exports = app;
