import {When} from 'cucumber';
import {
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  roerendeZakenVerzekeringElements,
  roerendeZakenVerzekeringMethods
} from '@support';
import {browser} from 'protractor';

When(/^I enter step one and step two page of roerende zakenverzekering for (.*) myself with:$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await roerendeZakenVerzekeringMethods.selectActivity(dataTable.activity);
  await genericMethods.clickOnElement(roerendeZakenVerzekeringElements.locationAtOnePlaceYesClickElement);
  await genericMethods.typeText(nawElements.riscAddressZipcodeInputElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.riscAddressZipcodeInputElement);
  await genericMethods.typeText(nawElements.riscAddressHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  await genericMethods.typeText(nawElements.riscAddressHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter your data page of roerende zakenverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
 await genericMethods.waitForElementIsVisible(nawElements.companyDataPhoneNumberInputElement, browser.getPageTimeout);
  await genericMethods.clickOnTAB(nawElements.companyDataPhoneNumberInputElement);
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
