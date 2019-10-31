import {Given, Then, When} from 'cucumber';
import {genericElements, genericMethods} from "@support";
import {genericEnum} from "@enum";

Given(/^I am on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
  try {
    await genericMethods.clickOnCookie(genericElements.cookieClickElement);
  } catch (e) {

  }
});

Then(/^The thank you page for (.*) is shown$/, async function (persona: string) {
  await genericMethods.verifyThankYouPageTitle(persona);
});

Then(/^Thank you page for zakelijk is shown$/, async function () {
  await genericMethods.verifyTextInElement(genericElements.thankYouH1Element, 'Uw aanvraag is in behandeling');
});


When(/^I fill in almost insured page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  await genericMethods.clickOnFinishButton();
});


Given(/^Customer is on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
});
