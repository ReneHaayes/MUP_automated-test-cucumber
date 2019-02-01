import {Then, When} from "cucumber";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {HmPageElements} from "../../pageobjects/generic/hmPageElements";
import {LicensePlateMethod} from "../../pageobjects/autoVerzekering/licensePlateMethod";

let genericMethods: GenericMethods = new GenericMethods();
let hmPageElements: HmPageElements = new HmPageElements();
let licensePlateMethod: LicensePlateMethod = new LicensePlateMethod();

When(/^I press the button (.*) for the following license plate (.*) on the home page for autoverzekering$/, async (button: string, licensePlate: string) => {
  await genericMethods.clickOnElement(hmPageElements.homePageAutoverzekeringElement);
  await licensePlateMethod.clickOnAutoverzekeringHmPage(button, licensePlate)
});

Then(/^The (.*) data (.*) appears$/, async (licensePlate: string, dodont: string) => {
  await licensePlateMethod.checkAutoverzekeringPage(dodont, licensePlate);
});
