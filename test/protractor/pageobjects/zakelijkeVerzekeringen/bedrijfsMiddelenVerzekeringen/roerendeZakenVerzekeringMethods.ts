import {genericMethods, roerendeZakenVerzekeringElements} from "@support";
import {activityEnum} from "@enum";

export class RoerendeZakenVerzekeringMethods {

  async selectActivity(input: string) {
    switch (input) {
      case activityEnum.ADVIESBUREAU: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectAdviesbureauElement);
        break;
      }
      case activityEnum.ADVIESBUREAU_ICT: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectAdviesbureauIctElement);
        break;
      }
      case activityEnum.BEDRIJFSOPLEIDING: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectBedrijfsOpleidingEnTrainingElement);
        break;
      }
      case activityEnum.BEMIDDELING: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectBemiddelingElement);
        break;
      }
      case activityEnum.FOTOGRAAF: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectFotograafElement);
        break;
      }
      case activityEnum.GLAZENWASSER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectGlazenwasserElement);
        break;
      }
      case activityEnum.HOVENIER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectHovenierElement);
        break;
      }
      case activityEnum.KAPPER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectKapperElement);
        break;
      }
      case activityEnum.KLUSSENBEDRIJF: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectKlussenbedrijfElement);
        break;
      }
      case activityEnum.ORGANISATIE_ADVIESBUREAU: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectOrganisatieAdviesbureauElement);
        break;
      }
      case activityEnum.OVERIG: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectOverigElement);
        break;
      }
      case activityEnum.PEDICURE: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectPedicureElement);
        break;
      }
      case activityEnum.RECLAMEBUREAU: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectReclamebureauElement);
        break;
      }
      case activityEnum.SCHILDER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectSchilderElement);
        break;
      }
      case activityEnum.SCHOONHEIDSSPECIALIST: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectSchoonheidsSpecialistElement);
        break;
      }
      case activityEnum.SCHOONMAKER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectSchoonmakerElement);
        break;
      }
      case activityEnum.SOFTWAREBEDRIJF: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectSoftwarebedrijfElement);
        break;
      }
      case activityEnum.STRATENMAKER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectStratenmakerElement);
        break;
      }
      case activityEnum.STUKADOOR: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectStukadoorElement);
        break;
      }
      case activityEnum.TEGELZETTER: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectTegelzetterElement);
        break;
      }
      case activityEnum.TIMMERMAN: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectTimmermanElement);
        break;
      }
      case activityEnum.WEBDESIGN: {
        await genericMethods.selectInDropdown(roerendeZakenVerzekeringElements.activitySelectElement, roerendeZakenVerzekeringElements.activitySelectWebdesignElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
