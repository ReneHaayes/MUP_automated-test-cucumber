import {browser} from 'protractor';
import {genericElements, genericMethods, loginPageElements, personaData} from '@support';
import {veelgesteldeVragenEnum, verzekeringPaginasEnum} from '@enum';

export class LoginPageMethods {

  async verifyVeelGesteldeVragen(input: string) {
    switch (input) {
      case veelgesteldeVragenEnum.HOE_MELD_IK_ME_AAN_VOOR_MIJN_UNIVE: {
        await genericMethods.waitForElementIsVisible(loginPageElements.veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(loginPageElements.veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement);
        await genericMethods.waitForElementIsVisible(loginPageElements.veelgesteldeVraagAntwoordGeopend, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(loginPageElements.veelgesteldeVraagAntwoordGeopend, loginPageElements.veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveText);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyEmailCreatedAccount(persona: string) {
    await genericMethods.goToPage(verzekeringPaginasEnum.MAILHOG);
    await genericMethods.waitForElementIsVisible(loginPageElements.mailtoHeaderTextElement, browser.getPageTimeout);
    await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, personaData.getPersonaEmailAddress(persona));
    await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
    //
    await genericMethods.clickOnElement(loginPageElements.painButtonClickElement);
    //
    await genericMethods.clickOnElement(loginPageElements.verifyEmailClickElement);
    //
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[1]);
    });
    await genericMethods.waitForElementIsVisible(loginPageElements.successMessageTextElement, browser.getPageTimeout);
    await genericMethods.verifyTextInElement(loginPageElements.successMessageTextElement, loginPageElements.successMessageText);
  }

  async login(emailAddress: string, password: string) {
    try {
      await genericMethods.waitForElementAndClick(genericElements.cookieClickElement, 10000);
    } catch {
    }
    await genericMethods.waitForElementIsVisible(loginPageElements.loginEmailInputElement, browser.getPageTimeout);
    await genericMethods.typeText(loginPageElements.loginEmailInputElement, emailAddress);
    await genericMethods.clickOnTAB(loginPageElements.loginEmailInputElement);
    await genericMethods.typeText(loginPageElements.loginPasswordInputElement, password);
    await genericMethods.clickOnTAB(loginPageElements.loginPasswordInputElement);
    await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
    await genericMethods.waitForElementIsVisible(genericElements.closeVirtualTour, browser.getPageTimeout);
    await genericMethods.clickOnElement(genericElements.closeVirtualTour);
  }


}
