import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {RoerendeZakenVerzekeringMethods} from "../../../pageobjects/zakelijk/bedrijfsMiddelenVerzekeringen/roerendeZakenVerzekeringMethods";
import {RoerendeZakenVerzekeringElements} from "../../../pageobjects/zakelijk/bedrijfsMiddelenVerzekeringen/roerendeZakenVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {CompanyData} from "../../../pageobjects/persona/company";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {GenericElements} from "../../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let roerendeZakenVerzekeringMethods: RoerendeZakenVerzekeringMethods = new RoerendeZakenVerzekeringMethods();
let roerendeZakenVerzekeringElements: RoerendeZakenVerzekeringElements = new RoerendeZakenVerzekeringElements();
let nawElements: NawElements = new NawElements();
let companyData: CompanyData = new CompanyData();
let personaData: PersonaData = new PersonaData();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one and step two page of roerende zakenverzekering for (.*) myself with:$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await roerendeZakenVerzekeringMethods.selectActivity(dataTable.activity);
  await genericMethods.clickOnElement(roerendeZakenVerzekeringElements.locationAtOnePlaceYesClickElement);
  await genericMethods.typeText(nawElements.riscAddressZipcodeInputElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.riscAddressZipcodeInputElement);
  await genericMethods.typeText(nawElements.riscAddressHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  await genericMethods.typeText(nawElements.riscAddressHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter your data page of roerende zakenverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.typeText(nawElements.companyDataNameInputElement, companyData.getCompanyName(company));
  await genericMethods.selectLegal(companyData.getCompanyLegal(company));
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataZipCodeInputElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.companyDataZipCodeInputElement);
  await genericMethods.typeText(nawElements.companyDataHouseNumberInputElement, companyData.getCompanyHouseNumber(company));
  await genericMethods.typeText(nawElements.companyDataHouseNumberAddingInputElement, companyData.getCompanyHouseNumberAdding(company));
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
