export class SensorAlertedDeviceEvent {
  constructor(
    public readonly sensorId: string,
    public readonly deviceId: string,
  ) {}
}
