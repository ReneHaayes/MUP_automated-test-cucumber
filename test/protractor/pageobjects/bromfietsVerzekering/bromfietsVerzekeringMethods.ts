import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {BromfietsVerzekeringElements} from "./bromfietsVerzekeringElements";
import {MopedWithLicensePlate} from "../verhicles/mopedWithLicensePlate";
import {vehicleKindEnum} from "../enum/bromfietsVerzekeringEnum";

let genericMethods: GenericMethods = new GenericMethods();
let bromfietsVerzekeringElements: BromfietsVerzekeringElements = new BromfietsVerzekeringElements();
let mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();

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


}
