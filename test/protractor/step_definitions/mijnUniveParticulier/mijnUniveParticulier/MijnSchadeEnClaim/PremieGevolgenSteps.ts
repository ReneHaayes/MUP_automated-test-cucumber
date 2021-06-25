import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {genericMethods, mijnSchadeEnClaimElements, mijnSchadeEnClaimMethods} from '@support';

When(/^Customer selects premiegevolgen berekenen for polis with number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnSchadeEnClaimMethods.polisForPremiegevolgenPageWithPolisNumber(polisNumber));
});

When( /^Customer clicks on button Premiegevolgen berekenen$/, async () => {
  await genericMethods.waitForElementIsVisible('a[href="/mijnunive/premiegevolgen-berekenen"]', browser.getPageTimeout);
  await genericMethods.clickOnElement('a[href="/mijnunive/premiegevolgen-berekenen"]');
});

Then(/^Verify ncbm prognose page is shown with correct title$/, async () => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.ncbmPrognoseH1TextElement, mijnSchadeEnClaimElements.ncbmPrognoseH1Text);
});
