import {
  eigenVervoerVerzekeringElements,
  // genericElements,
  genericMethods
} from '@support';
import {
  activityEnum, genericEnum,
  vehicleInfoEnum
} from '@enum';
import {browser} from 'protractor';


export class EigenVervoerVerzekeringMethods {

  async selectActivity(input: string) {
    switch (input) {
      case activityEnum.ADVIESBUREAU: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectAdviesbureauElement);
        break;
      }
      case activityEnum.ADVIESBUREAU_ICT: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectAdviesbureauIctElement);
        break;
      }
      case activityEnum.BEDRIJFSOPLEIDING: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectBedrijfsOpleidingEnTrainingElement);
        break;
      }
      case activityEnum.BEMIDDELING: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectBemiddelingElement);
        break;
      }
      case activityEnum.FOTOGRAAF: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectFotograafElement);
        break;
      }
      case activityEnum.GLAZENWASSER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectGlazenwasserElement);
        break;
      }
      case activityEnum.HOVENIER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectHovenierElement);
        break;
      }
      case activityEnum.KAPPER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectKapperElement);
        break;
      }
      case activityEnum.KLUSSENBEDRIJF: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectKlussenbedrijfElement);
        break;
      }
      case activityEnum.ORGANISATIE_ADVIESBUREAU: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectOrganisatieAdviesbureauElement);
        break;
      }
      case activityEnum.OVERIG: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectOverigElement);
        break;
      }
      case activityEnum.PEDICURE: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectPedicureElement);
        break;
      }
      case activityEnum.RECLAMEBUREAU: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectReclamebureauElement);
        break;
      }
      case activityEnum.SCHILDER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectSchilderElement);
        break;
      }
      case activityEnum.SCHOONHEIDSSPECIALIST: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectSchoonheidsSpecialistElement);
        break;
      }
      case activityEnum.SCHOONMAKER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectSchoonmakerElement);
        break;
      }
      case activityEnum.SOFTWAREBEDRIJF: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectSoftwarebedrijfElement);
        break;
      }
      case activityEnum.STRATENMAKER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectStratenmakerElement);
        break;
      }
      case activityEnum.STUKADOOR: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectStukadoorElement);
        break;
      }
      case activityEnum.TEGELZETTER: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectTegelzetterElement);
        break;
      }
      case activityEnum.TIMMERMAN: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectTimmermanElement);
        break;
      }
      case activityEnum.WEBDESIGN: {
        await genericMethods.selectInDropdown(eigenVervoerVerzekeringElements.activityEigenVervoerSelectElement, eigenVervoerVerzekeringElements.activitySelectWebdesignElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectVehicleInfo(input: string, howMany: string) {
    switch (input) {
      case vehicleInfoEnum.PASSENGER_CAR: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoPassengerCarClickElement);
        await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.vehicleInfoPassengerCarTypeElement, browser.getPageTimeout);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoPassengerCarTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.DELIVERY_VAN: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoDeliveryVanClickElement);
        await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.vehicleInfoDeliveryVanClickElement, browser.getPageTimeout);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoDeliveryVanTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.LORRY: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoLorryClickElement);
        await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.vehicleInfoLorryClickElement, browser.getPageTimeout);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoLorryTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.TRAILER: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoTrailersClickElement);
        await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.vehicleInfoTrailersClickElement, browser.getPageTimeout);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoTrailersTypeElement, howMany);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  async selectCorrectCompanyActivity(input: string) {  // aangepast
    await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.kvkActivityCheckElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.correctActivityYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.correctActivityNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasEmployees(input: string) {
    await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.kvkActivityCheckElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.hasEmployeeYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.hasEmployeeNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


}
