import {When} from "cucumber";
import {browser} from "protractor";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {WoonVerzekeringElements} from "../../pageobjects/woonVerzekering/woonVerzekeringElements";
import {PersonaData} from "../../pageobjects/persona/persona";

let genericMethods: GenericMethods = new GenericMethods();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one page of woonverzekering for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(woonVerzekeringElements.zipCodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberInputElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(woonVerzekeringElements.houseNumberAddingInputElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnNextButton();
  await browser.sleep(10000);

});
