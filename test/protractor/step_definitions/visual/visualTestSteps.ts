import {Then, When} from "cucumber";
import {genericElements, genericMethods, hmPageElements} from "@support";
import {browser} from "protractor";

When(/^The page waits for licenseplate element is visible$/, async () => {
  await genericMethods.waitForElementNotVisible(genericElements.cookieClickElement, browser.getPageTimeout);
  await genericMethods.waitForElementIsVisible(hmPageElements.licensePlateWidgetInputElement, browser.getPageTimeout);
});

Then(/^Verify visual elements are the same compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.makeScreenshotAndVerifyWithBaseline(baseImage);
});
