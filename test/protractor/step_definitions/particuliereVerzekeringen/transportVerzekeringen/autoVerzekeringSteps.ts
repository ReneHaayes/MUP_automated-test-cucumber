import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {
  analyticsAutoverzekeringElements, analyticsGenericElements,
  autoVerzekeringElements,
  autoVerzekeringElementsStepThree,
  autoVerzekeringMethods,
  autoVerzekeringMethodsStepThreeAndFour,
  carWithLicensePlate,
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  stickyBalkElements,
  stickyBalkMethods,
  vehicleElements
} from "@support";
 // import {homePageEnum} from "../../../pageobjects/enum/woonVerzekeringEnum";   // verify sticky
import {anaEnumLocation, anaEnumObjectName, anaEnumSearchObject} from '@enum';


When(/^Customer enters step one page of autoverzekeringen for (.*) with license plate (.*)$/, async (persona: string, licensePlate: string) => {
  await autoVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectWhoDrivesTheCarTheMost('mySelf');
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateAfterFixElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderBirthdateAfterFixElement);
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeAfterFixElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeAfterFixElement);
  await autoVerzekeringMethods.selectYearlyMileage('20000tot25000');
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, '2');
  await genericMethods.clickOnTAB(autoVerzekeringElements.damageFreeYearsElement);
  await autoVerzekeringMethods.selectIfYouAlreadyHaveACarAtUnive('no');
  //ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.firstPagePaginaId);
  //ANALYTICS

  await genericMethods.clickOnNextButton();
});


When(/^Customer enters step two page of autoverzekering with collective (.*)$/, async (collective: string) => {
  await autoVerzekeringMethods.clickOnBasisDekking('waPlus');
  //  await stickyBalkMethods.verifyStickyBalkAndOpbouwVanBerekening(homePageEnum.AUTOVERZEKERING);
  await autoVerzekeringMethods.selectOwnRisk('ownRisk500');
  await autoVerzekeringMethods.clickOnAanvullendeOpties('Inzittendenverzekering');
  await autoVerzekeringMethods.selectCarAcc('autoAccTm5000');
  await genericMethods.typeText(autoVerzekeringElements.collectiveInputElement, collective);
   await genericMethods.clickOnElement(autoVerzekeringElements.collectiveAutoCompleteClickElement);
  await genericMethods.verifyTextContainsInElement(autoVerzekeringElements.collectiveResultTextElement, collective, browser.getPageTimeout);
  await autoVerzekeringMethods.selectTotalPremie('annual');

  //ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SECOND, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.secondPagePaginaId);
  //ANALYTICS

  await genericMethods.clickOnNextButton();
});

When(/^Customer enters step two page of autoverzekering without collective$/, async () => {
  await autoVerzekeringMethods.clickOnBasisDekking('waPlus');
  await autoVerzekeringMethods.selectOwnRisk('ownRisk500');
  await autoVerzekeringMethods.clickOnAanvullendeOpties('Inzittendenverzekering');
  await autoVerzekeringMethods.selectCarAcc('autoAccTm5000');
  await autoVerzekeringMethods.selectTotalPremie('annual');
  await genericMethods.clickOnNextButton();
});

Then(/^Verify step two page of autoverzekering automatically prefilled with collective (.*)$/, async (collective: string) => {
  await genericMethods.verifyValueTextInElement(autoVerzekeringElements.collectiveResultTextElement, collective);
});

Then(/^Customer can select bekijk controleer gegevens for autoverzekering in almost insured page with correct data$/, async () => {
  await genericMethods.clickOnElement(stickyBalkElements.controleerGegevensClickElement);
  await stickyBalkMethods.verifySummaryAutoVerzekering();
  await genericMethods.clickOnElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingCloseClickElement);
  // ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIFTH, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.fifthPagePaginaId);
  // ANALYTICS
});

When(/^Customer enters step three page of autoverzekering for (.*)$/, async (licensePlate: string) => {
  // INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, genericMethods.getDate('today'));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourNameElement, genericMethods.getDate('today'));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(licensePlate));
  // INSERT USE OF THE CAR INFORMATION
  await autoVerzekeringMethodsStepThreeAndFour.clickOnOwnerCar('ownerCarYes');

  // ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.THIRTH, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.thirthPagePaginaId);
  // ANALYTICS

  await genericMethods.clickOnNextButton();
});

