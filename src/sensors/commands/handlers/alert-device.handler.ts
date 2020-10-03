import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { SensorRepository } from '../../repository/sensor.repository';
import { AlertDeviceCommand } from '../impl/alert-device.command';

@CommandHandler(AlertDeviceCommand)
export class KillDragonHandler implements ICommandHandler<AlertDeviceCommand> {
  constructor(
    private readonly repository: SensorRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AlertDeviceCommand) {
    console.log(clc.greenBright('AlertDeviceCommand...'));

    const { sensorId, deviceId } = command;
    const sensor = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+sensorId),
    );
    sensor.alertDevice(deviceId);
    sensor.commit();
  }
}
