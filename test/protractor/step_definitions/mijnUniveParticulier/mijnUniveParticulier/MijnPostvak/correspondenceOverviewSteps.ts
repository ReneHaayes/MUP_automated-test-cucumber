import {Then, When} from "cucumber";
import {CorrespondentieElements} from "../../../../pageobjects/mijnUniveParticulier/MijnPostvak/CorrespondentieElements";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";

let correspondentieOverzichtElements: CorrespondentieElements = new CorrespondentieElements();
let genericMethods: GenericMethods = new GenericMethods();

When(/^Customer selects first correspondence for package$/, async () => {
  await genericMethods.clickOnElement(correspondentieOverzichtElements.correspondentieButtonClickElement);
  await genericMethods.clickOnElement(correspondentieOverzichtElements.firstCorrespondenceClickElement);
});

Then(/^Verify the clicked correspondence is shown$/, async () => {
  await genericMethods.verifyTextInElement(correspondentieOverzichtElements.correspondenceHeaderH3TextElement, correspondentieOverzichtElements.correspondenceHeaderH3Text);
});

