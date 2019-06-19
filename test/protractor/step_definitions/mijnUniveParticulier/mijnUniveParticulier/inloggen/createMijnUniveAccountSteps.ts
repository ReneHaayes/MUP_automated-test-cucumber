import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../../pageobjects/generic/genericElements";
import {ApiMethods} from "../../../../pageobjects/api/apiMethods";
import {MijnUniveAccountElements} from "../../../../pageobjects/mijnUniveParticulier/mijnUniveAccount/mijnUniveAccountElements";
import {LoginPageMethods} from "../../../../pageobjects/mijnUniveParticulier/loginPage/loginPageMethods";
import {LoginPageElements} from "../../../../pageobjects/mijnUniveParticulier/loginPage/loginPageElements";
import {PersonaData} from "../../../../pageobjects/persona/persona";
import {browser} from "protractor";


let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let apiMethods: ApiMethods = new ApiMethods();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();
let loginPageMethods: LoginPageMethods = new LoginPageMethods();
let loginPageElements: LoginPageElements = new LoginPageElements();
let personaData: PersonaData = new PersonaData();

When(/^Check if (.*) already exists$/, async (persona: string) => {
  await apiMethods.checkIfAccountExistsWhenDoesntExistCreateAccount(persona);
});

When(/^Customer (.*) creates an account for mijn Unive$/, async (persona: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  try {
    await genericMethods.waitForElementAndClick(genericElements.cookieClickElement, 10000)
  } catch {
  }
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveBirthdayInputElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveZipcodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveLastFourNumberOfAccountNumberInputElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveEmailAddressInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveEmailAddressConfirmationInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUnivePasswordConfirmationInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnUniveSubmitButtonClickElement);
});

When(/^Customer deletes account$/, async () => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountVerwijderenClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.submitVerwijderMijnAccountClickElement);
  // await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.verifyTextContainsInElement(loginPageElements.homeHeaderLayoutTextElement, loginPageElements.homeHeaderLayoutText, browser.getPageTimeout);
});

Then(/^Aanmelden gelukt shows on screen for persona: (.*)$/, async (persona: string) => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.aanmeldenSuccesvolTextElement, mijnUniveAccountElements.aanmeldenSuccesvolText);
  await loginPageMethods.verifyEmailCreatedAccount(persona);
});

Then(/^The notification that there is already an account for this e-mail adres show on screen$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.alReadyExistsTextElement, browser.getPageTimeout);
});

When(/^the password is filled in with (.*)$/, async (password: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  try {
    await genericMethods.clickOnElement(genericElements.cookieClickElement)
  } finally {
  }
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement, password);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement);
});

When(/^the correct password is filled in with (.*) and at repeat fill in the (.*)$/, async (password: string, incorrectPassword: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  try {
    await genericMethods.clickOnElement(genericElements.cookieClickElement)
  } finally {
  }
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement, password);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUnivePasswordConfirmationInputElement, incorrectPassword);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUnivePasswordConfirmationInputElement);
});

When(/^the account number is filled in with (.*)$/, async (password: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  try {
    await genericMethods.clickOnElement(genericElements.cookieClickElement)
  } finally {
  }
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveLastFourNumberOfAccountNumberInputElement, password);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUniveLastFourNumberOfAccountNumberInputElement);
});

Then(/^The notification password isn't filled in correctly shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordDoesntSatisfyTheCorrectInputTextElement, 5000);
});

Then(/^The notification password doesn't match correctly shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordDontMatchTextElement, 5000);
});

Then(/^The notification account number not valid shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.accountNumberInvalidElement, 5000);
});

Then(/^The notification that the data is not recognisable shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.customerNotRecognisabelTextElement, mijnUniveAccountElements.customerNotRecognisableText);
});
