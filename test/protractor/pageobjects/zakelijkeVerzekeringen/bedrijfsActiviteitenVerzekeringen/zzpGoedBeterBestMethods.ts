import {browser} from 'protractor';

import {
  genericMethods,
  personaData,
  companyData,
  zzpGoedBeterBestElements,
} from '@support';
import {gender,
  genericEnum,
  yearlyMileageEnum
} from '@enum';

export class ZzpGoedBeterBestMethods {

  // PAGE_1
  async enterKvkNumber(company: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.kvkNumberElement, browser.getPageTimeout);
    await genericMethods.typeText(zzpGoedBeterBestElements.kvkNumberElement, companyData.getCompanyKvkNumber(company));
    await browser.sleep(500);
    await genericMethods.clickOnTAB(zzpGoedBeterBestElements.kvkNumberElement);
    // await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async selectCompanyActivity(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.companyActivityCorrectYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.companyActivityCorrectYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.companyActivityCorrectNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasEmployees(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.employeesOnPayrollYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.employeesOnPayrollYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.employeesOnPayrollNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasCompanyCar(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasCompanyCarYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasCompanyCarYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasCompanyCarNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasInventoryOnOtherAdress(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasInventoryOnOtherAdressYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasInventoryOnOtherAdressYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasInventoryOnOtherAdressNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_12000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileageBelow12000Element);
        break;
      }
      case yearlyMileageEnum._12000_TOT_20000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage12000To20000Element);
        break;
      }
      case yearlyMileageEnum._20000_TOT_25000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage20000To25000Element);
        break;
      }
      case yearlyMileageEnum._25000_TOT_35000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage25000To35000Element);
        break;
      }
      case yearlyMileageEnum.MORE_THEN_35000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileageAbove35000Element);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // PAGE_2
  async selectGoedBeterBest(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.GOED: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.goedElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
                break;
      }
      case genericEnum.BETER: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.beterElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
        break;
      }
      case genericEnum.BEST: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.bestElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // PAGE 3
  // MAAK ENUM VOOR ZZP PAKKET
  // MAAK VAN DEZE SWITCH EENTJE MET ALLE OPTIES OP STAP 3
  // async selectAdditionalInsurances(input: string) {
  //   await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
  //   switch (input) {
  //     case genericEnum.GOED: {      // maak ENUM voor ZZP PAKKET
  //       await genericMethods.clickOnElement(zzpGoedBeterBestElements.goedElement);
  //       break;
  //     }
  //     case genericEnum.BETER: {
  //       await genericMethods.clickOnElement(zzpGoedBeterBestElements.beterElement);
  //       break;
  //     }
  //     case genericEnum.BEST: {
  //       await genericMethods.clickOnElement(zzpGoedBeterBestElements.bestElement);
  //       break;
  //     }
  //     default: {
  //       throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
  //     }
  //   }
  // }

  // PAGE 4

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
