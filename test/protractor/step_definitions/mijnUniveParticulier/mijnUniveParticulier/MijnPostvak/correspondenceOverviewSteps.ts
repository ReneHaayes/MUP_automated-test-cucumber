import {Then, When} from "cucumber";
import {correspondentieOverzichtElements, genericMethods} from "../../../../support";

When(/^Customer selects first correspondence for package$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieButtonClickElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstCorrespondenceClickElement);
});

When(/^Customer selects personal advice$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.persoonlijkAdviesButtonClickElement);

});

Then(/^Verify the clicked correspondence is shown$/, async () => {
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.correspondenceHeaderH3TextElement, correspondentieOverzichtElements.correspondenceHeaderH3Text);
});

Then(/^Verify the customer is on the page persoonlijk advies$/, async () => {
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.persoonlijkAdviesBreadCrumbElement, correspondentieOverzichtElements.PERSOONLIJK_ADVIES);
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.persoonlijkAdviesH1HeaderTextElement, correspondentieOverzichtElements.PERSOONLIJK_ADVIES);
});
