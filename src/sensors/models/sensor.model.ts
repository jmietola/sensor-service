import { AggregateRoot } from '@nestjs/cqrs';
import { SensorFoundItemEvent } from '../events/impl/sensor-found-item.event';
import { SensorAlertedDeviceEvent } from '../events/impl/sensor-alerted-device.event';

export class Sensor extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  alertDevice(enemyId: string) {
    // logic
    this.apply(new SensorAlertedDeviceEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    // logic
    this.apply(new SensorFoundItemEvent(this.id, itemId));
  }
}
