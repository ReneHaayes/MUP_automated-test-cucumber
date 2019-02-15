import {GenericMethods} from "../generic/genericMethods";
import {ReisVerzekeringElements} from "./reisVerzekeringElements";
import {numbersEnum} from "../enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();

export class ReisVerzekeringMethods {

  async selectChildrenTillFourYears(input: string) {
    switch (input) {
      case numbersEnum._0: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsZeroChildrenSelectElement);
        break;
      }
      case numbersEnum._1: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsOneChildSelectElement);
        break;
      }
      case numbersEnum._2: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsTwoChildrenSelectElement);
        break;
      }
      case numbersEnum._3: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsThreeChildrenSelectElement);
        break;
      }
      case numbersEnum._4: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsFourChildrenSelectElement);
        break;
      }
      case numbersEnum._5: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsFiveChildrenSelectElement);
        break;
      }
      case numbersEnum._6: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsSixChildrenSelectElement);
        break;
      }
      case numbersEnum._7: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsSevenChildrenSelectElement);
        break;
      }
      case numbersEnum._8: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsEightChildrenSelectElement);
        break;
      }
      case numbersEnum._9: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsNineChildrenSelectElement);
        break;
      }
      case numbersEnum._10: {
        await genericMethods.selectInDropdown(reisVerzekeringElements.childrenTillFourYearsSelectElement, reisVerzekeringElements.childrenTillFourYearsTenChildrenSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
