export class AlertDeviceCommand {
  constructor(
    public readonly sensorId: string,
    public readonly deviceId: string,
  ) {}
}
