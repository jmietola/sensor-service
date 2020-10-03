let differenceService = require ('../services/differenceService.js')

// Display temperature differences.
exports.temp_difference = async function(req, res) {    
  res.send(differenceService.sensorDifference(""));
};

