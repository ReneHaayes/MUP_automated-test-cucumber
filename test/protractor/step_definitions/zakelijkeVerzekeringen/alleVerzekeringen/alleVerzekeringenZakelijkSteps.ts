import {Then, When} from 'cucumber';
import {alleVerzekeringenZakelijkMethods} from '@support';


When(/^I am on the alle verzekeringen zakelijk page and select (.*) from dropdown$/, async (buttonPage: string) => {
  await alleVerzekeringenZakelijkMethods.selectAlleVerzekeringDropdown(buttonPage);
});

When(/^I click on (.*) at the alle verzekeringen zakelijk page$/, async (buttonPage: string) => {
  await alleVerzekeringenZakelijkMethods.clickAlleVerzekeringInput(buttonPage);
});



Then(/^Verify elements on (.*) product page zakelijk is shown$/, async (buttonPage2: string) => {
  await alleVerzekeringenZakelijkMethods.verifyAlleVerzekeringInput(buttonPage2);
});

