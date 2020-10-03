import { Injectable } from '@nestjs/common';
import { Sensor } from '../models/sensor.model';
import { userSensor } from './fixtures/user';

@Injectable()
export class SensorRepository {
  async findOneById(id: number): Promise<Sensor> {
    return userSensor;
  }

  async findAll(): Promise<Sensor[]> {
    return [userSensor];
  }
}
