let sensorJson = { 
    "sensors" : [] 
  };


exports.countSummary = function (data){
    let filteredValue = sensorJson.sensors.filter(x => x.id === data.id)
  
    if(filteredValue.length == 0){
        sensorJson.sensors.push({ "id" : data.id, "count" : 1, "avgTemp" : data.value })
    } else if(typeof filteredValue[0].count !== 'undefined'){
        filteredValue[0].count++; 
        filteredValue[0].avgTemp = filteredValue[0].avgTemp + (data.value - filteredValue[0].avgTemp) / filteredValue[0].count;
    }

    dirtyObject = sensorJson;

    return sensorJson;
  }