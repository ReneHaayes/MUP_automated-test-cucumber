import {activityEnum} from "../../enum/genericEnum";
import {vehicleInfoEnum} from "../../enum/autoVerzekeringEnum";
import {eigenVervoerVerzekeringElements, genericMethods} from "../../../support";


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
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoPassengerCarTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.VANS: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoVansClickElement);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoVansTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.TRUCKS: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoTrucksClickElement);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoTrucksTypeElement, howMany);
        break;
      }
      case vehicleInfoEnum.TRAILER: {
        await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.vehicleInfoTrailersClickElement);
        await genericMethods.typeText(eigenVervoerVerzekeringElements.vehicleInfoTrailersTypeElement, howMany);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


}
