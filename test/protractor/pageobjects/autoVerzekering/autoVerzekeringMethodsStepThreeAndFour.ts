import {browser} from 'protractor';
import {GenericMethods} from "../generic/genericMethods";
import {GenericElements} from "../generic/genericElements";
import {AutoVerzekeringElementsStepThree} from "./autoVerzekeringElementsStepThree";
import {gender} from "../enum/genericEnum";
import {NawElements} from "../generic/nawElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringElementsStepThree: AutoVerzekeringElementsStepThree = new AutoVerzekeringElementsStepThree();
let nawElements: NawElements = new NawElements();


export class AutoVerzekeringMethodsStepThreeAndFour {

  async clickOnMainDriver(mainDriver: string) {
    if (mainDriver === autoVerzekeringElementsStepThree.mainDriverYes) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverYesElement);
    } else if (mainDriver === autoVerzekeringElementsStepThree.mainDriverNo) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
    } else if (mainDriver === autoVerzekeringElementsStepThree.mainDriverNoMyChild) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoMyChildElement);
    } else if (mainDriver === autoVerzekeringElementsStepThree.mainDriverNoMyPartner) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoMyPartnerElement);
    } else if (mainDriver === autoVerzekeringElementsStepThree.mainDriverNoSomeoneElse) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.mainDriverNoSomeoneElseElement);
    } else {
      throw new Error('The input you have entered clickOnMainDriver: "" ' + mainDriver + ' "" is not recognized as a command');
    }
  }

  async clickOnOwnerCar(ownerCar: string) {
    if (ownerCar === autoVerzekeringElementsStepThree.ownerCarYes) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarYesElement);
    } else if (ownerCar === autoVerzekeringElementsStepThree.ownerCarNo) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
    } else if (ownerCar === autoVerzekeringElementsStepThree.ownerCarNoMyChild) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoMyChildElement);
    } else if (ownerCar === autoVerzekeringElementsStepThree.ownerCarNoMyPartner) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoMyPartnerElement);
    } else if (ownerCar === autoVerzekeringElementsStepThree.ownerCarNoSomeoneElse) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoElement);
      await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarNoSomeoneElseElement);
    } else {
      throw new Error('The input you have entered clickOnOwnCar: "" ' + ownerCar + ' "" is not recognized as a command');
    }
  }

  async clickOwnerDataGender(genderType: string) {
    if (genderType === gender.MALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(nawElements.ownerDataGenderMaleElement);
    } else if (genderType === gender.FEMALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(nawElements.ownerDataGenderFemaleElement);
    } else {
      throw new Error('The input you have entered clickOwnerDataGender: "" ' + genderType + ' "" is not recognized as a command');
    }
  }

  async clickMainDriverGender(genderType: string) {
    if (genderType === gender.MALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(nawElements.mainDriverGenderMaleElement);
    } else if (genderType === gender.FEMALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(nawElements.mainDriverGenderFemaleElement);
    } else {
      throw new Error('The input you have entered clickMainDriverGender: "" ' + genderType + ' "" is not recognized as a command');
    }
  }
}
