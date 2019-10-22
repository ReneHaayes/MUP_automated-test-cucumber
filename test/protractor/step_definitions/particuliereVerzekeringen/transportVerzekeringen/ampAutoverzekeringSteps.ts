import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {autoVerzekeringElements, genericElements, genericMethods, getUrlUnive} from "@support";
import {verzekeringPaginasEnum} from "@enum";


When(/^I press the button premie berekenen on the amp autoverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(autoVerzekeringElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(autoVerzekeringElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify if elements on premie berekenen amp auto page are shown$/, async () => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {

  }
  const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.AUTOVERZEKERING_PAT);
  await genericMethods.verifyUrlContains(url);
  await genericMethods.waitForElementIsVisible(autoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
});
