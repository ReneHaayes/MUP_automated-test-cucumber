export class AovZzpElements {

  //SLIDER
  sliderElement: string = '.aov-zzp-premium .noUi-handle';

  //BUTTONS
  nextButton: string = 'unive-wizard-button';
  finishButton: string = 'unive-wizard-button > div > button';

  //GENDER
  aovZzpSelectGenderElementMale: string = '[name*="gender"][value*="man"]';
  aovZzpSelectGenderElementFemale: string = '[name*="gender"][value*="vrouw"]';

  //SPECIFIC IDENTIFICATION
  aovZzpYourDataSpecificIdentificationElement: string = '#identityCard';
  aovZzpYourDataSpecificIdentificationNumberElement: string = '#identityCardNumber';
  aovZzpYourDataSpecificIdentificationDriverLicenseSelect: string = 'rb';
  aovZzpYourDataSpecificIdentificationPassportSelect: string = 'pp';
  aovZzpYourDataSpecificIdentificationIdCardSelect: string = 'id';
  aovZzpYourDataSpecificIdentificationSomethingElseSelect: string = 'a';

  //OVERIGE GEGEVENS
  zzpOtherDataProfessionElement: string = '#profession';
  zzpOtherDataKvkNumberElement: string = '#kvk';

  //BETAAL GEGEVENS
  aovZzpAccountNumberDataElement: string = '#iban';
  aovZzpPaymentAuthorizationElement: string = '#paymentMethod';

  //DURATION ENTREPRENEUR
  aovZzpDurationEntrepreneurSelectElement: string = '#entrepreneurTime';
  aovZzpDurationEntrepreneurMinOneElement: string = '1: -1';
  aovZzpDurationEntrepreneurOneElement: string = '2: 1';
  aovZzpDurationEntrepreneurTwoElement: string = '3: 2';
  aovZzpDurationEntrepreneurThreeElement: string = '4: 3';
  aovZzpDurationEntrepreneurFourElement: string = '5: 4';
  aovZzpDurationEntrepreneurFiveElement: string = '6: 5';
  aovZzpDurationEntrepreneurSixElement: string = '7: 6';
  aovZzpDurationEntrepreneurSevenElement: string = '8: 7';
  aovZzpDurationEntrepreneurEightElement: string = '9: 8';
  aovZzpDurationEntrepreneurNineElement: string = '10: 9';
  aovZzpDurationEntrepreneurTenElement: string = '11: 10';

  // BIRTHDATE
  zzpYourDataBirthdate: string = '#birthdate';

  //HEIGHT AND WEIGHT
  aovZzpHeightElement: string = '#height';
  aovZzpWeightElement: string = '#weight';

  //HEALTH CERTIFICATE
  aovZzpHealthCertificate14DaysNoteAbleToWorkYesElement: string = '[formcontrolname*="notWorkForFourteenDays"] unive-input-radio-button:nth-child(1)';
  aovZzpHealthCertificate14DaysNoteAbleToWorkNoElement: string = '[formcontrolname*="notWorkForFourteenDays"] unive-input-radio-button:nth-child(2)';
  aovZzpHealthCertificateConsultedDoctorYesElement: string = '[formcontrolname*="consultedDoctor"] unive-input-radio-button:nth-child(1)';
  aovZzpHealthCertificateConsultedDoctorNoElement: string = '[formcontrolname*="consultedDoctor"] unive-input-radio-button:nth-child(2)';
  aovZzpHealthCertificateMedicinesYesElement: string = '[formcontrolname*="medicines"] unive-input-radio-button:nth-child(1)';
  aovZzpHealthCertificateMedicinesNoElement: string = '[formcontrolname*="medicines"] unive-input-radio-button:nth-child(2)';
  aovZzpHealthCertificateDisabilityBenefitYesElement: string = '[formcontrolname*="disabilityBenefit"] unive-input-radio-button:nth-child(1)';
  aovZzpHealthCertificateDisabilityBenefitNoElement: string = '[formcontrolname*="disabilityBenefit"] unive-input-radio-button:nth-child(2)';

  //KNOWLEDGE AND EXPERIENCE
  aovZzpKnowledgeLifeInsuranceYesElement: string = 'unive-form-group:nth-child(2) unive-input-radio-button:nth-child(1)';
  aovZzpKnowledgeLifeInsuranceNoElement: string = 'unive-form-group:nth-child(2) unive-input-radio-button:nth-child(2)';
  aovZzpKnowledgeLifeInsuranceDontKnowElement: string = 'unive-form-group:nth-child(2) unive-input-radio-button:nth-child(3)"]';
  aovZzpIncomeIncapacitatedFirstZwElement: string = 'unive-form-group:nth-child(3) unive-input-radio-button:nth-child(1)';
  aovZzpIncomeIncapacitatedFirstWwElement: string = 'unive-form-group:nth-child(3) unive-input-radio-button:nth-child(2)';
  aovZzpIncomeIncapacitatedCanGetAssistanceElement: string = 'unive-form-group:nth-child(3) unive-input-radio-button:nth-child(3)';
  aovZzpIncomeIncapacitatedNoIncomeElement: string = 'unive-form-group:nth-child(3) unive-input-radio-button:nth-child(4)';
  aovZzpIncomeAmountIncapacitatedYesElement: string = 'unive-form-group:nth-child(4) unive-input-radio-button:nth-child(1)';
  aovZzpIncomeAmountIncapacitatedNoElement: string = 'unive-form-group:nth-child(4) unive-input-radio-button:nth-child(2)';
  aovZzpIncomeMonthlyIncapacitatedNoIncomeElement: string = 'unive-form-group:nth-child(5) unive-input-radio-button:nth-child(1)';
  aovZzpIncomeMonthlyIncapacitated40PercentIncomeElement: string = 'unive-form-group:nth-child(5) unive-input-radio-button:nth-child(2)';
  aovZzpIncomeMonthlyIncapacitatedFullIncomeElement: string = 'unive-form-group:nth-child(5) unive-input-radio-button:nth-child(3)';
  aovZzpIncomeMonthlyIncapacitatedDontKnowElement: string = 'unive-form-group:nth-child(5) unive-input-radio-button:nth-child(4)';
  aovZzpIncomeConsciousOfAccidentInsuranceYesElement: string = 'unive-form-group:nth-child(6) unive-input-radio-button:nth-child(1)';
  aovZzpIncomeConsciousOfAccidentInsuranceNoElement: string = 'unive-form-group:nth-child(6) unive-input-radio-button:nth-child(2)';
  aovZzpIncomeConsciousOfMaxTwoYearsYesElement: string = 'unive-form-group:nth-child(7) unive-input-radio-button:nth-child(1)';
  aovZzpIncomeConsciousOfMaxTwoYearsNoElement: string = 'unive-form-group:nth-child(7) unive-input-radio-button:nth-child(2)';

  //UW GEGEVENS
  zzpYourDataInitialsElement: string = '#initials';
  zzpYourDataPrefixElement: string = '#namePrefix';
  zzpYyourDataLastNameElement: string = '#lastName';
  zzpYourDataZipCodeElement: string = '#zipCode';
  zzpYourDataHouseNumberElement: string = '#houseNumber';
  zzpYourDataHouseNumberAddingElement: string = '#houseNumberAdding';
  zzpYourDataPhoneNumberElement: string = '#phoneNumber';
  zzpYourDataBSNnumberElement: string = '#bsn';
  zzpYourDataEmailAddress: string = '#email';

  //ALMOST INSURED
  aovZzpAlmostInsuredInsuranceHistoryYesElement: string = '[formcontrolname*="acceptanceQuestion1"] unive-input-radio-button:nth-child(1)';
  aovZzpAlmostInsuredInsuranceHistoryNoElement: string = '[formcontrolname*="acceptanceQuestion1"] unive-input-radio-button:nth-child(2)';
  aovZzpAlmostInsuredCriminalHistoryYesElement: string = '[formcontrolname*="acceptanceQuestion2"] unive-input-radio-button:nth-child(1)';
  aovZzpAlmostInsuredCriminalHistoryNoElement: string = '[formcontrolname*="acceptanceQuestion2"] unive-input-radio-button:nth-child(2)';
  aovZzpAlmostInsuredDamageHistoryYesElement: string = '[formcontrolname*="acceptanceQuestion3"] unive-input-radio-button:nth-child(1)';
  aovZzpAlmostInsuredDamageHistoryNoElement: string = '[formcontrolname*="acceptanceQuestion3"] unive-input-radio-button:nth-child(2)';

  //THANK YOU
  thankYouElement: string = '[class*="unive-form-text-container"] div > p:nth-child(2)';

}
