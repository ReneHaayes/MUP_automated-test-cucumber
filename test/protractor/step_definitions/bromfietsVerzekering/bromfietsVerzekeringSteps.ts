import {When} from "cucumber";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {VehicleElements} from "../../pageobjects/generic/vehicleElements";
import {MopedWithLicensePlate} from "../../pageobjects/vehicles/mopedWithLicensePlate";
import {BromfietsVerzekeringMethods} from "../../pageobjects/bromfietsVerzekering/bromfietsVerzekeringMethods";
import {PersonaData} from "../../pageobjects/persona/persona";
import {NawElements} from "../../pageobjects/generic/nawElements";
import {GenericElements} from "../../pageobjects/generic/genericElements";
import {genericEnum} from "../../pageobjects/enum/genericEnum";
import {browser} from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let bromfietsVerzekeringElements: VehicleElements = new VehicleElements();
let bromfietsVerzekeringMethods: BromfietsVerzekeringMethods = new BromfietsVerzekeringMethods();
let mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();
let personaData: PersonaData = new PersonaData();
let nawElements: NawElements = new NawElements();
let genericElements: GenericElements = new GenericElements();

When(/^I enter step one page of bromfiets verzekering for persona (.*) with license plate (.*) and (.*) damage free years$/, async (persona: string,
                                                                                                                                    licensePlate: string, damageFreeYears: string) => {
  await bromfietsVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));
  await bromfietsVerzekeringMethods.selectKindOfVehicle(mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.typeText(bromfietsVerzekeringElements.birthDateElement, personaData.getPersonaBirthday(persona))
  await genericMethods.typeText(bromfietsVerzekeringElements.zipCodeElement, personaData.getPersonaZipcode(persona))
  await genericMethods.typeText(bromfietsVerzekeringElements.damageFreeYearsElement, damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of bromfiets verzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bromfietsVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await bromfietsVerzekeringMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await bromfietsVerzekeringMethods.selectAcc(dataTable.accessoires);
  await bromfietsVerzekeringMethods.selectOwnRisk(dataTable.ownRisk);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bromfiets verzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bromfietsVerzekeringMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await genericMethods.typeText(bromfietsVerzekeringElements.dateOfNameMopedElement, dataTable.dateOfName);
  await genericMethods.clickOnTAB(bromfietsVerzekeringElements.dateOfNameMopedElement);
  await genericMethods.typeText(bromfietsVerzekeringElements.meldCodeElement, dataTable.meldCode);
  await genericMethods.typeText(bromfietsVerzekeringElements.purchasePriceElement, dataTable.purchasePrice);
  await bromfietsVerzekeringMethods.clickOnDamageFreeYearsOfDifferentCompany(dataTable.damageFreeYearsDifferentCompany);
  await bromfietsVerzekeringMethods.clickMainDriver(dataTable.mainDriver);
  await bromfietsVerzekeringMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of bromfiets verzekering$/, async (persona: string) => {
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

When(/^I fill in step four of bromfiets verzekering page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
});
