import { When, Then } from 'cucumber';
import { browser } from 'protractor';
import { verzekeringPaginasEnum } from '../../../pageobjects/enum/genericEnum';
import {genericElements, genericMethods, getUrlUnive, woonVerzekeringElements} from "../../../support";

When(/^I press the button premie berekenen on the amp woonverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(woonVerzekeringElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(woonVerzekeringElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify elements on premie berekenen woon page is shown$/, async () => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {

}
    const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.WOONVERZEKERING_PAT);
    await genericMethods.verifyUrlContains(url);
    await genericMethods.waitForElementIsVisible(woonVerzekeringElements.zipCodeInputElement, browser.getPageTimeout);
});
