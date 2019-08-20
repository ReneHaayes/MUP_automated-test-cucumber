// @ts-ignore
import {Given, When, Then} from 'cucumber';
import {AutoVerzekeringMethods} from '../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringMethods';
import {browser} from 'protractor';
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {AutoVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {AutoVerzekeringElementsStepThree} from "../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringElementsStepThree";
import {AutoVerzekeringMethodsStepThreeAndFour} from "../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringMethodsStepThreeAndFour";
import {VehicleElements} from "../../../pageobjects/generic/vehicleElements";
import {CarWithLicensePlate} from "../../../pageobjects/vehicles/carWithLicensePlate";
import {CompanyData} from "../../../pageobjects/persona/company";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringMethods: AutoVerzekeringMethods = new AutoVerzekeringMethods();
let autoVerzekeringMethodsStepThreeAndFour: AutoVerzekeringMethodsStepThreeAndFour = new AutoVerzekeringMethodsStepThreeAndFour();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let autoVerzekeringElementsStepThree: AutoVerzekeringElementsStepThree = new AutoVerzekeringElementsStepThree();
let nawElements: NawElements = new NawElements()
let carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();
let personaData: PersonaData = new PersonaData();
let vehicleElements: VehicleElements = new VehicleElements();
let companyData: CompanyData = new CompanyData();

When(/^I enter step one page of autoverzekeringen for (.*) with$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeElement);
  await autoVerzekeringMethods.selectIfYouAlreadyHaveACarAtUnive(dataTable.alreadyMember);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectOwnRisk(dataTable.ownRisk);
  await autoVerzekeringMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await genericMethods.typeText(autoVerzekeringElements.collectiveInputElement, dataTable.collective);
  await genericMethods.clickOnElement(autoVerzekeringElements.collectiveAutoCompleteClickElement);
  await genericMethods.verifyTextContainsInElement(autoVerzekeringElements.collectiveResultTextElement, dataTable.collective, browser.getPageTimeout);
  await autoVerzekeringMethods.selectTotalPremie(dataTable.totalPremie);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, dataTable.startDate);
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourNameElement, dataTable.startDateOnYourName);
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await autoVerzekeringMethodsStepThreeAndFour.clickOnMainDriver(dataTable.mainDriver);
  await autoVerzekeringMethodsStepThreeAndFour.clickOnOwnerCar(dataTable.ownerCar);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of autoverzekering for (.*)$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one page of personen autoverzekeringen zakelijk for (.*) with:$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath
    + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(autoVerzekeringElements.sameDriverNoClickElement);
  await genericMethods.typeText(autoVerzekeringElements.sameDriverZipCodeCompanyElement, companyData.getCompanyZipcode(company));
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourCompanyElement, genericMethods.getDate(dataTable.startDateOnYourName));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  //INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarCompanyYesClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of personenautoverzekering zakelijk for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
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
