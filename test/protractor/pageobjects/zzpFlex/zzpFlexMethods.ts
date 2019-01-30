import {browser, by, element, ElementFinder} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {ZzpFlexElements} from "./zzpFlexElements";
import {zzpFlexUwpremie} from "../enum/zzpFlexEnum";
import {GenericElements} from "../generic/genericElements";
import {durationEntrepreneur, gender, specificIdentification} from "../enum/genericEnum";
import {PersonaData} from "../persona/persona";

// @ts-ignore
let genericMethods: GenericMethods = new GenericMethods();
let zzpFlexElements: ZzpFlexElements = new ZzpFlexElements();
let genericElements: GenericElements = new GenericElements();
let personaData: PersonaData = new PersonaData();


export class ZzpFlexMethods {

  async dragAndDropUwPremie(uwPremieInput: string) {
    const slider: ElementFinder = element(by.css(zzpFlexElements.sliderElement));
    await genericMethods.waitForElementIsVisible(zzpFlexElements.sliderElement, browser.getPageTimeout);
    if (uwPremieInput === zzpFlexUwpremie._25) {
      await browser.actions().dragAndDrop(slider, {x: 0, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._50) {
      await browser.actions().dragAndDrop(slider, {x: 58, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._75) {
      await browser.actions().dragAndDrop(slider, {x: 116, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._100) {
      await browser.actions().dragAndDrop(slider, {x: 174, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._125) {
      await browser.actions().dragAndDrop(slider, {x: 233, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._150) {
      await browser.actions().dragAndDrop(slider, {x: 291, y: 0}).perform();
    } else {
      throw new Error('The input you have entered dragAndDropUwPremie: "" ' + uwPremieInput + ' "" is not recognized as a command');
    }
  }

  async clickOnNextButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(zzpFlexElements.nextButton, browser.getPageTimeout);
    await genericMethods.clickOnElementWithClassName(zzpFlexElements.nextButton);
  }

  async clickYourDataGender(genderType: string) {
    if (genderType === gender.MALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexSelectGenderElementMale);
    } else if (genderType === gender.FEMALE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexSelectGenderElementFemale);
    } else {
      throw new Error('The input you have entered clickYourDataGender: "" ' + genderType + ' "" is not recognized as a command');
    }
  }

  async selectYourDataSpecificIdentification(specificIdentificationType: string, persona: string) {
    if (specificIdentificationType === specificIdentification.DRIVER_LICENSE) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationDriverLicenseSelect);
      await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
    } else if (specificIdentificationType === specificIdentification.PASSPORT) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationPassportSelect);
      await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
    } else if (specificIdentificationType === specificIdentification.ID_CARD) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationIdCardSelect);
      await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
    } else if (specificIdentificationType === specificIdentification.SOMETHING_ELSE) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationSomethingElseSelect);
    } else {
      throw new Error('The input you have entered selectYourDataSpecificIdentification: "" ' + specificIdentificationType + ' "" is not recognized as a command');
    }
  }

  async selectYourDataDurationEntrepreneur(durationEntrepreneurInput: string) {
    if (durationEntrepreneurInput === durationEntrepreneur._MIN1) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurMinOneElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._1) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurOneElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._2) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurTwoElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._3) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurThreeElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._4) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurFourElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._5) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurFiveElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._6) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurSixElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._7) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurSevenElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._8) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurEightElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._9) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurNineElement);
    } else if (durationEntrepreneurInput === durationEntrepreneur._10) {
      await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurTenElement);
    } else {
      throw new Error('The input you have entered selectYourDataDurationEntrepreneur: "" ' + durationEntrepreneurInput + ' "" is not recognized as a command');
    }
  }
}
