import {Given, Then, When} from 'cucumber';
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {GenericElements} from "../../pageobjects/generic/genericElements";
import {browser} from "protractor";
import {genericEnum} from "../../pageobjects/enum/genericEnum";
import {logToHtmlReport} from "../../support/hooks";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();

Given(/^I am on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
  if (browser.params.env.environment === 'pat') {
    await genericMethods.clickOnElement(genericElements.cookieElement);
  }
});

Then(/^The thank you page for (.*) is shown$/, async function (persona: string) {
  try {
    await genericMethods.verifyThankYouPageTitle(persona);
  } catch (e) {
    await genericMethods.verifyTextContainsInElement(genericElements.errorMessageElement, 'fout opgetreden');
    logToHtmlReport(this, 'The known bug with the text: "Er is een fout opgetreden" shows on the screen');
  }
});

Then(/^Thank you page for zakelijk is shown$/, async function () {
  try {
    await genericMethods.verifyTextInElement(genericElements.thankYouH1Element, 'Uw aanvraag is in behandeling');
  } catch (e) {
    await genericMethods.verifyTextContainsInElement(genericElements.errorMessageElement, 'fout opgetreden');
    logToHtmlReport(this, 'The known bug with the text: "Er is een fout opgetreden" shows on the screen');
  }
});

When(/^I fill in almost insured page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
});
