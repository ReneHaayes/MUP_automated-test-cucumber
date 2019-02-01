import {licensePlateHmPageEnum} from "../enum/licensePlateEnum";
import {GenericMethods} from "../generic/genericMethods";
import {HmPageElements} from "../generic/hmPageElements";
import {yesNo} from "../enum/genericEnum";
import {AutoVerzekeringElements} from "./autoVerzekeringElements";
import {CarWithLicensePlate} from "../car/carWithLicensePlate";

let genericMethods: GenericMethods = new GenericMethods();
let hmPageElements: HmPageElements = new HmPageElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();

export class LicensePlateMethod {

  async clickOnAutoVerzekeringButton(input: string, licensePlate: string) {
    if (input === licensePlateHmPageEnum.LICENSE_PLATE) {
      await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
      await genericMethods.typeText(hmPageElements.licensePlateWidgetInputElement, licensePlate);
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonElement);
    } else if (input === licensePlateHmPageEnum.LICENSE_PLATE_PP) {
      await genericMethods.typeText(hmPageElements.licensePlateWidgetInputElement, licensePlate);
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonProductPageElement);
    } else if (input === licensePlateHmPageEnum.NO_LICENSE_PLATE) {
      await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonElement);
    } else if (input === licensePlateHmPageEnum.NO_LICENSE_PLATE_PP) {
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonProductPageElement);
    } else if (input === yesNo.DONT_KNOW) {
      await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetDontKnowElement);
    } else if (input === licensePlateHmPageEnum.DONT_KNOW_PP) {
      await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetDontKnowProductPageElement);
    } else {
      throw new Error('The input you have entered clickOnAutoVerzekeringButton: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async checkAutoverzekeringPage(input: string, licensePlate: string) {
    if (input === yesNo.DO) {
      await genericMethods.verifyTextInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate));
      await genericMethods.verifyTextInElement(autoVerzekeringElements.typeElement, carWithLicensePlate.getCarBrandType(licensePlate));
      await genericMethods.verifyTextInElement(autoVerzekeringElements.constructionYearElement, carWithLicensePlate.getCarConstructionYear(licensePlate));
      await genericMethods.verifyTextInElement(autoVerzekeringElements.modelElement, carWithLicensePlate.getCarModel(licensePlate));
      await genericMethods.verifyTextInElement(autoVerzekeringElements.bodyTypeElement, carWithLicensePlate.getCarBodyType(licensePlate));
      await genericMethods.verifyTextInElement(autoVerzekeringElements.fuelTypeElement, carWithLicensePlate.getCarFuelType(licensePlate));
    } else if (input === yesNo.DONT) {
      await genericMethods.verifyTextNotInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate), autoVerzekeringElements.licensePlateElement);
    } else {
      throw new Error('The input you have entered checkAutoverzekeringPage: "" ' + input + ' "" is not recognized as a command');
    }
  }
}
