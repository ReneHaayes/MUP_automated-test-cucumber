import {Given, Then} from 'cucumber';
import {genericMethods, situatieGewijzigdElements, situatieGewijzigdMethods} from '@support';

Given(/^Customer clicks on situation (.*) to be changed$/, async (situatie: string) => {
  await genericMethods.clickOnElement(situatieGewijzigdElements.situatieGewijzigdClickElement(situatie));
});

Then(/^Verify header with text (.*) of situation is correcly shown$/, async (headerText: string) => {
  await situatieGewijzigdMethods.checkSituatieGewijzigdPage(headerText);
});
