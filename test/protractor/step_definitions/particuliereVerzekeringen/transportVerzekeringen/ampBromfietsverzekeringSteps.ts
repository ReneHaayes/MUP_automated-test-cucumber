import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {genericElements, genericMethods, getUrlUnive, mopedElements, vehicleElements} from "@support";
import {verzekeringPaginasEnum} from "@enum";


When(/^I press the button premie berekenen on the amp bromfietsverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(mopedElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mopedElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify elements on premie berekenen amp bromfiets page is shown$/, async () => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {

  }
  const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT);
  await genericMethods.verifyUrlContains(url);
  await genericMethods.waitForElementIsVisible(vehicleElements.licensePlateInputElement, browser.getPageTimeout);
});
