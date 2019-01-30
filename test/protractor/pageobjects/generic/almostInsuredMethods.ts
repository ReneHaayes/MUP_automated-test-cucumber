import {browser} from "protractor";
import {yesNo} from "../enum/genericEnum";
import {GenericMethods} from "../generic/genericMethods";
import {AlmostInsuredElements} from "./almostInsuredElements";

let genericMethods: GenericMethods = new GenericMethods();
let almostInsuredElements: AlmostInsuredElements = new AlmostInsuredElements();


export class AlmostInsuredMethods {

  async selectInsuranceHistory(insuranceHistory: string, explanation: string) {
    await genericMethods.waitForElementIsVisible(almostInsuredElements.insuranceHistoryNoElement, browser.getPageTimeout);
    if (insuranceHistory === yesNo.YES) {
      await genericMethods.clickOnElement(almostInsuredElements.insuranceHistoryYesElement);
      await genericMethods.typeText(almostInsuredElements.insuranceHistoryYesExplanationElement, explanation);
    } else if (insuranceHistory === yesNo.NO) {
      await genericMethods.clickOnElement(almostInsuredElements.insuranceHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectInsuranceHistory: "" ' + insuranceHistory + ' "" is not recognized as a command');
    }
  }

  async selectCriminalHistory(criminalHistory: string) {
    await genericMethods.waitForElementIsVisible(almostInsuredElements.criminalHistoryNoElement, browser.getPageTimeout);
    if (criminalHistory === yesNo.YES) {
      await genericMethods.clickOnElement(almostInsuredElements.criminalHistoryYesElement);
      await genericMethods.waitForElementIsVisible(almostInsuredElements.criminalHistoryInformationElement, browser.getPageTimeout);
      await genericMethods.clickOnElement(almostInsuredElements.criminalHistoryInformationElement);
    } else if (criminalHistory === yesNo.NO) {
      await genericMethods.clickOnElement(almostInsuredElements.criminalHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectCriminalHistory: "" ' + criminalHistory + ' "" is not recognized as a command');
    }
  }

  async selectDamageHistory(damageHistory: string) {
    await genericMethods.waitForElementIsVisible(almostInsuredElements.criminalHistoryNoElement, browser.getPageTimeout);
    if (damageHistory === yesNo.YES) {
      await genericMethods.clickOnElement(almostInsuredElements.damageHistoryYesElement);
    } else if (damageHistory === yesNo.NO) {
      await genericMethods.clickOnElement(almostInsuredElements.damageHistoryNoElement);
    } else {
      throw new Error('The input you have entered selectDamageHistory: "" ' + damageHistory + ' "" is not recognized as a command');
    }
  }


}
