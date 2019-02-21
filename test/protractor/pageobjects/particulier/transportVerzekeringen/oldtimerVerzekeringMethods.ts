import {browser} from "protractor";
import {GenericMethods} from "../../generic/genericMethods";
import {OldtimerVerzekeringElements} from "./oldtimerVerzekeringElements";
import {CarWithLicensePlate} from "../../vehicles/carWithLicensePlate";

let genericMethods: GenericMethods = new GenericMethods();

let oldtimerVerzekeringElements: OldtimerVerzekeringElements = new OldtimerVerzekeringElements();
let carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();

export class OldtimerVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(oldtimerVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(oldtimerVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(oldtimerVerzekeringElements.licensePlateInputElement);
    await genericMethods.verifyValueTextInElement(oldtimerVerzekeringElements.brandNameInputElement, carWithLicensePlate.getCarBrandName(licensePlate));
  }

}
