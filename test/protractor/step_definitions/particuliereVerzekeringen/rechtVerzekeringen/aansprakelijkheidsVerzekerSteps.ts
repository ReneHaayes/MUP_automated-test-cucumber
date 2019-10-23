import {When} from "cucumber";
import {browser} from "protractor";
import {
  aansprakelijkheidsVerzekeringElements,
  aansprakelijkheidsVerzekeringMethods,
  genericElements,
  genericMethods,
  nawElements,
  personaData
} from "@support";

When(/^I enter step one page of aansprakelijkheids verzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await aansprakelijkheidsVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
});

When(/^I check step two page with premie for aansprakelijkheids verzekering is shown$/, async () => {
  await genericMethods.waitForElementIsVisible(aansprakelijkheidsVerzekeringElements.premieAansprakelijkheidsVerzekeringTextElement, browser.getPageTimeout)
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step two page of aansprakelijkheids verzekering$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});


