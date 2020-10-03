import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
const internalService = require('./services/internalService.js');

(async () => {
  internalService.update_sensor_data()
  internalService.sensor_summary()
  const app = await NestFactory.create(ApplicationModule);
  app.listen(3000, () => console.log('Application is listening on port 3000.'));
  // ##### Sensor data summary
  var summaryRouter = require('./routes/summary')
  app.use('/sensors', summaryRouter);  // Add summary routes

  //##### Temperature difference
  var diffRouter = require('./routes/difference')
  app.use('/sensors', diffRouter)  // Add diff routes
})();

