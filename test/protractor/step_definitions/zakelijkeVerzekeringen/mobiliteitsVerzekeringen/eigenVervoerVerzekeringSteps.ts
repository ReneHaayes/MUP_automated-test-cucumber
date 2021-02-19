import {When} from 'cucumber';
import {
  companyData,
  eigenVervoerVerzekeringElements,
  eigenVervoerVerzekeringMethods,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
} from '@support';
import {browser} from 'protractor';


// sinds sprint 21-02
When(/^I enter the first step of Eigen vervoersverzekering with (.*) and click next$/, async function (company: string) {
  await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.kvkNumberInputElement, browser.getPageTimeout);
  await genericMethods.typeText(eigenVervoerVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(eigenVervoerVerzekeringElements.kvkNumberInputElement);
  await genericMethods.verifyTextInElement(eigenVervoerVerzekeringElements.kvkNameCheckElement, companyData.getCompanyName(company));
  await genericMethods.verifyTextInElement(eigenVervoerVerzekeringElements.kvkActivityCheckElement, companyData.getCompanyMainActivity(company));
});


  When(/^I answer the questions on step one with:$/, async function (data) {
    const dataTable = data.rowsHash();
    await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.correctActivityYesElement);
    await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.hasEmployeeYesElement);
    await eigenVervoerVerzekeringMethods.selectVehicleInfo(dataTable.typeCar, dataTable.howMany);
    await genericMethods.waitForElementIsVisible(eigenVervoerVerzekeringElements.openTrailerNoClickElement, browser.getPageTimeout);
    await genericMethods.clickOnElement(eigenVervoerVerzekeringElements.openTrailerNoClickElement);
    await genericMethods.clickOnNextButton();
    await genericMethods.clickOnNextButton();
  });

When(/^I enter the third step of eigen vervoer verzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.verifyTextInElement(eigenVervoerVerzekeringElements.kvkNumberPrefilledElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.verifyTextInElement(eigenVervoerVerzekeringElements.companyNamePrefilledElement, companyData.getCompanyName(company));
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
