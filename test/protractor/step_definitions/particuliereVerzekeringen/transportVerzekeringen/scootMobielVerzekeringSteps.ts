import {When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {ScootMobielVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/scootMobielVerzekeringElements";
import {NawElements} from "../../../pageobjects/generic/nawElements";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {GenericElements} from "../../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let scootMobielVerzekeringElements: ScootMobielVerzekeringElements = new ScootMobielVerzekeringElements();
let nawElements: NawElements = new NawElements();
let personaData: PersonaData = new PersonaData();



When(/^I enter step one page and click next on step two of scootmobiel verzekering with:$/, async function (data) {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.scootMobielClickElement);
  await genericMethods.typeText(scootMobielVerzekeringElements.purchasePriceInputElement, dataTable.purchasePrice);
  await genericMethods.clickOnNextButton();
  //click next on step two page.
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of scootmobiel verzekering with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.mainDriverYesClickElement);
  await genericMethods.clickOnElement(scootMobielVerzekeringElements.ownerYesClickElement);
  await genericMethods.typeText(scootMobielVerzekeringElements.brandNameInputElement, dataTable.brandName);
  await genericMethods.typeText(scootMobielVerzekeringElements.brandModelInputElement, dataTable.brandModel);
  await genericMethods.typeText(scootMobielVerzekeringElements.constructionYearInputElement, dataTable.constructionYear);
  await genericMethods.typeText(scootMobielVerzekeringElements.frameNumberInputElement, dataTable.frameNumber);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in your data page of scootmobiel verzekeringen$/, async (persona: string) => {
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
