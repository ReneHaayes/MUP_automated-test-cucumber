import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {VerhuizingDoorgevenElements} from "../../../../pageobjects/mijnUniveParticulier/gegevens/verhuizingDoorgevenElements";
import {MijnUniveAccountElements} from "../../../../pageobjects/mijnUniveParticulier/mijnUniveAccount/mijnUniveAccountElements";
import {browser} from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let verhuizingDoorgevenElements: VerhuizingDoorgevenElements = new VerhuizingDoorgevenElements();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();

When(/^Customer changes move details with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(verhuizingDoorgevenElements.movingDateInputElement, genericMethods.getDate(dataTable.movingDate));
  await genericMethods.typeText(verhuizingDoorgevenElements.zipcodeInputElement, dataTable.zipCode);
  await genericMethods.typeText(verhuizingDoorgevenElements.houseNumberInputElement, dataTable.houseNumber);
  await genericMethods.clickOnElement(verhuizingDoorgevenElements.coInsuredAppliesYesClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
});

Then(/^Verify succes message for changing address is show$/, async () => {
  await genericMethods.verifyTextContainsInElement(verhuizingDoorgevenElements.succesTextMessageElement,
    verhuizingDoorgevenElements.succesTextMessage, browser.getPageTimeout);
});

