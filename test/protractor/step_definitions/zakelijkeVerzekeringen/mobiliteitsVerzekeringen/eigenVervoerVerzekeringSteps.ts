import {When} from "cucumber";
import {
  companyData,
  eigenVervoerVerzekeringElements,
  eigenVervoerVerzekeringMethods,
  genericElements,
  genericMethods,
  nawElements,
  personaData
} from "@support";

When(/^I enter step one page and click next on step two of eigen vervoer verzekering with:$/, async function (data) {
  const dataTable = data.rowsHash();
  await eigenVervoerVerzekeringMethods.selectActivity(dataTable.activity);
  await eigenVervoerVerzekeringMethods.selectVehicleInfo(dataTable.typeCar, dataTable.howMany);
  await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.openTrailerNoClickElement);
  await genericMethods.clickOnNextButton();
  //click next on step two page.
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of eigen vervoer verzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.typeText(nawElements.companyDataNameInputElement, companyData.getCompanyName(company));
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataZipCodeInputElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.companyDataZipCodeInputElement);
  await genericMethods.typeText(nawElements.companyDataHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  await genericMethods.typeText(nawElements.companyDataHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
