import {When} from "cucumber";
import {browser} from "protractor";
import {
  aansprakelijkheidsVerzekeringMethods,
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  zorgeloosOnlineVerzekeringElements,
  zorgeloosOnlineVerzekeringMethod
} from "@support";

When(/^I enter step one page of zorgeloos onlineverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await aansprakelijkheidsVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
});

When(/^I check step two page with premie for zorgeloos onlineverzekering is shown$/, async () => {
  await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.premieZorgeloosOnlineVerzekeringTextElement, browser.getPageTimeout)
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) on step three page of zorgeloos onlineverzekering$/, async (persona: string) => {
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

When(/^I fill in step four of zorgeloos onlineverzekering page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentPresent(dataTable.cyberIncidentPresent);
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentRecent(dataTable.cyberIncidentRecent);
  await zorgeloosOnlineVerzekeringMethod.selectDamageHistoryZorgeloosOnline(dataTable.damageHistoryZorgeloosOnline);
  await zorgeloosOnlineVerzekeringMethod.selectInsuranceHistoryZorgeloosOnline(dataTable.insuranceHistoryZorgeloosOnline);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.clickOnFinishButton();
});

When(/^I enter step one page of zorgeloos onlineverzekering zakelijk for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await genericMethods.selectInDropdown(zorgeloosOnlineVerzekeringElements.activitiesSelectElement, zorgeloosOnlineVerzekeringElements.activitiesHorecaSelectElement);
  await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.businessPlaceAnotherPlaceNoClickElement);
  await zorgeloosOnlineVerzekeringMethod.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of zorgeloosonlineverzekering zakelijk for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.typeText(nawElements.companyDataNameInputElement, companyData.getCompanyName(company));
  await genericMethods.typeText(nawElements.companyDataZipCodeInputElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.companyDataZipCodeInputElement);
  await genericMethods.typeText(nawElements.companyDataHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  await genericMethods.typeText(nawElements.companyDataHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataZorgeloosOnlineInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataZorgeloosOnlinePrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataZorgeloosOnlineLastNameInputElement, personaData.getPersonaLastName(persona));
  await zorgeloosOnlineVerzekeringMethod.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.contactDataZorgeloosOnlineBirthdateInputElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I fill in step four of zorgeloos onlineverzekering zakelijk page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentPresent(dataTable.cyberIncidentPresent);
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentRecent(dataTable.cyberIncidentRecent);
  await zorgeloosOnlineVerzekeringMethod.selectDamageHistoryZorgeloosOnlineZakelijk(dataTable.damageHistoryZorgeloosOnline);
  await zorgeloosOnlineVerzekeringMethod.selectInsuranceHistoryZorgeloosOnline(dataTable.insuranceHistoryZorgeloosOnline);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.clickOnElement(zorgeloosOnlineVerzekeringElements.accrodationToHaveReadClickElement);
  await genericMethods.clickOnFinishButton();
});
