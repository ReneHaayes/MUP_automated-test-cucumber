import {Then, When} from 'cucumber';
import {
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  vehicleElements,
  woonVerzekeringElements,
  woonVerzekeringMethods
} from '@support';


When(/^I enter step one page of woonverzekering for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(woonVerzekeringElements.zipCodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberInputElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberAddingInputElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnNextButton();
});

When(/^I fill in woningkenmerken with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await woonVerzekeringMethods.clickWallHouse(dataTable.wallHouse);
  await woonVerzekeringMethods.clickStrawRoofing(dataTable.strawRoofing);
  await woonVerzekeringMethods.clickOutHouse(dataTable.outHouse);
  await woonVerzekeringMethods.clickOwner(dataTable.ownerHouse);
  await woonVerzekeringMethods.clickIfInhabited(dataTable.inhabited);
  await genericMethods.typeText(woonVerzekeringElements.warrantyBirthdayElement, personaData.getPersonaBirthDate(dataTable.persona));
  await genericMethods.clickOnNextButton();
});

When(/^I choose the correct premie with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await woonVerzekeringMethods.clickSuperficiesAndContents(dataTable.superficiesAndContents);
  await genericMethods.clickOnElement(woonVerzekeringElements.mainCoverageContentsBasicElement);
  await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsGlassBreakageElement);
  await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsVoluntaryRiskElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of woonverzekering$/, async (persona: string) => {
  await genericMethods.clickOnTAB(vehicleElements.startDateElement);
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataLastNameElement);
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
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


When(/^I press the button (.*) for the following persona (.*) on the page for woonverzekering/, async (button: string, persona: string) => {
  await woonVerzekeringMethods.clickOnWoonverzekering(button, persona);
});

Then(/^House data for woonverzekering (.*) appears$/, async (willWont: string) => {
  await woonVerzekeringMethods.checkWoonVerzekeringPage(willWont);
});
