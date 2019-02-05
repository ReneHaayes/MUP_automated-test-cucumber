import {browser} from "protractor";
import {familyCompositionEnum} from "../enum/aansprakelijkheidsVerzekeringEnum";
import {GenericMethods} from "../generic/genericMethods";
import {GenericElements} from "../generic/genericElements";
import {AansprakelijkheidsVerzekerElements} from "./aansprakelijkheidsVerzekerElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let aansprakelijkheidsVerzekeringElements: AansprakelijkheidsVerzekerElements = new AansprakelijkheidsVerzekerElements();


export class AansprakelijkheidsVerzekeringMethods {

  async clickFamilyComposition(input: string) {
    switch (input) {
      case familyCompositionEnum.ONE_PERSON: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionOnePersonElement);
        break;
      }
      case familyCompositionEnum.ONE_PARENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionOneParentElement);
        break;
      }
      case familyCompositionEnum.LIVING_TOGETHER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionLivingTogetherElement);
        break;
      }
      case familyCompositionEnum.FAMILY_WITH_CHILDREN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionFamilyWithChildrenElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
