import {genericMethods, zakelijkTractorVerzekeringElements} from "@support";
import {maxSpeedEnum} from "@enum";

export class ZakelijkTractorVerzekeringMethods {

  async selectMaximumSpeed(input: string) {
    switch (input) {
      case maxSpeedEnum.TOT_30: {
        await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.maxSpeedSelectElement, zakelijkTractorVerzekeringElements.maxSpeedTot30SelectElement);
        break;
      }
      case maxSpeedEnum.BETWEEN_31_AND_40: {
        await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.maxSpeedSelectElement, zakelijkTractorVerzekeringElements.maxSpeed31Tot40SelectElement);
        break;
      }
      case maxSpeedEnum.BETWEEN_41_AND_50: {
        await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.maxSpeedSelectElement, zakelijkTractorVerzekeringElements.maxSpeed41Tot50SelectElement);
        break;
      }
      case maxSpeedEnum.BETWEEN_51_AND_60: {
        await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.maxSpeedSelectElement, zakelijkTractorVerzekeringElements.maxSpeed51Tot60SelectElement);
        break;
      }
      case maxSpeedEnum.OVER_60: {
        await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.maxSpeedSelectElement, zakelijkTractorVerzekeringElements.maxSpeedOver60SelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
