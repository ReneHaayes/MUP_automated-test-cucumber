import {When} from "cucumber";
import {browser} from "protractor";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {WoonVerzekeringElements} from "../../pageobjects/woonVerzekering/woonVerzekeringElements";
import {PersonaData} from "../../pageobjects/persona/persona";
import {WoonVerzekeringMethods} from "../../pageobjects/woonVerzekering/woonVerzekeringMethods";

let genericMethods: GenericMethods = new GenericMethods();
let woonVerzekeringMethods: WoonVerzekeringMethods = new WoonVerzekeringMethods();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one page of woonverzekering for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(woonVerzekeringElements.zipCodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberInputElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberAddingInputElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnNextButton();

});

When(/^I fill in woningkenemerken with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await woonVerzekeringMethods.clickWallHouse(dataTable.wallHouse);
  await woonVerzekeringMethods.clickStrawRoofing(dataTable.strawRoofing);
  await woonVerzekeringMethods.clickOutHouse(dataTable.outHouse);
  await woonVerzekeringMethods.clickOwner(dataTable.ownerHouseRented);
  await woonVerzekeringMethods.clickAdditionalOption(dataTable.additionalOption);
  await woonVerzekeringMethods.clickIfInhabited(dataTable.inhabited);
  await genericMethods.typeText(woonVerzekeringElements.warrantyBirthdayElement, personaData.getPersonaBirthday(dataTable.persona));
  await genericMethods.clickOnNextButton();
  await browser.sleep(10000);

});
