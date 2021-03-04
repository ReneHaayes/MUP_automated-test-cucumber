import {When} from 'cucumber';
import {
  mobileHomeVerzekeringElements,
  mobileHomeVerzekeringMethods,
  mobileHomeWithLicensePlate,
  genericElements,
  genericMethods,
  nawElements,
  personaData
} from '@support';
import {browser} from 'protractor';


When(/^I enter step one and click next on step two of camperverzekering for (.*) with$/, async (licensePlate: string) => {
  await mobileHomeVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.clickOnElement(mobileHomeVerzekeringElements.mobileHomeBoughtUsedClickElement);
  await genericMethods.typeText(mobileHomeVerzekeringElements.newPriceInputElement, mobileHomeWithLicensePlate.getMobileHomeNewPrice(licensePlate));
  await genericMethods.typeText(mobileHomeVerzekeringElements.boughtDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(mobileHomeVerzekeringElements.structureBrandNameInputElement, mobileHomeWithLicensePlate.getMobileHomeBrandName(licensePlate));
  await genericMethods.typeText(mobileHomeVerzekeringElements.structureBrandModelInputElement, mobileHomeWithLicensePlate.getMobileHomeModel(licensePlate));
  await genericMethods.clickOnElement(mobileHomeVerzekeringElements.recreativeUseClickElement);
  await genericMethods.waitForElementClickable(mobileHomeVerzekeringElements.between10000and20000kmClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mobileHomeVerzekeringElements.between10000and20000kmClickElement);
  await genericMethods.clickOnElement(mobileHomeVerzekeringElements.waPlusClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of camperverzekering for (.*) with$/, async (licensePlate: string) => {
  await genericMethods.typeText(mobileHomeVerzekeringElements.nameDateInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.nameDateInputElement);
  await genericMethods.typeText(mobileHomeVerzekeringElements.meldCodeInputElement, mobileHomeWithLicensePlate.getMobileHomeMeldCode(licensePlate));
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
