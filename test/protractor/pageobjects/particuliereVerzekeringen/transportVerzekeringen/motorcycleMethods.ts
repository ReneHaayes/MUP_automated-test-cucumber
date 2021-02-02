import {browser} from 'protractor';
import {
  autoVerzekeringElements,
  genericElements,
  genericMethods,
  motorcycleElements,
  motorcycleWithLicensePlate,
  vehicleElements
} from '@support';
import {
  aanvullendeOptiesEnum,
  alarmSystemEnum,
  basisDekkingEnum,
  genericEnum,
  licensePlates,
  motorcycleTypeEnum,
  vehicleAccEnum,
} from '@enum';


export class MotorcycleMethods {

  async enterLicensePlate(input: string) {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        await genericMethods.waitForElementClickable(motorcycleElements.licensePlateMotorInputElement, browser.getPageTimeout);
        await genericMethods.typeText(motorcycleElements.licensePlateMotorInputElement, input);
        await genericMethods.clickOnTAB(motorcycleElements.licensePlateMotorInputElement);
        break;
      }
      case licensePlates.QUAD_97XFTK: {
        await genericMethods.waitForElementClickable(motorcycleElements.licensePlateQuadInputElement, browser.getPageTimeout);
        await genericMethods.typeText(motorcycleElements.licensePlateQuadInputElement, input);
        await genericMethods.clickOnTAB(motorcycleElements.licensePlateQuadInputElement);
        await genericMethods.typeText(motorcycleElements.quadVersionElement, motorcycleWithLicensePlate.getMotorcycleVersion(input));
        await genericMethods.typeText(motorcycleElements.consumerPriceInputElement, motorcycleWithLicensePlate.getMotorcyclePrice(input));
        await genericMethods.clickOnElement(motorcycleElements.selectQuadElement);
        break;
      }
      case licensePlates.TRIKE_21PLN1: {
        await genericMethods.waitForElementClickable(motorcycleElements.licensePlateTrikeInputElement, browser.getPageTimeout);
        await genericMethods.typeText(motorcycleElements.licensePlateTrikeInputElement, input);
        await genericMethods.clickOnTAB(motorcycleElements.licensePlateTrikeInputElement);
        await genericMethods.typeText(motorcycleElements.trikeVersionElement, motorcycleWithLicensePlate.getMotorcycleVersion(input));
        await genericMethods.typeText(motorcycleElements.consumerPriceInputElement, motorcycleWithLicensePlate.getMotorcyclePrice(input));
        await genericMethods.clickOnElement(motorcycleElements.selectTrikeElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickNewOrSecondHandMotor(input: string) {
    switch (input) {
      case genericEnum.NEW: {
        await genericMethods.clickOnElement(motorcycleElements.clickNewElement);
        break;
      }
      case genericEnum.SECONDHAND: {
        await genericMethods.clickOnElement(motorcycleElements.clickSecondHandElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickAlarmSystem(input: string) {
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(motorcycleElements.noAlarmSystemElement);
        break;
      }
      case alarmSystemEnum.STARTONDERBREKER: {
        await genericMethods.clickOnElement(motorcycleElements.startOnderbrekerAlarmSystemElement);
        break;
      }
      case alarmSystemEnum.SCM_CERTIFIED: {
        await genericMethods.clickOnElement(motorcycleElements.scmCertifiedAlarmSystemElement);
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
        await genericMethods.clickOnElement(motorcycleElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(motorcycleElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(motorcycleElements.allRiskElement);
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
        await genericMethods.clickOnElement(motorcycleElements.pechHulpNlElement);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.RECHTSHULP_VERKEER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.rechtsHulpVerkeerElement);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.ONGEVALLEN_VERZEKERING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.ongevallenVerzekeringElement);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOngevallenVerzekering + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectAcc(input: string) {
    switch (input) {
      case vehicleAccEnum.ACC_TM_500: {
        await genericMethods.selectInDropdown(motorcycleElements.expandAccElement, motorcycleElements.expandAccTm500Element);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + motorcycleElements.sideBarAcc500 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_1500: {
        await genericMethods.selectInDropdown(motorcycleElements.expandAccElement, motorcycleElements.expandAccTm1500Element);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + motorcycleElements.sideBarAcc1500 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_2500: {
        await genericMethods.selectInDropdown(motorcycleElements.expandAccElement, motorcycleElements.expandAccTm2500Element);
        await genericMethods.waitForElementIsPresentWithXpath(genericElements.sideBarElement + '[contains(text(),"' + motorcycleElements.sideBarAcc2500 + '")]', browser.getPageTimeout);
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
        await genericMethods.clickOnElement(motorcycleElements.newElement);
        break;
      }
      case genericEnum.REPLACEMENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.replacementElement);
        break;
      }
      case genericEnum.EXTRA: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.extraElement);
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
        await genericMethods.clickOnElement(motorcycleElements.mainDriverYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.mainDriverNoElement);
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
        await genericMethods.clickOnElement(motorcycleElements.ownerYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorcycleElements.ownerNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async additionalDataVehicle(licensePlate: string) {
    if (motorcycleWithLicensePlate.getMotorcycleModel(licensePlate) === motorcycleTypeEnum.TRIKE) {
      await genericMethods.clickOnElement(motorcycleElements.rebuildTrikeNoElement);
    }
  }


}
