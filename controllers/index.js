var express = require('express');
var path = require('path');
var router = new express.Router();

router.use('/cars', require('./cars'));

module.exports = router;
