import {browser} from "protractor";
import {genericEnum} from "../enum/genericEnum";

export class ZorgeloosOnlineVerzekeringElements {

  //PREMIE
  premieZorgeloosOnlineVerzekeringTextElement: string = '[data-label-id*="LA_IF30705_38508"] label';

  //ALMOST INSURED
  cyberIncidentPresentYesElement: string = '[data-label-id*="LA_IF30005_37909"] .radioList > label:nth-child(2)';
  cyberIncidentPresentNoElement: string = '[data-label-id*="LA_IF30005_37909"] .radioList > label:nth-child(1)';

  cyberIncidentRecentYesElement: string = '[data-label-id*="LA_IF30005_37910"] .radioList > label:nth-child(2)';
  cyberIncidentRecentNoElement: string = '[data-label-id*="LA_IF30005_37910"] .radioList > label:nth-child(1)';

  async selectDamageHistory(input: string) {
    await this.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await this.clickOnElement(genericElements.damageHistoryYesElement);
        break;
      }
      case genericEnum.NO: {
        await this.clickOnElement(genericElements.damageHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
