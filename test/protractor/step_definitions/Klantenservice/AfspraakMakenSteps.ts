import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {
  afspraakMakenElements, genericMethods, klachtenFormulierElements, loginPageElements, personaData
} from '@support';
import {genericEnum, homePageEnum} from '@enum';

When(/^Customer fills in afspraak maken form correctly with already customer (yes|no)$/, async (alreadyCustomer: string) => {
  await genericMethods.clickOnElement(afspraakMakenElements.selectVerzekeringenAsSubjectClickElement);
  await genericMethods.typeText(klachtenFormulierElements.omschrijvingInputElement, 'omschrijving');
  await genericMethods.clickOnElement(afspraakMakenElements.selectAlreadyCustomerClickElement(alreadyCustomer));
  // verification if No is selected that client number is not shown.
  if (alreadyCustomer === genericEnum.NO) {
    await genericMethods.waitForElementIsPresent(afspraakMakenElements.selectAlreadyCustomerNoHiddenElement, browser.getPageTimeout);
  }
  await genericMethods.typeText(klachtenFormulierElements.initialsInputElement, 'tt');
  await genericMethods.typeText(klachtenFormulierElements.lastNameInputElement, 'test');
  await genericMethods.clickOnElement(afspraakMakenElements.selectGenderMaleClickElement);
  await genericMethods.typeText(klachtenFormulierElements.birthDateInputElement, '01012000');
  await genericMethods.typeText(klachtenFormulierElements.zipCodeInputElement, '8017JC');
  await genericMethods.typeText(klachtenFormulierElements.houseNumberInputElement, '1');
  await genericMethods.clickOnTAB(klachtenFormulierElements.houseNumberInputElement);
  await genericMethods.typeText(klachtenFormulierElements.emailAddressInputElement, 'test@test.nl');
  await genericMethods.clickOnElement(klachtenFormulierElements.buttonSendClickElement);
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
