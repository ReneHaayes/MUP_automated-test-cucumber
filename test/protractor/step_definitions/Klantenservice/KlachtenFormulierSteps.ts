import {Then, When} from 'cucumber';
import {GenericMethods} from '../../pageobjects/generic/genericMethods';
import { KlachtenFormulierElements } from '../../pageobjects/Klantenservice/KlachtenFormulierElements';

const genericMethods: GenericMethods = new GenericMethods();
const klachtenFormulierElements: KlachtenFormulierElements = new KlachtenFormulierElements();


When(/^Customer fills in form for zorgverzekering klacht$/, async () => {
  await genericMethods.clickOnElement(klachtenFormulierElements.zorgVerzekeringButtonClickElement);
  await genericMethods.typeText(klachtenFormulierElements.omschrijvingInputElement, 'omschrijving');
  await genericMethods.typeText(klachtenFormulierElements.oplossingInputElement, 'oplossing');
  await genericMethods.clickOnElement(klachtenFormulierElements.alreadyACustomerClickElement);
  await genericMethods.typeText(klachtenFormulierElements.clientNumberInputElement, '123');
  await genericMethods.typeText(klachtenFormulierElements.lastNameInputElement, 'test');
  await genericMethods.typeText(klachtenFormulierElements.zipCodeInputElement, '8017JC');
  await genericMethods.typeText(klachtenFormulierElements.houseNumberInputElement, '1');
  await genericMethods.typeText(klachtenFormulierElements.birthDateInputElement, '01012000');
  await genericMethods.typeText(klachtenFormulierElements.emailAddressInputElement, 'test@test.nl');
  await genericMethods.clickOnElement(klachtenFormulierElements.buttonSendClickElement);
});

When(/^Customer fills in form for schadeverzekering klacht$/, async () => {
  await genericMethods.clickOnElement(klachtenFormulierElements.schadeVerzekeringButtonClickElement);
  await genericMethods.typeText(klachtenFormulierElements.omschrijvingInputElement, 'omschrijving');
  await genericMethods.typeText(klachtenFormulierElements.oplossingInputElement, 'oplossing');
  await genericMethods.typeText(klachtenFormulierElements.initialsInputElement, 'tt');
  await genericMethods.typeText(klachtenFormulierElements.lastNameInputElement, 'test');
  await genericMethods.typeText(klachtenFormulierElements.birthDateInputElement, '01012000');
  await genericMethods.typeText(klachtenFormulierElements.zipCodeInputElement, '8017JC');
  await genericMethods.typeText(klachtenFormulierElements.houseNumberInputElement, '1');
  await genericMethods.clickOnTAB(klachtenFormulierElements.houseNumberInputElement);
  await genericMethods.typeText(klachtenFormulierElements.emailAddressInputElement, 'test@test.nl');
  await genericMethods.clickOnElement(klachtenFormulierElements.buttonSendClickElement);
});

Then(/^Verify question is accepted with a confirmation text for klachtenformulier$/, async () => {
  await genericMethods.verifyTextInElement(klachtenFormulierElements.klachtFormConfirmationTextElement, klachtenFormulierElements.klachtFormConfirmationText);
});

