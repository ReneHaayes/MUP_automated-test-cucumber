import {When} from "cucumber";
import {browser} from "protractor";
import {AansprakelijkheidsVerzekeringMethods} from "../../pageobjects/aansprakelijkheidsVerzekering/aansprakelijkheidsVerzekeringMethods";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {ZorgeloosOnlineVerzekeringElements} from "../../pageobjects/zorgeloosOnlineVerzekering/zorgeloosOnlineVerzekeringElements";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {GenericElements} from "../../pageobjects/generic/genericElements";
import {ZorgeloosOnlineVerzekeringMethods} from "../../pageobjects/zorgeloosOnlineVerzekering/zorgeloosOnlineVerzekeringMethod";

let aansprakelijkheidsVerzekeringMethods: AansprakelijkheidsVerzekeringMethods = new AansprakelijkheidsVerzekeringMethods();
let zorgeloosOnlineVerzekeringElements: ZorgeloosOnlineVerzekeringElements = new ZorgeloosOnlineVerzekeringElements();
let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();
let zorgeloosOnlineVerzekeringMethod: ZorgeloosOnlineVerzekeringMethods = new ZorgeloosOnlineVerzekeringMethods();

When(/^I enter step one page of zorgeloos onlineverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await aansprakelijkheidsVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
});

When(/^I check step two page with premie for zorgeloos onlineverzekering is shown$/, async () => {
  await genericMethods.waitForElementIsVisible(zorgeloosOnlineVerzekeringElements.premieZorgeloosOnlineVerzekeringTextElement, browser.getPageTimeout)
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) on step three page of zorgeloos onlineverzekering$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthday(persona));
  await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.selectYourDataSpecificIdentification(personaData.getPersonaSpecificIdentification(persona), persona);
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I fill in step four of zorgeloos onlineverzekering page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentPresent(dataTable.cyberIncidentPresent);
  await zorgeloosOnlineVerzekeringMethod.selectCyberIncidentRecent(dataTable.cyberIncidentRecent);
  await zorgeloosOnlineVerzekeringMethod.selectDamageHistoryZorgeloosOnline(dataTable.damageHistoryZorgeloosOnline);
  await zorgeloosOnlineVerzekeringMethod.selectInsuranceHistoryZorgeloosOnline(dataTable.insuranceHistoryZorgeloosOnline);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.clickOnFinishButton();
});

