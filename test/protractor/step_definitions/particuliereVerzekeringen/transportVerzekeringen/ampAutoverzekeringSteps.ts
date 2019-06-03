import {Then, When} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {AutoVerzekeringElements} from "../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringElements";
import {browser} from "protractor";
import {verzekeringPaginasEnum} from "../../../pageobjects/enum/genericEnum";
import {GetUrlUnive} from "../../../pageobjects/generic/getUrlUnive";
import {GenericElements} from "../../../pageobjects/generic/genericElements";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();
let getUrlUnive: GetUrlUnive = new GetUrlUnive();

When(/^I press the button premie berekenen on the amp autoverzekering page$/, async () => {
  await genericMethods.waitForElementIsVisible(autoVerzekeringElements.ampImageElement, browser.getPageTimeout);
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
