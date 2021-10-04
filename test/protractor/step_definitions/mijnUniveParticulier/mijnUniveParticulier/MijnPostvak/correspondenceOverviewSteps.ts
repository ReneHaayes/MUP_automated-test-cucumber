import {Then, When} from 'cucumber';
import {correspondentieOverzichtElements, genericMethods} from '@support';
import {browser} from 'protractor';

When(/^Customer selects the Correspondenties page$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieOverzichtElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstGroeneKaartClickElement);
});
/*
When(/^Customer selects the quicklink for groene kaart downloaden$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieGroeneKaartElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstGroeneKaartClickElement);
});

When(/^Customer selects the quicklink for polisblad downloaden$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieButtonClickElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstCorrespondenceClickElement);
});

When(/^Customer selects the quicklink for nota downloaden$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieButtonClickElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstCorrespondenceClickElement);
});*/

When(/^Customer selects personal advice$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.persoonlijkAdviesButtonClickElement);

});

Then(/^Verify the Correspondentie page is shown$/, async () => {
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.correspondenceHeaderH3TextElement, correspondentieOverzichtElements.correspondenceHeaderH3Text);
});

Then(/^Verify the customer is on the page persoonlijk advies$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.persoonlijkAdviesH1HeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.persoonlijkAdviesH1HeaderTextElement, correspondentieOverzichtElements.PERSOONLIJK_ADVIES);
});
