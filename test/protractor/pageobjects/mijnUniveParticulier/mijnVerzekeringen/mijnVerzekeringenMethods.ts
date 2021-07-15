import {
  genericMethods,
  mijnVerzekeringElements
} from '@support';
import {verzekeringPaginasEnum} from '../../enum/genericEnum';
import {browser} from 'protractor';

export class MijnVerzekeringMethods {

  async chooseVerzekeringTypeForVerzekeringskaart(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.verzekeringKiesAutoInsuranceClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnVerzekeringElements.verzekeringKiesAutoInsuranceClickElement);
        await genericMethods.verifyUrlContainsIgnoreCase('product=auto');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
