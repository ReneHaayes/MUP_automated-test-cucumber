import {When} from "cucumber";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {ReisVerzekeringElements} from "../../pageobjects/reisVerzekering/reisVerzekeringElements";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {GenericElements} from "../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one and step two page of doorlopende reisverzekering for myself$/, async () => {
  await genericMethods.clickOnElement(reisVerzekeringElements.whoToInsureMySelfClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of doorlopende reisverzekering$/, async (persona: string) => {
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
