import {When} from 'cucumber';
import {
  autoVerzekeringElements,
  bedrijfsAutoVerzekeringElements,
  bedrijfsAutoVerzekeringMethods,
  businessCarWithLicensePlate,
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  zakelijkAansprakelijkheidsVerzekeringElements
} from "@support";

When(/^I enter step one page of bedrijfs autoverzekeringen for (.*) with$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await bedrijfsAutoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.startDateOnYourNameElement, genericMethods.getDate('today'));
  await genericMethods.clickOnTAB(bedrijfsAutoVerzekeringElements.startDateOnYourNameElement);
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
  await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElementB, companyData.getCompanyName(company));

  //INSERT DATE INFORMATION
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.reportingCode, businessCarWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnTAB(bedrijfsAutoVerzekeringElements.differentUserYesElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.differentUserYesElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of bedrijfs autoverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
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

When(/^I enter step three page of bedrijfsautoverzekering with different owner with (.*)$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  // Copied this from zakelijkAansprakelijkheidsVerzekeringSteps.ts . The Kvk-koppeling was added to this dialogue
  await genericMethods.typeText(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.getCompanyDataButtonClickElement);
  await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElementB, companyData.getCompanyName(company));

  //INSERT DATE INFORMATION
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.reportingCode, businessCarWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnTAB(bedrijfsAutoVerzekeringElements.differentUserYesElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.differentUserNoElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of bedrijfsautoverzekering for (.*) with (.*) different owner (.*)$/, async (company: string, persona: string, natural_person: string) => {
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnElement(nawElements.differentOwnerNatuurlijkPersoonElement);
  await genericMethods.typeText(nawElements.differentOwnerInitialsInputElement,personaData.getPersonaInitials(natural_person));
  await genericMethods.typeText(nawElements.differentOwnerPrefixInputElement, personaData.getPersonaPrefix(natural_person));
  await genericMethods.typeText(nawElements.differentOwnerLastNameInputElement, personaData.getPersonaLastName(natural_person));
  await genericMethods.clickDifferentOwnerDataGender(personaData.getPersonaGender(natural_person));
  await genericMethods.typeText(nawElements.differentOwnerBirthdateInputElement, personaData.getPersonaBirthDate(natural_person));
  await genericMethods.typeText(nawElements.differentOwnerZipCodeInputElement, personaData.getPersonaZipcode(natural_person));
  await genericMethods.clickOnTAB(nawElements.differentOwnerHouseNumberElement);
  await genericMethods.typeText(nawElements.differentOwnerHouseNumberElement, personaData.getPersonaHouseNumber(natural_person));
  await genericMethods.typeText(nawElements.differentOwnerHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(natural_person));
  await genericMethods.clickOnNextButton();
});
