import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AlertDeviceCommand } from './commands/impl/alert-device.command';
import { AlertDeviceDto } from './interfaces/alert-device-dto.interface';
import { Sensor } from './models/sensor.model';
import { GetSensorsQuery } from './queries/impl';

@Controller('sensor')
export class SensorsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/alert')
  async alertDevice(@Param('id') id: string, @Body() dto: AlertDeviceDto) {
    return this.commandBus.execute(new AlertDeviceCommand(id, dto.deviceId));
  }

  @Get()
  async findAll(): Promise<Sensor[]> {
    return this.queryBus.execute(new GetSensorsQuery());
  }
}
