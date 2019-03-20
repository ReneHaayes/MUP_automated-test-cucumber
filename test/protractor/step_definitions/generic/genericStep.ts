import {Given, Then, When} from 'cucumber';
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../pageobjects/generic/genericElements";
// import {browser} from "protractor";
import {genericEnum} from "../../pageobjects/enum/genericEnum";
import {logToHtmlReport} from "../../support/hooks";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();

Given(/^I am on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
  try {
    await genericMethods.clickOnCookie(genericElements.cookieElement);
  } catch (e) {

  }
});

Then(/^The thank you page for (.*) is shown$/, async function (persona: string) {
  try {
    await genericMethods.verifyTextContainsInElement(genericElements.errorMessageElement, 'fout opgetreden', 10000);
    logToHtmlReport(this, 'The known bug with the text: "Er is een fout opgetreden" shows on the screen');
  } catch (e) {
    await genericMethods.verifyThankYouPageTitle(persona);
  }
});

Then(/^Thank you page for zakelijk is shown$/, async function () {
  try {
    await genericMethods.verifyTextContainsInElement(genericElements.errorMessageElement, 'fout opgetreden', 10000);
    logToHtmlReport(this, 'The known bug with the text: "Er is een fout opgetreden" shows on the screen');
  } catch (e) {
    await genericMethods.verifyTextInElement(genericElements.thankYouH1Element, 'Uw aanvraag is in behandeling');
  }
});

When(/^I fill in almost insured page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
});
