  /**
 * @interface IDifferenceService
 * @desc Responsible for temperature differences
 **/

export interface IDifferenceService {          // Exported
  sensorDifference (sensor: any): Promise<string>
}

