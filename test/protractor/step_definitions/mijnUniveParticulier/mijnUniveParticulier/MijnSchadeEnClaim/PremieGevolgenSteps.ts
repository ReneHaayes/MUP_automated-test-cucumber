import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {MijnSchadeEnClaimElements} from "../../../../pageobjects/mijnUniveParticulier/MijnSchadeEnClaim/MijnSchadeEnClaimElements";
import {browser} from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let mijnSchadeEnClaimElements: MijnSchadeEnClaimElements = new MijnSchadeEnClaimElements();

When(/^Customer select premiegevolgen berekenen for polis with number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.polisForPremiegevolgenPageWithPolisNumber(polisNumber));
});


Then(/^Verify ncbm prognose page is shown with correct title and table$/, async () => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.ncbmPrognoseH1TextElement, mijnSchadeEnClaimElements.ncbmPrognoseH1Text);
  await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.ncbmTableClassElement, browser.getPageTimeout);
});
