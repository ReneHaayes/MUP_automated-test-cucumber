import {browser} from 'protractor';
import {gender} from "../../enum/genericEnum";
import {autoVerzekeringElementsStepThree, genericElements, genericMethods, nawElements} from "../../../support";


export class AutoVerzekeringMethodsStepThreeAndFour {

  async clickOnMainDriver(input: string) {
    switch (input) {
      case autoVerzekeringElementsStepThree.mainDriverYes: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverYesElement);
        break;
      }
      case autoVerzekeringElementsStepThree.mainDriverNo: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
        break;
      }
      case autoVerzekeringElementsStepThree.mainDriverNoMyChild: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoMyChildElement);
        break;
      }
      case autoVerzekeringElementsStepThree.mainDriverNoMyPartner: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoMyPartnerElement);
        break;
      }
      case autoVerzekeringElementsStepThree.mainDriverNoSomeoneElse: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoSomeoneElseElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnOwnerCar(input: string) {
    switch (input) {
      case autoVerzekeringElementsStepThree.ownerCarYes: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarYesElement);
        break;
      }
      case autoVerzekeringElementsStepThree.ownerCarNo: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
        break;
      }
      case autoVerzekeringElementsStepThree.ownerCarNoMyChild: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoMyChildElement);
        break;
      }
      case autoVerzekeringElementsStepThree.ownerCarNoMyPartner: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoMyPartnerElement);
        break;
      }
      case autoVerzekeringElementsStepThree.ownerCarNoSomeoneElse: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
        await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoSomeoneElseElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOwnerDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.ownerDataGenderMaleElement);
        break;
      }
      case gender.FEMALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.ownerDataGenderFemaleElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMainDriverGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.mainDriverGenderMaleElement);
        break;
      }
      case gender.FEMALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(nawElements.mainDriverGenderFemaleElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
