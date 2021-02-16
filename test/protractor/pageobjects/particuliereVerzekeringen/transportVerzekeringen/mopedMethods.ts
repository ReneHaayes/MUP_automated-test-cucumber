import {browser} from 'protractor';

import {
  autoVerzekeringElements,
  genericElements,
  genericMethods,
  mopedElements,
  mopedWithLicensePlate,
  vehicleElements
} from '@support';
import {
  aanvullendeOptiesEnum,
  basisDekkingEnum,
  genericEnum,
  ownRiskEnum,
  vehicleAccEnum,
  mopedTypeEnum
} from '@enum';

export class MopedMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(mopedElements.mopedLicensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(mopedElements.mopedLicensePlateInputElement, licensePlate);
    await genericMethods.clickOnTAB(mopedElements.mopedLicensePlateInputElement);
    await genericMethods.waitForElementIsVisibleWithXpath(vehicleElements.licensePlateBrandNameElementWithXpath + '[contains(text(),"' + mopedWithLicensePlate.getMopedBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async selectKindOfVehicle(input: string) {
    switch (input) {
      case mopedTypeEnum.BROMFIETS: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindBromfietsSelectElement);
        break;
      }
      case mopedTypeEnum.BAKFIETS: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindBakfietsSelectElement);
        break;
      }
      case mopedTypeEnum.BROMMOBIEL: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindBromMobielSelectElement);
        break;
      }
      case mopedTypeEnum.BROMSCOOTER: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindBromscooterSelectElement);
        break;
      }
      case mopedTypeEnum.HIGH_SPEED_BIKE: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindHighSpeedEbikeSelectElement);
        break;
      }
      case mopedTypeEnum.OVERIG: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindOverigSelectElement);
        break;
      }
      case mopedTypeEnum.SNORFIETS: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindSnorfietsElement);
        break;
      }
      case mopedTypeEnum.SNORSCOOTER: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindSnorscooterElement);
        break;
      }
      case mopedTypeEnum.FIETS_MET_HULPMOTOR: {
        await genericMethods.selectInDropdown(mopedElements.vehicleKindSelectElement, mopedElements.vehicleKindFietsMetHulpmotorElement);
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
        await genericMethods.clickOnElement(vehicleElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(vehicleElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(vehicleElements.allRiskElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarAllRisk + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnAanvullendeOpties(input: string) {
    switch (input) {
      case aanvullendeOptiesEnum.PECH_HULP_NL: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.pechHulpNlElement);
        // await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.RECHTSHULP_VERKEER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.rechtsHulpVerkeerElement);
        // await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.ONGEVALLEN_VERZEKERING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.ongevallenVerzekeringElement);
        // await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOngevallenVerzekering + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.AANSCHAFWAARDE_REGELING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.aanschafWaardeRegelingElement);
        // await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarAanschafWaardeRegeling + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectAcc(input: string) {
    switch (input) {
      case vehicleAccEnum.ACC_TM_150: {
        await genericMethods.selectInDropdown(vehicleElements.accElement, vehicleElements.accTm150);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarAcc150 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_250: {
        await genericMethods.selectInDropdown(vehicleElements.accElement, vehicleElements.accTm250);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarAcc250 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_500: {
        await genericMethods.selectInDropdown(vehicleElements.accElement, vehicleElements.accTm500);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarAcc500 + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectOwnRisk(input: string) {
    switch (input) {
      case ownRiskEnum.OWN_RISK_100: {
        await genericMethods.selectInDropdown(vehicleElements.ownRiskElement, autoVerzekeringElements.ownRisk100);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOwnRisk100 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_250: {
        await genericMethods.selectInDropdown(vehicleElements.ownRiskElement, autoVerzekeringElements.ownRisk250);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOwnRisk250 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_500: {
        await genericMethods.selectInDropdown(vehicleElements.ownRiskElement, autoVerzekeringElements.ownRisk500);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOwnRisk500 + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickKindOfInsurance(input: string) {
    switch (input) {
      case genericEnum.NEW: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.newMopedElement);
        break;
      }
      case genericEnum.REPLACEMENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.replacementMopedElement);
        break;
      }
      case genericEnum.EXTRA: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.extraMopedElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnDamageFreeYearsOfDifferentCompany(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.damageFreeYearsDifferentCompanyYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.damageFreeYearsDifferentCompanyNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMainDriver(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.mainDriverYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.mainDriverNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOwner(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.ownerYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(vehicleElements.ownerNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
