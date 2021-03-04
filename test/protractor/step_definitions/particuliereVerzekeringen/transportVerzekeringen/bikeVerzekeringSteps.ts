import {When} from 'cucumber';
import {bikeElements,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
} from '@support';
import {browser} from 'protractor';

When(/^I enter step one and step two page of fiets verzekeringen for persona (.*) with:$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(bikeElements.normalBikeClickElement);
  await genericMethods.typeText(bikeElements.purchasePriceInputElement, dataTable.purchasePrice);
  await genericMethods.typeText(bikeElements.zipCodeUserInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.waitForElementIsVisible(genericElements.nextButton, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
  // click next on step two page
  await genericMethods.waitForElementIsVisible(genericElements.nextButton, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of fiets verzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsVisible(bikeElements.rentedBikeNoElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(bikeElements.rentedBikeNoElement);
  await genericMethods.clickOnElement(bikeElements.purchaseDateInputElement);
  await genericMethods.typeText(bikeElements.purchaseDateInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnElement(bikeElements.boughtNewClickElement);
  await genericMethods.typeText(bikeElements.brandNameInputElement, dataTable.brandName);
  await genericMethods.typeText(bikeElements.brandModelInputElement, dataTable.brandModel);
  await genericMethods.typeText(bikeElements.frameNumberInputElement, dataTable.frameNumber);
  await genericMethods.clickOnElement(bikeElements.artApprovedLockNoClickElement);
  await genericMethods.clickOnElement(bikeElements.smartBikeNoClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of fiets verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnElement(nawElements.yourDataPhoneNumberElement);
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
