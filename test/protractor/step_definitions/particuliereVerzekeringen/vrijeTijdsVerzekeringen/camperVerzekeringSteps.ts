import {When} from "cucumber";
import {
  camperVerzekeringElements,
  camperVerzekeringMethods,
  camperWithLicensePlate,
  genericElements,
  genericMethods,
  nawElements,
  personaData
} from "@support";


When(/^I enter step one and click next on step two of camperverzekering for (.*) with$/, async (licensePlate: string) => {
  await camperVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.clickOnElement(camperVerzekeringElements.camperBoughtUsedClickElement);
  await genericMethods.typeText(camperVerzekeringElements.newPriceInputElement, camperWithLicensePlate.getCamperNewPrice(licensePlate));
  await genericMethods.typeText(camperVerzekeringElements.boughtDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(camperVerzekeringElements.structureBrandNameInputElement, camperWithLicensePlate.getCamperBrandName(licensePlate));
  await genericMethods.typeText(camperVerzekeringElements.structureBrandModelInputElement, camperWithLicensePlate.getCamperBrandModel(licensePlate));
  await genericMethods.clickOnElement(camperVerzekeringElements.recreativeUseClickElement);
  await genericMethods.clickOnElement(camperVerzekeringElements.between10000and20000kmClickElement);
  await genericMethods.clickOnElement(camperVerzekeringElements.waPlusClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of camperverzekering for (.*) with$/, async (licensePlate: string) => {
  await genericMethods.typeText(camperVerzekeringElements.nameDateInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnTAB(camperVerzekeringElements.nameDateInputElement);
  await genericMethods.typeText(camperVerzekeringElements.meldCodeInputElement, camperWithLicensePlate.getCamperMeldCode(licensePlate));
  await genericMethods.clickOnNextButton();
});


When(/^I enter step four page of camperverzekering for (.*)$/, async (persona: string) => {
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
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
