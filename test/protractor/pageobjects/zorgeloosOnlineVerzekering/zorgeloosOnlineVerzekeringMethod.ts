import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {ZorgeloosOnlineVerzekeringElements} from "./zorgeloosOnlineVerzekeringElements";
import {gender, genericEnum} from "../enum/genericEnum";
import {familyCompositionEnum} from "../enum/aansprakelijkheidsVerzekeringEnum";
import {GenericElements} from "../generic/genericElements";
import {NawElements} from "../generic/nawElements";

let genericMethods: GenericMethods = new GenericMethods();
let zorgeloosOnlineVerzekeringElements: ZorgeloosOnlineVerzekeringElements = new ZorgeloosOnlineVerzekeringElements();
let genericElements: GenericElements = new GenericElements();
let nawElements: NawElements = new NawElements();

export class ZorgeloosOnlineVerzekeringMethods {

  async selectCyberIncidentPresent(input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCyberIncidentRecent(input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistoryZorgeloosOnline(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryYesElementZorgeloosOnline);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryNoElementZorgeloosOnline);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistoryZorgeloosOnlineZakelijk(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryYesElementZorgeloosOnlineZakelijk);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryNoElementZorgeloosOnlineZakelijk);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectInsuranceHistoryZorgeloosOnline(input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.insuranceHistoryNoElementZorgeloosOnline, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.insuranceHistoryYesElementZorgeloosOnline);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.insuranceHistoryNoElementZorgeloosOnline);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickFamilyComposition(input: string) {
    switch (input) {
      case familyCompositionEnum.ONE_PERSON: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.familyCompositionOnePersonElement);
        break;
      }
      case familyCompositionEnum.ONE_PARENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.familyCompositionOneParentElement);
        break;
      }
      case familyCompositionEnum.LIVING_TOGETHER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.familyCompositionLivingTogetherElement);
        break;
      }
      case familyCompositionEnum.FAMILY_WITH_CHILDREN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.familyCompositionFamilyWithChildrenElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickContactDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.contactDataZorgeloosOnlineGenderMaleClickElement);
        break;
      }
      case gender.FEMALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.contactDataZorgeloosOnlineGenderFemaleClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
