import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { SensorFoundItemEvent } from '../impl/sensor-found-item.event';

@EventsHandler(SensorFoundItemEvent)
export class SensorFoundItemHandler implements IEventHandler<SensorFoundItemEvent> {
  handle(event: SensorFoundItemEvent) {
    console.log(clc.yellowBright('Async SensorFoundItemEvent...'));
  }
}
