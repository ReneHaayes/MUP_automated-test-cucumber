import {When} from "cucumber";
import {genericMethods, schadeServiceElements} from "@support";
import {browser} from "protractor";

When(/^Customer selects (.*) for schade service$/, async (city: string) => {
  await genericMethods.typeText(schadeServiceElements.placeOrZipcodeInputElement, city);
  await genericMethods.clickOnElement(schadeServiceElements.submitButtonClickElement);
  await browser.sleep(5000);
});

When(/^Verify (.*) is available on location (.*)$/, async (servicePointTitle: string, location: string) => {
  await genericMethods.verifyTextInElement(schadeServiceElements.getTitleForLocationTextElement(location), servicePointTitle);
});
