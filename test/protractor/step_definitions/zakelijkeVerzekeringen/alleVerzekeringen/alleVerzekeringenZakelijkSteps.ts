import {Then, When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";
import {AlleVerzekeringenZakelijkMethods} from "../../../pageobjects/zakelijkeVerzekeringen/alleVerzekeringen/alleVerzekeringenZakelijkMethods";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let alleVerzekeringenZakelijkMethods: AlleVerzekeringenZakelijkMethods = new AlleVerzekeringenZakelijkMethods();


When(/^I click on (.*) at the alle verzekeringen zakelijk page$/, async (buttonPage: string) => {
  await alleVerzekeringenZakelijkMethods.clickAlleVerzekeringInput(buttonPage);
});

Then(/^Verify elements on (.*) product page zakelijk is shown$/, async (buttonPage: string) => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {
  }
  await alleVerzekeringenZakelijkMethods.verifyAlleVerzekeringInput(buttonPage);
});

