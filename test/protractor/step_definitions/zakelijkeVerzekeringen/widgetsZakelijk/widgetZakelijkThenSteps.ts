import {Then} from 'cucumber';
import {companyData, genericMethods, widgetZakelijkElements} from '@support';

// THEN
// Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)       // rechtsbijstandverzekering ZZP
Then(/^I check if the KVK number for (.*) is present on the next page$/, async function (company: string) {
  await genericMethods.verifyTextInElement(widgetZakelijkElements.kvkNameElement, companyData.getCompanyName(company));
  await genericMethods.verifyTextInElement(widgetZakelijkElements.kvkLegalElement, companyData.getCompanyLegal(company));
});




// personenautoverzekering zakelijk
// Zie test/protractor/features/particuliereVerzekeringen/transportVerzekeringen/personenAutoVerzekeringHappyFlow.feature
