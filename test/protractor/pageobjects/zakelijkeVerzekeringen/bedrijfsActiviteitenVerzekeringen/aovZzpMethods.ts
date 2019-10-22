import {browser, by, element, ElementFinder} from "protractor";
import {aovZzpElements, genericElements, genericMethods, personaData} from "@support";
import {AovZzpUwpremie, durationEntrepreneur, gender, genericEnum, incapacitation, specificIdentification} from "@enum";

export class AovZzpMethods {

  async dragAndDropUwPremie(input: string) {
    const slider: ElementFinder = element(by.css(aovZzpElements.sliderElement));
    await genericMethods.waitForElementIsVisible(aovZzpElements.sliderElement, browser.getPageTimeout);
    switch (input) {
      case AovZzpUwpremie._25: {
        await browser.actions().dragAndDrop(slider, {x: 0, y: 0}).perform();
        break;
      }
      case AovZzpUwpremie._50: {
        await browser.actions().dragAndDrop(slider, {x: 58, y: 0}).perform();
        break;
      }
      case AovZzpUwpremie._75: {
        await browser.actions().dragAndDrop(slider, {x: 116, y: 0}).perform();
        break;
      }
      case AovZzpUwpremie._100: {
        await browser.actions().dragAndDrop(slider, {x: 174, y: 0}).perform();
        break;
      }
      case AovZzpUwpremie._125: {
        await browser.actions().dragAndDrop(slider, {x: 233, y: 0}).perform();
        break;
      }
      case AovZzpUwpremie._150: {
        await browser.actions().dragAndDrop(slider, {x: 291, y: 0}).perform();
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnNextButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(aovZzpElements.nextButton, browser.getPageTimeout);
    await genericMethods.clickOnElementWithClassName(aovZzpElements.nextButton);
  }

  async clickOnFinishButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(aovZzpElements.finishButton, browser.getPageTimeout);
    await genericMethods.clickOnElement(aovZzpElements.finishButton);
  }

  async clickYourDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpSelectGenderElementMale);
        break;
      }
      case gender.FEMALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpSelectGenderElementFemale);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectYourDataSpecificIdentification(input: string, persona: string) {
    switch (input) {
      case specificIdentification.DRIVER_LICENSE: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpYourDataSpecificIdentificationElement, aovZzpElements.aovZzpYourDataSpecificIdentificationDriverLicenseSelect);
        await genericMethods.typeText(aovZzpElements.aovZzpYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.PASSPORT: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpYourDataSpecificIdentificationElement, aovZzpElements.aovZzpYourDataSpecificIdentificationPassportSelect);
        await genericMethods.typeText(aovZzpElements.aovZzpYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.ID_CARD: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpYourDataSpecificIdentificationElement, aovZzpElements.aovZzpYourDataSpecificIdentificationIdCardSelect);
        await genericMethods.typeText(aovZzpElements.aovZzpYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.SOMETHING_ELSE: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpYourDataSpecificIdentificationElement, aovZzpElements.aovZzpYourDataSpecificIdentificationSomethingElseSelect);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectYourDataDurationEntrepreneur(input: string) {
    switch (input) {
      case durationEntrepreneur._MIN1: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurMinOneElement);
        break;
      }
      case durationEntrepreneur._1: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurOneElement);
        break;
      }
      case durationEntrepreneur._2: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurTwoElement);
        break;
      }
      case durationEntrepreneur._3: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurThreeElement);
        break;
      }
      case durationEntrepreneur._4: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurFourElement);
        break;
      }
      case durationEntrepreneur._5: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurFiveElement);
        break;
      }
      case durationEntrepreneur._6: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurSixElement);
        break;
      }
      case durationEntrepreneur._7: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurSevenElement);
        break;
      }
      case durationEntrepreneur._8: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurEightElement);
        break;
      }
      case durationEntrepreneur._9: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurNineElement);
        break;
      }
      case durationEntrepreneur._10: {
        await genericMethods.selectInDropdown(aovZzpElements.aovZzpDurationEntrepreneurSelectElement, aovZzpElements.aovZzpDurationEntrepreneurTenElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificate14DaysNotAbleToWork(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificate14DaysNoteAbleToWorkNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificate14DaysNoteAbleToWorkYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateConsultedDoctor(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateConsultedDoctorNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateConsultedDoctorYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateMedicines(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateMedicinesNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateMedicinesYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateDisabilityBenefit(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateDisabilityBenefitNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpHealthCertificateDisabilityBenefitYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeLifeInsurance(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpKnowledgeLifeInsuranceNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpKnowledgeLifeInsuranceYesElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpKnowledgeLifeInsuranceDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeIncomeIncapacitated(input: string) {
    switch (input) {
      case incapacitation.FIRST_ZW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeIncapacitatedFirstZwElement);
        break;
      }
      case incapacitation.FIRST_WW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeIncapacitatedFirstWwElement);
        break;
      }
      case incapacitation.CAN_GET_ASSITANCE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeIncapacitatedCanGetAssistanceElement);
        break;
      }
      case incapacitation.NO_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeIncapacitatedNoIncomeElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeAmountIncapacitated(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeAmountIncapacitatedNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeAmountIncapacitatedYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeMonthlyIncapacitated(input: string) {
    switch (input) {
      case incapacitation.NO_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeMonthlyIncapacitatedNoIncomeElement);
        break;
      }
      case incapacitation._40_PERCENT_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeMonthlyIncapacitated40PercentIncomeElement);
        break;
      }
      case incapacitation.FULL_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeMonthlyIncapacitatedFullIncomeElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeMonthlyIncapacitatedDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeConsciousOfAccidentInsurance(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeConsciousOfAccidentInsuranceNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeConsciousOfAccidentInsuranceYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKnowledgeConsciousOfMaxTwoYears(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeConsciousOfMaxTwoYearsNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(aovZzpElements.aovZzpIncomeConsciousOfMaxTwoYearsYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectInsuranceHistory(input: string) {
    await genericMethods.waitForElementIsVisible(aovZzpElements.aovZzpAlmostInsuredInsuranceHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredInsuranceHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredInsuranceHistoryYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCriminalHistory(input: string) {
    await genericMethods.waitForElementIsVisible(aovZzpElements.aovZzpAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredCriminalHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredCriminalHistoryYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistory(input: string) {
    await genericMethods.waitForElementIsVisible(aovZzpElements.aovZzpAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredDamageHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(aovZzpElements.aovZzpAlmostInsuredDamageHistoryYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyThankYouPageText(input: string) {
    switch (personaData.getPersonaGender(input)) {
      case gender.MALE: {
        await genericMethods.verifyTextInElement(aovZzpElements.thankYouElement, 'Beste meneer ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres: ' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      case gender.FEMALE: {
        await genericMethods.verifyTextInElement(aovZzpElements.thankYouElement, 'Beste mevrouw ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres:' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
