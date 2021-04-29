import {Given, Then} from 'cucumber';
import {situatieGewijzigdMethods} from '@support';

Given(/^Customer clicks on situation (.*) to be changed$/, async (situatie: string) => {
  await situatieGewijzigdMethods.selectSituatieGewijzigd(situatie);
});

Then(/^Verify header with text (.*) of situation is correctly shown$/, async (headerText: string) => {
  await situatieGewijzigdMethods.checkSituatieGewijzigdPage(headerText);
});
