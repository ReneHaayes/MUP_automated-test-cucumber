import {Then, When} from "cucumber";
import {browser} from "protractor";
import {genericMethods, mijnVerzekeringenElements} from "@support";

When(/^Customer changes a vehicle with licenseplate: (.*)$/, async (licensePlate: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringenElements.voertuigWijzigenClickElement);
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.perEersteMogelijkheidClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.nextButtonClickElement);
  //licenseplate
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 50000);
  await genericMethods.typeText(mijnVerzekeringenElements.licensePlateInputElement, licensePlate);
  // await genericMethods.clickOnTAB(mijnVerzekeringenElements.licensePlateInputElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnNextButton();
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.typeText(mijnVerzekeringenElements.meldCodeInputElement, '0000');
  await genericMethods.clickOnElement(mijnVerzekeringenElements.correctEmailAdresTrueClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.finishAndSaveButtonClickElement);
});

When(/^Customer goes throught the flow of a woonverzekering insurance change$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringenElements.verzekeringWijzigenClickElement);
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.perEersteMogelijkheidClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.nextButtonClickElement);
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.finishAndSaveButtonClickElement);
});

When(/^Customer goes throught the flow of a autoverzekering insurance change$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringenElements.verzekeringWijzigenClickElement);
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.perEersteMogelijkheidClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.nextButtonClickElement);
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnElement(mijnVerzekeringenElements.correctEmailAdresTrueClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringenElements.finishAndSaveButtonClickElement);
});

Then(/^Verify success message is shown for a change$/, async () => {
  await genericMethods.waitForElementNotVisibleWithSleep(mijnVerzekeringenElements.blockingLoaderSpinningElement, browser.getPageTimeout, 2500);
  await genericMethods.verifyTextInElement(mijnVerzekeringenElements.succesMessageTextElement, mijnVerzekeringenElements.succesMessageText);
});
