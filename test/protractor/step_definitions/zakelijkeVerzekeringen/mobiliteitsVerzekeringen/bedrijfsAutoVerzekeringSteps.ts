import {When} from 'cucumber';
import {
  autoVerzekeringElements,
  bedrijfsAutoVerzekeringElements, bedrijfsAutoVerzekeringMethods,
  businessCarWithLicensePlate, companyData, genericElements, genericMethods,
  nawElements, personaData,
  vehicleElements, zakelijkAansprakelijkheidsVerzekeringElements
} from "../../../support";

When(/^I enter step one page of bedrijfs autoverzekeringen for (.*) with$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await bedrijfsAutoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.businessClickElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.deductVatYesElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.ownProductsYesElement);
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.zipCodeInputElement, companyData.getCompanyZipcode(company));
  await bedrijfsAutoVerzekeringMethods.clickOnYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.permanentDriverNoElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of bedrijfs autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bedrijfsAutoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bedrijfs autoverzekering with (.*)$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  // Copied this from zakelijkAansprakelijkheidsVerzekeringSteps.ts . The Kvk-koppeling was added to this dialogue
  await genericMethods.typeText(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.getCompanyDataButtonClickElement);
  await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElement, companyData.getCompanyName(company));

  //INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, genericMethods.getDate('today'));
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.startDateOnYourNameElement, genericMethods.getDate('today'));
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.reportingCode, businessCarWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.differentUserYesElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of bedrijfs autoverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  // await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  // await genericMethods.typeText(nawElements.companyDataNameInputElement, companyData.getCompanyName(company));
  // await genericMethods.selectLegal(companyData.getCompanyLegal(company));
  // await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  // await genericMethods.typeText(nawElements.companyDataHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  // await genericMethods.typeText(nawElements.companyDataHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
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
