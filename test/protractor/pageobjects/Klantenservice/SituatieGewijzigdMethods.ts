import {GenericMethods} from '../generic/genericMethods';
import {SituatieGewijzigdElements} from './SituatieGewijzigdElements';
import {browser} from 'protractor';

const genericMethods: GenericMethods = new GenericMethods();
const situatieGewijzigdElements: SituatieGewijzigdElements = new SituatieGewijzigdElements();

export class SituatieGewijzigdMethods {

  async checkSituatieGewijzigdPage(input: string) {
    switch (input) {
      case 'verhuizing': {
        await genericMethods.verifyBreadcrumbOnPosition('Klantenservice', 2);
        await genericMethods.verifyBreadcrumbOnPosition('Verhuizing', 3);
        await genericMethods.verifyTextInElement(situatieGewijzigdElements.situatieGewijzigdHeaderElement, 'Verhuizing');
        break;
      }
      case 'trouwen': {
        await genericMethods.verifyBreadcrumbOnPosition('Klantenservice', 2);
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
