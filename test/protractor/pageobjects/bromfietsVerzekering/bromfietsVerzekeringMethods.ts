import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {BromfietsVerzekeringElements} from "./bromfietsVerzekeringElements";
import {MopedWithLicensePlate} from "../verhicles/mopedWithLicensePlate";

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


}
