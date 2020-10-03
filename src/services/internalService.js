const sensorRepository = require('../repositories/sqliteRepository');
const https = require('https');
const mathHelper = require('../utils/mathHelper');
const axios = require('axios');

exports.update_sensor_data = function (db) {
    async function internalFunc (db) {
      const url = "https://dummy-sensors.azurewebsites.net/api/sensor/iddqd";  
      const response = await axios.get(`${url}`);
      sensorRepository.Add(JSON.stringify(response.data));  
    }
    setInterval(() => {
      internalFunc(db);
    }, 1000)
}

exports.sensor_summary = function () {  
    sensorRepository.Get(mathHelper.countSummary);
}

