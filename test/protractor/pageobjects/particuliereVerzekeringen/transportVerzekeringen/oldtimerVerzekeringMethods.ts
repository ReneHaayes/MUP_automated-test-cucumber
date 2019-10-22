import {browser} from "protractor";
import {carWithLicensePlate, genericMethods, oldtimerVerzekeringElements} from "@support";

export class OldtimerVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(oldtimerVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(oldtimerVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(oldtimerVerzekeringElements.licensePlateInputElement);
    await genericMethods.verifyValueTextInElement(oldtimerVerzekeringElements.brandNameInputElement, carWithLicensePlate.getCarBrandName(licensePlate));
  }

}
