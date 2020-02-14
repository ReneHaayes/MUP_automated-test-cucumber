import {Then, When} from "cucumber";
import {alleVerzekeringenElements, alleVerzekeringenMethods, genericElements, genericMethods} from "@support";

When(/^I select (.*) and click on (.*) at the alle verzekeringen page$/, async (select: string, buttonPage: string) => {
  await alleVerzekeringenMethods.selectAlleVerzekeringDropdown(select);
  await alleVerzekeringenMethods.clickAlleVerzekeringInput(buttonPage);
});

When(/^I select (.*) and click on (.*) at the alle verzekeringen bottom page$/, async (select: string, buttonPage: string) => {
  await alleVerzekeringenMethods.selectAlleVerzekeringDropdown(select);
  await alleVerzekeringenMethods.clickAlleVerzekeringBottomInput(buttonPage);
});

Then(/^Verify elements on (.*) product page is shown$/, async (buttonPage: string) => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {
  }
  await alleVerzekeringenMethods.verifyAlleVerzekeringInput(buttonPage);
});

Then(/^Verify calamiteiten page is shown correctly$/, async () => {
  await genericMethods.verifyTextInElementShadowRoot(alleVerzekeringenElements.calamiteitenFirstTileTitleTextElement, 'Aanslagen');
});
