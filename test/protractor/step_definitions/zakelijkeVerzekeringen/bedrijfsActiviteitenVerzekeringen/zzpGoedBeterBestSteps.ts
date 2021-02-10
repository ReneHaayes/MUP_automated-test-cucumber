import {Then, When} from 'cucumber';
import {
  companyData,
  genericMethods, personaData,
  zzpGoedBeterBestElements,
  zzpGoedBeterBestMethods
} from '@support';

import {browser} from 'protractor';

When(/^I enter step one of zzp-pakket with (.*)$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
  await zzpGoedBeterBestMethods.enterKvkNumber(company);
  await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.kvkCompanyName, companyData.getCompanyName(company));
  await zzpGoedBeterBestMethods.selectCompanyActivity(dataTable.correctActivity);
  await zzpGoedBeterBestMethods.selectHasEmployees(dataTable.hasEmployees);
  await zzpGoedBeterBestMethods.selectHasCompanyCar(dataTable.hasCompanyCar);
  if (dataTable.hasCompanyCar === 'yes') {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.companyCarLicencePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(zzpGoedBeterBestElements.companyCarLicencePlateInputElement, dataTable.licensePlate);
    await genericMethods.clickOnTAB(zzpGoedBeterBestElements.companyCarLicencePlateInputElement);
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.companyCarInfoElement, browser.getPageTimeout);
    await zzpGoedBeterBestMethods.selectMileage(dataTable.mileage);
    await genericMethods.typeText(zzpGoedBeterBestElements.damageFreeYearsElement, '2');
  } else {
  }
  await zzpGoedBeterBestMethods.selectHasInventoryOnOtherAdress(dataTable.otherInventoryAdress);
  if (dataTable.otherInventoryAdress === 'yes') {
    await genericMethods.typeText(zzpGoedBeterBestElements.otherAdressZipcodeInputElement, personaData.getPersonaZipcode(dataTable.persona));
    await genericMethods.typeText(zzpGoedBeterBestElements.otherAdressHouseNumberInputElement, personaData.getPersonaHouseNumber(dataTable.persona));
    await genericMethods.typeText(zzpGoedBeterBestElements.otherAdressAdditionInputElement, personaData.getPersonaHouseNumberAddition(dataTable.persona));
    await genericMethods.clickOnTAB(zzpGoedBeterBestElements.otherAdressAdditionInputElement);
  } else { }
  await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);


});

 When(/^I enter step two of zzp-pakket with$/, async (data) => {
   const dataTable = data.rowsHash();
   await zzpGoedBeterBestMethods.selectGoedBeterBest(dataTable.pakketkeuze);
   await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
});

When(/^I enter step four of zzp-pakket with$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
  if (dataTable.hasCompanyCar === 'yes') {

  } else {}


  await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);

});


Then(/^Thank you page for zzp-pakket (.*) is shown$/, async (persona: string) => {
  await zzpGoedBeterBestMethods.verifyThankYouPageText(persona);
});
