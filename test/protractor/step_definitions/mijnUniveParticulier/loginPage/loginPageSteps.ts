import {Given, Then, When} from 'cucumber';
import {browser} from 'protractor';
import {
  analyticsGenericElements,
  genericElements,
  genericMethods,
  loginPageElements,
  loginPageMethods,
  personaData
} from '@support';
import {anaEnumLocation, anaEnumObjectName, anaEnumSearchObject, verzekeringPaginasEnum} from '@enum';

Given(/^Customer (.*) is logged in on the (.*) page of the Unive website$/, async (persona: string, page: string) => {
  await genericMethods.goToPage(page);
  await genericMethods.waitForElementIsVisible(loginPageElements.loginEmailInputElement, browser.getPageTimeout);
  await loginPageMethods.login(personaData.getPersonaEmailAddress(persona), personaData.getPersonaPassword(persona));
});

When(/^Persona (.*) logs in$/, async (persona: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.waitForElementIsVisible(loginPageElements.loginEmailInputElement, browser.getPageTimeout);
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(loginPageElements.loginEmailInputElement);
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.clickOnTAB(loginPageElements.loginPasswordInputElement);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
});

When(/^Customer logs in with wrong email address (.*)$/, async (emailAddress: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.waitForElementIsVisible(loginPageElements.loginEmailInputElement, browser.getPageTimeout);
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, emailAddress);
  await genericMethods.clickOnTAB(loginPageElements.loginEmailInputElement);
});

When(/^Customer logs in with wrong password (.*)$/, async (password: string) => {
  await genericMethods.waitForElementIsVisible(loginPageElements.loginEmailInputElement, browser.getPageTimeout);
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, password);
  await genericMethods.clickOnTAB(loginPageElements.loginPasswordInputElement);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
});

When(/^Customer clicks on veelgestelde vragen button$/, async () => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.waitForElementIsVisible(loginPageElements.veelgesteldeVragenClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(loginPageElements.veelgesteldeVragenClickElement);
});

When(/^verify the answer to (.*)$/, async (veelgesteldeVraag: string) => {
  await loginPageMethods.verifyVeelGesteldeVragen(veelgesteldeVraag);
});

When(/^persona (.*) forgot his password and resets it with new password (.*)$/, async (persona: string, newPassword: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  // Forgot password flow till send email:
  await genericMethods.clickOnElement(loginPageElements.forgotPasswordClickElement);
  await genericMethods.waitForElementIsVisible(loginPageElements.forgotPasswordClickElement, browser.getPageTimeout);
  await genericMethods.typeText(loginPageElements.forgotPasswordEmailAddressInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(loginPageElements.forgotPasswordEmailAddressInputElement);
  await genericMethods.clickOnElement(loginPageElements.forgotPasswordSubmitButtonClickElement);
  await genericMethods.verifyTextInElement(loginPageElements.forgotPasswordMessageWhenEnteredEmailAddressTextElement,
    'We hebben uw aanvraag ontvangen');
  // Handling the email with new password:
  await genericMethods.goToPage(verzekeringPaginasEnum.MAILHOG);
  await genericMethods.waitForElementIsVisible(loginPageElements.mailtoHeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
  await genericMethods.clickOnElement(loginPageElements.plainClickElement);
  await genericMethods.clickOnElement(loginPageElements.resetPasswordInEmailClickElement);
  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
  });
  await genericMethods.typeText(loginPageElements.resetPasswordNewPasswordInputElement, newPassword);
  await genericMethods.clickOnTAB(loginPageElements.resetPasswordNewPasswordInputElement);
  await genericMethods.typeText(loginPageElements.resetPasswordConfirmNewPasswordInputElement, newPassword);
  await genericMethods.clickOnTAB(loginPageElements.resetPasswordConfirmNewPasswordInputElement);
  await genericMethods.clickOnElement(loginPageElements.resetPasswordSubmitButtonClickElement);
});

Then(/^(.*) can log in with (.*)$/, async (persona: string, newPassword: string) => {
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(loginPageElements.loginEmailInputElement);
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, newPassword);
  await genericMethods.clickOnTAB(loginPageElements.loginPasswordInputElement);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
  await genericMethods.waitForElementIsVisible(loginPageElements.loggedInHeaderH1TextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
});

Then(/^the title for veelgestelde vragen appears on screen$/, async () => {
  await genericMethods.waitForElementIsVisible(loginPageElements.veelgesteldeVragenHeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.veelgesteldeVragenHeaderTextElement, loginPageElements.veelgesteldeVragenHeaderText);
});

Then(/^the title Mijn overzicht appears on screen$/, async () => {
  await genericMethods.waitForElementIsVisible(loginPageElements.loggedInHeaderH1TextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.verifyTextNotEmpty(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.KLANT_ONEGINI_ID)));
});

Then(/^the password error text (.*) appears$/, async (errorText: string) => {
  await genericMethods.waitForElementIsVisible(loginPageElements.passwordErrorFieldTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.passwordErrorFieldTextElement, errorText);
});

Then(/^the emailadres error text (.*) appears$/, async (errorText: string) => {
  await genericMethods.waitForElementIsVisible(loginPageElements.emailAdresErrorFieldTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(loginPageElements.emailAdresErrorFieldTextElement, errorText);
});
