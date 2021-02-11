import {Given, Then, When} from 'cucumber';
import {genericElements,
  genericMethods,
  mopedWithLicensePlate
} from '@support';
import {mopedTypeEnum} from '@enum';
import {browser} from 'protractor';

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

Then(/^Thank you page for zakelijke (.*) is shown$/, async function (verzekering: string) {
  await genericMethods.verifyTextInElement(genericElements.thankYouH1Element, verzekering);
});


When(/^I fill in almost insured page with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsPresent(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.selectInsuranceHistory(dataTable.insuranceHistory);
  await genericMethods.selectCriminalHistory(dataTable.criminalHistory);
  await genericMethods.selectDamageHistory(dataTable.damageHistory);
  // Bromfiets/scooter heeft een extra scherm voordat de klant uitkomt bij de 'Sluit nu uw verzekering af'
  if (dataTable.licensePlate) {
    if (mopedWithLicensePlate.getMopedModel(dataTable.licensePlate) === mopedTypeEnum.BROMFIETS) {
      genericMethods.clickOnNextButton().then();
    } else if (mopedWithLicensePlate.getMopedModel(dataTable.licensePlate) === mopedTypeEnum.SNORSCOOTER) {
      genericMethods.clickOnNextButton().then();
    } else if (mopedWithLicensePlate.getMopedModel(dataTable.licensePlate) === mopedTypeEnum.SNORFIETS) {
      genericMethods.clickOnNextButton().then();
    } else {
    }
  }
  await genericMethods.clickOnTakeOutInsuranceNowButton();
});


Given(/^Customer is on the (.*) page of the Unive website$/, async (page: string) => {
  await genericMethods.goToPage(page);
});
