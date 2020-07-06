import {Then, When} from "cucumber";
import {alleVerzekeringenZakelijkMethods, genericElements, genericMethods} from "@support";


When(/^I click on (.*) at the alle verzekeringen zakelijk page$/, async (buttonPage: string) => {
  await alleVerzekeringenZakelijkMethods.clickAlleVerzekeringInput(buttonPage);
});

Then(/^Verify elements on (.*) product page zakelijk is shown$/, async (buttonPage2: string) => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {
  }
  await alleVerzekeringenZakelijkMethods.verifyAlleVerzekeringInput(buttonPage2);
});

