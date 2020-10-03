var express = require('express');
var router = express.Router();
var summary_controller = require('../controllers/summaryController');

router.get('/summary', summary_controller.sensor_summary);
  
module.exports = router;