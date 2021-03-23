import {browser} from 'protractor';
import {
  bedrijfsAutoVerzekeringElements, businessCarWithLicensePlate, genericElements, genericMethods
} from '@support';
import {basisDekkingEnum, yearlyMileageEnum} from '@enum';

export class BedrijfsAutoVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(bedrijfsAutoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
    await genericMethods.typeText(bedrijfsAutoVerzekeringElements.licensePlateElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(bedrijfsAutoVerzekeringElements.licensePlateElement);
    await genericMethods.waitForElementIsVisibleWithXpath(bedrijfsAutoVerzekeringElements.brandElementXpath + '[contains(text(),"' + businessCarWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async clickOnYearlyMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_12000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileageTot12000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_12000_EN_20000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage12000tot20000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_20000_EN_25000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage20000tot25000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_25000_EN_35000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage25000tot35000Element);
        break;
      }
      case yearlyMileageEnum.MORE_THAN_35000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileageMoreThen35000Element);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnBasisDekking(input: string) {
    switch (input) {
      case basisDekkingEnum.WA: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.allRiskElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + bedrijfsAutoVerzekeringElements.sideBarAllRisk + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
