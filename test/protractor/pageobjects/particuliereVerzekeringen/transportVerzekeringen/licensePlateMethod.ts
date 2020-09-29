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
        await genericMethods.typeTextShadowRoot(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_PP: {
        await genericMethods.typeTextShadowRoot(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_PP: {
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetDontKnowElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_PP: {
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetDontKnowElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_BUS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.typeTextShadowRoot(hmPageElements.licensePlateWidgetInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_BUS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetButtonElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_BUSINESS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.licensePlateWidgetDontKnowElement);
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
        await genericMethods.verifyValueTextInElement('#_Form_IF20009_3611', '');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
