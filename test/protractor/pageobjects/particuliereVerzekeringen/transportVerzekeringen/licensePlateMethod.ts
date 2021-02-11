import {
  autoVerzekeringElements,
  bedrijfsAutoVerzekeringElements,
  businessCarWithLicensePlate,
  carWithLicensePlate,
  companyCarWithLicensePlate,
  genericMethods,
  hmPageElements,
  widgetPageElements
} from '@support';
import {
  genericEnum,
  licensePlateHmPageEnum
} from '@enum';
import {browser} from 'protractor';

export class LicensePlateMethod {

  async clickOnAutoVerzekeringButton(input: string, licensePlate: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_BUSINESS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetBusinessLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessLicensePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_COMPANY_CAR: {
        await genericMethods.clickOnElement(hmPageElements.homePageCompanyCarClickElement);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetLicencePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_PP: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_BUSINESS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_COMPANY_CAR: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetLicencePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_PP: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_BUSINESS: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessDontKnowElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_COMPANY_CAR: {
        await genericMethods.clickOnElement(hmPageElements.homePageCompanyCarClickElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_PP: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkAutoverzekeringPage(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.WILL: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.verifyTextInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.typeElement, carWithLicensePlate.getCarBrandType(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.constructionYearElement, carWithLicensePlate.getCarConstructionYear(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.modelElement, carWithLicensePlate.getCarModel(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.bodyTypeElement, carWithLicensePlate.getCarBodyType(licensePlate));
        await genericMethods.verifyTextInElement(autoVerzekeringElements.fuelTypeElement, carWithLicensePlate.getCarFuelType(licensePlate));
        break;
      }
      case genericEnum.WONT: {
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
      case genericEnum.WILL: {
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.brandNameElement, businessCarWithLicensePlate.getCarBrandName(licensePlate));
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.brandModelElement, businessCarWithLicensePlate.getCarBrandType(licensePlate));
        break;
      }
      case genericEnum.WONT: {
        await genericMethods.verifyValueTextInElement('#_Form_IF20009_3611', '');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkZakelijkeAutoverzekeringPage(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.WILL: {
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.companyCarBrandNameElement, companyCarWithLicensePlate.getCarBrandName(licensePlate));
        await genericMethods.verifyTextInElement(bedrijfsAutoVerzekeringElements.companyCarBrandModelElement, companyCarWithLicensePlate.getCarBrandType(licensePlate));
        break;
      }
      case genericEnum.WONT: {
        await genericMethods.verifyValueTextInElement('#_Form_IF2506_3611', '');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
