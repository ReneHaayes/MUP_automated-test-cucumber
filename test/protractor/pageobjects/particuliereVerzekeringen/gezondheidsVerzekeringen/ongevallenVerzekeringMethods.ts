import {browser} from "protractor";
import {genericElements, genericMethods, ongevallenVerzekeringElements} from "@support";
import {familyCompositionEnum} from "@enum";

export class OngevallenVerzekeringMethods {

  async clickFamilyComposition(input: string) {
    switch (input) {
      case familyCompositionEnum.ONE_PERSON: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(ongevallenVerzekeringElements.familyCompositionOnePersonElement);
        break;
      }
      case familyCompositionEnum.ONE_PARENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(ongevallenVerzekeringElements.familyCompositionOneParentElement);
        break;
      }
      case familyCompositionEnum.LIVING_TOGETHER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(ongevallenVerzekeringElements.familyCompositionLivingTogetherElement);
        break;
      }
      case familyCompositionEnum.FAMILY_WITH_CHILDREN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(ongevallenVerzekeringElements.familyCompositionFamilyWithChildrenElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


}
