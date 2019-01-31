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
    if (input === familyCompositionEnum.ONE_PERSON) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionOnePersonElement);
    } else if (input === familyCompositionEnum.ONE_PARENT) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionOneParentElement);
    } else if (input === familyCompositionEnum.LIVING_TOGETHER) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionLivingTogetherElement);
    } else if (input === familyCompositionEnum.FAMILY_WITH_CHILDREN) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(aansprakelijkheidsVerzekeringElements.familyCompositionFamilyWithChildrenElement);
    } else {
      throw new Error('The input you have entered clickFamilyComposition: "" ' + input + ' "" is not recognized as a command');
    }
  }
}
