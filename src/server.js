/** 

                  _                   _                                    _          
  /\  /\__ _  ___| | ___   _    /\/\ (_) ___ _ __ ___  ___  ___ _ ____   _(_) ___ ___ 
 / /_/ / _` |/ __| |/ / | | |  /    \| |/ __| '__/ _ \/ __|/ _ \ '__\ \ / / |/ __/ _ \
/ __  / (_| | (__|   <| |_| | / /\/\ \ | (__| | | (_) \__ \  __/ |   \ V /| | (_|  __/
\/ /_/ \__,_|\___|_|\_\\__, | \/    \/_|\___|_|  \___/|___/\___|_|    \_/ |_|\___\___|
                       |___/                                                          
                                                ,▄▄▄                              
                _____________________________________________________
               /                                                     \ 
              |     _____________________________________________     |
              |    |                                             |    |
              |    | Welcome to ROBCO Industries (TM) Termlink   |    |
              |    | Password Required                           |    |
              |    | Attempts Remaining: X X                     |    | 
              |    |                                             |    |
              |    | 0x01 $?_/%$ADAPTER"} | 0x0D TYS"_'$\#|^%&{} |    |
              |    | 0x02 }:!*@{/_<"[]#>; | 0x0E #{!"^&\]'|}_[$% |    |
              |    | 0x03 $%&'()*+/:;<\_' | 0x0F }|[(%CLEAN/_$@( |    |
              |    | 0x04 ^SMART(!@$*'^_@ | 0x10 []_#!"{|}'%$\&^ |    |
              |    | 0x05 (*@#%}*(!%)^(_! | 0x11 %$}[!\#'^&_]{|" |    |
              |    | 0x06 $%&'()*+/:;<_@) | 0x12 \SOLID|%'_!}\^" |    |
              |    | 0x07 "/')=*%!&>#<:$+ | 0x13 ^{['&$|!_]%\"#} |    |

                        Copyright (c) 2020 Jouni Mietola
*/

const internalService = require('./services/internalService.js');
const express = require('express');
const app = express();

(async () => {
  internalService.update_sensor_data()
  internalService.sensor_summary()
  // configure and start server
  const port = 3000;
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  })
})();

// ##### Sensor data summary
var summaryRouter = require('./routes/summary')
app.use('/sensors', summaryRouter);  // Add summary routes

//##### Temperature difference
var diffRouter = require('./routes/difference')
app.use('/sensors', diffRouter)  // Add diff routes

