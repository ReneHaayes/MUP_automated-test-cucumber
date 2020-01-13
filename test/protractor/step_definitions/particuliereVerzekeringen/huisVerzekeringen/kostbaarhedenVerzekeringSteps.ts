import {When} from "cucumber";
import {
  genericElements, genericMethods, kostbaarhedenVerzekeringElements, nawElements, personaData
} from "@support";

When(/^I enter step one and step two page of kostbaarheden verzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(kostbaarhedenVerzekeringElements.yourZipcodeInputElement, personaData.getPersonaZipcode(dataTable.persona));
  await genericMethods.clickOnElement(kostbaarhedenVerzekeringElements.jewelryValuableClickElement);
  await genericMethods.clickOnElement(kostbaarhedenVerzekeringElements.noteOrTaxationReportNeither);
  await genericMethods.typeText(kostbaarhedenVerzekeringElements.estimateValueInputElement, dataTable.estimateValue);
  await genericMethods.clickOnNextButton();
  // click next on step two page.
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of kostbaarheden verzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(kostbaarhedenVerzekeringElements.typeJewelryRingClickElement);
  await genericMethods.typeText(kostbaarhedenVerzekeringElements.materialInputElement, dataTable.material);
  await genericMethods.typeText(kostbaarhedenVerzekeringElements.descriptionInputElement, dataTable.description);
  await genericMethods.typeText(kostbaarhedenVerzekeringElements.posessionInputElement, dataTable.posession);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of kostbaarheden verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
