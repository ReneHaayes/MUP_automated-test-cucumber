import {Then, When} from 'cucumber';
import {
  autoVerzekeringMethods,
  // genericMethods,
  zzpGoedBeterBestMethods
} from '@support';
import {genericEnum} from '@enum';

When(/^I enter step one of zzp-pakket with (.*)$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await zzpGoedBeterBestMethods.enterKvkNumber(company);
  await zzpGoedBeterBestMethods.selectCompanyActivity(dataTable.insuranceHistory);
  await zzpGoedBeterBestMethods.selectPersonnelOnPayroll(dataTable.criminalHistory);
  await zzpGoedBeterBestMethods.selectHasCompanyCar(dataTable.damageHistory);
  if ((dataTable.hasCompanyCar) === genericEnum.YES) {
    await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  } else {}


});

// When(/^I enter step two of zzp-pakket for (.*) with (.*)$/, async (persona: string, pakketkeuze: string) => {
//
// });


Then(/^Thank you page for zzp-pakket (.*) is shown$/, async (persona: string) => {
  await zzpGoedBeterBestMethods.verifyThankYouPageText(persona);
});
