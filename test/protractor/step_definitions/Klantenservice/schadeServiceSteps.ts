import {Then, When} from "cucumber";
import {genericMethods, schadeServiceElements} from "@support";
import {browser} from "protractor";

When(/^Customer selects (.*) for schade service (.*)$/, async (city: string, carCaravanCamper: string) => {
  switch (carCaravanCamper) {
    case "auto": {
      await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
      break;
    }
    case "caravan": {
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.selectCaravanClickElement);
      await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
      break;
    }
    case "camper": {
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.selectCamperClickElement);
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.selectAutoClickElement);
      await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
      break;
    }
    default: {
      throw new Error('The input: "" ' + carCaravanCamper + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});

When(/^Customer typs (.*) for winkelzoeker$/, async (city: string) => {
  await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
  await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
});

When(/^Customer selects schadehersteller with (.*) on the map in city (.*)$/, async (schadeHerstellerName: string, city: string) => {
  await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
  await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
  await genericMethods.waitForElementNotVisibleShadowRoot(schadeServiceElements.locationFinderLoaderElement, browser.getPageTimeout);
  await genericMethods.clickOnElementShadowRootHideElements(schadeServiceElements.getLocationFinderClickElement(schadeHerstellerName));
});

Then(/^Verify (.*) is available on location (.*)$/, async (servicePointTitle: string, location: string) => {
  await genericMethods.verifyTextInElementShadowRoot(schadeServiceElements.getTitleForLocationTextElement(location), servicePointTitle);
});

Then(/^Verify (.*) and (.*) are shown correctly when schadeservice is selected$/, async (address: string, openingHours: string) => {
  await genericMethods.verifyTextInElementShadowRoot(schadeServiceElements.selectedSchadeServiceAddresTextElement, address);
  await genericMethods.verifyTextContainsInElementShadowRoot(schadeServiceElements.getOpeningHoursDayHoursTextElement, openingHours, browser.getPageTimeout);

});
