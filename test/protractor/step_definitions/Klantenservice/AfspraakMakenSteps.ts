import {Then, When} from 'cucumber';
import {browser, by, element} from 'protractor';
import {
  afspraakMakenElements, genericMethods, klachtenFormulierElements, loginPageElements, personaData
} from '@support';
import {genericEnum, homePageEnum} from '@enum';

When(/^Customer fills in afspraak maken form correctly with already customer (yes|no)$/, async (alreadyCustomer: string) => {
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
  // verification if No is selected that client number is not shown.
  if (alreadyCustomer === genericEnum.NO) {
    await genericMethods.waitForElementIsPresent(afspraakMakenElements.selectAlreadyCustomerNoHiddenElement, browser.getPageTimeout);
  }
  await element(by.xpath('//ui-input[1]/div/label/input')).sendKeys('T.'); // voorletter
  await element(by.xpath('//ui-input[3]/div/label/input')).sendKeys('Test'); // achternaam
  await element(by.xpath('//ui-input[4]/div/label/input')).sendKeys('01-01-2000'); // geboortedatum
  await element(by.xpath('//div/ui-input/div/label/input')).sendKeys('22'); // huisnummer
  await element(by.xpath('//ui-input[6]/div/label/input')).sendKeys('mail@adres.nl'); // emailadres
  await element(by.xpath('//div[2]/ui-input/div/label/input')).sendKeys('0612345678'); // telefoonnummer
  await element(by.xpath('//textarea')).sendKeys('Veld toelichting');
  await genericMethods.clickOnElement(afspraakMakenElements.selectAfspraakBevestigenButtonElement); // Afspraak bevestigen
});

When(/^Logged in customer fills in afspraak maken form correctly and prefill is filled in for persona (.*)$/, async (persona: string) => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.goToPage(homePageEnum.AFSPRAAK_MAKEN);
  await genericMethods.clickOnElement(afspraakMakenElements.selectVerzekeringenAsSubjectClickElement);
  await genericMethods.typeText(klachtenFormulierElements.omschrijvingInputElement, 'omschrijving');
  await genericMethods.clickOnTAB(klachtenFormulierElements.omschrijvingInputElement);
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.initialsInputElement, personaData.getPersonaInitials(persona) + '.');
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.lastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.birthDateInputElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.zipCodeInputElement, personaData.getPersonaZipcode(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.houseNumberInputElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.houseNumberAdditionInputElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.emailAddressInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.phoneNumberInputElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.verifyValueTextInElement(klachtenFormulierElements.clientNumberInputElement, personaData.getPersonaSpecificIdentificationNumber(persona));
  await genericMethods.clickOnElement(klachtenFormulierElements.buttonSendClickElement);
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
