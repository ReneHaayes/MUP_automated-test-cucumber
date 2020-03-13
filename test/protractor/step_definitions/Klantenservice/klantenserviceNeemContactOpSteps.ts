import {Then, When} from "cucumber";
import {genericMethods, klantenserviceNeemContactOpElements} from "@support";

When(/^Customer selects (.*) to neem contact op in klantenservice page$/, async (neemContactOpTile: string) => {
  await genericMethods.clickOnElement(klantenserviceNeemContactOpElements.neemContactOpClickElement(neemContactOpTile));
});

Then(/^Verify tile (.*) for neem contact op at klantenservice is open and the other tile (.*) is close$/, async (neemContactOpTile: string, neemContactOpIngeklapt: string) => {
  await genericMethods.waitForElementIsVisibleShadowRoot(klantenserviceNeemContactOpElements.tileUitgeklaptElement(neemContactOpTile), 10000);
  await genericMethods.waitForElementIsPresentShadowRoot(klantenserviceNeemContactOpElements.tileIngeklaptElement(neemContactOpIngeklapt), 10000);
});
