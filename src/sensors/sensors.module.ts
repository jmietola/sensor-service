import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { SensorsController } from './sensors.controller';
import { QueryHandlers } from './queries/handlers';
import { SensorRepository } from './repository/sensor.repository';
import { SensorSagas } from './sagas/sensors.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [SensorsController],
  providers: [
    SensorRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    SensorSagas,
  ],
})
export class SensorsModule {}
