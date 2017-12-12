var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));



var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/super_cars", function(err, database){
  if(err){
    return console.log(err);
  }

  db = database;
  console.log("connected to db...");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
