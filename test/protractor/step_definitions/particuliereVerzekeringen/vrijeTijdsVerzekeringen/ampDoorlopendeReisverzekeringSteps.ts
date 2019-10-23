import {When, Then} from 'cucumber';
import {browser} from 'protractor';
import {verzekeringPaginasEnum} from '../../../pageobjects/enum/genericEnum';
import {genericElements, genericMethods, getUrlUnive, reisVerzekeringElements} from "@support";


When(/^I press the button premie berekenen on the amp doorlopende reisverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(reisVerzekeringElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(reisVerzekeringElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify if elements on premie berekenen amp doorlopende reisverzekering page are shown$/, async () => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {

  }
  const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING);
  await genericMethods.verifyUrlContains(url);
  await genericMethods.waitForElementIsVisible(reisVerzekeringElements.whoToInsureMySelfClickElement, browser.getPageTimeout);
});
