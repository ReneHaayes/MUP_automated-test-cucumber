import {browser} from 'protractor';
import {
  mobileHomeVerzekeringElements,
  mobileHomeWithLicensePlate,
  genericMethods,
  genericElements
} from '@support';
import {basisDekkingEnum,
  vehicleUsage,
  yearlyMileageEnum,
} from '../../enum/autoVerzekeringEnum';

export class MobileHomeVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(mobileHomeVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(mobileHomeVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.licensePlateInputElement);
    await genericMethods.waitForElementIsVisibleWithXpath(mobileHomeVerzekeringElements.brandNameElementXpath +
      '[contains(text(),"' + mobileHomeWithLicensePlate.getMobileHomeBrand(licensePlate) + '")]', browser.getPageTimeout);
  }

  async clickOnCoverage(input: string) {
    switch (input) {
      case basisDekkingEnum.WA: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.waClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.waPlusClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.allRiskClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnUsage(input: string) {
    switch (input) {
      case vehicleUsage.RECREATIONAL_USEAGE: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.recreationalUseClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case vehicleUsage.DAILY_RECREATIONAL_USEAGE: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.dailyRecreativeUseClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case vehicleUsage.BUSINESS_USEAGE: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.businessUseClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case vehicleUsage.RENTAL_USAGE: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.rentUseClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnYearlyMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_10000: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.upTo10000kmClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case yearlyMileageEnum.TUSSEN_10000_EN_20000: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.between10000and20000kmClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case yearlyMileageEnum.MORE_THAN_20000: {
        await genericMethods.clickOnElement(mobileHomeVerzekeringElements.moreThan20000kmClickElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
