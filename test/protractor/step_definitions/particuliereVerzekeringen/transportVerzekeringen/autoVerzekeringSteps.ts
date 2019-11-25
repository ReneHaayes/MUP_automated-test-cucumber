import {When} from 'cucumber';
import {browser} from 'protractor';
import {
  autoVerzekeringElements,
  autoVerzekeringElementsStepThree,
  autoVerzekeringMethods,
  autoVerzekeringMethodsStepThreeAndFour,
  carWithLicensePlate,
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  vehicleElements
} from "@support";


When(/^I enter step one page of autoverzekeringen for (.*) with$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectWhoDrivesTheCarTheMost(dataTable.whoDrivesCarMost);
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateAfterFixElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeAfterFixElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeAfterFixElement);
  await autoVerzekeringMethods.selectIfYouAlreadyHaveACarAtUnive(dataTable.alreadyMember);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectOwnRisk(dataTable.ownRisk);
  await autoVerzekeringMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await genericMethods.typeText(autoVerzekeringElements.collectiveInputElement, dataTable.collective);
  await genericMethods.clickOnElement(autoVerzekeringElements.collectiveAutoCompleteClickElement);
  await genericMethods.verifyTextContainsInElement(autoVerzekeringElements.collectiveResultTextElement, dataTable.collective, browser.getPageTimeout);
  await autoVerzekeringMethods.selectTotalPremie(dataTable.totalPremie);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, dataTable.startDate);
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourNameElement, dataTable.startDateOnYourName);
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  // await autoVerzekeringMethodsStepThreeAndFour.clickOnMainDriver(dataTable.mainDriver); has been commented out because of a change, this rule can be deleted
  await autoVerzekeringMethodsStepThreeAndFour.clickOnOwnerCar(dataTable.ownerCar);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of autoverzekering for (.*)$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
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

When(/^I enter step one page of personen autoverzekeringen zakelijk for (.*) with:$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(autoVerzekeringElements.sameDriverNoClickElement);
  await genericMethods.typeText(autoVerzekeringElements.sameDriverZipCodeCompanyElement, companyData.getCompanyZipcode(company));
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one page of personen autoverzekeringen zakelijk for (.*) with different (.*) driver:$/, async (company: string, persona: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(autoVerzekeringElements.sameDriverYesClickElement);
  await genericMethods.typeText(nawElements.specificDriverZipCodeElement, companyData.getCompanyZipcode(company));

  await genericMethods.typeText(nawElements.afwijkendeBestuurderBirthdateStepOneElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourCompanyElement, genericMethods.getDate(dataTable.startDateOnYourName));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  await genericMethods.clickOnTAB(autoVerzekeringElementsStepThree.reportingCode);
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarCompanyYesClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of personenautoverzekering zakelijk for (.*) with driver (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
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

When(/^I enter step four page of personenautoverzekering zakelijk for (.*) with different (.*) driver$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);

  await genericMethods.typeText(nawElements.afwijkendeBestuurderInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickAfwijkendeBestuurderDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderHouseNumberElement, personaData.getPersonaHouseNumber(persona));

  await genericMethods.clickOnNextButton();
});
