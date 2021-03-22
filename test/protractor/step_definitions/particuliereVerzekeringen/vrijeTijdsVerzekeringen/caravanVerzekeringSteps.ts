import {When} from 'cucumber';
import {
  caravanVerzekeringElements,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  vehicleElements
} from '@support';
import {browser} from 'protractor';

When(/^I enter step one and click next on step two of caravan verzekering$/, async () => {
  await genericMethods.clickOnElement(caravanVerzekeringElements.tourCaravanClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.searchCaravanDataClickElement);
  // In step one page go to search caravan data (subpage)
  await genericMethods.waitForElementIsVisible(vehicleElements.constructionYearSelectElement, browser.getPageTimeout);
  await genericMethods.selectInDropdown(vehicleElements.constructionYearSelectElement, vehicleElements.constructionYearSelect2018Element);
  await genericMethods.selectInDropdown(vehicleElements.brandNameSelectElement, vehicleElements.brandNameSelectCaravanElement);
  await genericMethods.selectInDropdown(vehicleElements.brandModelSelectElement, vehicleElements.brandModelSelectCaravanElement);
  await genericMethods.selectInDropdown(vehicleElements.brandTypeSelectElement, vehicleElements.brandTypeSelectCaravanElement);
  await genericMethods.clickOnElement(vehicleElements.confirmationButtonClickElement);
  // Back to step one page
  await genericMethods.waitForElementIsVisible(caravanVerzekeringElements.hailDamageNoClickElement, browser.getPageTimeout)
  await genericMethods.clickOnElement(caravanVerzekeringElements.hailDamageNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.purchaseInfoClickNewElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.houseHouldEffectNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.moverNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.berforeTentNoClickElement);
  await genericMethods.clickOnNextButton();
  // Click Next on page two
  await genericMethods.clickOnNextButton();
});


When(/^I enter step three page of caravanverzekering for (.*) with:$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(caravanVerzekeringElements.caravanWeightInputElement, dataTable.weight);
  await genericMethods.typeText(caravanVerzekeringElements.caravanChassisNumberInputElement, dataTable.chassisNumber);
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
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
