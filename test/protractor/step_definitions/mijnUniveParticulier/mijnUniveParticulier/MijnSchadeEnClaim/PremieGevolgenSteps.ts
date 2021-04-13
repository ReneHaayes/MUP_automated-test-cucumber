import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {genericMethods, mijnSchadeEnClaimElements, mijnSchadeEnClaimMethods} from '@support';

When(/^Customer select premiegevolgen berekenen for polis with number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnSchadeEnClaimMethods.polisForPremiegevolgenPageWithPolisNumber(polisNumber));
});


Then(/^Verify ncbm prognose page is shown with correct title and table$/, async () => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.ncbmPrognoseH1TextElement, mijnSchadeEnClaimElements.ncbmPrognoseH1Text);
  await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.ncbmTableClassElement, browser.getPageTimeout);
});
