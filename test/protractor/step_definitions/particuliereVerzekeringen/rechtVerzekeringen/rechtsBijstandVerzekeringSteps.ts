import {When} from "cucumber";
import {
  genericElements, genericMethods,
  nawElements, personaData,
  rechtsBijstandVerzekeringElements,
  rechtsBijstandVerzekeringMethods
} from "../../../support";

When(/^I enter step one page of rechtsbijstandverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await rechtsBijstandVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  //Click on Next at step two page
  await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.verkeerEnvoertuigen);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of rechtsbijstand verzekeringen$/, async (persona: string) => {
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
  //Click no on are there special facts and circumstances, at next page.
  await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.specialFactsNoClickElement);
});
