import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { SensorRepository } from '../../repository/sensor.repository';
import { GetSensorsQuery } from '../impl';

@QueryHandler(GetSensorsQuery)
export class GetSensorsHandler implements IQueryHandler<GetSensorsQuery> {
  constructor(private readonly repository: SensorRepository) {}

  async execute(query: GetSensorsQuery) {
    console.log(clc.yellowBright('Async GetSensorsQuery...'));
    return this.repository.findAll();
  }
}
