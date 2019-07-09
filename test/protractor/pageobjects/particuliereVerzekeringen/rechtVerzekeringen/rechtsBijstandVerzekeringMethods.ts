import {familyCompositionEnum} from '../../enum/aansprakelijkheidsVerzekeringEnum';
import {browser} from 'protractor';
import {GenericMethods} from '../../generic/genericMethods';
import {GenericElements} from '../../generic/genericElements';
import {RechtsBijstandVerzekeringElements} from './rechtsBijstandVerzekeringElements';

const genericMethods: GenericMethods = new GenericMethods();
const genericElements: GenericElements = new GenericElements();
const rechtsBijstandVerzekeringElements: RechtsBijstandVerzekeringElements = new RechtsBijstandVerzekeringElements();

export class RechtsBijstandVerzekeringMethods {

  async clickFamilyComposition(input: string) {
    switch (input) {
      case familyCompositionEnum.ONE_PERSON: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.familyCompositionOnePersonElement);
        break;
      }
      case familyCompositionEnum.ONE_PARENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.familyCompositionOneParentElement);
        break;
      }
      case familyCompositionEnum.LIVING_TOGETHER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.familyCompositionLivingTogetherElement);
        break;
      }
      case familyCompositionEnum.FAMILY_WITH_CHILDREN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.familyCompositionFamilyWithChildrenElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
