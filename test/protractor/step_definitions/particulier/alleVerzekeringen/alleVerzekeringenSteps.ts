import {Then, When} from "cucumber";
import {AlleVerzekeringenMethods} from "../../../pageobjects/particulier/alleVerzekeringen/alleVerzekeringenMethods";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let alleVerzekeringenMethods: AlleVerzekeringenMethods = new AlleVerzekeringenMethods();

When(/^I select (.*) and click on (.*) at the alle verzekeringen page$/, async (select: string, buttonPage: string) => {
  await alleVerzekeringenMethods.selectAlleVerzekeringDropdown(select);
  await alleVerzekeringenMethods.clickAlleVerzekeringInput(buttonPage);
});

Then(/^Verify elements on (.*) product page is shown$/, async (buttonPage: string) => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieElement);
  } catch (e) {
  }
  await alleVerzekeringenMethods.verifyAlleVerzekeringInput(buttonPage);
});

