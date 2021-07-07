import {Then, When} from 'cucumber';
import {browser, by, element} from 'protractor';
import {
  afspraakMakenElements, genericMethods, loginPageElements
} from '@support';
import {homePageEnum} from '@enum';

When(/^Customer fills in afspraak maken form correctly$/, async () => {
  await genericMethods.waitForElementIsVisible(afspraakMakenElements.selectPostcodeElement, browser.getPageTimeout);
  await genericMethods.typeText(afspraakMakenElements.selectPostcodeElement, '7541 WH');
  await genericMethods.clickOnElement(afspraakMakenElements.selectKiesAfspraakNaPostcodeElement);
  await genericMethods.waitForElementIsVisible(afspraakMakenElements.selectVerzekeringenAsSubjectClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(afspraakMakenElements.selectVerzekeringenAsSubjectClickElement);
  await genericMethods.clickOnElement(afspraakMakenElements.selectKiesUwWinkelButtonElement);
  await genericMethods.waitForElementIsVisible(afspraakMakenElements.selectUwHiglightedWinkelElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(afspraakMakenElements.selectUwHiglightedWinkelElement);
  await genericMethods.clickOnElement(afspraakMakenElements.selectKiesUwDatumButtonElement);
  await genericMethods.waitForElementIsVisible(afspraakMakenElements.selectNextMonthButtonElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(afspraakMakenElements.selectNextMonthButtonElement);
  await genericMethods.clickOnElement(afspraakMakenElements.selectNextMonthButtonElement);
  await genericMethods.clickOnElement(afspraakMakenElements.select15thDayButtonElement);
  await genericMethods.clickOnElement(afspraakMakenElements.selectTimeButtonElement);
  await genericMethods.clickOnElement(afspraakMakenElements.selectVulUwGegevensInButtonElement);
  await genericMethods.waitForElementIsVisible(afspraakMakenElements.selectGenderMaleClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(afspraakMakenElements.selectGenderMaleClickElement);
  await element(by.xpath('//ui-input[1]/div/label/input')).sendKeys('T.'); // voorletter
  await element(by.xpath('//ui-input[3]/div/label/input')).sendKeys('Test'); // achternaam
  await element(by.xpath('//ui-input[4]/div/label/input')).sendKeys('01-01-2000'); // geboortedatum
  await element(by.xpath('//div/ui-input/div/label/input')).sendKeys('22'); // huisnummer
  await element(by.xpath('//ui-input[6]/div/label/input')).sendKeys('mail@adres.nl'); // emailadres
  await element(by.xpath('//div[2]/ui-input/div/label/input')).sendKeys('0612345678'); // telefoonnummer
  await element(by.xpath('//textarea')).sendKeys('Veld toelichting');
  await genericMethods.clickOnElement(afspraakMakenElements.selectAfspraakBevestigenButtonElement); // Afspraak bevestigen
});

Then(/^Verify afspraak maken form thank you text$/, async () => {
  await browser.sleep(5000);
  await genericMethods.verifyTextContainsInElement(afspraakMakenElements.confirmationTextElement, afspraakMakenElements.confirmationText, browser.getPageTimeout);
});

Then(/^Customer navigates to winkel details and clicks on afspraak maken$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.goToPage(homePageEnum.WINKELDETAILS);
  await genericMethods.clickOnElement(afspraakMakenElements.afspraakMakenWinkelDetailClickElement);
});

Then(/^Verify button in winkel details navigates to afspraak maken url$/, async () => {
  await genericMethods.waitForElementIsVisible('[class="base__title"]', browser.getPageTimeout);
  await genericMethods.verifyUrlContainsIgnoreCase('afspraak');
});
