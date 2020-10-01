const sensorRepository = require('../repositories/sensorRepository');
const https = require('https');
const mathHelper = require('../utils/mathHelper');

exports.addAndInitDepedencies = async function () {
  //##### Database Singleton Instance
  let db = exports.Database.getInstance();
  //##### Internal new data service
  exports.update_sensor_data(db)
  //##### Internal data summary service
  exports.sensor_summary(db)
}


exports.Database = (function () {
  var instance;
  var sqlite3 = require('sqlite3').verbose();

  function createInstance() {
      // Initialize Database
      var database = new sqlite3.Database('./iot_db.sqlite')
      
      return database;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

exports.update_sensor_data = function (db) {

    function internalFunc (db) {
      https.get('https://dummy-sensors.azurewebsites.net/api/sensor/iddqd', (response) => {
        let data = '';
      
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('end', () => {
          sensorRepository.AddSensorData(db, data);  
        });
      
      }).on("error", (error) => {
        console.log("Error: " + error.message);
      });
    }

    setInterval(() => {
      internalFunc(db);
    }, 1000)
}

exports.sensor_summary = function (db) {  
    sensorRepository.GetSensorDataSummary(db, mathHelper.countSummary);
}

