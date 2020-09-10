let differenceService = require ('../services/differenceService.js')

// Display temperature differences.
exports.temp_difference = async function(req, res) {

  console.log('\x1b[36m%s\x1b[0m', 'Temperature Difference Request!')
        
  res.send(differenceService.sensorDifference(""));

};

