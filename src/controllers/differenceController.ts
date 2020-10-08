import { IDifferenceService } from '../services/IDifferenceService' 

export class DifferenceController {
  private differenceService: IDifferenceService; 

  constructor (differenceService: IDifferenceService) {
    this.differenceService = differenceService;
    console.log("wuut", this.differenceService);
  }

  async tempDifference (req, res): Promise<string> {
   const difference = await this.differenceService.sensorDifference("iddqd");
    return difference;
  }
}
