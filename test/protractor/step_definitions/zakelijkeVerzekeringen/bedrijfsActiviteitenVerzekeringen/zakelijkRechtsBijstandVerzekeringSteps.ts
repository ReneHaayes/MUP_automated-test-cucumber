import {When} from "cucumber";
import {
  companyData,
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  zakelijkRechtsBijstandVerzekeringElements
} from '@support';

When(/^I enter step one page and click next on step two of zakelijk rechtsbijstand verzekering with:(.*)$/, async (company: string) => {
  await genericMethods.typeText(zakelijkRechtsBijstandVerzekeringElements.kvkNumberInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.getCompanyDataButtonClickElement);
  await genericMethods.verifyTextInElement(zakelijkRechtsBijstandVerzekeringElements.companyNameTextElement, companyData.getCompanyName(company));
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.correctCompanyDataYesClickElement);
  await genericMethods.clickOnNextButton();
  //click on next at step two
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of zakelijk rechtsbijstand verzekering with:$/, async function () {
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.otherActivitiesNoClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step four page of zakelijk rechtsbijstandverzekering for (.*) with (.*)$/, async (company: string, persona: string) => {
  await genericMethods.clickOnTAB(nawElements.companyDataNameInputElement);
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

When(/^I enter almost insured question for zakelijk rechtsbijstand verzekering with no$/, async function () {
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.legalDifferenceWithinFiveYearsNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.beroepOpVerzekeringNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.bestemmingsplanDifferenceNoClickElement);
  await genericMethods.clickOnElement(zakelijkRechtsBijstandVerzekeringElements.moreThanTenMoneyDemandNoClickElement);
});
