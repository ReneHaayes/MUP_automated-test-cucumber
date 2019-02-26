import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {ZakelijkRechtsBijstandVerzekeringElements} from "../../../pageobjects/zakelijk/bedrijfsActiviteitenVerzekeringen/zakelijkRechtsBijstandVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {CompanyData} from "../../../pageobjects/persona/company";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {EigenVervoerVerzekeringMethods} from "../../../pageobjects/zakelijk/mobiliteitsVerzekeringen/eigenVervoerVerzekeringMethods";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let personaData: PersonaData = new PersonaData();
let companyData: CompanyData = new CompanyData();
let nawElements: NawElements = new NawElements();
let zakelijkRechtsBijstandVerzekeringElements: ZakelijkRechtsBijstandVerzekeringElements = new ZakelijkRechtsBijstandVerzekeringElements();
let eigenVervoerVerzekeringMethods: EigenVervoerVerzekeringMethods = new EigenVervoerVerzekeringMethods();

When(/^I enter step one page and click next on step two of zakelijk rechtsbijstand verzekering with:$/, async function (data) {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.activityZZPClickElement);
  await eigenVervoerVerzekeringMethods.selectActivity(dataTable.activity);
  await genericMethods.clickOnNextButton();
  //click on next at step two
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of zakelijk rechtsbijstand verzekering with:$/, async function (data) {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(zakelijkRechtsBijstandVerzekeringElements.activityInfoInputElement, dataTable.activityInformation);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of zakelijk rechtsbijstandverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
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

When(/^I enter almost insured question for zakelijk rechtsbijstand verzekering with no$/, async function () {
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.legalDifferenceWithinFiveYearsNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.beroepOpVerzekeringNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.bestemmingsplanDifferenceNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.moreThanTenMoneyDemandNoClickElement);
});