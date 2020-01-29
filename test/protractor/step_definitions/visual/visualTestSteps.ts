import {Then, When} from "cucumber";
import {genericMethods, hmPageElements, visualElements} from "@support";
import {browser} from "protractor";


When(/^The page waits for licenseplate element is visible$/, async () => {
  await genericMethods.waitForElementIsVisible(hmPageElements.licensePlateWidgetInputElement, browser.getPageTimeout);
});

Then(/^Verify visual elements on the homepage are the same compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.addMaskForElement(visualElements.scrollLeftBottomElement);
  await genericMethods.makeScreenshotAndVerifyWithBaseline(baseImage);
});
