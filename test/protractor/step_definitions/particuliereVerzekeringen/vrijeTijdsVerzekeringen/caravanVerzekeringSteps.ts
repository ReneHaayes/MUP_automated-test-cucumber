import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {CaravanVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/caravanVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {VehicleElements} from "../../../pageobjects/generic/vehicleElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let caravanVerzekeringElements: CaravanVerzekeringElements = new CaravanVerzekeringElements();
let nawElements: NawElements = new NawElements();
let vehicleElements: VehicleElements = new VehicleElements();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one and click next on step two of caravan verzekering$/, async () => {
  await genericMethods.clickOnElement(caravanVerzekeringElements.tourCaravanClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.searchCaravanDataClickElement);
  //Different page
  await genericMethods.selectInDropdown(vehicleElements.constructionYearSelectElement, vehicleElements.constructionYearSelect2018Element);
  await genericMethods.selectInDropdown(vehicleElements.brandNameSelectElement, vehicleElements.brandNameSelectAceElement);
  await genericMethods.selectInDropdown(vehicleElements.brandModelSelectElement, vehicleElements.brandModelSelectChampsElement);
  await genericMethods.selectInDropdown(vehicleElements.brandTypeSelectElement, vehicleElements.brandTypeSelectChamps330DDBasicElement);
  await genericMethods.clickOnElement(vehicleElements.confirmationButtonClickElement);
  //Back to step one page
  await genericMethods.clickOnElement(caravanVerzekeringElements.hailDamageNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.purchaseInfoClickNewElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.houseHouldEffectNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.moverNoClickElement);
  await genericMethods.clickOnElement(caravanVerzekeringElements.berforeTentNoClickElement);
  await genericMethods.clickOnNextButton();
  //Click Next on page two
  await genericMethods.clickOnNextButton();
});


When(/^I enter step three page of caravanverzekering for (.*) with:$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(caravanVerzekeringElements.caravanWeightInputElement, dataTable.weight);
  await genericMethods.typeText(caravanVerzekeringElements.caravanChassisNumberInputElement, dataTable.chassisNumber);
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
