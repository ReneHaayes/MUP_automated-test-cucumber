import {GenericMethods} from "../../generic/genericMethods";
import {toolsEnum} from "../../enum/zakelijkAansprakelijkheidsVerzekeringEnum";
import {ZakelijkAansprakelijkheidsVerzekeringElements} from "./zakelijkAansprakelijkheidsVerzekeringElements";

let genericMethods: GenericMethods = new GenericMethods();

let zakelijkAansprakelijkheidsVerzekeringElements: ZakelijkAansprakelijkheidsVerzekeringElements = new ZakelijkAansprakelijkheidsVerzekeringElements();

export class ZakelijkAansprakelijkheidsVerzekeringMethods {

  async selectTools(input: string) {
    switch (input) {
      case toolsEnum.VAARTUIGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsVaartuigenSelectElement);
        break;
      }
      case toolsEnum.HEISTELLINGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsHeistellingenSelectElement);
        break;
      }
      case toolsEnum.LOCOMOTIEVEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLocomotievenSelectElement);
        break;
      }
      case toolsEnum.HIJSKRANEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsHijskranenSelectElement);
        break;
      }
      case toolsEnum.LIFTEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLiftenSelectElement);
        break;
      }
      case toolsEnum.BOKKEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsBokkenSelectElement);
        break;
      }
      case toolsEnum.LAADBRUGGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLaadbruggenSelectElement);
        break;
      }
      case toolsEnum.SMALSPOOR: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsSmalspoorSelectElement);
        break;
      }
      case toolsEnum.OVERIG: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsOverigSelectElement);
        break;
      }
      case toolsEnum.GEEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsGeenSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
