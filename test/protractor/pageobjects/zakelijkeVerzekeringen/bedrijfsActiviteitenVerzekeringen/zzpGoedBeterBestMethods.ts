import {browser} from 'protractor';

import {
  genericMethods,
  personaData,
  companyData,
  zzpGoedBeterBestElements, genericElements
} from '@support';
import {gender, genericEnum} from '@enum';




export class ZzpGoedBeterBestMethods {


  async enterKvkNumber(company: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.kvkNumberElement, browser.getPageTimeout);
    await genericMethods.typeText(zzpGoedBeterBestElements.kvkNumberElement, companyData.getCompanyKvkNumber(company));
    await browser.sleep(500);
    await genericMethods.clickOnTAB(zzpGoedBeterBestElements.kvkNumberElement);

    // await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }
  async selectCompanyActivity(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasCompanyCarYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryYesElement);
        await genericMethods.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(genericElements.lightBoxClickElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(genericElements.insuranceHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectPersonnelOnPayroll(input: string) {
    await genericMethods.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryYesElement);
        await genericMethods.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(genericElements.lightBoxClickElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasCompanyCar(input: string) {
    await genericMethods.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryYesElement);
        await genericMethods.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(genericElements.lightBoxClickElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryNoElement);
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
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement, 'Beste meneer ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres: ' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      case gender.FEMALE: {
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement, 'Beste mevrouw ' + personaData.getPersonaLastName(input) + ', bedankt voor het afsluiten van deze verzekering. U ontvangt binnen enkele minuten een bevestigingsmail op het volgende e-mail adres:' + personaData.getPersonaEmailAddress(input) + '.');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
