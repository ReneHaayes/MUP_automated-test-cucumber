import { WoonVerzekeringElements } from "../../../pageobjects/particulier/huisVerzekeringen/woonVerzekeringElements";
import { GenericMethods } from "../../../pageobjects/generic/genericMethods";
import { GenericElements } from "../../../pageobjects/generic/genericElements";
import { GetUrlUnive } from "../../../pageobjects/generic/getUrlUnive";
import { When, Then } from "cucumber";
import { browser } from "protractor";
import { verzekeringPaginasEnum } from "../../../pageobjects/enum/genericEnum";


let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();
let getUrlUnive: GetUrlUnive = new GetUrlUnive();

When(/^I press the button premie berekenen on the amp woonverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(woonVerzekeringElements.ampImageElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(woonVerzekeringElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify elements on premie berekenen woon page is shown$/, async () => {
  try {
    await genericMethods.clickOnCookie(genericElements.cookieElement);
  } catch (e) {

}
    const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.WOONVERZEKERING_PAT);
    await genericMethods.verifyUrlContains(url);
    await genericMethods.waitForElementIsVisible(woonVerzekeringElements.zipCodeInputElement, browser.getPageTimeout);
});
