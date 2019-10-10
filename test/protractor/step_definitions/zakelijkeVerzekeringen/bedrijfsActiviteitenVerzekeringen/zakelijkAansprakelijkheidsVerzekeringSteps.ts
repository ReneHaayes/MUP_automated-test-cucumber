import {When} from "cucumber";
import {
  companyData,
  genericElements, genericMethods,
  nawElements, personaData,
  zakelijkAansprakelijkheidsVerzekeringElements
} from "../../../support";

When(/^I enter step one page and click next on step two for zakelijk aansprakelijkheidsverzekering with company (.*)$/, async function (company: string) {
  await genericMethods.typeText(zakelijkAansprakelijkheidsVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.getCompanyDataButtonClickElement);
  await genericMethods.verifyTextInElement(zakelijkAansprakelijkheidsVerzekeringElements.companyNameTextElement, companyData.getCompanyName(company));
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.correctCompanyDataYesClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.otherActivitiesNoClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnElement(genericElements.closeLightBoxClickElement);
  //click next on step two page.
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page and click next on step four for zakelijk aansprakelijkheidsverzekering:$/, async () => {
  // const dataTable = data.rowsHash();
  // await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.usualConditionsYesClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsideNetherlandsNoClickElement);
  // await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.productsToFactorysNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.clientsInFollowingSectorsNoElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.demolishBuildingsNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsourceToZzpNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workingWithAsbestNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.scaffoldingNoClickElement);
  await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.useFollowingEquipmentDuringWorkNoClickElement);
  // await zakelijkAansprakelijkheidsVerzekeringMethods.selectTools(dataTable.tools);
  await genericMethods.clickOnNextButton();
  // click next on step four
  await genericMethods.clickOnNextButton();
});


When(/^I enter step five page of zakelijk aansprakelijkheidsverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.typeText(nawElements.companyDataPhoneNumberInputElement, companyData.getCompanyPhoneNumber(company));
  await genericMethods.typeText(nawElements.companyDataEmailAddressInputElement, companyData.getCompanyEmailAddress(company));
  await genericMethods.typeText(nawElements.contactDataInitialsInputElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.contactDataPrefixInputElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.contactDataLastNameInputElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickContactDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
