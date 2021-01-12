import {Then, When} from "cucumber";
import {genericMethods, klachtenFormulierElements} from "@support";

When(/^Customer fills in form for zorgverzekering klacht$/, async () => {
  await genericMethods.clickOnElement(klachtenFormulierElements.zorgVerzekeringButtonClickElement);
  await genericMethods.typeText(klachtenFormulierElements.lastNameZorgInputElement, 'test');
  await genericMethods.clickOnElement(klachtenFormulierElements.alreadyACustomerClickElement);
  await genericMethods.typeText(klachtenFormulierElements.emailAddressZorgInputElement, 'test@test.nl');
  await genericMethods.typeText(klachtenFormulierElements.clientNumberZorgInputElement, '123');
  await genericMethods.typeText(klachtenFormulierElements.phoneNumberZorgInputElement, '0612345678');
  await genericMethods.typeText(klachtenFormulierElements.uwKlachtZorgInputElement, 'Het is helemaal fout gegaan');
  await genericMethods.typeText(klachtenFormulierElements.oplossingZorgInputElement, 'Een juiste oplossing');
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

Then(/^Verify question is accepted with a confirmation text for klachtenformulier zorg$/, async () => {
  await genericMethods.verifyTextInElement(klachtenFormulierElements.klachtFormConfirmationTextElement, klachtenFormulierElements.klachtFormSecondConfirmationText);
});
