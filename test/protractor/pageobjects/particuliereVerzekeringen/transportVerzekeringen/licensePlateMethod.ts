import {
  autoVerzekeringElements,
  bedrijfsAutoVerzekeringElements,
  businessCarWithLicensePlate,
  carWithLicensePlate,
  genericMethods,
  hmPageElements
} from "@support";
import {genericEnum, licensePlateHmPageEnum} from "@enum";

export class LicensePlateMethod {

  async clickOnAutoVerzekeringButton(input: string, licensePlate: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.typeText(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_PP: {
        await genericMethods.typeText(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonProductPageElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_PP: {
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetButtonProductPageElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetDontKnowElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_PP: {
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetDontKnowProductPageElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_BUS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsAutoverzekeringClickElement);
        await genericMethods.typeText(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetBusinessButtonElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_BUS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsAutoverzekeringClickElement);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetBusinessButtonElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_BUSINESS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsAutoverzekeringClickElement);
        await genericMethods.clickOnElement(hmPageElements.licensePlateWidgetDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkAutoverzekeringPage(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.DO: {
        await genericMethods.verifyTextInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.typeElement, carWithLicensePlate.getCarBrandType(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.constructionYearElement, carWithLicensePlate.getCarConstructionYear(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.modelElement, carWithLicensePlate.getCarModel(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.bodyTypeElement, carWithLicensePlate.getCarBodyType(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.fuelTypeElement, carWithLicensePlate.getCarFuelType(licensePlate));
        break;
      }
      case genericEnum.DONT: {
        await genericMethods.verifyTextNotInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate), autoVerzekeringElements.licensePlateElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkBedrijfsAutoverzekeringPage(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.DO: {
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.brandNameElement, businessCarWithLicensePlate.getCarBrandName(licensePlate));
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.brandModelElement, businessCarWithLicensePlate.getCarBrandType(licensePlate));
        break;
      }
      case genericEnum.DONT: {
        await genericMethods.verifyTextNotInElement(bedrijfsAutoVerzekeringElements.brandNameElement, businessCarWithLicensePlate.getCarBrandName(licensePlate), bedrijfsAutoVerzekeringElements.licensePlateElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
