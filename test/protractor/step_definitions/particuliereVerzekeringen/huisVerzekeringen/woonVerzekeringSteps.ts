import {Then, When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {WoonVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/huisVerzekeringen/woonVerzekeringElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {WoonVerzekeringMethods} from "../../../pageobjects/particuliereVerzekeringen/huisVerzekeringen/woonVerzekeringMethods";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {GenericElements} from "../../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let woonVerzekeringMethods: WoonVerzekeringMethods = new WoonVerzekeringMethods();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();
let personaData: PersonaData = new PersonaData();
let nawElements: NawElements = new NawElements();
let genericElements: GenericElements = new GenericElements();

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
});

When(/^I enter details of (.*) in step four page of woonverzekering$/, async (persona: string) => {
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


When(/^I press the button (.*) for the following persona (.*) on the page for woonverzekering/, async (button: string, persona: string) => {
  await woonVerzekeringMethods.clickOnWoonverzekering(button, persona);
});

Then(/^House data for woonverzekering (.*) appears$/, async (dodont: string) => {
  await woonVerzekeringMethods.checkWoonVerzekeringPage(dodont);
});
