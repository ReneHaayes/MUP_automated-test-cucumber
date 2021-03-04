import {When} from 'cucumber';
import {
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  scootMobielVerzekeringElements
} from '@support';
import {browser} from 'protractor';

When(/^I enter step one page and click next on step two of scootmobiel verzekering with:$/, async function (data) {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.scootMobielClickElement);
  await genericMethods.typeText(scootMobielVerzekeringElements.purchasePriceInputElement, dataTable.purchasePrice);
  await genericMethods.clickOnNextButton();
  // click next on step two page.
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of scootmobiel verzekering with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.mainDriverYesClickElement);
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.ownerYesClickElement);
  await genericMethods.typeText(scootMobielVerzekeringElements.brandNameInputElement, dataTable.brandName);
  await genericMethods.typeText(scootMobielVerzekeringElements.brandModelInputElement, dataTable.brandModel);
  await genericMethods.typeText(scootMobielVerzekeringElements.constructionYearInputElement, dataTable.constructionYear);
  await genericMethods.typeText(scootMobielVerzekeringElements.frameNumberInputElement, dataTable.frameNumber);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of scootmobiel verzekeringen$/, async (persona: string) => {
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
  // om te voorkomen dat de regressietest er uit klapt op mobiel telnr
  await genericMethods.waitForElementIsVisible(nawElements.yourDataPhoneNumberElement, browser.getPageTimeout);
  await genericMethods.clickOnTAB(nawElements.yourDataHouseNumberAdditionElement);
  // regressie valt uit op mobiel telnr niet ingevuld
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
