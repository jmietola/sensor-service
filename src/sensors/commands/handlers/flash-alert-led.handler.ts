import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { SensorRepository } from '../../repository/sensor.repository';
import { FlashAlertLedCommand } from '../impl/flash-alert-led.command';

@CommandHandler(FlashAlertLedCommand)
export class FlashAlertLedHandler
  implements ICommandHandler<FlashAlertLedCommand> {
  constructor(
    private readonly repository: SensorRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: FlashAlertLedCommand) {
    console.log(clc.yellowBright('Async FlashAlertLedCommand...'));

    const { sensorId, itemId } = command;
    const sensor = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+sensorId),
    );
    sensor.addItem(itemId);
    sensor.commit();
  }
}
