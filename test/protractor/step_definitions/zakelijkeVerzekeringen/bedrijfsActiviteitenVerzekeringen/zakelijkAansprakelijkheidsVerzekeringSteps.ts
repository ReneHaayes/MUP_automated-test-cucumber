import {When} from 'cucumber';
import {
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  zakelijkAansprakelijkheidsVerzekeringMethods,
  zakelijkAansprakelijkheidsVerzekeringElements,
} from '@support';
import {browser} from 'protractor';


When(/^I enter step one page and click next on step two for zakelijk aansprakelijkheidsverzekering with company (.*)$/, async function (company: string) {
  await genericMethods.typeText(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnTAB(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement);
  await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElement, companyData.getCompanyName(company));
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.correctCompanyDataYesClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.otherActivitiesYesClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.otherActivitiesNoClickElement);
  await genericMethods.clickOnNextButton();
  // await genericMethods.clickOnElement(genericElements.closeLightBoxClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page and click next on step four for zakelijk aansprakelijkheidsverzekering:$/, async () => {
  // const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsideNetherlandsNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.clientsInFollowingSectorsNoElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.demolishBuildingsNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsourceToZzpNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workingWithAsbestNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.scaffoldingNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.useSpecificEquipmentDuringWorkNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workOnlyInPrivateSectorNoElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.heavyConstructionWorkNoElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.additionalRiskThreeYearsPriorNoElement);
  await genericMethods.clickOnNextButton();
  // click next on step four
  await genericMethods.clickOnNextButton();
});


When(/^I enter step five page of zakelijk aansprakelijkheidsverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.waitForElementIsVisible(nawElements.companyDataPhoneNumberInputElement, browser.getPageTimeout);
  await genericMethods.clickOnTAB(nawElements.companyDataPhoneNumberInputElement);
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





// nieuw opgezet in sprint 21-05


  When(/^I enter page one for zakelijk aansprakelijkheidsverzekering with company (.*)$/, async function (company: string) {
    await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, browser.getPageTimeout);
    await genericMethods.typeText(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
    await genericMethods.clickOnTAB(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement);
    await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElement, companyData.getCompanyName(company));
    await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.correctCompanyDataYesClickElement);
    await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.otherActivitiesYesClickElement);
    await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.otherActivitiesNoClickElement);
    await genericMethods.clickOnNextButton();
  });

When(/^I enter page two for zakelijk aansprakelijkheidsverzekering$/, async () => {
  // await genericMethods.clickOnElement(genericElements.nextButton);
  await genericMethods.clickOnNextButton();
});


When(/^I enter page three for zakelijk aansprakelijkheidsverzekering with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
  await zakelijkAansprakelijkheidsVerzekeringMethods.workOutsideNetherlands(dataTable.workOutsideNetherlands);
  await zakelijkAansprakelijkheidsVerzekeringMethods.clientInSpecificSector(dataTable.clientInSpecificSector);
  await zakelijkAansprakelijkheidsVerzekeringMethods.demolishBuildings(dataTable.demolishBuildings);
  await zakelijkAansprakelijkheidsVerzekeringMethods.outsourceToZzp(dataTable.outsourceToZzp);
  await zakelijkAansprakelijkheidsVerzekeringMethods.workWithAsbestos(dataTable.workWithAsbestos);
  await zakelijkAansprakelijkheidsVerzekeringMethods.putUpScaffolding(dataTable.putUpScaffolding);
  await zakelijkAansprakelijkheidsVerzekeringMethods.useSpecificEquipment(dataTable.useSpecificEquipment);
  await zakelijkAansprakelijkheidsVerzekeringMethods.workOnlyInPrivateSector(dataTable.workOnlyInPrivateSector);
  await zakelijkAansprakelijkheidsVerzekeringMethods.heavyConstructionWork(dataTable.heavyConstructionWork);
  await zakelijkAansprakelijkheidsVerzekeringMethods.riskFreeThreeYearsPrior(dataTable.riskFreeThreeYearsPrior);
  await genericMethods.clickOnNextButton();
});

When(/^I enter page four for zakelijk aansprakelijkheidsverzekering$/, async () => {
  await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});

When(/^I enter page five of zakelijk aansprakelijkheidsverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.waitForElementIsVisible(nawElements.companyDataPhoneNumberInputElement, browser.getPageTimeout);
  await genericMethods.clickOnTAB(nawElements.companyDataPhoneNumberInputElement);
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
