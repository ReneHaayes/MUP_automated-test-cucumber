import {Then, When} from 'cucumber';
import {genericMethods, ondernemersScanElements, ondernemersScanMethods} from '@support';
import {HappyFlowNoStaff} from '../../../pageobjects/zakelijkeVerzekeringen/ondernemersScan/ondernemersScanElements';


When(/^I enter step one page and click Doe de Ondernemersscan and start scan:$/, async () => {
  await ondernemersScanMethods.clickOnStartScan();

  for(let question of HappyFlowNoStaff){
    await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath("//*[@class='question__title']"), question.question);
    await genericMethods.clickOnElementWithXpath(ondernemersScanMethods.questionOptionsSelectElement(question.answer));
    await genericMethods.clickOnElementWithClassName("question__button--submit");
  }
});

When(/^I enter zipcode and emailadres to get my results of the Ondernemersscan$/, async () => {
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath("//*[@class='result__title']"), 'Benieuwd naar uw resultaten?');
  await genericMethods.typeText(ondernemersScanElements.zipCodeElement,ondernemersScanElements.zipCodeText);
  await genericMethods.typeText(ondernemersScanElements.emailadresElement,ondernemersScanElements.emailadresText);
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.sendReportOndernemersScan);
});


When(/^I enter my details for personal advice$/, async () => {
  await genericMethods.waitForElementIsVisibleWithXpath( "//*[@class='appointment__title']", 50000);
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath("//*[@class='appointment__title']"), 'Bedankt voor uw tijd. Het rapport is naar u gemaild.');
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.genderElement);
  await genericMethods.typeText(ondernemersScanElements.initialsElement,ondernemersScanElements.initialsText);
  await genericMethods.typeText(ondernemersScanElements.lastnameElement,ondernemersScanElements.lastnameText);
  await genericMethods.typeText(ondernemersScanElements.companyElement, ondernemersScanElements.companyText);
  await genericMethods.typeText(ondernemersScanElements.houseNumberElement, ondernemersScanElements.houseNumberText);
  await genericMethods.typeText(ondernemersScanElements.phoneNumberElement, ondernemersScanElements.phoneNumberText);
  await genericMethods.clickOnElementWithXpath(ondernemersScanElements.MakeAppointment);
});


Then(/^Thank you page for make appointment is shown$/, async () => {
  await genericMethods.waitForElementIsVisibleWithXpath( "//*[@class='thank-you__title']", 50000);
  await genericMethods.verifyTextContains(await genericMethods.getTextWithXpath("//*[@class='thank-you__title']"), 'Bedankt voor het maken van een afspraak.');
});


