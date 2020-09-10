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

    const https = require('https');

    function internalFunc (db) {
      https.get('https://dummy-sensors.azurewebsites.net/api/sensor/iddqd', (response) => {
        let data = '';
      
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('end', () => {
  
          let sqlInsert = `INSERT INTO datas(id, time, value) VALUES (?, ?, ?)`;
          let dataObject = JSON.parse(data);
          let values = [dataObject.id, dataObject.timestamp, dataObject.data];      

          db.run(sqlInsert, values, function(err) {
            if (err) {
              return console.log(err.message);
            }

            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
  
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

      console.log("Only once");
      let sensorJson = { 
        "sensors" : [] 
      };
      let sql = `SELECT id, time, value FROM datas`;
      let stmt = db.prepare(sql);

      const iterate = () => {
                  
        stmt.get(function(error, data){
            if(data){
                if(error){
                    console.log(error);
                } else {                      
                    exports.countSummary(data, sensorJson);
                    dirtyObject = sensorJson;
                }
                setImmediate(function(){
                  iterate();
                });
            }
        });
      }

      iterate();
      
}

exports.countSummary = function (data, sensorJson){
  let filteredValue = sensorJson.sensors.filter(x => x.id === data.id)

  if(filteredValue.length == 0){
      sensorJson.sensors.push({ "id" : data.id, "count" : 1, "avgTemp" : data.value })
  } else if(typeof filteredValue[0].count !== 'undefined'){
      filteredValue[0].count++; 
      filteredValue[0].avgTemp = filteredValue[0].avgTemp + (data.value - filteredValue[0].avgTemp) / filteredValue[0].count;
  }
  return sensorJson;
}