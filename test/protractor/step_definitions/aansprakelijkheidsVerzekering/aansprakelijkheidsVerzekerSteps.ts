import {When} from "cucumber";
import {browser} from "protractor";
import {AansprakelijkheidsVerzekeringMethods} from "../../pageobjects/aansprakelijkheidsVerzekering/aansprakelijkheidsVerzekeringMethods";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";

let aansprakelijkheidsVerzkeringMethods: AansprakelijkheidsVerzekeringMethods = new AansprakelijkheidsVerzekeringMethods();
let genericMethods: GenericMethods = new GenericMethods();

When(/^I enter step one page of aansprakelijkheids verzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await aansprakelijkheidsVerzkeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  await browser.sleep(10000);
});
