import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {afspraakMakenElements, genericMethods, klachtenFormulierElements} from "@support";

When(/^Customer fills in afspraak maken form correctly$/, async () => {
  await genericMethods.clickOnElement(afspraakMakenElements.selectVerzekeringenAsSubjectClickElement);
  await genericMethods.typeText(klachtenFormulierElements.omschrijvingInputElement, 'omschrijving');
  await genericMethods.typeText(klachtenFormulierElements.initialsInputElement, 'tt');
  await genericMethods.typeText(klachtenFormulierElements.lastNameInputElement, 'test');
  await genericMethods.clickOnElement(afspraakMakenElements.selectGenderMaleClickElement);
  await genericMethods.typeText(klachtenFormulierElements.birthDateInputElement, '01012000');
  await genericMethods.typeText(klachtenFormulierElements.zipCodeInputElement, '8017JC');
  await genericMethods.typeText(klachtenFormulierElements.houseNumberInputElement, '1');
  await genericMethods.clickOnTAB(klachtenFormulierElements.houseNumberInputElement);
  await genericMethods.typeText(klachtenFormulierElements.emailAddressInputElement, 'test@test.nl');
  await genericMethods.clickOnElement(afspraakMakenElements.selectAlreadyCustomerClickElement);
  await genericMethods.clickOnElement(klachtenFormulierElements.buttonSendClickElement);
});

Then(/^Verify afspraak maken form thank you text$/, async () => {
  await genericMethods.verifyTextContainsInElement(afspraakMakenElements.confirmationTextElement, afspraakMakenElements.confirmationText, browser.getPageTimeout);
});
