var express = require('express');

var carsRouter = new express.Router();



carsRouter.get('/', function(req, res){
  db.collection('cars').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});


carsRouter.get('/:id', function(req, res){
  db.collection('cars').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results[req.params.id]);
  });
});

carsRouter.post('/new', function(req, res){
  // db.collection('cars').insertOne(req.body);
  db.collection('cars').save(req.body);
  res.redirect('/');
});

carsRouter.post('/delete/:id', function(req, res){
  db.collection('cars').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }

    db.collection('cars').remove(results[req.param.id]);
    res.redirect('/');
  });


});



module.exports = carsRouter;
