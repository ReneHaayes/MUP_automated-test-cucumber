import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {ZakelijkTractorVerzekeringElements} from "../../../pageobjects/zakelijkeVerzekeringen/mobiliteitsVerzekeringen/zakelijkTractorVerzekeringElements";
import {VehicleElements} from "../../../pageobjects/generic/vehicleElements";
import {ZakelijkTractorVerzekeringMethods} from "../../../pageobjects/zakelijkeVerzekeringen/mobiliteitsVerzekeringen/zakelijkTractorVerzekeringMethods";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {CompanyData} from "../../../pageobjects/persona/company";
import {PersonaData} from "../../../pageobjects/persona/persona";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let vehicleElements: VehicleElements = new VehicleElements();
let nawElements: NawElements = new NawElements();
let companyData: CompanyData = new CompanyData();
let personaData: PersonaData = new PersonaData();
let zakelijkTractorVerzekeringElements: ZakelijkTractorVerzekeringElements = new ZakelijkTractorVerzekeringElements();
let zakelijkTractorVerzekerinigMethods: ZakelijkTractorVerzekeringMethods = new ZakelijkTractorVerzekeringMethods();

When(/^I enter step one page and click next on step two of zakelijk tractorverzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.searchTractorDataClickElement);
  await genericMethods.selectInDropdown(vehicleElements.constructionYearSelectElement, vehicleElements.constructionYearSelect2018Element);
  await genericMethods.selectInDropdown(vehicleElements.brandNameSelectElement, vehicleElements.brandNameSelectFerrariElement);
  await genericMethods.selectInDropdown(vehicleElements.brandModelSelectElement, vehicleElements.brandModelSelect304WElement);
  await genericMethods.clickOnElement(vehicleElements.confirmationButtonClickElement);
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.valueInputElement, dataTable.value);
  await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.accessoiresSelectElement, zakelijkTractorVerzekeringElements.accessoiresTm1000SelectElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.trackAndTraceSystemNoClickElement);
  await zakelijkTractorVerzekerinigMethods.selectMaximumSpeed(dataTable.maxSpeed);
  await genericMethods.selectInDropdown(zakelijkTractorVerzekeringElements.enginePowerSelectElement, zakelijkTractorVerzekeringElements.enginePower100PkSelectElement);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.usageOwnLawnClickElement);
  await genericMethods.clickOnNextButton();
  //click next on step two
  await genericMethods.clickOnNextButton()
});

When(/^I enter step three page of zakelijk tractorverzekeringen with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.licensePlateInputElement, dataTable.licensePlate);
  await genericMethods.clickOnTAB(zakelijkTractorVerzekeringElements.licensePlateInputElement);
  await genericMethods.typeText(zakelijkTractorVerzekeringElements.chassisNumberInputElement, dataTable.chassisNumber);
  await genericMethods.clickOnElement(zakelijkTractorVerzekeringElements.ownerYesClickElement);
  await genericMethods.clickOnNextButton()
});

When(/^I enter step four page of zakelijk tractorverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
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
