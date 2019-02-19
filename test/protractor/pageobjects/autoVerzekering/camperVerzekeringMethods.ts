import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {CamperVerzekeringElements} from "./camperVerzekeringElements";
import {CamperWithLicensePlate} from "../vehicles/camperWithLicensePlate";

let genericMethods: GenericMethods = new GenericMethods();
let camperVerzekeringElements: CamperVerzekeringElements = new CamperVerzekeringElements();
let camperWithLicensePlate: CamperWithLicensePlate = new CamperWithLicensePlate();

export class CamperVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(camperVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(camperVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(camperVerzekeringElements.licensePlateInputElement);
    await genericMethods.waitForElementIsVisibleWithXpath(camperVerzekeringElements.brandNameElementXpath +
      '[contains(text(),"' + camperWithLicensePlate.getCamperBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }



}
