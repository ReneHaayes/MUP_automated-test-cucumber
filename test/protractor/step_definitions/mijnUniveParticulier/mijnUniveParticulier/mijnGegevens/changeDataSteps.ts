import {Then, When} from "cucumber";
import {ResponsePromise} from "protractor-http-client/dist/promisewrappers";
import {browser} from "protractor";
import {
  apiElements,
  apiMethods,
  genericElements,
  genericMethods,
  hmPageElements,
  loginPageElements,
  loginPageMethods,
  mailhogMethods,
  mijnUniveAccountElements,
  personaData,
  persoonlijkeGegevensElements,
  persoonlijkeGegevensMethods
} from "@support";


When(/^Customer changes password for (.*) with (.*)$/, async (persona: string, newPassword: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.changePasswordClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.currentPasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.typeText(mijnUniveAccountElements.newPasswordInputElement, newPassword);
  await genericMethods.typeText(mijnUniveAccountElements.newPasswordControlInputElement, newPassword);
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
});

When(/^Customer changes email address with (.*)$/, async (newEmailAddress: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.editEmailAddressClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.newEmailAddressInputElement, newEmailAddress);
  await genericMethods.typeText(mijnUniveAccountElements.confirmNewEmailAddressInputElement, newEmailAddress);
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
  await mailhogMethods.verifyEmailHandling(newEmailAddress);
});

Then(/^Verify (.*) is logged in with (.*) for new password$/, async (persona: string, newPassword: string) => {
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, newPassword);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
  try {
    await genericMethods.waitForElementAndClick(genericElements.cookieClickElement, 10000)
  } catch {
  }
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  let createAccount: ResponsePromise = await apiMethods.postWithAlreadyLoggedInToken(apiElements.changePasswordEndpoint, apiMethods.createChangePasswordBody(newPassword, persona));
  await genericMethods.verifyNumber(await createAccount.statusCode, 200);
});

Then(/^Verify (.*) is logged in with (.*) for new email address$/, async (persona: string, newEmailAddress: string) => {
  //FOCUS ON NEW TAB
  await browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
  });
  //GO TO MIJN UNIVE AND LOG OFF
  await browser.sleep(5000);
  await genericMethods.clickOnElement(hmPageElements.mijnUniveLoggedInUserClickElement);
  // await genericMethods.clickOnElement(hmPageElements.headerMijnUniveParticulierClickElement);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1Text2Element, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.clickOnElement(loginPageElements.logOffClickElement);
  //LOGIN WITH NEW EMAIL ADDRESS AND VERIFY
  await loginPageMethods.login(newEmailAddress, personaData.getPersonaPassword(persona));
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.verifyTextInElement(persoonlijkeGegevensElements.emailAddressTextElement, newEmailAddress);
  //SET BACK THE NORMAL EMAIL ADDRESS
  await genericMethods.clickOnElement(mijnUniveAccountElements.editEmailAddressClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.newEmailAddressInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(mijnUniveAccountElements.confirmNewEmailAddressInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
  await mailhogMethods.verifyEmailHandling(personaData.getPersonaEmailAddress(persona));
  //FOCUS ON NEW TAB
  await browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[2]);
  });
  //GO TO MIJN UNIVE AND LOG OFF
  await browser.sleep(5000);
  await genericMethods.clickOnElement(hmPageElements.mijnUniveLoggedInUserClickElement);
  // await genericMethods.clickOnElement(hmPageElements.headerMijnUniveParticulierClickElement);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1Text2Element, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.clickOnElement(loginPageElements.logOffClickElement);
  //LOGIN AND VERIFY YOU ARE LOGGED IN WITH NORMAL PERSONA
  await loginPageMethods.login(personaData.getPersonaEmailAddress(persona), personaData.getPersonaPassword(persona));
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.verifyTextInElement(persoonlijkeGegevensElements.emailAddressTextElement, personaData.getPersonaEmailAddress(persona));
});

When(/^Customer changes payment data with form for (.*)$/, async (paymentData: string) => {
  await persoonlijkeGegevensMethods.changePaymentData(paymentData);
});

When(/^Customer changes contact preferences$/, async () => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.damageInsurancesClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.buttonGoThroughContactPreferencesClickElement);
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.contactPreferencesH1TitleTextElement, mijnUniveAccountElements.contactPreferencesH1TitleText);
  await genericMethods.clickOnElement(mijnUniveAccountElements.buttonSaveContactPreferencesClickElement);
});

When(/^Customer changes family composition preferences with (.*)$/, async (familyCompositionInput: string) => {
  await persoonlijkeGegevensMethods.changeFamilyComposition(familyCompositionInput);
});

Then(/^Verify thank you page for payment data changed$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnUniveAccountElements.formThankYouTextElement, mijnUniveAccountElements.formThankYouText, browser.getPageTimeout);
});

Then(/^Verify thank you message is shown for changing contact preferences$/, async () => {
  await genericMethods.verifyTextInElement(mijnUniveAccountElements.contactPreferencesSuccesMessageTextElement, mijnUniveAccountElements.contactPreferencesSuccesMessageText);
});

Then(/^Verify thank you message is shown for family composition preferences$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnUniveAccountElements.formThankYouTextElement, mijnUniveAccountElements.familyCompositionSuccesThankYouText, browser.getPageTimeout);
});
