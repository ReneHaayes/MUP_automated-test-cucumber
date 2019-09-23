import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {OngevallenVerzekeringMethods} from "../../../pageobjects/particuliereVerzekeringen/gezondheidsVerzekeringen/ongevallenVerzekeringMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {OngevallenVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/gezondheidsVerzekeringen/ongevallenVerzekeringElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let ongevallenVerzekeringMethods: OngevallenVerzekeringMethods = new OngevallenVerzekeringMethods();
let ongevallenVerzekeringElements: OngevallenVerzekeringElements = new OngevallenVerzekeringElements();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one page of ongevallenverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await ongevallenVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  //Click on Next at step two page
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of ongevallen verzekeringen$/, async (persona: string) => {
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
  //Click yes on all insured are healthy on step our page.
  await genericMethods.clickOnElement(ongevallenVerzekeringElements.allInsuredHealthyYesClickElement);
});
