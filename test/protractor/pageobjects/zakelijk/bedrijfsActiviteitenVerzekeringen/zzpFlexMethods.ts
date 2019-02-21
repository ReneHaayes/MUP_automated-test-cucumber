import {browser, by, element, ElementFinder} from "protractor";
import {GenericMethods} from "../../generic/genericMethods";
import {ZzpFlexElements} from "./zzpFlexElements";
import {incapacitation, zzpFlexUwpremie} from "../../enum/zzpFlexEnum";
import {GenericElements} from "../../generic/genericElements";
import {durationEntrepreneur, gender, specificIdentification, genericEnum} from "../../enum/genericEnum";
import {PersonaData} from "../../persona/persona";

// @ts-ignore
let genericMethods: GenericMethods = new GenericMethods();
let zzpFlexElements: ZzpFlexElements = new ZzpFlexElements();
let genericElements: GenericElements = new GenericElements();
let personaData: PersonaData = new PersonaData();


export class ZzpFlexMethods {

  async dragAndDropUwPremie(input: string) {
    const slider: ElementFinder = element(by.css(zzpFlexElements.sliderElement));
    await genericMethods.waitForElementIsVisible(zzpFlexElements.sliderElement, browser.getPageTimeout);
    switch (input) {
      case zzpFlexUwpremie._25: {
        await browser.actions().dragAndDrop(slider, {x: 0, y: 0}).perform();
        break;
      }
      case zzpFlexUwpremie._50: {
        await browser.actions().dragAndDrop(slider, {x: 58, y: 0}).perform();
        break;
      }
      case zzpFlexUwpremie._75: {
        await browser.actions().dragAndDrop(slider, {x: 116, y: 0}).perform();
        break;
      }
      case zzpFlexUwpremie._100: {
        await browser.actions().dragAndDrop(slider, {x: 174, y: 0}).perform();
        break;
      }
      case zzpFlexUwpremie._125: {
        await browser.actions().dragAndDrop(slider, {x: 233, y: 0}).perform();
        break;
      }
      case zzpFlexUwpremie._150: {
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
    await genericMethods.waitForElementIsVisible(zzpFlexElements.nextButton, browser.getPageTimeout);
    await genericMethods.clickOnElementWithClassName(zzpFlexElements.nextButton);
  }

  async clickOnFinishButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(zzpFlexElements.finishButton, browser.getPageTimeout);
    await genericMethods.clickOnElement(zzpFlexElements.finishButton);
  }

  async clickYourDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexSelectGenderElementMale);
        break;
      }
      case gender.FEMALE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexSelectGenderElementFemale);
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
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationDriverLicenseSelect);
        await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.PASSPORT: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationPassportSelect);
        await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.ID_CARD: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationIdCardSelect);
        await genericMethods.typeText(zzpFlexElements.zzpFlexYourDataSpecificIdentificationNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.SOMETHING_ELSE: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexYourDataSpecificIdentificationElement, zzpFlexElements.zzpFlexYourDataSpecificIdentificationSomethingElseSelect);
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
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurMinOneElement);
        break;
      }
      case durationEntrepreneur._1: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurOneElement);
        break;
      }
      case durationEntrepreneur._2: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurTwoElement);
        break;
      }
      case durationEntrepreneur._3: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurThreeElement);
        break;
      }
      case durationEntrepreneur._4: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurFourElement);
        break;
      }
      case durationEntrepreneur._5: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurFiveElement);
        break;
      }
      case durationEntrepreneur._6: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurSixElement);
        break;
      }
      case durationEntrepreneur._7: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurSevenElement);
        break;
      }
      case durationEntrepreneur._8: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurEightElement);
        break;
      }
      case durationEntrepreneur._9: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurNineElement);
        break;
      }
      case durationEntrepreneur._10: {
        await genericMethods.selectInDropdown(zzpFlexElements.zzpFlexDurationEntrepreneurSelectElement, zzpFlexElements.zzpFlexDurationEntrepreneurTenElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificate14DaysNoteAbleToWorkNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificate14DaysNoteAbleToWorkYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateHeartComplaints(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateHeartComplaintsNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateHeartComplaintsYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateCancer(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateCancerNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateCancerYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificatePsychologist(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePsychologistNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePsychologistYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificatePosturalComplaints(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePosturalComplaintsNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePosturalComplaintsYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHealthCertificateOtherCondition(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateOtherConditionNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateOtherConditionYesElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateMedicinesNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateMedicinesYesElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateDisabilityBenefitNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateDisabilityBenefitYesElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceYesElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceDontKnowElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedFirstZwElement);
        break;
      }
      case incapacitation.FIRST_WW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedFirstWwElement);
        break;
      }
      case incapacitation.CAN_GET_ASSITANCE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedCanGetAssistanceElement);
        break;
      }
      case incapacitation.NO_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedNoIncomeElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeAmountIncapacitatedNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeAmountIncapacitatedYesElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedNoIncomeElement);
        break;
      }
      case incapacitation._40_PERCENT_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitated40PercentIncomeElement);
        break;
      }
      case incapacitation.FULL_INCOME: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedFullIncomeElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedDontKnowElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfAccidentInsuranceNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfAccidentInsuranceYesElement);
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
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfMaxTwoYearsNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfMaxTwoYearsYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectInsuranceHistory(input: string, explanation: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryYesElement);
        await genericMethods.typeText(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryYesExplanationElement, explanation);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCriminalHistory(input: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistory(input: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredDamageHistoryNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredDamageHistoryYesElement);
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
        await genericMethods.verifyTextInElement(zzpFlexElements.thankYouElement, 'Beste meneer ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres: ' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      case gender.FEMALE: {
        await genericMethods.verifyTextInElement(zzpFlexElements.thankYouElement, 'Beste mevrouw ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres:' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
