import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {MijnVerzekeringenElements} from "../../../../pageobjects/mijnUniveParticulier/mijnVerzekeringen/mijnVerzekeringenElements";
import {browser} from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let mijnVerzekeringElements: MijnVerzekeringenElements = new MijnVerzekeringenElements();

When(/^Customer selects algemene voorwaarden$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.algemeneVoorwaardenClickElement);
});

When(/^Customer select polis with polis number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.aansprakelijkheidsVerzekeringParticulierClickElement(polisNumber));
});

Then(/^Verify algemene voorwaarden is available on screen as a pdf$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.algemeneVoorwaardenPdfElement, browser.getPageTimeout);
  await genericMethods.verifyUrlContains(mijnVerzekeringElements.algemeneVoorwaardenUrlCheckText);
});

Then(/^Verify polis details with polis number (.*) is shown$/, async (polisNumber: string) => {
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.polisNumberTextElement, polisNumber);
});
