import {Then, When} from "cucumber";
import {LicensePlateMethod} from "../../pageobjects/autoVerzekering/licensePlateMethod";

let licensePlateMethod: LicensePlateMethod = new LicensePlateMethod();

When(/^I press the button (.*) for the following license plate (.*) on the page for autoverzekering$/, async (button: string, licensePlate: string) => {
  await licensePlateMethod.clickOnAutoVerzekeringButton(button, licensePlate)
});

Then(/^The (.*) data (.*) appears$/, async (licensePlate: string, dodont: string) => {
  await licensePlateMethod.checkAutoverzekeringPage(dodont, licensePlate);
});
