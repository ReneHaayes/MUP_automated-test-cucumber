import {Then, When} from "cucumber";
import {genericElements, genericMethods, hmPageElements, visualElements} from "@support";
import {browser} from "protractor";
import {selectorEnum} from "../../pageobjects/enum/genericEnum";


When(/^The page waits for licenseplate element is visible$/, async () => {
  await genericMethods.waitForElementNotVisible(genericElements.cookieClickElement, browser.getPageTimeout);
  await genericMethods.waitForElementIsVisible(hmPageElements.licensePlateWidgetInputElement, browser.getPageTimeout);
});

When(/^Scroll to the footer of the page$/, async () => {
  await genericMethods.scrollToElement(selectorEnum.CSS, hmPageElements.footerOverUniveClickElement);
});


Then(/^Verify visual elements on top of the homepage are the same compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.addMaskForElement(visualElements.scrollLeftBottomElement);
  await genericMethods.makeScreenshotAndVerifyWithBaseline(baseImage);
});

Then(/^Verify visual elements are the same compared to the base screenshot: (.*)$/, async (baseImage: string) => {
  await genericMethods.makeScreenshotAndVerifyWithBaseline(baseImage);
});
