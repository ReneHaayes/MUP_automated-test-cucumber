import {browser} from 'protractor';
import {autoVerzekeringElements,
  carWithLicensePlate,
  genericElements,
  genericMethods
} from '@support';
import {
  aanvullendeOptiesEnum,
  basisDekkingEnum, genericEnum,
  ownRiskEnum,
  totalPremieEnum, vehicleAccEnum,
  whoDrivesCarMost,
  yearlyMileageEnum
} from '@enum';

export class AutoVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(autoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
    await genericMethods.typeText(autoVerzekeringElements.licensePlateElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(autoVerzekeringElements.licensePlateElement);
    await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async selectWhoDrivesTheCarTheMost(input: string) {
    switch (input) {
      case whoDrivesCarMost.MYSELF: {
        await genericMethods.clickOnElement(autoVerzekeringElements.mySelf);
        break;
      }
      case whoDrivesCarMost.MYPARTNER: {
        await genericMethods.clickOnElement(autoVerzekeringElements.myPartner);
        break;
      }
      case whoDrivesCarMost.MYCHILD: {
        await genericMethods.clickOnElement(autoVerzekeringElements.myChild);
        break;
      }
      case whoDrivesCarMost.SOMEONEELSE: {
        await genericMethods.clickOnElement(autoVerzekeringElements.someOneElse);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectYearlyMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_12000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYearTot12000km);
        break;
      }
      case yearlyMileageEnum.TUSSEN_12000_EN_20000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear12000tot20000);
        break;
      }
      case yearlyMileageEnum.TUSSEN_20000_EN_25000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear20000tot25000);
        break;
      }
      case yearlyMileageEnum.TUSSEN_25000_EN_35000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear25000tot35000);
        break;
      }
      case yearlyMileageEnum.MORE_THAN_35000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYearMeerDan25000);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectIfYouAlreadyHaveACarAtUnive(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(autoVerzekeringElements.alreadyInsuredCarTrue);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(autoVerzekeringElements.alreadyInsuredCarFalse);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCarAcc(input: string) {
    switch (input) {
      case vehicleAccEnum.CARACC_TM_1000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm1000);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc1000 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.CARACC_TM_5000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm5000);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc5000 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.CARACC_TM_10000: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm10000);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc10000 + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectOwnRisk(input: string) {
    switch (input) {
      case ownRiskEnum.NO_OWN_RISK: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRiskGeenEigenRisico);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarGeenEigenRisico + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_100: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk100);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk100 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_250: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk250);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk250 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_500: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk500);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk500 + '")]', browser.getPageTimeout);
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
        await genericMethods.clickOnElement(autoVerzekeringElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(autoVerzekeringElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(autoVerzekeringElements.allRiskElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnAanvullendeOpties(input: string) {
    switch (input) {
      case aanvullendeOptiesEnum.INZITTENDENVERZEKERING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.inzittendenVerzekering);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarInzittendenVerzekering + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.PECH_HULP_NL: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.PECH_HULP_ABROAD: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
        await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpAbroad);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.PECH_HULP_ABROAD_AND_NL: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
        await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpAbroadAndNl);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.RECHTSHULP_VERKEER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.rechtsHulpVerkeer);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.OWN_CHOICE_DAMAGE_COMPANY: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(autoVerzekeringElements.eigenKeuzeSchadeHerstelBedrijf);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarHerstelBedrijf + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectTotalPremie(input: string) {
    switch (input) {
      case totalPremieEnum.MONTHLY: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.totalPremieSelectionElement, autoVerzekeringElements.totalPremieSelectionMonth);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarTotalPremieMonthly + '")]', browser.getPageTimeout);
        break;
      }
      case totalPremieEnum.ANNUAL: {
        await genericMethods.selectInDropdown(autoVerzekeringElements.totalPremieSelectionElement, autoVerzekeringElements.totalPremieSelectionAnnual);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarTotalPremieAnnual + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
