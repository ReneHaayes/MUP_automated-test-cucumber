import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {MijnVerzekeringenElements} from "../../../../pageobjects/mijnUniveParticulier/mijnVerzekeringen/mijnVerzekeringenElements";
import {browser} from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let mijnVerzekeringElements: MijnVerzekeringenElements = new MijnVerzekeringenElements();

When(/^Customer selects algemene voorwaarden$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.algemeneVoorwaardenClickElement);
});

Then(/^Verify algemene voorwaarden is available on screen as a pdf$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.algemeneVoorwaardenPdfElement, browser.getPageTimeout);
  await genericMethods.verifyUrlContains(mijnVerzekeringElements.algemeneVoorwaardenUrlCheckText);
});
