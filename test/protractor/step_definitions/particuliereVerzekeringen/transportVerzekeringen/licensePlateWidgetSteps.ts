import {Then, When} from "cucumber";
import {
  bedrijfsAutoVerzekeringElements, businessCarWithLicensePlate, genericMethods, licensePlateMethod
} from "@support";

When(/^I press the button (.*) for the following license plate (.*) on the page for autoverzekering$/, async (button: string, licensePlate: string) => {
  await licensePlateMethod.clickOnAutoVerzekeringButton(button, licensePlate);
});

Then(/^The (.*) data (.*) appears for autoverzekering$/, async (licensePlate: string, dodont: string) => {
  await licensePlateMethod.checkAutoverzekeringPage(dodont, licensePlate);
});

Then(/^The (.*) data (.*) appears for bedrijfs autoverzekering$/, async (licensePlate: string, dodont: string) => {
  await licensePlateMethod.checkBedrijfsAutoverzekeringPage(dodont, licensePlate);
});

Then(/^The (.*) data dont appears for business personenautoverzekering$/, async (licensePlate: string) => {
  await genericMethods.verifyTextNotInElement(bedrijfsAutoVerzekeringElements.brandNamePersonenAutoElement, businessCarWithLicensePlate.getCarBrandName(licensePlate), bedrijfsAutoVerzekeringElements.licensePlatePersonenAutoElement);
});
