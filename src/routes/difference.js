// diff.js - Wiki route module.

var express = require('express');
var router = express.Router();

var diff_controller = require('../controllers/differenceController');

router.get('/difference', diff_controller.temp_difference);
  
module.exports = router;