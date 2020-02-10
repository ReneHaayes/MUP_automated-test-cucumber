import {Then, When} from "cucumber";
import {genericElements, genericMethods, hmPageElements, visualMethods} from "@support";
import {browser} from "protractor";

When(/^The page waits for licenseplate element is visible$/, async () => {
  await genericMethods.waitForElementIsVisible(hmPageElements.licensePlateWidgetInputElement, browser.getPageTimeout);
});

Then(/^Verify visual elements are the same for home compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.waitForElementNotVisible(genericElements.cookieClickElement, browser.getPageTimeout);
  await visualMethods.makeScreenshotAndVerifyWithBaseline(baseImage, 'home');
});

Then(/^Verify visual elements are the same for product pages compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.waitForElementNotVisible(genericElements.cookieClickElement, browser.getPageTimeout);
  await visualMethods.makeScreenshotAndVerifyWithBaselineSetSize(baseImage, 1920, 12500);
});
