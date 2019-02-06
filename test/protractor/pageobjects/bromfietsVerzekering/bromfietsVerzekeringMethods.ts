import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {BromfietsVerzekeringElements} from "./bromfietsVerzekeringElements";
import {MopedWithLicensePlate} from "../verhicles/mopedWithLicensePlate";
import {vehicleKindEnum} from "../enum/bromfietsVerzekeringEnum";
import {aanvullendeOptiesEnum, basisDekkingEnum, ownRiskEnum, vehicleAccEnum} from "../enum/autoVerzekeringEnum";
import {GenericElements} from "../generic/genericElements";
import {AutoVerzekeringElements} from "../autoVerzekering/autoVerzekeringElements";

let genericMethods: GenericMethods = new GenericMethods();
let bromfietsVerzekeringElements: BromfietsVerzekeringElements = new BromfietsVerzekeringElements();
let mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();

export class BromfietsVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(bromfietsVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(bromfietsVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(bromfietsVerzekeringElements.licensePlateInputElement);
    await genericMethods.waitForElementIsVisibleWithXpath(bromfietsVerzekeringElements.licensePlateBrandNameElementWithXpath + '[contains(text(),"' + mopedWithLicensePlate.getMopedBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async selectKindOfVehicle(input: string) {
    switch (input) {
      case vehicleKindEnum.BROMFIETS: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindBromfietsSelectElement);
        break;
      }
      case vehicleKindEnum.BAKFIETS: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindBakfietsSelectElement);
        break;
      }
      case vehicleKindEnum.BROMMOBIEL: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindBromMobielSelectElement);
        break;
      }
      case vehicleKindEnum.BROMSCOOTER: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindBromscooterSelectElement);
        break;
      }
      case vehicleKindEnum.HIGH_SPEED_BIKE: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindHighSpeedEbikeSelectElement);
        break;
      }
      case vehicleKindEnum.OVERIG: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindOverigSelectElement);
        break;
      }
      case vehicleKindEnum.QUAD: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindQuadSelectElement);
        break;
      }
      case vehicleKindEnum.TRIKE: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.vehicleKindSelectElement, bromfietsVerzekeringElements.vehicleKindTrikeSelectElement);
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
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.allRiskElement);
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
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.pechHulpNlElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.RECHTSHULP_VERKEER: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.rechtsHulpVerkeerElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.ONGEVALLEN_VERZEKERING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.ongevallenVerzekeringElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarOngevallenVerzkering + '")]', browser.getPageTimeout);
        break;
      }
      case aanvullendeOptiesEnum.AANSCHAFWAARDE_REGELING: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(bromfietsVerzekeringElements.aanschafWaardeRegelingElement);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarAanschafWaardeRegeling + '")]', browser.getPageTimeout);
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
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.accElement, bromfietsVerzekeringElements.accTm150);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarAcc150 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_250: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.accElement, bromfietsVerzekeringElements.accTm250);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarAcc250 + '")]', browser.getPageTimeout);
        break;
      }
      case vehicleAccEnum.ACC_TM_500: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.accElement, bromfietsVerzekeringElements.accTm500);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarAcc500 + '")]', browser.getPageTimeout);
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
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk100);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarOwnRisk100 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_250: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk250);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarOwnRisk250 + '")]', browser.getPageTimeout);
        break;
      }
      case ownRiskEnum.OWN_RISK_500: {
        await genericMethods.selectInDropdown(bromfietsVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk500);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + bromfietsVerzekeringElements.sideBarOwnRisk500 + '")]', browser.getPageTimeout);
        await console.log("ebeng");
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