Then(/^Verify meldcode is mandatory when you dont fill in$/, async () => {
  // INSERT DATE INFORMATION
  await genericMethods.typeText(vehicleElements.startDateElement, genericMethods.getDate('today'));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourNameElement, genericMethods.getDate('today'));
  await autoVerzekeringMethodsStepThreeAndFour.clickOnOwnerCar('ownerCarYes');
  await genericMethods.clickOnNextButton();
  await genericMethods.verifyTextInElement(autoVerzekeringElements.meldCodeErrorElement, 'Dit veld is verplicht.');
  // await genericMethods.verifyTextInElement('[class="message error"]', 'Dit veld is verplicht.');
});

When(/^Customer enters step four page of autoverzekering for (.*)$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  //ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FOURTH, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.fourthPagePaginaId);
  //ANALYTICS
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one page of personen autoverzekeringen zakelijk for (.*) with:$/, async (company: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(autoVerzekeringElements.sameDriverNoClickElement);
  await genericMethods.typeText(autoVerzekeringElements.sameDriverZipCodeCompanyElement, companyData.getCompanyZipcode(company));
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnTAB(autoVerzekeringElements.damageFreeYearsElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one page of personen autoverzekeringen zakelijk for (.*) with different (.*) driver:$/, async (company: string, persona: string, data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.enterLicensePlate(dataTable.licensePlate);
  await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(dataTable.licensePlate) + '")]', browser.getPageTimeout);
  await autoVerzekeringMethods.selectYearlyMileage(dataTable.yearlyMileage);
  await genericMethods.clickOnElement(autoVerzekeringElements.sameDriverYesClickElement);
  await genericMethods.typeText(nawElements.specificDriverZipCodeElement, companyData.getCompanyZipcode(company));
  await genericMethods.clickOnTAB(nawElements.specificDriverZipCodeElement);
  await genericMethods.typeText(nawElements.afwijkendeBestuurderBirthdateStepOneElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.clickOnTAB(nawElements.afwijkendeBestuurderBirthdateStepOneElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnTAB(autoVerzekeringElements.damageFreeYearsElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  await autoVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await autoVerzekeringMethods.selectCarAcc(dataTable.carAccessoires);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of personen autoverzekering zakelijk with$/, async (data) => {
  const dataTable = data.rowsHash();
  // INSERT DATE INFORMATION
  await genericMethods.typeText(autoVerzekeringElementsStepThree.startDateOnYourCompanyElement, genericMethods.getDate(dataTable.startDateOnYourName));
  await genericMethods.typeText(autoVerzekeringElementsStepThree.reportingCode, carWithLicensePlate.getCarReportingCode(dataTable.licensePlate));
  await genericMethods.clickOnTAB(autoVerzekeringElementsStepThree.reportingCode);
  // INSERT USE OF THE CAR INFORMATION
  await genericMethods.clickOnElement(autoVerzekeringElementsStepThree.ownerCarCompanyYesClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of personenautoverzekering zakelijk for (.*) with driver (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressInputElement);
  await genericMethods.typeText(nawElements.companyDataEmailAddressConfirmInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressConfirmInputElement);
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);

  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of personenautoverzekering zakelijk for (.*) with different (.*) driver$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataKvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(nawElements.companyDataKvkNumberInputElement);
  await genericMethods.clickOnElement(nawElements.companyDataEmployeesNoClickElement);
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressInputElement);
  await genericMethods.typeText(nawElements.companyDataEmailAddressConfirmInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.clickOnTAB(nawElements.companyDataEmailAddressConfirmInputElement);
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);

  await genericMethods.typeText(nawElements.afwijkendeBestuurderInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickAfwijkendeBestuurderDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.afwijkendeBestuurderHouseNumberElement, personaData.getPersonaHouseNumber(persona));

  await genericMethods.clickOnNextButton();
});

Then(/^The thank you page for (.*) is visible for page autoverzekering$/, async function (persona: string) {
  await genericMethods.verifyThankYouPageTitle(persona);
  //ANALYTICS
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SIXTH, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.PAGINA_ID)),
    analyticsAutoverzekeringElements.thankYouPagePaginaId);
  await genericMethods.verifyTextNotEmpty(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SIXTH, anaEnumObjectName.QIS_PAGEVIEW,
    anaEnumSearchObject.TRANSACTIE_ID)));
  await genericMethods.verifyTextNotEmpty(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SIXTH, anaEnumObjectName.QIS_PAGEVIEW,
    anaEnumSearchObject.SECOND_DEKKING)));
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIFTH, anaEnumObjectName.QIS_PAGEVIEW, anaEnumSearchObject.REGIONALE_UNIVE)),
    analyticsAutoverzekeringElements.nulVierVierAchtVijf);
  //ANALYTICS
});
