const sensorRepository = require('../repositories/sensorRepository');
const https = require('https');
const mathHelper = require('../utils/mathHelper');
const axios = require('axios');

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
    async function internalFunc (db) {
      const url = "https://dummy-sensors.azurewebsites.net/api/sensor/iddqd";  
      const response = await axios.get(`${url}`);
      sensorRepository.Add(db, JSON.stringify(response.data));  
    }
    setInterval(() => {
      internalFunc(db);
    }, 1000)
}

exports.sensor_summary = function (db) {  
    sensorRepository.Get(db, mathHelper.countSummary);
}

