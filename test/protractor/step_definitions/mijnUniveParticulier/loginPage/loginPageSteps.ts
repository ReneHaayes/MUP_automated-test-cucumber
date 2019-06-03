import {Given, Then, When} from 'cucumber';
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {LoginPageElements} from "../../../pageobjects/mijnUniveParticulier/loginPage/loginPageElements";
import {LoginPageMethods} from "../../../pageobjects/mijnUniveParticulier/loginPage/loginPageMethods";
import {PersonaData} from "../../../pageobjects/persona/persona";


let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let loginPageElements: LoginPageElements = new LoginPageElements();
let loginPageMethods: LoginPageMethods = new LoginPageMethods();
let personaData: PersonaData = new PersonaData();

Given(/^Customer (.*) is logged in on the (.*) page of the Unive website$/, async (persona: string, page: string) => {
  await genericMethods.goToPage(page);
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
});

When(/^Persona (.*) logs in$/, async (persona: string) => {
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
});

When(/^Customer logs in with wrong email address (.*)$/, async (emailAddress: string) => {
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, emailAddress);
  await genericMethods.clickOnTAB(loginPageElements.loginEmailInputElement);
});

When(/^Customer logs in with wrong password (.*)$/, async (password: string) => {
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, password);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
});

When(/^Customer clicks on veelgestelde vragen button$/, async () => {
  await genericMethods.clickOnElement(loginPageElements.veelgesteldeVragenClickElement);
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
});

When(/^verify the answer to (.*)$/, async (veelgesteldeVraag: string) => {
  await loginPageMethods.verifyVeelGesteldeVragen(veelgesteldeVraag);
});

Then(/^the title for veelgestelde vragen appears on screen$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.veelgesteldeVragenHeaderTextElement, loginPageElements.veelgesteldeVragenHeaderText);
});

Then(/^the title Mijn overzicht appears on screen$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
});

Then(/^the password error text (.*) appears$/, async (errorText: string) => {
  await genericMethods.verifyTextInElement(loginPageElements.passwordErrorFieldTextElement, errorText);
});

Then(/^the emailadres error text (.*) appears$/, async (errorText: string) => {
  await genericMethods.verifyTextInElement(loginPageElements.emailAdresErrorFieldTextElement, errorText);
});
