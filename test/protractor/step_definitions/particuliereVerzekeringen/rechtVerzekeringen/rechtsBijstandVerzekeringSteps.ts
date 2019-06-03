import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {RechtsBijstandVerzekeringMethods} from "../../../pageobjects/particuliereVerzekeringen/rechtVerzekeringen/rechtsBijstandVerzekeringMethods";
import {RechtsBijstandVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/rechtVerzekeringen/rechtsBijstandVerzekeringElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();
let rechtsBijstandVerzekeringMethods: RechtsBijstandVerzekeringMethods = new RechtsBijstandVerzekeringMethods();
let rechtsBijstandVerzekeringElements: RechtsBijstandVerzekeringElements = new RechtsBijstandVerzekeringElements();

When(/^I enter step one page of rechtsbijstandverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await rechtsBijstandVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  //Click on Next at step two page
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of rechtsbijstand verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthDate(persona));
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
  //Click no ona are their special facts and circumstances, at next page.
  await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.specialFactsNoClickElement);
});
