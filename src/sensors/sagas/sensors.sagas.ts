import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { FlashAlertLedCommand } from '../commands/impl/flash-alert-led.command';
import { SensorAlertedDeviceEvent } from '../events/impl/sensor-alerted-device.event';

const itemId = '0';

@Injectable()
export class SensorSagas {
  @Saga()
  devicesAlerted = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(SensorAlertedDeviceEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [SensorSagas] Saga'));
          return new FlashAlertLedCommand(event.sensorId, itemId);
        }),
      );
  }
}
