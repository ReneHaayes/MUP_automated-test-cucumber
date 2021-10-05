import {Then, When} from 'cucumber';
import {correspondentieOverzichtElements, genericMethods} from '@support';
import {browser} from 'protractor';

When(/^Customer selects the Correspondenties page$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.correspondentieOverzichtElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieOverzichtElement);
});

Then(/^Verify the Correspondentie page is shown$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.correspondenceHeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.correspondenceHeaderTextElement, correspondentieOverzichtElements.correspondenceHeaderText);
});

Then (/^Verify the Dropdown section is present$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.correspondenceHeaderTextElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.dropdownSectionClickElement);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.correspondenceHeaderTextElement, correspondentieOverzichtElements.correspondenceHeaderText);
});

When(/^Customer selects the quicklink for groene kaart downloaden$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.correspondentieOverzichtElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieOverzichtElement);
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.groeneKaartClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.groeneKaartClickElement);
  // 2e keer klikken is nodig omdat er nu nog een ongewenste auto-refresh op de pagina plaatsvindt. De 2e x klikken verwijderen als de refresh is opgelost.
  // 5-10-2021 - gefikst op OT, na doorvoer naar ACC de 2 regels hieronder verwijderen.
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.groeneKaartClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.groeneKaartClickElement);
});

Then(/^Verify the Groene kaart download page is shown$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.groeneKaartHeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.groeneKaartHeaderTextElement, correspondentieOverzichtElements.groeneKaartHeaderText);
});

When(/^Customer selects personal advice$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.persoonlijkAdviesButtonClickElement);
});

Then(/^Verify the customer is on the page persoonlijk advies$/, async () => {
  await genericMethods.waitForElementIsVisible(correspondentieOverzichtElements.persoonlijkAdviesH1HeaderTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.persoonlijkAdviesH1HeaderTextElement, correspondentieOverzichtElements.PERSOONLIJK_ADVIES);
});
