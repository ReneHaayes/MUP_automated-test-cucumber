import {When} from "cucumber";
import {
  carWithLicensePlate,
  genericElements, genericMethods,
  nawElements,
  oldtimerVerzekeringElements,
  oldtimerVerzekeringMethods, personaData
} from "../../../support";

When(/^I enter step one and click next on step three of oldtimerverzekering with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await oldtimerVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.clickOnElement(oldtimerVerzekeringElements.yearlyMileage7500tot15000ClickElement);
  await genericMethods.clickOnElement(oldtimerVerzekeringElements.waClickElement);
  await genericMethods.clickOnNextButton();
  //Click next on step three
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of oldtimerverzekering for (.*)$/, async (licensePlate: string) => {
  await genericMethods.typeText(oldtimerVerzekeringElements.nameDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(oldtimerVerzekeringElements.reportingCodeInputElement, carWithLicensePlate.getCarReportingCode(licensePlate));
  await genericMethods.clickOnElement(oldtimerVerzekeringElements.recreativeUseClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of oldtimerverzekering for (.*)$/, async (persona: string) => {
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
