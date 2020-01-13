import {Then, When} from "cucumber";
import {genericMethods, schadeServiceElements} from "@support";
import {browser} from "protractor";

When(/^Customer selects (.*) for schade service (.*)$/, async (city: string, carCaravanCamper: string) => {
  switch (carCaravanCamper) {
    case "auto": {
      await genericMethods.typeText(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElement(schadeServiceElements.submitButtonClickElement);
      break;
    }
    case "caravan": {
      await genericMethods.clickOnElement(schadeServiceElements.selectCaravanClickElement);
      await genericMethods.typeText(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElement(schadeServiceElements.submitButtonClickElement);
      break;
    }
    case "camper": {
      await genericMethods.clickOnElement(schadeServiceElements.selectCamperClickElement);
      await genericMethods.clickOnElement(schadeServiceElements.selectBothClickElement);
      await genericMethods.typeText(schadeServiceElements.placeOrZipcodeInputElement, city);
      await genericMethods.clickOnElement(schadeServiceElements.submitButtonClickElement);
      break;
    }
    default: {
      throw new Error('The input: "" ' + carCaravanCamper + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});

When(/^Customer selects schadehersteller with (.*) on the map in city (.*)$/, async (schadeHerstellerName: string, city: string) => {
  await genericMethods.typeText(schadeServiceElements.placeOrZipcodeInputElement, city);
  await genericMethods.clickOnElement(schadeServiceElements.submitButtonClickElement);
  await genericMethods.waitForElementNotVisible(schadeServiceElements.locationFinderLoaderElement, browser.getPageTimeout);
  await genericMethods.clickOnElementWithXpath(schadeServiceElements.getLocationFinderClickElement(schadeHerstellerName));
});

Then(/^Verify (.*) is available on location (.*)$/, async (servicePointTitle: string, location: string) => {
  await genericMethods.verifyTextInElement(schadeServiceElements.getTitleForLocationTextElement(location), servicePointTitle);
});

Then(/^Verify (.*) and (.*) on (.*) are shown correctly when schadeservice is selected$/, async (address: string, openingHours: string, day: string) => {
  await genericMethods.verifyTextContainsInElement(schadeServiceElements.selectedSchadeServiceAddresTextElement, address, browser.getPageTimeout);
  await genericMethods.verifyTextInElementWithXpath(schadeServiceElements.getOpeningHoursDayTextElement(day), day);
  await genericMethods.verifyTextInElementContainsWithXpath(schadeServiceElements.getOpeningHoursDayHoursTextElement(day), openingHours);

});
