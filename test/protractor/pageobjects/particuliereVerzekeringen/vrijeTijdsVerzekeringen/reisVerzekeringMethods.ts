import {browser} from 'protractor';
import {genericElements, genericMethods, hmPageElements, reisVerzekeringElements} from '@support';
import {numbersEnum} from '@enum';

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

  async selectFamilyMembers(input: string) {
    switch (input) {
      case 'Nothing is checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf checked': {
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf en Mijn Partner checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf en Mijn kinderen checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf, Mijn Partner en Mijn kinderen checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn Partner checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn kinderen checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn Partner en Mijn kinderen checked': {
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkFamilyMemberCheckedOnStepOne(input: string) {
    switch (input) {
      case 'Nothing is checked': {
        await genericMethods.verifyTextInElement(reisVerzekeringElements.chooseInsuredPopUpTextElement, 'Kies een verzekerde.');
        break;
      }
      case 'Mijzelf checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.backToStepOneClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn Partner checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.backToStepOneClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijzelf, Mijn Partner en Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijn Partner checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.backToStepOneClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(reisVerzekeringElements.backToStepOneClickElement);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijn kinderen checked': {
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementNotVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        await genericMethods.clickOnTAB(genericElements.nextButton);
        break;
      }
      case 'Mijn Partner en Mijn kinderen checked': {
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

}
