// @ts-ignore
import {Given, When, Then} from 'cucumber';
import {BedrijfsAutoVerzekeringMethods} from "../../pageobjects/autoVerzekering/bedrijfsAutoVerzekeringMethods";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {BedrijfsAutoVerzekeringElements} from "../../pageobjects/autoVerzekering/bedrijfsAutoVerzekeringElements";
import {CompanyData} from "../../pageobjects/persona/company";
import {AutoVerzekeringElements} from "../../pageobjects/autoVerzekering/autoVerzekeringElements";
import {VehicleElements} from "../../pageobjects/generic/vehicleElements";
import {BusinessCarWithLicensePlate} from "../../pageobjects/vehicles/businessCarWithLicensePlate";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {GenericElements} from "../../pageobjects/generic/genericElements";

let bedrijfsAutoVerzekeringMethods: BedrijfsAutoVerzekeringMethods = new BedrijfsAutoVerzekeringMethods();
let bedrijfsAutoVerzekeringElements: BedrijfsAutoVerzekeringElements = new BedrijfsAutoVerzekeringElements();
let genericMethods: GenericMethods = new GenericMethods();
let companyData: CompanyData = new CompanyData();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let vehicleElements: VehicleElements = new VehicleElements();
let businessCarWithLicensePlate: BusinessCarWithLicensePlate = new BusinessCarWithLicensePlate();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one page of bedrijfs autoverzekeringen for (.*) with$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await bedrijfsAutoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.businessClickElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.deductVatYesElement);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.ownProductsYesElement);
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.zipCodeInputElement, companyData.getCompanyZipcode(company));
  await bedrijfsAutoVerzekeringMethods.clickOnYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.permanentDriverNoElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of bedrijfs autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bedrijfsAutoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bedrijfs autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, dataTable.startDate);
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.startDateOnYourNameElement, dataTable.startDateOnYourName);
  await genericMethods.typeText(bedrijfsAutoVerzekeringElements.reportingCode, businessCarWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.differentUserYesElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of bedrijfs autoverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.typeText(nawElements.companyDataNameInputElement, companyData.getCompanyName(company));
  await genericMethods.selectLegal(companyData.getCompanyLegal(company));
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
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
