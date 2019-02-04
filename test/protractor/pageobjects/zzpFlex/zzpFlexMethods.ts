import {browser, by, element, ElementFinder} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {ZzpFlexElements} from "./zzpFlexElements";
import {incapacitation, zzpFlexUwpremie} from "../enum/zzpFlexEnum";
import {GenericElements} from "../generic/genericElements";
import {durationEntrepreneur, gender, specificIdentification, genericEnum} from "../enum/genericEnum";
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

  async clickOnFinishButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(zzpFlexElements.finishButton, browser.getPageTimeout);
    await genericMethods.clickOnElement(zzpFlexElements.finishButton);
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

  async clickHealthCertificate14DaysNotAbleToWork(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificate14DaysNoteAbleToWorkNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificate14DaysNoteAbleToWorkYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificate14DaysNotAbleToWork: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificateHeartComplaints(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateHeartComplaintsNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateHeartComplaintsYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificateHeartComplaints: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificateCancer(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateCancerNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateCancerYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificateCancer: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificatePsychologist(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePsychologistNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePsychologistYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificatePsychologist: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificatePosturalComplaints(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePosturalComplaintsNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificatePosturalComplaintsYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificatePosturalComplaints: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificateOtherCondition(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateOtherConditionNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateOtherConditionYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificateOtherCondition: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificateMedicines(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateMedicinesNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateMedicinesYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificateMedicines: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickHealthCertificateDisabilityBenefit(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateDisabilityBenefitNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexHealthCertificateDisabilityBenefitYesElement);
    } else {
      throw new Error('The input you have entered clickHealthCertificateDisabilityBenefit: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeLifeInsurance(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceYesElement);
    } else if (input === genericEnum.DONT_KNOW) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexKnowledgeLifeInsuranceDontKnowElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeLifeInsurance: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeIncomeIncapacitated(input: string) {
    if (input === incapacitation.FIRST_ZW) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedFirstZwElement);
    } else if (input === incapacitation.FIRST_WW) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedFirstWwElement);
    } else if (input === incapacitation.CAN_GET_ASSITANCE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedCanGetAssistanceElement);
    } else if (input === incapacitation.NO_INCOME) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeIncapacitatedNoIncomeElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeIncomeIncapacitated: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeAmountIncapacitated(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeAmountIncapacitatedNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeAmountIncapacitatedYesElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeAmountIncapacitated: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeMonthlyIncapacitated(input: string) {
    if (input === incapacitation.NO_INCOME) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedNoIncomeElement);
    } else if (input === incapacitation._40_PERCENT_INCOME) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitated40PercentIncomeElement);
    } else if (input === incapacitation.FULL_INCOME) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedFullIncomeElement);
    } else if (input === genericEnum.DONT_KNOW) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeMonthlyIncapacitatedDontKnowElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeMonthlyIncapacitated: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeConsciousOfAccidentInsurance(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfAccidentInsuranceNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfAccidentInsuranceYesElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeConsciousOfAccidentInsurance: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickKnowledgeConsciousOfMaxTwoYears(input: string) {
    if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfMaxTwoYearsNoElement);
    } else if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexIncomeConsciousOfMaxTwoYearsYesElement);
    } else {
      throw new Error('The input you have entered clickKnowledgeConsciousOfMaxTwoYears: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async selectInsuranceHistory(insuranceHistory: string, explanation: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryNoElement, browser.getPageTimeout);
    if (insuranceHistory === genericEnum.YES) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryYesElement);
      await genericMethods.typeText(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryYesExplanationElement, explanation);
    } else if (insuranceHistory === genericEnum.NO) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredInsuranceHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectInsuranceHistory: "" ' + insuranceHistory + ' "" is not recognized as a command');
    }
  }

  async selectCriminalHistory(criminalHistory: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    if (criminalHistory === genericEnum.YES) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryYesElement);
    } else if (criminalHistory === genericEnum.NO) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectCriminalHistory: "" ' + criminalHistory + ' "" is not recognized as a command');
    }
  }

  async selectDamageHistory(damageHistory: string) {
    await genericMethods.waitForElementIsVisible(zzpFlexElements.zzpFlexAlmostInsuredCriminalHistoryNoElement, browser.getPageTimeout);
    if (damageHistory === genericEnum.YES) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredDamageHistoryYesElement);
    } else if (damageHistory === genericEnum.NO) {
      await genericMethods.clickOnElement(zzpFlexElements.zzpFlexAlmostInsuredDamageHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectDamageHistory: "" ' + damageHistory + ' "" is not recognized as a command');
    }
  }

  async verifyThankYouPageText(persona: string) {
    if (personaData.getPersonaGender(persona) === gender.MALE) {
      await genericMethods.verifyTextInElement(zzpFlexElements.thankYouElement, 'Beste meneer '+ personaData.getPersonaLastName(persona) +', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres: ' + personaData.getPersonaEmailAddress(persona) + '.');
    } else if (personaData.getPersonaGender(persona) === gender.FEMALE) {
      await genericMethods.verifyTextInElement(zzpFlexElements.thankYouElement, 'Beste mevrouw '+ personaData.getPersonaLastName(persona) +', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres:' + personaData.getPersonaEmailAddress(persona) + '.');
    } else {
      throw new Error('The input you have entered for verifyThankYouPageText: "" ' + persona + ' "" is not recognized as a command');
    }
  }

}
