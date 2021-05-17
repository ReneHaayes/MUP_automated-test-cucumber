import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {genericMethods, mijnUniveAccountElements, verhuizingDoorgevenElements} from '@support';

When(/^Customer changes move details with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(verhuizingDoorgevenElements.verhuizingWijzigUwGegevensClickElement);
  await genericMethods.typeText(verhuizingDoorgevenElements.movingDateInputElement, genericMethods.getDate(dataTable.movingDate));
  await genericMethods.typeText(verhuizingDoorgevenElements.zipcodeInputElement, dataTable.zipCode);
  await genericMethods.typeText(verhuizingDoorgevenElements.houseNumberInputElement, dataTable.houseNumber);
  await genericMethods.clickOnElement(verhuizingDoorgevenElements.coInsuredAppliesYesClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
});

Then(/^Verify succes message for changing address is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(verhuizingDoorgevenElements.succesTextMessageElement,
    verhuizingDoorgevenElements.succesTextMessage, browser.getPageTimeout);
});

