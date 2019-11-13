import {When} from "cucumber";
import {genericMethods, schadeServiceElements} from "@support";

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

When(/^Verify (.*) is available on location (.*)$/, async (servicePointTitle: string, location: string) => {
  await genericMethods.verifyTextInElement(schadeServiceElements.getTitleForLocationTextElement(location), servicePointTitle);
});

