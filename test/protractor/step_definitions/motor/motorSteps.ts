import {When} from "cucumber";
import {MotorMethods} from "../../pageobjects/motor/motorMethods";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {MotorElements} from "../../pageobjects/motor/motorElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {AutoVerzekeringElements} from "../../pageobjects/autoVerzekering/autoVerzekeringElements";
import {GenericElements} from "../../pageobjects/generic/genericElements";

let motorMethods: MotorMethods = new MotorMethods();
let genericMethods: GenericMethods = new GenericMethods();
let motorElements: MotorElements = new MotorElements();
let personaData: PersonaData = new PersonaData();
let nawElements: NawElements = new NawElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one page for motor with license plate (.*) with:$/, async (licensePlate: string, data) => {
  const dataTable = data.rowsHash();
  await motorMethods.enterLicensePlate(licensePlate);
  await motorMethods.clickNewOrSecondHandMotor('secondhand');
  await genericMethods.typeText(motorElements.purchaseDateElement, dataTable.purchaseDate);
  await motorMethods.clickAlarmSystem(dataTable.alarmSystem);
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateElement, personaData.getPersonaBirthday(dataTable.persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderBirthdateElement);
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeElement, personaData.getPersonaZipcode(dataTable.persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnTAB(autoVerzekeringElements.damageFreeYearsElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of motor with$/, async (data) => {
  const dataTable = data.rowsHash();
  await motorMethods.clickOnBasisDekking(dataTable.basisDekking);
  await motorMethods.selectAcc(dataTable.accessoires);
  await motorMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of motor with$/, async (data) => {
  const dataTable = data.rowsHash();
  await motorMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await motorMethods.additionalDataVehicle(dataTable.licensePlate);
  await genericMethods.typeText(motorElements.dateOfNameMopedElement, dataTable.dateOfName);
  await genericMethods.clickOnTAB(motorElements.dateOfNameMopedElement);
  await genericMethods.typeText(motorElements.meldCodeElement, dataTable.meldCode);
  await motorMethods.clickMainDriver(dataTable.mainDriver);
  await motorMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of motor$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
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
