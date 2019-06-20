import {When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {VerhuizingDoorgevenElements} from "../../../../pageobjects/mijnUniveParticulier/gegevens/verhuizingDoorgevenElements";
import {browser} from "protractor";
import {MijnUniveAccountElements} from "../../../../pageobjects/mijnUniveParticulier/mijnUniveAccount/mijnUniveAccountElements";

let genericMethods: GenericMethods = new GenericMethods();
let verhuizingDoorgevenElements: VerhuizingDoorgevenElements = new VerhuizingDoorgevenElements();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();

When(/^Customer changes move details with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.clickOnElement(verhuizingDoorgevenElements.verhuizingDoorgevenClickElement);
  await genericMethods.typeText(verhuizingDoorgevenElements.movingDateInputElement, genericMethods.getDate(dataTable.movingDate));
  await genericMethods.typeText(verhuizingDoorgevenElements.zipcodeInputElement, dataTable.zipCode);
  await genericMethods.typeText(verhuizingDoorgevenElements.houseNumberInputElement, dataTable.houseNumber);
  await genericMethods.typeText(verhuizingDoorgevenElements.streetInputElement, dataTable.street);
  await genericMethods.typeText(verhuizingDoorgevenElements.cityInputElement, dataTable.city);
  await genericMethods.clickOnElement(verhuizingDoorgevenElements.coInsuredAppliesYesClickElement);
  await browser.sleep(5000);

});
