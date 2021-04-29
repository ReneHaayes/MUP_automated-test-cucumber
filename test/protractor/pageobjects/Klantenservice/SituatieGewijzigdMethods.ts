import {browser} from 'protractor';
import {genericMethods, situatieGewijzigdElements} from '@support';
import {familyCompositionEnum} from '@enum';

export class SituatieGewijzigdMethods {
  async selectSituatieGewijzigd(input: string) {
    switch (input) {
      case 'verhuizing': {
        await genericMethods.clickOnElement(situatieGewijzigdElements.verhuizingClickElement);
        break;
      }
      case familyCompositionEnum.TROUWEN: {
        await genericMethods.clickOnElement(situatieGewijzigdElements.trouwenClickElement);
        break;
      }
      case 'scheiding': {
        await genericMethods.clickOnElement(situatieGewijzigdElements.scheidingClickElement);
        break;
      }
      case 'gezinsuitbreiding': {
        await genericMethods.clickOnElement(situatieGewijzigdElements.gezinsuitbreidingClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // TODO: make enums!
  async checkSituatieGewijzigdPage(input: string) {
    switch (input) {
      case 'verhuizing': {
        await genericMethods.verifyBreadcrumbOnPosition('Klantenservice', 2);
        await genericMethods.verifyBreadcrumbOnPosition('Verhuizing', 3);
        await genericMethods.verifyTextInElement(situatieGewijzigdElements.situatieGewijzigdHeaderElement, 'Verhuizing doorgeven');
        break;
      }
      case familyCompositionEnum.TROUWEN: {
        await genericMethods.verifyBreadcrumbOnPosition(situatieGewijzigdElements.klantenservice, 2);
        await genericMethods.verifyBreadcrumbOnPosition('Trouwen', 3);
        await genericMethods.verifyTextContainsInElement(situatieGewijzigdElements.situatieGewijzigdHeaderElement, 'Trouwen', browser.getPageTimeout);
        break;
      }
      case 'scheiding': {
        await genericMethods.verifyBreadcrumbOnPosition('Klantenservice', 2);
        await genericMethods.verifyBreadcrumbOnPosition('Scheiding', 3);
        await genericMethods.verifyTextContainsInElement(situatieGewijzigdElements.situatieGewijzigdHeaderElement, 'Scheiding', browser.getPageTimeout);
        break;
      }
      case 'gezinsuitbreiding': {
        await genericMethods.verifyBreadcrumbOnPosition('Klantenservice', 2);
        await genericMethods.verifyBreadcrumbOnPosition('Gezinsuitbreiding', 3);
        await genericMethods.verifyTextContainsInElement(situatieGewijzigdElements.situatieGewijzigdHeaderElement, 'Gezinsuitbreiding', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
