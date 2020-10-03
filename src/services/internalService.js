const sensorRepository = require('../repositories/sqliteRepository');
const https = require('https');
const mathHelper = require('../utils/mathHelper');
const axios = require('axios');

exports.update_sensor_data = function () {
    async function internalFunc () {
      const url = "https://dummy-sensors.azurewebsites.net/api/sensor/iddqd";  
      const response = await axios.get(`${url}`);
      sensorRepository.Add(JSON.stringify(response.data));  
    }
    setInterval(() => {
      internalFunc();
    }, 1000)
}

exports.sensor_summary = function () {  
    sensorRepository.Get(mathHelper.countSummary);
}

