import {When} from "cucumber";
import {browser} from "protractor";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {WoonVerzekeringElements} from "../../pageobjects/woonVerzekering/woonVerzekeringElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {WoonVerzekeringMethods} from "../../pageobjects/woonVerzekering/woonVerzekeringMethods";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {GenericElements} from "../../pageobjects/generic/genericElements";
import {genericEnum} from "../../pageobjects/enum/genericEnum";

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
  await genericMethods.typeText(woonVerzekeringElements.warrantyBirthdayElement, personaData.getPersonaBirthday(dataTable.persona));
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
  await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.selectYourDataSpecificIdentification(personaData.getPersonaSpecificIdentification(persona), persona);
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I fill in step five of woonverzekering page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
  await browser.sleep(10000);
});

