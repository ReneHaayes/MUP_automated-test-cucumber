import {When} from 'cucumber';
import {
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  vehicleElements,
  zakelijkTractorVerzekeringElements,
  zakelijkTractorVerzekerinigMethods
} from '@support';

When(/^I enter step one page and click next on step two of zakelijk tractorverzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.licenceplateTractorNoElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.searchTractorDataClickElement);
  await genericMethods.selectInDropdown(vehicleElements.constructionYearSelectElement, vehicleElements.constructionYearSelect2018Element);
  await genericMethods.selectInDropdown(vehicleElements.brandNameSelectElement, vehicleElements.brandNameSelectFerrariElement);
  await genericMethods.selectInDropdown(vehicleElements.brandModelSelectElement, vehicleElements.brandModelSelect304WElement);
  await genericMethods.clickOnElement(vehicleElements.confirmationButtonClickElement);
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.valueInputElement, dataTable.value);
  await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.accessoiresSelectElement, zakelijkTractorVerzekeringElements.accessoiresTm1000SelectElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.trackAndTraceSystemYesClickElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.trackAndTraceSystemNoClickElement);
  await zakelijkTractorVerzekerinigMethods.selectMaximumSpeed(dataTable.maxSpeed);
  await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.enginePowerSelectElement, zakelijkTractorVerzekeringElements.enginePower100PkSelectElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.usageOwnLawnClickElement);
  await genericMethods.clickOnNextButton();
  // click next on step two
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of zakelijk tractorverzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.chassisNumberInputElement, dataTable.chassisNumber);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.ownerYesClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of zakelijk tractorverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressInputElement);
  await genericMethods.typeText(nawElements.companyDataEmailAddressConfirmInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressConfirmInputElement);
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of zakelijk tractorverzekeringen with different owner:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.chassisNumberInputElement, dataTable.chassisNumber);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.ownerNoClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of zakelijke tractorverzekering for (.*) with (.*) different owner (.*)$/, async (company: string, persona: string, natural_person: string ) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressInputElement);
  await genericMethods.typeText(nawElements.companyDataEmailAddressConfirmInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressConfirmInputElement);
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnElement(nawElements.differentOwnerNatuurlijkPersoonElement);
  await genericMethods.typeText(nawElements.differentOwnerInitialsInputElement, personaData.getPersonaInitials(natural_person));
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
