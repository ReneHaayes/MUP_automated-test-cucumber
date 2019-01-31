// @ts-ignore
import {Given, When, Then} from 'cucumber';
import {AutoVerzekeringMethods} from '../../pageobjects/autoVerzekering/autoVerzekeringMethods';
import {browser} from 'protractor';
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../pageobjects/generic/genericElements";
import {AutoVerzekeringElements} from "../../pageobjects/autoVerzekering/autoVerzekeringElements";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {CarWithLicensePlate} from "../../pageobjects/car/carWithLicensePlate";
import {PersonaData} from "../../pageobjects/persona/persona";
import {AutoVerzekeringElementsStepThree} from "../../pageobjects/autoVerzekering/autoVerzekeringElementsStepThree";
import {AutoVerzekeringMethodsStepThreeAndFour} from "../../pageobjects/autoVerzekering/autoVerzekeringMethodsStepThreeAndFour";
import {yesNo} from "../../pageobjects/enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringMethods: AutoVerzekeringMethods = new AutoVerzekeringMethods();
let autoVerzekeringMethodsStepThreeAndFour: AutoVerzekeringMethodsStepThreeAndFour = new AutoVerzekeringMethodsStepThreeAndFour();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let autoVerzekeringElementsStepThree: AutoVerzekeringElementsStepThree = new AutoVerzekeringElementsStepThree();
let nawElements: NawElements = new NawElements()
let carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one page of autoverzekeringen for (.*) with$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateElement, personaData.getPersonaBirthday(persona));
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeElement);
  await autoVerzekeringMethods.selectIfYouAlreadyHaveACarAtUnive(dataTable.alreadyMember);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter the following license plate (.*)$/, async (licensePlate: string) => {
  await autoVerzekeringMethods.enterLicensePlate(licensePlate);
});

Then(/^The (.*) data correctly appears$/, async (licensePlate: string) => {
  await genericMethods.verifyTextInElement(autoVerzekeringElements.brandElement, carWithLicensePlate.getCarBrandName(licensePlate));
  await genericMethods.verifyTextInElement(autoVerzekeringElements.typeElement, carWithLicensePlate.getCarBrandType(licensePlate));
  await genericMethods.verifyTextInElement(autoVerzekeringElements.constructionYearElement, carWithLicensePlate.getCarConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(autoVerzekeringElements.modelElement, carWithLicensePlate.getCarModel(licensePlate));
  await genericMethods.verifyTextInElement(autoVerzekeringElements.bodyTypeElement, carWithLicensePlate.getCarBodyType(licensePlate));
  await genericMethods.verifyTextInElement(autoVerzekeringElements.fuelTypeElement, carWithLicensePlate.getCarFuelType(licensePlate));
});

When(/^I enter step two page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectOwnRisk(dataTable.ownRisk);
  await autoVerzekeringMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await autoVerzekeringMethods.selectTotalPremie(dataTable.totalPremie);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  //INSERT DATE INFORMATION
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateElement, dataTable.startDate);
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
  await autoVerzekeringMethodsStepThreeAndFour.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await autoVerzekeringMethodsStepThreeAndFour.selectYourDataSpecificIdentification(personaData.getPersonaSpecificIdentification(persona), persona);
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step five page of autoverzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethodsStepThreeAndFour.selectInsuranceHistory(dataTable.insuranceHistory, yesNo.EMPTY);
  await autoVerzekeringMethodsStepThreeAndFour.selectCriminalHistory(dataTable.criminalHistory);
  await autoVerzekeringMethodsStepThreeAndFour.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
});

Then(/^The thank you page for (.*) is shown$/, async (persona: string) => {
  await genericMethods.verifyThankYouPageTitle(persona);
});
