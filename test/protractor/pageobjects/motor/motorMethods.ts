import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {MotorElements} from "./motorElements";
import {licensePlates} from "../enum/licensePlateEnum";
import {MotorWithLicensePlate} from "../vehicles/motorWithLicensePlate";
import {genericEnum} from "../enum/genericEnum";
import {alarmSystemEnum} from "../enum/motorEnum";
import {aanvullendeOptiesEnum, basisDekkingEnum, vehicleAccEnum} from "../enum/autoVerzekeringEnum";
import {GenericElements} from "../generic/genericElements";
import {AutoVerzekeringElements} from "../autoVerzekering/autoVerzekeringElements";
import {VehicleElements} from "../generic/vehicleElements";
import {vehicleKindEnum} from "../enum/bromfietsVerzekeringEnum";

let genericMethods: GenericMethods = new GenericMethods();
let motorElements: MotorElements = new MotorElements();
let motorWithLicensePlate: MotorWithLicensePlate = new MotorWithLicensePlate();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let vehicleElements: VehicleElements = new VehicleElements();

export class MotorMethods {

  async enterLicensePlate(input: string) {
    switch (input) {
      case licensePlates._MPTT99: {
        await genericMethods.typeText(motorElements.licensePlateMotorInputElement, input);
        await browser.sleep(500);
        await genericMethods.clickOnTAB(motorElements.licensePlateMotorInputElement);
        // await genericMethods.waitForElementIsVisibleWithXpath(vehicleElements.licensePlateBrandNameElementWithXpath + '[contains(text(),"' + mopedWithLicensePlate.getMopedBrandName(licensePlate) + '")]', browser.getPageTimeout);
        break;
      }
      case licensePlates._97XFTK: {
        await genericMethods.typeText(motorElements.licensePlateQuadTrikeInputElement, input);
        await browser.sleep(500);
        await genericMethods.clickOnTAB(motorElements.licensePlateQuadTrikeInputElement);
        await genericMethods.typeText(motorElements.consumerPriceInputElement, motorWithLicensePlate.getMotorPrice(input));
        await genericMethods.clickOnElement(motorElements.selectQuadElement);
        break;
      }
      case licensePlates._21PLN1: {
        await genericMethods.typeText(motorElements.licensePlateQuadTrikeInputElement, input);
        await browser.sleep(500);
        await genericMethods.clickOnTAB(motorElements.licensePlateQuadTrikeInputElement);
        await genericMethods.typeText(motorElements.consumerPriceInputElement, motorWithLicensePlate.getMotorPrice(input));
        await genericMethods.clickOnElement(motorElements.selectTrikeElement);
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
        await genericMethods.clickOnElement(motorElements.clickNewElement);
        break;
      }
      case genericEnum.SECONDHAND: {
        await genericMethods.clickOnElement(motorElements.clickSecondHandElement);
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
        await genericMethods.clickOnElement(motorElements.noAlarmSystemElement);
        break;
      }
      case alarmSystemEnum.STARTONDERBREKER: {
        await genericMethods.clickOnElement(motorElements.startOnderbrekerAlarmSystemElement);
        break;
      }
      case alarmSystemEnum.SCM_CERTIFIED: {
        await genericMethods.clickOnElement(motorElements.scmCertifiedAlarmSystemElement);
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
        await genericMethods.clickOnElement(motorElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(motorElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(motorElements.allRiskElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarAllRisk + '")]', browser.getPageTimeout);
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
        await genericMethods.clickOnElement(motorElements.pechHulpNlElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.RECHTSHULP_VERKEER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.rechtsHulpVerkeerElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.ONGEVALLEN_VERZEKERING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.ongevallenVerzekeringElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + vehicleElements.sideBarOngevallenVerzekering + '")]', browser.getPageTimeout);
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
        await genericMethods.selectInDropdown(motorElements.expandAccElement, motorElements.expandAccTm500Element);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + motorElements.sideBarAcc500 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_1500: {
        await genericMethods.selectInDropdown(motorElements.expandAccElement, motorElements.expandAccTm1500Element);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + motorElements.sideBarAcc1500 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_2500: {
        await genericMethods.selectInDropdown(motorElements.expandAccElement, motorElements.expandAccTm2500Element);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + motorElements.sideBarAcc2500 + '")]', browser.getPageTimeout);
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
        await genericMethods.clickOnElement(motorElements.newMopedElement);
        break;
      }
      case genericEnum.REPLACEMENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.replacementMopedElement);
        break;
      }
      case genericEnum.EXTRA: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.extraMopedElement);
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
        await genericMethods.clickOnElement(motorElements.mainDriverYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.mainDriverNoElement);
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
        await genericMethods.clickOnElement(motorElements.ownerYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(motorElements.ownerNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async additionalDataVehicle(licensePlate: string) {
    if (motorWithLicensePlate.getMotorModel(licensePlate) === vehicleKindEnum.TRIKE) {
      await genericMethods.clickOnElement(motorElements.rebuildTrikeNoElement);
    }
  }


}
