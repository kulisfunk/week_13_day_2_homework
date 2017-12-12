var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(require('./controllers/index'));
app.use(express.static('client/build'));



var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/super_cars", function(err, client){
  if(err){
    return console.log(err);
  }

  db = client.db("super_cars");
  console.log("connected to db...");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
