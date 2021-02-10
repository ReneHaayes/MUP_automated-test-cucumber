import {Then, When} from 'cucumber';
import {
  licensePlateMethod
} from '@support';

When(/^I press the button (.*) for the following license plate (.*) on the page for autoverzekering$/, async (button: string, licensePlate: string) => {
  await licensePlateMethod.clickOnAutoVerzekeringButton(button, licensePlate);
});

Then(/^The (.*) data (.*) appears for Particuliere autoverzekering$/, async (licensePlate: string, willWont: string) => {
  await licensePlateMethod.checkAutoverzekeringPage(willWont, licensePlate);
});

Then(/^The (.*) data (.*) appears for Bedrijfs autoverzekering$/, async (licensePlate: string, willWont: string) => {
  await licensePlateMethod.checkBedrijfsAutoverzekeringPage(willWont, licensePlate);
});

Then(/^The (.*) data (.*) appears for Zakelijke autoverzekering$/, async (licensePlate: string, willWont: string) => {
  await licensePlateMethod.checkZakelijkeAutoverzekeringPage(willWont, licensePlate);
});
