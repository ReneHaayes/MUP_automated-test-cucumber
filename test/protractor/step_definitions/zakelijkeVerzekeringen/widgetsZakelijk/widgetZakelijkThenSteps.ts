import {Then} from 'cucumber';
import {companyData,
  genericMethods,
  widgetZakelijkElements
} from '@support';


// THEN
// Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)
Then(/^I check if the KVK number for (.*) is present on the next page of aansprakelijkheidsverzekering$/, async function (company: string) {
  await genericMethods.verifyTextInElement(widgetZakelijkElements.kvkNameElement, companyData.getCompanyName(company));
});

// Rechtsbijstandsverzekering (voor ZZP'ers)
Then(/^I check if the KVK number for (.*) is present on the next page of rechtsbijstandsverzekering$/, async function (company: string) {
  await genericMethods.verifyTextInElement(widgetZakelijkElements.kvkNameElement, companyData.getCompanyName(company));
});

// Eigen vervoerverzekering
Then(/^I check if the KVK number for (.*) is present on the next page of eigen vervoer verzekering$/, async function (company: string) {
  await genericMethods.verifyTextInElement(widgetZakelijkElements.kvkNameElement, companyData.getCompanyName(company));
});



// personenautoverzekering zakelijk
// Zie test/protractor/features/particuliereVerzekeringen/transportVerzekeringen/personenAutoVerzekeringHappyFlow.feature
