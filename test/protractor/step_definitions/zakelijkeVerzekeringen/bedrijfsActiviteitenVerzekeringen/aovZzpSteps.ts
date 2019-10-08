// @ts-ignore
import {Given, Then, When} from 'cucumber';
import {AovZzpMethods} from "../../../pageobjects/zakelijkeVerzekeringen/bedrijfsActiviteitenVerzekeringen/aovZzpMethods";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {AovZzpElements} from "../../../pageobjects/zakelijkeVerzekeringen/bedrijfsActiviteitenVerzekeringen/aovZzpElements";

let aovZzpElements: AovZzpElements = new AovZzpElements();
let aovZzpMethods: AovZzpMethods = new AovZzpMethods();
let genericMethods: GenericMethods = new GenericMethods();
let personaData: PersonaData = new PersonaData();


When(/^I enter step one page of aovZzp with premie of (.*)$/, async (premie: string) => {
  await aovZzpMethods.dragAndDropUwPremie(premie);
  await aovZzpMethods.clickOnNextButton();
});

When(/^I enter step four page of aovZzp for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(aovZzpElements.zzpYourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(aovZzpElements.zzpYyourDataLastNameElement, personaData.getPersonaLastName(persona));
  await aovZzpMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataHouseNumberAddingElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataEmailAddress, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(aovZzpElements.zzpYourDataBSNnumberElement, personaData.getPersonaBsn(persona));
  await aovZzpMethods.selectYourDataDurationEntrepreneur(personaData.getPersonaDurationEntrepreneur(persona));
  await genericMethods.typeText(aovZzpElements.aovZzpAccountNumberDataElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(aovZzpElements.aovZzpAccountNumberDataElement);
  await genericMethods.clickOnElement(aovZzpElements.aovZzpPaymentAuthorizationElement);
  await aovZzpMethods.clickOnNextButton();
});

When(/^I enter step two page of aovZzp for (.*) with$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(aovZzpElements.zzpYourDataBirthdate, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(aovZzpElements.aovZzpHeightElement, personaData.getPersonaHeight(persona));
  await genericMethods.typeText(aovZzpElements.aovZzpWeightElement, personaData.getPersonaWeight(persona));
  await aovZzpMethods.clickHealthCertificate14DaysNotAbleToWork(dataTable.notWorkForFourteenDays);
  await aovZzpMethods.clickHealthCertificateConsultedDoctor(dataTable.consultedDoctor);
  await aovZzpMethods.clickHealthCertificateMedicines(dataTable.medicines);
  await aovZzpMethods.clickHealthCertificateDisabilityBenefit(dataTable.disabilityBenefit);
  await aovZzpMethods.clickOnNextButton();
});

When(/^I enter step three page of aovZzp with$/, async (data) => {
  const dataTable = data.rowsHash();
  await aovZzpMethods.clickKnowledgeLifeInsurance(dataTable.lifeInsurance);
  await aovZzpMethods.clickKnowledgeIncomeIncapacitated(dataTable.incomeIncapacitated);
  await aovZzpMethods.clickKnowledgeAmountIncapacitated(dataTable.amountIncapacitated);
  await aovZzpMethods.clickKnowledgeMonthlyIncapacitated(dataTable.monthlyIncapacitated);
  await aovZzpMethods.clickKnowledgeConsciousOfAccidentInsurance(dataTable.consciousOfAccidentInsurance);
  await aovZzpMethods.clickKnowledgeConsciousOfMaxTwoYears(dataTable.consciousOfMaxTwoYears);
  await aovZzpMethods.clickOnNextButton();
});

When(/^I enter step five page of aovZzp with$/, async (data) => {
  const dataTable = data.rowsHash();
  await aovZzpMethods.selectInsuranceHistory(dataTable.insuranceHistory);
  await aovZzpMethods.selectCriminalHistory(dataTable.criminalHistory);
  await aovZzpMethods.selectDamageHistory(dataTable.damageHistory);
  await aovZzpMethods.clickOnFinishButton()
});

Then(/^Thank you page for aovZzp (.*) is shown$/, async (persona: string) => {
  await aovZzpMethods.verifyThankYouPageText(persona);
});
