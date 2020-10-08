import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { SensorAlertedDeviceEvent } from '../impl/sensor-alerted-device.event';

@EventsHandler(SensorAlertedDeviceEvent)
export class SensorAlertedDeviceHandler
  implements IEventHandler<SensorAlertedDeviceEvent> {
  handle(event: SensorAlertedDeviceEvent) {
    console.log(clc.greenBright('SensorAlertedDeviceEvent...'));
  }
}
