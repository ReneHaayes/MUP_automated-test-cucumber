import { GenericElements } from './../../generic/genericElements';
import { HmPageElements } from './../../generic/hmPageElements';
import {GenericMethods} from "../../generic/genericMethods";
import {ReisVerzekeringElements} from "./reisVerzekeringElements";
import {numbersEnum} from "../../enum/genericEnum";
import { browser } from 'protractor';

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements;
let reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();
let hmPageElements: HmPageElements = new HmPageElements();

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
      case 'Mijzelf, Mijn Partner en Mijn kinderen checked': {
        // await genericMethods.clickOnElement(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf en Mijn Partner checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf en Mijn kinderen checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijzelf checked': {
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn Partner en Mijn kinderen checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn Partner checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myPartnerWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Mijn kinderen checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElement(reisVerzekeringElements.myChildrenWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      case 'Nothing is checked': {
        await genericMethods.clickOnElement(reisVerzekeringElements.myselfWidgetClickElement);
        await genericMethods.clickOnElement(hmPageElements.doorlopendeReisverzekeringProductPageBerekenUwPremieButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkFamilyMemberCheckedOnStepOne(input: string) {
    switch (input) {
      case 'Mijzelf, Mijn Partner en Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn Partner checked': {
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + reisVerzekeringElements.summarySpaceMyself + '")]', browser.getPageTimeout);
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + reisVerzekeringElements.summarySpaceMyPartner + '")]', browser.getPageTimeout);
        break;
      }
      case 'Mijzelf en Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijzelf checked': {
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + reisVerzekeringElements.summarySpaceMyself + '")]', browser.getPageTimeout);
        break;
      }
      case 'Mijn Partner en Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Mijn Partner checked': {
        await genericMethods.waitForElementIsPresentWithXpath(
          genericElements.sideBarElement + '[contains(text(),"' + reisVerzekeringElements.summarySpaceMyPartner + '")]', browser.getPageTimeout);
        break;
      }
      case 'Mijn kinderen checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxChecked, browser.getPageTimeout);
        break;
      }
      case 'Nothing is checked': {
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myselfCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myPartnerCheckboxNotChecked, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.myChildrenCheckboxNotChecked, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
