// @ts-ignore
import {Given, Then, When} from 'cucumber';
import {ZzpFlexMethods} from "../../../pageobjects/zakelijk/bedrijfsActiviteitenVerzekeringen/zzpFlexMethods";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {PersonaData} from "../../../pageobjects/persona/persona";
import {ZzpFlexElements} from "../../../pageobjects/zakelijk/bedrijfsActiviteitenVerzekeringen/zzpFlexElements";
import {genericEnum} from "../../../pageobjects/enum/genericEnum";

let zzpFlexElements: ZzpFlexElements = new ZzpFlexElements();
let zzpFlexMethods: ZzpFlexMethods = new ZzpFlexMethods();
let genericMethods: GenericMethods = new GenericMethods();
let personaData: PersonaData = new PersonaData();


When(/^I enter step one page of zzpFlex with premie of (.*)$/, async (premie: string) => {
  await zzpFlexMethods.dragAndDropUwPremie(premie);
  await zzpFlexMethods.clickOnNextButton();
});

When(/^I enter step two page of zzpFlex for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(zzpFlexElements.zzpYourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYyourDataLastNameElement, personaData.getPersonaLastName(persona));
  await zzpFlexMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBirthdate, personaData.getPersonaBirthday(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBirthPlace, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataHouseNumberAddingElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await zzpFlexMethods.selectYourDataSpecificIdentification(personaData.getPersonaSpecificIdentification(persona), persona);
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBSNnumberElement, personaData.getPersonaBsn(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataEmailAddress, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(zzpFlexElements.zzpOtherDataProfessionElement, personaData.getPersonaProfession(persona));
  await genericMethods.typeText(zzpFlexElements.zzpOtherDataKvkNumberElement, personaData.getPersonaKvkNumber(persona));
  await zzpFlexMethods.selectYourDataDurationEntrepreneur(personaData.getPersonaDurationEntrepreneur(persona));
  await genericMethods.typeText(zzpFlexElements.zzpFlexAccountNumberDataElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(zzpFlexElements.zzpFlexAccountNumberDataElement);
  await genericMethods.clickOnElement(zzpFlexElements.zzpFlexPaymentAuthorizationElement);
  await zzpFlexMethods.clickOnNextButton();
});

When(/^I enter step three page of zzpFlex for (.*) with$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.typeText(zzpFlexElements.zzpFlexHeightElement, personaData.getPersonaHeight(persona));
  await genericMethods.typeText(zzpFlexElements.zzpFlexWeightElement, personaData.getPersonaWeight(persona));
  await zzpFlexMethods.clickHealthCertificate14DaysNotAbleToWork(dataTable.notWorkForFourteenDays);
  await zzpFlexMethods.clickHealthCertificateHeartComplaints(dataTable.heartComplaints);
  await zzpFlexMethods.clickHealthCertificateCancer(dataTable.cancer);
  await zzpFlexMethods.clickHealthCertificatePsychologist(dataTable.psychologist);
  await zzpFlexMethods.clickHealthCertificatePosturalComplaints(dataTable.posturalComplaints);
  await zzpFlexMethods.clickHealthCertificateOtherCondition(dataTable.otherCondition);
  await zzpFlexMethods.clickHealthCertificateMedicines(dataTable.medicines);
  await zzpFlexMethods.clickHealthCertificateDisabilityBenefit(dataTable.disabilityBenefit);
  await zzpFlexMethods.clickOnNextButton();
});

When(/^I enter step four page of zzpFlex with$/, async (data) => {
  const dataTable = data.rowsHash();
  await zzpFlexMethods.clickKnowledgeLifeInsurance(dataTable.lifeInsurance);
  await zzpFlexMethods.clickKnowledgeIncomeIncapacitated(dataTable.incomeIncapacitated);
  await zzpFlexMethods.clickKnowledgeAmountIncapacitated(dataTable.amountIncapacitated);
  await zzpFlexMethods.clickKnowledgeMonthlyIncapacitated(dataTable.monthlyIncapacitated);
  await zzpFlexMethods.clickKnowledgeConsciousOfAccidentInsurance(dataTable.consciousOfAccidentInsurance);
  await zzpFlexMethods.clickKnowledgeConsciousOfMaxTwoYears(dataTable.consciousOfMaxTwoYears);
  await zzpFlexMethods.clickOnNextButton();
});

When(/^I enter step five page of zzpFlex with$/, async (data) => {
  const dataTable = data.rowsHash();
  await zzpFlexMethods.selectInsuranceHistory(dataTable.insuranceHistory, genericEnum.EMPTY);
  await zzpFlexMethods.selectCriminalHistory(dataTable.criminalHistory);
  await zzpFlexMethods.selectDamageHistory(dataTable.damageHistory);
  await zzpFlexMethods.clickOnFinishButton()
});


Then(/^Thank you page for zppFlex (.*) is shown$/, async (persona: string) => {
  await zzpFlexMethods.verifyThankYouPageText(persona);
});
