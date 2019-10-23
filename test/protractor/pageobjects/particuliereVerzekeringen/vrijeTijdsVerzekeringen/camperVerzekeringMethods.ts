import {browser} from "protractor";
import {camperVerzekeringElements, camperWithLicensePlate, genericMethods} from "@support";

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
