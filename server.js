// create the boilerplate
var express = require('express');
var app = express();



// set the port to listen for the app
app.listen(process.env.PORT || 3000, function(){
  console.log("I am listening");
});
