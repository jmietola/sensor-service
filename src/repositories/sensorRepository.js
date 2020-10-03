exports.Add = function (db, data) {

    let sqlInsert = `INSERT INTO datas(id, time, value) VALUES (?, ?, ?)`;
    let dataObject = JSON.parse(data);
    let values = [dataObject.id, dataObject.timestamp, dataObject.data];      

    db.run(sqlInsert, values, function(err) {
      if (err) {
        return console.log(err.message);
      }

      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    
}

exports.Update = function (db, data) {
    
}

exports.Get = function (db, dataHandler) {
    
      let sql = `SELECT id, time, value FROM datas`;
      let stmt = db.prepare(sql);

      const iterate = () => {
                  
        stmt.get(function(error, data){
            if(data){
                if(error){
                    console.log(error);
                } else {                      
                    dataHandler(data);     
                }
                setImmediate(function(){
                  iterate();
                });
            }
        });
      }

      iterate();
}