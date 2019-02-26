import {browser, by, element, ElementFinder, protractor} from 'protractor';
import {GetUrlUnive} from "./getUrlUnive";

import * as chai from 'chai';
import * as chaistring from 'chai-string';
import {GenericElements} from "./genericElements";
import {PersonaData} from "../persona/persona";
import {gender, specificIdentification, genericEnum, dateEnum} from "../enum/genericEnum";
import {NawElements} from "./nawElements";
import {legalEnum} from "../enum/autoVerzekeringEnum";

chai.use(chaistring);
const expect = chai.expect;

const ec = protractor.ExpectedConditions;

let getUrlUnive: GetUrlUnive = new GetUrlUnive();
let genericElements: GenericElements = new GenericElements();
let personaData: PersonaData = new PersonaData();
let nawElements: NawElements = new NawElements();

export class GenericMethods {

  async clickOnElement(selector: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const elementToClick: ElementFinder = element(by.css(selector));
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView({block: \'center\'})', elementToClick);
    });
    await browser.wait((ec.elementToBeClickable(elementToClick)), browser.getPageTimeout).then(() => {
      elementToClick.click();
    })
  }

  async clickOnElementWithClassName(selector: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisibleClassName(selector, browser.getPageTimeout);
    const elementToClick: ElementFinder = element(by.className(selector));
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView({block: \'center\'})', elementToClick);
    });
    await browser.wait((ec.elementToBeClickable(elementToClick)), browser.getPageTimeout).then(() => {
      elementToClick.click();
    })
  }

  async goToPage(page: string) {
    const url: string = getUrlUnive.getUrlUnive(page);
    await protractor.browser.get(url);
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
  }

  async waitForElementValue(selector: string, waitFor: number) {
    const selectorToWaitFor: ElementFinder = element(by.css(selector));
    await browser.wait(ec.visibilityOf(selectorToWaitFor), waitFor);
  }

  async waitForElementIsVisible(selector: string, waitFor: number) {
    try {
      const selectorToWaitFor: ElementFinder = element(by.css(selector));
      await browser.wait(ec.visibilityOf(selectorToWaitFor), waitFor);
    } catch (e) {
      throw new Error('Element with selector: ' + selector + ', is not visible');
    }
  }

  async waitForElementIsVisibleTyPage(selector: string, waitFor: number) {
    const selectorToWaitFor: ElementFinder = element(by.css(selector));
    await browser.wait(ec.visibilityOf(selectorToWaitFor), waitFor);
  }

  async waitForElementIsVisibleClassName(selector: string, waitFor: number) {
    try {
      const selectorToWaitFor: ElementFinder = element(by.className(selector));
      await browser.wait(ec.visibilityOf(selectorToWaitFor), waitFor);
    } catch (e) {
      throw new Error('Element with selector: ' + selector + ', is not visible');
    }
  }

  async waitForElementClickable(selector: string, waitFor: number) {
    const selectorToWaitFor: ElementFinder = element(by.css(selector));
    await browser.wait(ec.elementToBeClickable(selectorToWaitFor), waitFor);
  }

  async waitForElementNotVisible(selector: string, waitFor: number) {
    try {
      const selectorToWaitFor: ElementFinder = element(by.css(selector));
      await browser.wait(ec.invisibilityOf(selectorToWaitFor), waitFor);
      await browser.sleep(500);
    } catch (e) {
      throw new Error('Element with selector: ' + selector + ', is not visible');
    }
  }

  async waitForElementNotVisibleTyPage(selector: string, waitFor: number) {
    const selectorToWaitFor: ElementFinder = element(by.css(selector));
    await browser.wait(ec.invisibilityOf(selectorToWaitFor), waitFor);
    await browser.sleep(500);
  }

  async waitForElementIsVisibleWithXpath(selector: string, waitFor: number) {
    try {
      const selectorToWaitFor: ElementFinder = element(by.xpath(selector));
      await browser.wait(ec.visibilityOf(selectorToWaitFor), waitFor);
    } catch (e) {
      throw new Error('Element with selector: ' + selector + ', is not visible');
    }
  }

  async waitForElementIsPresentWithXpath(selector: string, waitFor: number) {
    try {
      const selectorToWaitFor: ElementFinder = element(by.xpath(selector));
      await browser.wait(ec.presenceOf(selectorToWaitFor), waitFor);
    } catch (e) {
      throw new Error('Element with selector: ' + selector + ', is not visible');
    }
  }

  async scrollTilTop() {
    await browser.executeScript('window.scrollTo(0,0);');
  }

  async getText(selector: string): Promise<string> {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const text: ElementFinder = element(by.css(selector));
    return text.getText();
  }

  async getValue(selector: string): Promise<string> {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const text: ElementFinder = element(by.css(selector));
    return text.getWebElement().getAttribute('value')
  }

  async getNoText(selector: string, elementToWaitFor: string): Promise<string> {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(elementToWaitFor, browser.getPageTimeout);
    const text: ElementFinder = element(by.css(selector));
    return text.getText();
  }

  async getTextWithXpath(selector: string): Promise<string> {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    const text: ElementFinder = element(by.xpath(selector));
    return text.getText();
  }

  async typeText(selector: string, text: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const typeTextElement: ElementFinder = element(by.css(selector));
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView({block: \'center\'})', typeTextElement);
    });
    await browser.wait((ec.elementToBeClickable(typeTextElement)), browser.getPageTimeout).then(() => {
      typeTextElement.clear().then(() => {
        typeTextElement.sendKeys(text);
      })
    })
  }

  async clickOnTAB(selector: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const tabElement: ElementFinder = element(by.css(selector));
    await tabElement.sendKeys(protractor.Key.TAB);
  }

  async verifyTextInElementWithXpath(selector: string, assertionText: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    const selectorToString: string = await this.getTextWithXpath(selector);
    await expect(selectorToString).to.equal(assertionText);
  }

  async verifyTextInElement(selector: string, assertionText: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const selectorToString: string = await this.getText(selector);
    await expect(selectorToString).to.equal(assertionText);
  }

  async verifyTextInElementTyPage(selector: string, assertionText: string) {
    await this.waitForElementNotVisibleTyPage(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisibleTyPage(selector, browser.getPageTimeout);
    const selectorToString: string = await this.getText(selector);
    await expect(selectorToString).to.equal(assertionText);
  }

  async verifyValueTextInElement(selector: string, assertionText: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const selectorToString: string = await this.getValue(selector);
    await expect(selectorToString).to.equal(assertionText);
  }

  async verifyTextContainsInElement(selector: string, assertionText: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const selectorToString: string = await this.getText(selector);
    await expect(selectorToString).to.have.string(assertionText);
  }

  async verifyTextNotInElement(selector: string, assertionText: string, elementToWaitFor: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(elementToWaitFor, browser.getPageTimeout);
    const selectorToString: string = await this.getNoText(selector, elementToWaitFor);
    await expect(selectorToString).to.not.equal(assertionText);
  }

  async verifyNumberInElement(selector: string, assertionNumber: number) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const selectorToNumber: string = await this.getText(selector);
    await expect(selectorToNumber).to.equal(assertionNumber);
  }

  async verifyBooleanElement(selector: string, expectedBoolean: boolean) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const selectorToElement: ElementFinder = element(by.css(selector));
    await expect(selectorToElement).to.equal(expectedBoolean);
  }

  async selectInDropdown(selector: string, value: string) {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(selector, browser.getPageTimeout);
    const dropdownElement: ElementFinder = element(by.css(selector));
    await browser.controlFlow().execute(() => {
      browser.executeScript('arguments[0].scrollIntoView({block: \'center\'})', dropdownElement);
    });
    await browser.wait((ec.elementToBeClickable(dropdownElement)), browser.getPageTimeout).then(() => {
      dropdownElement
        .element(by.css("[value='" + value + "']")).click();
    });
  }

  async clickOnNextButton() {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(genericElements.nextButton, browser.getPageTimeout);
    await this.clickOnElement(genericElements.nextButton);
  }

  async clickOnFinishButton() {
    await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await this.waitForElementIsVisible(genericElements.finishButton, browser.getPageTimeout);
    await this.clickOnElement(genericElements.finishButton);
  }

  async verifyThankYouPageTitle(persona: string) {
    if (personaData.getPersonaGender(persona) === gender.MALE) {
      await this.verifyTextInElement(genericElements.thankYouH2Element, 'Beste meneer ' + personaData.getPersonaLastName(persona))
    } else if (personaData.getPersonaGender(persona) === gender.FEMALE) {
      await this.verifyTextInElement(genericElements.thankYouH2Element, 'Beste mevrouw ' + personaData.getPersonaLastName(persona))
    } else {
      throw new Error('The input: "" ' + persona + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }

  async clickYourDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await this.clickOnElement(nawElements.yourDataGenderMaleElement);
        break;
      }
      case gender.FEMALE: {
        await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await this.clickOnElement(nawElements.yourDataGenderFemaleElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickContactDataGender(input: string) {
    switch (input) {
      case gender.MALE: {
        await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await this.clickOnElement(nawElements.contactDataGenderMaleClickElement);
        break;
      }
      case gender.FEMALE: {
        await this.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await this.clickOnElement(nawElements.contactDataGenderFemaleClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectYourDataSpecificIdentification(input: string, persona: string) {
    switch (input) {
      case specificIdentification.DRIVER_LICENSE: {
        await this.selectInDropdown(nawElements.yourDataSpecificIdentificationElement, nawElements.yourDataSpecificIdentificationDriverLicenseSelect);
        await this.typeText(nawElements.yourDataSpecificIdentificationDriverLicenseNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.PASSPORT: {
        await this.selectInDropdown(nawElements.yourDataSpecificIdentificationElement, nawElements.yourDataSpecificIdentificationPassportSelect);
        await this.typeText(nawElements.yourDataSpecificIdentificationPassportNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.ID_CARD: {
        await this.selectInDropdown(nawElements.yourDataSpecificIdentificationElement, nawElements.yourDataSpecificIdentificationIdCardSelect);
        await this.typeText(nawElements.yourDataSpecificIdentificationIdCardNumberElement, personaData.getPersonaSpecificIdentificationNumber(persona));
        break;
      }
      case specificIdentification.SOMETHING_ELSE: {
        await this.selectInDropdown(nawElements.yourDataSpecificIdentificationElement, nawElements.yourDataSpecificIdentificationSomethingElseSelect);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectInsuranceHistory(input: string, explanation: string) {
    await this.waitForElementIsVisible(genericElements.insuranceHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await this.clickOnElement(genericElements.insuranceHistoryYesElement);
        await this.typeText(genericElements.insuranceHistoryYesExplanationElement, explanation);
        break;
      }
      case genericEnum.NO: {
        await this.clickOnElement(genericElements.insuranceHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCriminalHistory(input: string) {
    await this.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await this.clickOnElement(genericElements.criminalHistoryYesElement);
        await this.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await this.clickOnElement(genericElements.lightBoxClickElement);
        break;
      }
      case genericEnum.NO: {
        await this.clickOnElement(genericElements.criminalHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getDate(input: string): string {
    switch (input) {
      case dateEnum.TODAY: {
        const date = new Date();
        return String(date.getDate()) + '-' + String(date.getMonth() + 1) + '-' + String(date.getFullYear());
      }
      case dateEnum.SEVEN_DAY_TRIP: {
        const today = new Date();
        const priorDate = new Date().setDate(today.getDate() + 7);
        const sevenDaysDate = new Date(priorDate);
        return String(sevenDaysDate.getDate()) + '-' + String(sevenDaysDate.getMonth() + 1) + '-' + String(sevenDaysDate.getFullYear());
      }
    }
  }

  async selectDamageHistory(input: string) {
    await this.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await this.clickOnElement(genericElements.damageHistoryYesElement);
        break;
      }
      case genericEnum.NO: {
        await this.clickOnElement(genericElements.damageHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectLegal(input: string) {
    switch (input) {
      case legalEnum.BUITENLANDS_RECHTSVORM: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalBuitenalandseRechtsvormSelectElement);
        break;
      }
      case legalEnum.BV: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalBVSelectElement);
        break;
      }
      case legalEnum.COW: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalCOWSelectElement);
        break;
      }
      case legalEnum.CV: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalCVSelectElement);
        break;
      }
      case legalEnum.EENMANSZAAK: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalEenmanszaakSelectElement);
        break;
      }
      case legalEnum.MAATSCHAP: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalMaatschapSelectElement);
        break;
      }
      case legalEnum.NV: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalNVSelectElement);
        break;
      }
      case legalEnum.STICHTING: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalStichtingSelectElement);
        break;
      }
      case legalEnum.VMVR: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVMVRSelectElement);
        break;
      }
      case legalEnum.VOF: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVOFSelectElement);
        break;
      }
      case legalEnum.VZVR: {
        await this.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVZVRSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
