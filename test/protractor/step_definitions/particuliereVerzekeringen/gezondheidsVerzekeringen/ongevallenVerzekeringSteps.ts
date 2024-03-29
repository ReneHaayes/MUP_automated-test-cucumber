import {When} from 'cucumber';
import {
  genericElements,
  genericMethods,
  nawElements,
  ongevallenVerzekeringMethods,
  personaData
} from '@support';
import {browser} from 'protractor';

When(/^I enter step one page of ongevallenverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await ongevallenVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.waitForElementIsVisible(genericElements.nextButton, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
  // Click on Next at page two
  // Click on Next at step two page
  await genericMethods.waitForElementIsVisible(genericElements.nextButton, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of ongevallen verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.waitForElementIsVisible(nawElements.yourDataPhoneNumberElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(nawElements.yourDataPhoneNumberElement);
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
