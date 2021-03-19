import {browser} from 'protractor';
import {
  genericMethods,
  mobileHomeElements,
  mobileHomeWithLicensePlate,
  motorcycleElements,
  motorcycleWithLicensePlate,
  mopedElements,
  mopedWithLicensePlate,
  widgetPageElements,
  widgetsParticulierElements,
  reisVerzekeringElements,
  genericElements,
} from '@support';
import {
  familyCompositionEnum,
  typeBoatEnum,
  CaravanEnum,
  fietsEnum,
  licensePlateHmPageEnum,
  zipcodeEnum,
  genericEnum,
  mobilityScooterEnum
} from '@enum';

export class WidgetsParticulierMethods {

  // Annuleringsverzekering
  async selectHousehold(input: string) {
    switch (input) {
      case familyCompositionEnum.EENPERSOONSHUISHOUDEN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.avpWidgetGezinSamenstellingSelectElement,
          widgetsParticulierElements.singleWithoutChildrenSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.EENOUDERGEZIN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.avpWidgetGezinSamenstellingSelectElement,
          widgetsParticulierElements.singleWithChildrenSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.SAMENWONEND: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.avpWidgetGezinSamenstellingSelectElement,
          widgetsParticulierElements.coupleWithoutChildrenSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.GEZIN_MET_KIND: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.avpWidgetGezinSamenstellingSelectElement,
          widgetsParticulierElements.coupleWithChildrenSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkHouseholdSelectedOnStepOne(input: string) {
    switch (input) {
      case familyCompositionEnum.EENPERSOONSHUISHOUDEN: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.singleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithChildrenChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.EENOUDERGEZIN: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.singleWithChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithChildrenChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.SAMENWONEND: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.coupleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithChildrenChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.GEZIN_MET_KIND: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.singleWithChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.coupleWithoutChildrenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.coupleWithChildrenChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // Bootverzekering
  async selectBoat(input: string) {
    switch (input) {
      case typeBoatEnum.MOTORBOOT: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.motorbootSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.ZEILBOOT: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.zeilbootSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.SLOEP: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.sloepSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.RUBBERBOOT: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.rubberbootSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.ROEIBOOT_KANO: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.roeibootKanoSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.SPEEDBOOT: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.speedbootSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      case typeBoatEnum.CATAMARAN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.boatTypeSelectElement,
          widgetsParticulierElements.catamaranSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.boatWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkBoatSelectedOnStepOne(input: string) {
    switch (input) {
      case typeBoatEnum.MOTORBOOT: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.ZEILBOOT: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.SLOEP: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.RUBBERBOOT: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.ROEIBOOT_KANO: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.SPEEDBOOT: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      case typeBoatEnum.CATAMARAN: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.motorbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.zeilbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.sloepChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.rubberbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.roeibootKanoChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.speedbootChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.catamaranChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // bromfiets
  async clickOnMopedButton(input: string, licensePlate: string, zipCode: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.mopedWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.typeTextShadowRoot(widgetPageElements.mopedWidgetZipcodeInputElement, zipCode);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mopedWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.mopedWidgetZipcodeInputElement, zipCode);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mopedWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case zipcodeEnum.NO_ZIPCODE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.mopedWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mopedWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mopedWidgetDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkMopedSelectedOnStepOne(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.WILL: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.verifyTextInElement(mopedElements.mopedInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
        await genericMethods.verifyTextInElement(mopedElements.mopedInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
        await genericMethods.verifyTextInElement(mopedElements.mopedInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
        await genericMethods.verifyTextInElement(mopedElements.mopedInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));
        break;
      }
      case genericEnum.WONT: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(mopedElements.mopedInfoBrandNameElement, browser.getPageTimeout);
        break;
      }

      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // camper
  async clickOnMobileHomeButton(input: string, licensePlate: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.mobileHomeWidgetInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mobileHomeWidgetBerekenUwPremieButton);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mobileHomeWidgetBerekenUwPremieButton);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mobileHomeWidgetDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkMobileHomeSelectedOnStepOne(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.WILL: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.verifyTextInElement(mobileHomeElements.mobileHomeBrandElement, mobileHomeWithLicensePlate.getMobileHomeBrand(licensePlate));
        await genericMethods.verifyTextInElement(mobileHomeElements.mobileHomeModelElement, mobileHomeWithLicensePlate.getMobileHomeModel(licensePlate));
        await genericMethods.verifyTextInElement(mobileHomeElements.mobileHomeYearElement, mobileHomeWithLicensePlate.getMobileHomeConstructionYear(licensePlate));
        break;
      }
      case genericEnum.WONT: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(mobileHomeElements.mobileHomeBrandElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // caravan
  async selectCaravan(input: string) {
    switch (input) {
      case CaravanEnum.TOERCARAVAN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.caravanTypeSelectElement,
          widgetsParticulierElements.toercaravanSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.caravanWidgetBerekenUwPremieButton);
        break;
      }
      case CaravanEnum.VOUWWAGEN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.caravanTypeSelectElement,
          widgetsParticulierElements.vouwwagenSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.caravanWidgetBerekenUwPremieButton);
        break;
      }
      case CaravanEnum.STACARAVAN: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.caravanTypeSelectElement,
          widgetsParticulierElements.stacaravanSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.caravanWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkCaravanSelectedOnStepOne(input: string) {
    switch (input) {
      case CaravanEnum.TOERCARAVAN: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.toercaravanChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.vouwwagenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.stacaravanChecked, browser.getPageTimeout);
        break;
      }
      case CaravanEnum.VOUWWAGEN: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.toercaravanChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.vouwwagenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.stacaravanChecked, browser.getPageTimeout);
        break;
      }
      case CaravanEnum.STACARAVAN: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.toercaravanChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.vouwwagenChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.stacaravanChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // fiets
  async selectBicycle(input: string) {
    switch (input) {
      case fietsEnum.ELEKTRISCHE_FIETS: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.elektrischeFietsSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      case fietsEnum.GEWONE_FIETS: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.gewoneFietsSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      case fietsEnum.RACEFIETS: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.raceFietsSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      case fietsEnum.MOUNTAINBIKE: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.mountainbikeSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      case fietsEnum.LIGFIETS: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.ligFietsSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      case fietsEnum.AANGEPASTE_FIETS: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.bicycleTypeSelectElement, widgetsParticulierElements.aangepasteFietsSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.bicycleWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkBicycleSelectedOnStepOne(input: string) {
    switch (input) {
      case fietsEnum.ELEKTRISCHE_FIETS: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.elektrischeFietsChecked, browser.getPageTimeout);
        break;
      }
      case fietsEnum.GEWONE_FIETS: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.gewoneFietsChecked, browser.getPageTimeout);
        break;
      }
      case fietsEnum.RACEFIETS: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.raceFietsChecked, browser.getPageTimeout);
         break;
      }
      case fietsEnum.MOUNTAINBIKE: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.mountainbikeChecked, browser.getPageTimeout);
        break;
      }
      case fietsEnum.LIGFIETS: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.ligFietsChecked, browser.getPageTimeout);
        break;
      }
      case fietsEnum.AANGEPASTE_FIETS: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.aangepasteFietsChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // auto
  async clickOnAutoVerzekeringButton(licensePlate: string, input: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_BUSINESS: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetBusinessLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessLicensePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_COMPANY_CAR: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetLicencePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.LICENSE_PLATE_PP: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.typeTextShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_BUSINESS: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_COMPANY_CAR: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetLicencePlateButton);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE_PP: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBerekenUwPremieButtonClickElement);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_BUSINESS: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetBusinessDontKnowElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_COMPANY_CAR: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      case licensePlateHmPageEnum.DONT_KNOW_PP: {
        await genericMethods.waitForElementIsVisibleShadowRoot(widgetPageElements.carWidgetLicensePlateInputElement, browser.getPageTimeout);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.carWidgetDontKnowLicensePlateElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // motor
  async clickOnMotorcycleButton(input: string, licensePlate: string, zipCode: string) {
    switch (input) {
      case licensePlateHmPageEnum.LICENSE_PLATE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.motorcycleWidgetInputElement, licensePlate);
        await genericMethods.typeTextShadowRoot(widgetPageElements.motorcycleWidgetZipcodeInputElement, zipCode);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.motorcycleWidgetBerekenUwPremieButton);
        break;
      }
      case licensePlateHmPageEnum.NO_LICENSE_PLATE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.motorcycleWidgetZipcodeInputElement, zipCode);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.motorcycleWidgetBerekenUwPremieButton);
        break;
      }
      case zipcodeEnum.NO_ZIPCODE: {
        await genericMethods.typeTextShadowRoot(widgetPageElements.motorcycleWidgetInputElement, licensePlate);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.motorcycleWidgetBerekenUwPremieButton);
        break;
      }
      case genericEnum.DONT_KNOW: {
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.motorcycleWidgetDontKnowElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkMotorcycleSelectedOnStepOne(input: string, licensePlate: string) {
    switch (input) {
      case genericEnum.WILL: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.verifyTextInElement(motorcycleElements.motorcycleBrandElement, motorcycleWithLicensePlate.getMotorcycleBrandName(licensePlate));
        await genericMethods.verifyTextInElement(motorcycleElements.motorcycleVersionElement, motorcycleWithLicensePlate.getMotorcycleVersion(licensePlate));
        await genericMethods.verifyTextInElement(motorcycleElements.motorcycleYearElement, motorcycleWithLicensePlate.getMotorcycleConstructionYear(licensePlate));
        break;
      }
      case genericEnum.WONT: {
        await genericMethods.waitForElementIsPresent('[class="mainHeader_channelsLink _is_active"][href="https://pat.unive.nl/"]', browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(motorcycleElements.motorcycleBrandElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // rechtsbijstand
  async selectRbv(input: string) {
    switch (input) {
      case familyCompositionEnum.ALLEEN_MIJZELF: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.rechtsbijstandVerzekeringFamilyMemberSelectElement,
          widgetsParticulierElements.AlleenMijzelfSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.rechtsbijstandVerzekeringWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.MIJZELF_EN_PARTNER: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.rechtsbijstandVerzekeringFamilyMemberSelectElement,
          widgetsParticulierElements.MijzelfEnPartnerSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.rechtsbijstandVerzekeringWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.MIJZELF_EN_KIND: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.rechtsbijstandVerzekeringFamilyMemberSelectElement,
          widgetsParticulierElements.MijzelfEnKindSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.rechtsbijstandVerzekeringWidgetBerekenUwPremieButton);
        break;
      }
      case familyCompositionEnum.MIJZELF_PARTNER_EN_KIND: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.rechtsbijstandVerzekeringFamilyMemberSelectElement,
          widgetsParticulierElements.MijzelfPartnerEnKindSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.rechtsbijstandVerzekeringWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkRbvSelectedOnStepOne(input: string) {
    switch (input) {
      case familyCompositionEnum.ALLEEN_MIJZELF: {
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.AlleenMijzelfChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnPartnerChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnKindChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfPartnerEnKindChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.MIJZELF_EN_PARTNER: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.AlleenMijzelfChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.MijzelfEnPartnerChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnKindChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfPartnerEnKindChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.MIJZELF_EN_KIND: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.AlleenMijzelfChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnPartnerChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.MijzelfEnKindChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfPartnerEnKindChecked, browser.getPageTimeout);
        break;
      }
      case familyCompositionEnum.MIJZELF_PARTNER_EN_KIND: {
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.AlleenMijzelfChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnPartnerChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.MijzelfEnKindChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.MijzelfPartnerEnKindChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // Doorlopende Reisverzekering
  async checkFamilyMemberCheckedOnStepOne(input: string) {
    switch (input) {
      case 'Nothing is checked': {
        await genericMethods.verifyTextInElement(reisVerzekeringElements.chooseInsuredPopUpTextElement, 'Kies een verzekerde.');
        break;
      }
      case 'Mijzelf checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn Partner checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn kinderen checked': {
        // await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijzelf, Mijn Partner en Mijn kinderen checked': {
        // await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijn Partner checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijn kinderen checked': {
        // await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijn Partner en Mijn kinderen checked': {
        // await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // Scootmobiel
  async selectMobilityScooter(input: string) {
    switch (input) {
      case mobilityScooterEnum.SCOOTMOBIEL: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.mobilityScooterTypeSelectElement,
          widgetsParticulierElements.scootmobielSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mobilityScooterWidgetBerekenUwPremieButton);
        break;
      }
      case mobilityScooterEnum.INVALIDENVOERTUIG: {
        await genericMethods.selectInDropdownShadowroot(widgetPageElements.mobilityScooterTypeSelectElement,
          widgetsParticulierElements.invalidenVoertuigSelectElement);
        await genericMethods.clickOnElementShadowRoot(widgetPageElements.mobilityScooterWidgetBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkMobilityScooterSelectedOnStepOne(input: string) {
    switch (input) {
      case mobilityScooterEnum.SCOOTMOBIEL: {
        await genericMethods.verifyUrlContainsIgnoreCase('scootmobielSoortScootmobiel=YES');
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.scootmobielChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.invalidenVoertuigChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.hasLicenseplateElementNotVisible, browser.getPageTimeout);
        break;
      }
      case mobilityScooterEnum.INVALIDENVOERTUIG: {
        await genericMethods.verifyUrlContainsIgnoreCase('scootmobielSoortInvalidevoertu=YES');
        await genericMethods.waitForElementNotVisible(widgetsParticulierElements.scootmobielChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.invalidenVoertuigChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(widgetsParticulierElements.hasLicenseplateElementPresent, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}

