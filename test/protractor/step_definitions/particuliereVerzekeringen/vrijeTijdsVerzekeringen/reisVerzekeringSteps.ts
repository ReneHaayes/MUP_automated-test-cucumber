import {When, Then} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {ReisVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/reisVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {ReisVerzekeringMethods} from "../../../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/reisVerzekeringMethods";

let genericMethods: GenericMethods = new GenericMethods();
let reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();
let reisVerzekeringMethods: ReisVerzekeringMethods = new ReisVerzekeringMethods();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one and step two page of doorlopende verzekeringen for myself$/, async () => {
  await genericMethods.clickOnElement(reisVerzekeringElements.whoToInsureMySelfClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of reis verzekeringen$/, async (persona: string) => {
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

When(/^I enter step one and step two page of kortlopende reisverzekering for myself with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await reisVerzekeringMethods.selectChildrenTillFourYears(dataTable.childrenTillFourYears);
  await genericMethods.typeText(reisVerzekeringElements.leavingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.returnDateInputElement, genericMethods.getDate('seven days'));
  await genericMethods.clickOnElement(reisVerzekeringElements.cancelationCoverageNoClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});


When(/^I enter step one and step two page of kortlopende annuleringsverzekering for myself with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await reisVerzekeringMethods.selectChildrenTillFourYears(dataTable.childrenTillFourYears);
  await genericMethods.typeText(reisVerzekeringElements.leavingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.returnDateInputElement, genericMethods.getDate('seven days'));
  await genericMethods.typeText(reisVerzekeringElements.bookdateTripInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.totalValueOfTripInputElement, dataTable.totalValue);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I click on the (.*) to insure$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.selectFamilyMembers(familyMembers);

});

Then(/^the (.*) I have checked are present on the page$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.checkFamilyMemberCheckedOnStepOne(familyMembers);

});

