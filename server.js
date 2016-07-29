// create the boilerplate
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});
// seed posts
var posts = [
  {
    title: "This is the first title",
    body:  "This is the first post that this website is dealing with.",
    createdAt: "This is the Date of this post."
  },
  {
    title: "This is the second title for things.",
    body: "This is the second post that is being created.  Woo!!!!",
    createdAt: "This is the Date of this post."
  },
  {
    title: "This is the third title",
    body: "This is another post for the band.",
    createdAt: "This is the Date of this post"
  }
];

// set the port to listen for the app
app.listen(process.env.PORT || 3000, function(){
  console.log("I am listening");
});
