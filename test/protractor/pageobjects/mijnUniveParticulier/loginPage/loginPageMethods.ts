import {LoginPageElements} from "./loginPageElements";
import {browser} from "protractor";
import {veelgesteldeVragenEnum} from "../../enum/veelgesteldeVragenEnum";
import {verzekeringPaginasEnum} from "../../enum/genericEnum";
import {PersonaData} from "../../persona/persona";
import {GenericMethods} from "../../generic/genericMethods";
import {GenericElements} from "../../generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let loginPageElements: LoginPageElements = new LoginPageElements();
let personaData: PersonaData = new PersonaData();

export class LoginPageMethods {

  async verifyVeelGesteldeVragen(input: string) {
    switch (input) {
      case veelgesteldeVragenEnum.HOE_MELD_IK_ME_AAN_VOOR_MIJN_UNIVE: {
        await genericMethods.clickOnElement(loginPageElements.veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement);
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
    await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, personaData.getPersonaEmailAddress(persona));
    await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
    await genericMethods.clickOnElement(loginPageElements.painButtonClickElement);
    await genericMethods.clickOnElement(loginPageElements.verifyEmailClickElement);
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[1]);
    });
    await genericMethods.verifyTextInElement(loginPageElements.successMessageTextElement, loginPageElements.successMessageText);
  }

  async login(emailAddress: string, password: string) {
    await genericMethods.typeText(loginPageElements.loginEmailInputElement, emailAddress);
    await genericMethods.typeText(loginPageElements.loginPasswordInputElement, password);
    await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
    try {
      await genericMethods.waitForElementAndClick(genericElements.cookieClickElement, 10000)
    } catch {
    }
  }


}
