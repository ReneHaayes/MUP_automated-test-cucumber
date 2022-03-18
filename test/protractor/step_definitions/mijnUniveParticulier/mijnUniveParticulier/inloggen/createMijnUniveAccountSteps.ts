import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {
  apiMethods,
  genericElements,
  genericMethods,
  loginPageElements,
  loginPageMethods,
  mijnUniveAccountElements,
  personaData
} from '@support';

When(/^Check if (.*) already exists$/, async (persona: string) => {
  await apiMethods.checkIfAccountExistsWhenDoesntExistCreateAccount(persona);
});

When(/^Customer (.*) creates an account for mijn Unive$/, async (persona: string) => {
  try {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  } catch (e) {
  }
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.identificeerUwZonderIdinButtonClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveLastnameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveBirthdayInputElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveZipcodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveHouseNumberInputElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveStreetNameInputElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveCityInputElement, personaData.getPersonaBirthPlace(persona));
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
  await loginPageMethods.verifyEmailCreatedAccount(persona);
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.aanmeldenSuccesvolTextElement, mijnUniveAccountElements.aanmeldenSuccesvolText);
});

Then(/^The notification that there is already an account for this e-mail adres show on screen$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.alReadyExistsTextElement, mijnUniveAccountElements.alreadyExistsText);
});

When(/^the password is filled in with (.*)$/, async (password: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.identificeerUwZonderIdinButtonClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement, password);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement);
});

When(/^the correct password is filled in with (.*) and at repeat fill in the (.*)$/, async (password: string, incorrectPassword: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  // await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.identificeerUwZonderIdinButtonClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveChoosePasswordInputElement, password);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUnivePasswordConfirmationInputElement, incorrectPassword);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUnivePasswordConfirmationInputElement);
});

When(/^the account number is filled in with (.*)$/, async (password: string) => {
  await genericMethods.clickOnElement(genericElements.cookieClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.accountAanmakenButtonClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.identificeerUwZonderIdinButtonClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.mijnUniveLastFourNumberOfAccountNumberInputElement, password);
  await genericMethods.clickOnTAB(mijnUniveAccountElements.mijnUniveLastFourNumberOfAccountNumberInputElement);
});

Then(/^The notification password isn't filled in correctly shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordDoesntSatisfyTheCorrectInputTextElement, 2000);
});

Then(/^The notification password isn't filled correctly need a capital shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, mijnUniveAccountElements.passwordIsEasyToGuessNeedCapitalText);
});

Then(/^The notification password isn't filled correctly need a small letter shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, mijnUniveAccountElements.passwordIsEasyToGuessNeedSmallLetterText);
});

Then(/^The notification password isn't filled correctly need minimum eight characters shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, mijnUniveAccountElements.passwordIsEasyToGuessMinimumEightCharText);
});

Then(/^The notification password isn't filled correctly need minimum special character shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.passwordIsEasyToGuessTextElement, mijnUniveAccountElements.passwordIsEasyToGuessMinimumSpecialCharText);
});

Then(/^The notification password doesn't match correctly shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.passwordDontMatchTextElement, 2000);
});

Then(/^The notification account number to short shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.accountNumberInvalidTextElement, mijnUniveAccountElements.accountNumberInvalidToShortText);
});

Then(/^The notification account number only numbers shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.accountNumberInvalidTextElement, mijnUniveAccountElements.accountNumberInvalidOnlyNumbersText);
});

Then(/^The notification account number to long shows$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.accountNumberInvalidTextElement, mijnUniveAccountElements.accountNumberInvalidToLongText);
});


Then(/^The notification account number not valid shows$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnUniveAccountElements.accountNumberInvalidTextElement, 2000);
});

Then(/^The notification that the data is not recognisable shows$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnUniveAccountElements.customerNotRecognisabelTextElement, mijnUniveAccountElements.customerNotRecognisableText, browser.getPageTimeout);
});
