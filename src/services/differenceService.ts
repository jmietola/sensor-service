import { IDifferenceService } from "./IDifferenceService";


export class DifferenceService implements IDifferenceService { // Not exported
  constructor () {
  }

  sensorDifference = async (sensor) => {
    console.log("HMM");
    const axios = require('axios');
    const url = "http://dummy-sensors.azurewebsites.net/api/weather";  
    sensor = "iddqd";
    const url2 = `https://dummy-sensors.azurewebsites.net/api/sensor/${sensor}`;
    const firstRequest = await axios.get(`${url}`);
    const secondRequest = await axios.get(`${url2}`);
  
    return Math.abs(firstRequest.data.temperature - secondRequest.data.data).toString()
  }
}
