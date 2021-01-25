import {Then, When} from 'cucumber';
import {
  genericMethods,
  ondernemersScanElements,
  ondernemersScanMethods
} from '@support';
// import {HappyFlowNoStaff} from '../../../pageobjects/zakelijkeVerzekeringen/ondernemersScan/ondernemersScanElements';


When(/^I enter step one page and click Doe de Ondernemersscan and start scan:$/, async () => {
  await ondernemersScanMethods.clickOnStartScan();

  // for (const question of HappyFlowNoStaff) {
  //   await genericMethods.verifyTextContains(await genericMethods.getText('survey-category>[class="survey-category__title"]'), question.question);
  //   await genericMethods.clickOnElementWithXpath(ondernemersScanMethods.questionOptionsSelectElement(question.answer));
  //   await genericMethods.clickOnElement('[class="unive-radio__label"]');
  // await genericMethods.clickOnElementWithClassName('question__button--submit'); }
});

When(/^I answer all in the questions$/, async () => {
  await genericMethods.clickOnElement(ondernemersScanElements.question1);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question2);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question3);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question4);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question5);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question6);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question7);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question8);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question9);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question10);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question11);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question12);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question13);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question14);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question15);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question16);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question17);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question18);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question19);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question20);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question21);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
  await genericMethods.clickOnElement(ondernemersScanElements.question22);
  await genericMethods.clickOnElement(ondernemersScanElements.volgende);
});


When(/^I enter zipcode and email-address to get my results of the Ondernemersscan$/, async () => {
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath('//*[@class=\'result__title\']'), 'Benieuwd naar uw resultaten?');
  await genericMethods.typeText(ondernemersScanElements.zipCodeElement, ondernemersScanElements.zipCodeText);
  await genericMethods.typeText(ondernemersScanElements.emailadresElement, ondernemersScanElements.emailadresText);
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.sendReportOndernemersScan);
});


When(/^I enter my details for personal advice$/, async () => {
  await genericMethods.waitForElementIsVisibleWithXpath('//*[@class=\'appointment__title\']', 50000);
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath('//*[@class=\'appointment__title\']'), 'Bedankt voor uw tijd. Het rapport is naar u gemaild.');
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.genderElement);
  await genericMethods.typeText(ondernemersScanElements.initialsElement, ondernemersScanElements.initialsText);
  await genericMethods.typeText(ondernemersScanElements.lastnameElement, ondernemersScanElements.lastnameText);
  await genericMethods.typeText(ondernemersScanElements.companyElement, ondernemersScanElements.companyText);
  await genericMethods.typeText(ondernemersScanElements.houseNumberElement, ondernemersScanElements.houseNumberText);
  await genericMethods.typeText(ondernemersScanElements.phoneNumberElement, ondernemersScanElements.phoneNumberText);
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.MakeAppointment);
});


Then(/^Thank you page for make appointment is shown$/, async () => {
  await genericMethods.waitForElementIsVisibleWithXpath('//*[@class=\'thank-you__title\']', 50000);
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath('//*[@class=\'thank-you__title\']'), 'Bedankt voor het maken van een afspraak.');
});


