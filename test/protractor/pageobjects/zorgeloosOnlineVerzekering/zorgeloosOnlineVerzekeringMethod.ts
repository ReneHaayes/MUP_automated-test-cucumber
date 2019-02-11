import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {ZorgeloosOnlineVerzekeringElements} from "./zorgeloosOnlineVerzekeringElements";
import {genericEnum} from "../enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let zorgeloosOnlineVerzekeringElements: ZorgeloosOnlineVerzekeringElements = new ZorgeloosOnlineVerzekeringElements();

export class ZorgeloosOnlineVerzekeringMethods {

  async selectCyberIncidentPresent(input: string){
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentPresentYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCyberIncidentRecent(input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentNoElement);
        break;
      }
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.cyberIncidentRecentYesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistoryZorgeloosOnline (input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.damageHistoryNoElementZorgeloosOnline, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryYesElementZorgeloosOnline);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.damageHistoryNoElementZorgeloosOnline);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectInsuranceHistoryZorgeloosOnline (input: string) {
    await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.insuranceHistoryNoElementZorgeloosOnline, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.insuranceHistoryYesElementZorgeloosOnline);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.insuranceHistoryNoElementZorgeloosOnline);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
