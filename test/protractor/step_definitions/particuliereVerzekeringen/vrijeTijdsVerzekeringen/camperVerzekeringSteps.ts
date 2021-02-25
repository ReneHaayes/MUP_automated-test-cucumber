import {When} from 'cucumber';
import {
  mobileHomeVerzekeringElements,
  mobileHomeVerzekeringMethods,
  mobileHomeWithLicensePlate,
  genericElements,
  genericMethods,
  nawElements,
  personaData, autoVerzekeringElements
} from '@support';
import {browser} from 'protractor';


When(/^I enter step one of camperverzekering for (.*) with:$/, async (licensePlate: string, data) => {
   const dataTable = data.rowsHash();
  await mobileHomeVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.clickOnElement(mobileHomeVerzekeringElements.mobileHomeBoughtUsedClickElement);
  await genericMethods.typeText(mobileHomeVerzekeringElements.newPriceInputElement, mobileHomeWithLicensePlate.getMobileHomeNewPrice(licensePlate));
  await genericMethods.typeText(mobileHomeVerzekeringElements.dateBoughtInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(mobileHomeVerzekeringElements.structureBrandNameInputElement, mobileHomeWithLicensePlate.getMobileHomeBrand(licensePlate));
  await genericMethods.typeText(mobileHomeVerzekeringElements.structureBrandModelInputElement, mobileHomeWithLicensePlate.getMobileHomeModel(licensePlate));
  await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.structureBrandModelInputElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, '2');
  await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.recreationalUseClickElement);
  await mobileHomeVerzekeringMethods.clickOnUsage(dataTable.usage);
  await genericMethods.waitForElementIsVisible(mobileHomeVerzekeringElements.upTo10000kmClickElement, browser.getPageTimeout);
  await mobileHomeVerzekeringMethods.clickOnYearlyMileage(dataTable.mileage);
  await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.waClickElement);
  await mobileHomeVerzekeringMethods.clickOnCoverage(dataTable.coverage);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two of camperverzekering$/, async () => {
  await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});


When(/^I enter step three page of camperverzekering for (.*) with$/, async (licensePlate: string) => {
  await genericMethods.waitForElementIsVisible(mobileHomeVerzekeringElements.dateRegisteredToNameInputElement, browser.getPageTimeout);
  await genericMethods.typeText(mobileHomeVerzekeringElements.dateRegisteredToNameInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.dateRegisteredToNameInputElement);
  await genericMethods.typeText(mobileHomeVerzekeringElements.meldCodeInputElement, mobileHomeWithLicensePlate.getMobileHomeReportingCode(licensePlate));
  await genericMethods.clickOnNextButton();
});


When(/^I enter step four page of camperverzekering for (.*)$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataHouseNumberAdditionElement);
  browser.sleep(500);
  await genericMethods.waitForElementClickable(nawElements.yourDataPhoneNumberElement, browser.getPageTimeout);
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
