import {Then, When} from 'cucumber';
import {
  companyData,
  genericMethods,
  personaData,
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
  } else {  }
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
   await genericMethods.waitForElementClickable(zzpGoedBeterBestElements.goedElement, browser.getPageTimeout);
   await zzpGoedBeterBestMethods.selectGoedBeterBest(dataTable.pakketkeuze);
   await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.nextButton, browser.getPageTimeout);
   await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
});

When(/^I enter step four of zzp-pakket with$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
  // Bedrijfsautoverzekering
  if (dataTable.hasCompanyCar === 'yes') {
  await zzpGoedBeterBestMethods.selectCompanyCar(dataTable.ownerOfCar);
  } else {}
  // Bedrijfsaansprakelijkheidsverzekering
  await zzpGoedBeterBestMethods.selectFireHazardousWork(dataTable.fireHazardousWork);
  await zzpGoedBeterBestMethods.selectWorkMainlyAbroad(dataTable.workMainlyAbroad);
  await zzpGoedBeterBestMethods.selectWorkInSpecificSector(dataTable.workInSpecificSector);
  await zzpGoedBeterBestMethods.selectDemolitionWork(dataTable.demolitionWork);
  await zzpGoedBeterBestMethods.selectTakeOnContractsForZZPer(dataTable.takeOnContractsForZZPer);
  await zzpGoedBeterBestMethods.selectWorkWithAsbestos(dataTable.workWithAsbestos);
  await zzpGoedBeterBestMethods.selectBuildScaffolding(dataTable.buildScaffolding);
  await zzpGoedBeterBestMethods.selectUseHeavyMaterials(dataTable.useHeavyMaterials);
  await zzpGoedBeterBestMethods.selectConflictsThreeYearsPrior(dataTable.conflictsThreeYearsPrior);
  // Rechtsbijstandverzekering
  browser.sleep(500);
  if (zzpGoedBeterBestElements.legalCouncilQuestionHeader === 'Rechtsbijstandverzekering') {
    await zzpGoedBeterBestMethods.selectHasOtherActivities(dataTable.hasOtherActivities);
  } else {}
  await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
});

When(/^I enter step five of zzp-pakket for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
  await genericMethods.waitForElementClickable(zzpGoedBeterBestElements.nextButton, browser.getPageTimeout);
  // Bedrijfsgegevens
  await genericMethods.typeText(zzpGoedBeterBestElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(zzpGoedBeterBestElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(zzpGoedBeterBestElements.companyDataEmailAddressInputElement);
  await genericMethods.typeText(zzpGoedBeterBestElements.companyDataEmailAddressConfirmInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(zzpGoedBeterBestElements.companyDataEmailAddressConfirmInputElement);
  // Contactpersoon
  await genericMethods.typeText(zzpGoedBeterBestElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(zzpGoedBeterBestElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(zzpGoedBeterBestElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.typeText(zzpGoedBeterBestElements.contactDataBirthdayInputElement, personaData.getPersonaBirthDate(persona));
  if (personaData.getPersonaGender(persona) === 'male')  {
    await genericMethods.clickOnElement(zzpGoedBeterBestElements.contactDataGenderMaleInputElement);
  } else {
    await genericMethods.clickOnElement(zzpGoedBeterBestElements.contactDataGenderFemaleInputElement);
  }
  await genericMethods.typeText(zzpGoedBeterBestElements.contactDataAccountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(zzpGoedBeterBestElements.contactDataAccountNumberElement);
  await genericMethods.clickOnElement(zzpGoedBeterBestElements.authorizationUniveElement);

  await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
});

When(/^I fill in almost insured page for zzp-pakket with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await zzpGoedBeterBestMethods.selectInsuranceHistoryZZP(dataTable.insuranceHistory);
  await zzpGoedBeterBestMethods.selectCriminalHistoryZZP(dataTable.criminalHistory);
  await zzpGoedBeterBestMethods.selectDamageHistoryZZP(dataTable.damageHistory);
  if (zzpGoedBeterBestElements.legalCouncilQuestionHeader === 'Rechtsbijstandverzekering') {
    await zzpGoedBeterBestMethods.selectLegalQuestionsZZP(dataTable.legalQuestions);
    browser.sleep(1000);
  } else {}
  await genericMethods.clickOnElement(zzpGoedBeterBestElements.getInsuranceNowButton);
});

Then(/^Thank you page for zzp-pakket is shown for (.*)$/, async (persona: string) => {
  await zzpGoedBeterBestMethods.verifyThankYouPageText(persona);
});
