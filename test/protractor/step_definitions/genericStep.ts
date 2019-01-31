import {Given, Then} from 'cucumber';
import {GenericMethods} from "../pageobjects/generic/genericMethods";
import {GenericElements} from "../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();

Given(/^I am on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
  await genericMethods.clickOnElement(genericElements.cookieElement);
});

Then(/^The thank you page for (.*) is shown$/, async (persona: string) => {
  await genericMethods.verifyThankYouPageTitle(persona);
});
