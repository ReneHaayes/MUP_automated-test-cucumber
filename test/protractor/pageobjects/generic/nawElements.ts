export class NawElements {

  //HOOFDBESTUURDER
  hoofdbestuurderBirthdateElement: string = '#_Form_IF2511_3621';
  hoofdbestuurderZipCodeElement: string = '#_Form_IF2511_3622';

  // HOOFDBESTUURDER NA FIX AUTOVERZEKERING (22-08-2019)
  hoofdbestuurderBirthdateAfterFixElement: string = '#_Form_IF28608_3621';
  hoofdbestuurderZipCodeAfterFixElement: string = '#_Form_IF28608_3622';

  // AFWIJKENDEBESTUURDER
  afwijkendeBestuurderInitialsElement: string ='#_Form_IF25916_3688';
  afwijkendeBestuurderPrefixElement: string = '#_Form_IF25916_3689';
  afwijkendeBestuurderLastNameElement: string = '#_Form_IF25916_3690';
  afwijkendeBestuurderBirthdateStepOneElement: string = '#_Form_IF31207_39216';
  afwijkendeBestuurderBirthdateStepTwoElement: string = '#_Form_IF25916_3692';
  afwijkendeBestuurderZipCodeElement: string = '#_Form_IF25916_3693';
  afwijkendeBestuurderHouseNumberElement: string = '#_Form_IF25916_3694';
  afwijkendeBestuurderDataGenderMaleClickElement: string = '[data-label-id*="LA_IF25916_3691"] .radioList > label:nth-child(1)';
  afwijkendeBestuurderDataGenderFemaleClickElement: string = '[data-label-id*="LA_IF25916_3691"] .radioList > label:nth-child(2)';

  // VASTEBESTUURDER
  specificDriverZipCodeElement: string = '#_Form_IF31207_39215';


  //YOUR DATA
  yourDataInitialsElement: string = '#_Form_IF2530_3688';
  yourDataPrefixElement: string = '#_Form_IF2530_3689';
  yourDataLastNameElement: string = '#_Form_IF2530_3690';

  yourDataGenderMaleElement: string = '[data-label-id*="LA_IF2530_3691"] .radioList > label:nth-child(1)';
  yourDataGenderFemaleElement: string = '[data-label-id*="LA_IF2530_3691"] .radioList > label:nth-child(2)';

  yourDataBirthdDayElement: string = '#_Form_IF2530_3692';
  yourDataBirthPlaceElement: string = '#_Form_IF2530_19949';
  yourDataHouseNumberElement: string = '#_Form_IF2530_3694';
  yourDataHouseNumberAdditionElement: string = '#_Form_IF2530_3695';

  yourDataSpecificIdentificationElement: string = '#_Form_IF2530_23917';
  yourDataSpecificIdentificationDriverLicenseSelect: string = 'string:RijbewijsLw';
  yourDataSpecificIdentificationDriverLicenseNumberElement: string = '#_Form_IF2530_24008';
  yourDataSpecificIdentificationPassportSelect: string = 'string:PaspoortLw';
  yourDataSpecificIdentificationPassportNumberElement: string = '#_Form_IF2530_24009';
  yourDataSpecificIdentificationIdCardSelect: string = 'string:IdentiteitskaartLw';
  yourDataSpecificIdentificationIdCardNumberElement: string = '#_Form_IF2530_7308';
  yourDataSpecificIdentificationSomethingElseSelect: string = 'string:AndersLw';
  yourDataZipCodeElement: string = '#_Form_IF2530_3693';
  yourDataEmailAddressElement: string = '#_Form_IF2530_3701';
  yourDataPhoneNumberElement: string = '#_Form_IF2530_3699';

  //UW BETAAL GEGEVENS
  uwBetaalGegevensBankAccountNumberElement: string = '#_Form_IF2533_3702';

  //OWNER DATA
  ownerDataInitalsElement: string = '#_Form_IF2532_3688';
  ownerDataPrefixElement: string = '#_Form_IF2532_3689';
  ownerDataLastNameElement: string = '#_Form_IF2532_3690';

  ownerDataGenderMaleElement: string = '[data-label-id*="LA_IF2532_3691"] .radioList > label:nth-child(1)';
  ownerDataGenderFemaleElement: string = '[data-label-id*="LA_IF2532_3691"] .radioList > label:nth-child(2)';

  ownerDataBirthdayElement: string = '#_Form_IF2532_3692';
  ownerDataZipCodeElement: string = '#_Form_IF2532_3693';
  ownerDataHouseNumberElement: string = '#_Form_IF2532_3694';
  ownerDataHouseNumberAdditionElement: string = '#_Form_IF2532_3695';

  //MAIN DRIVER
  mainDriverInitialsElement: string = '#_Form_IF2531_3688';
  mainDriverPrefixElement: string = '#_Form_IF2531_3689';
  mainDriverLastNameElement: string = '#_Form_IF2531_3690';
  mainDriverHouseNumberElement: string = '#_Form_IF2531_3694';
  mainDriverHouseNumberAdditionElement: string = '#_Form_IF2531_3695';

  mainDriverGenderMaleElement: string = '[data-label-id*="LA_IF2531_3691"] .radioList > label:nth-child(1)';
  mainDriverGenderFemaleElement: string = '[data-label-id*="LA_IF2531_3691"] .radioList > label:nth-child(2)';

  //COMPANY DATA
  companyDataKvkNumberInputElement: string = '#_Form_IF25914_33331';
  companyDataNameInputElement: string = '#_Form_IF25914_33329';
  companyDataEmployeesYesClickElement: string = '[data-label-id*="LA_IF25914_33332"] .radioList > label:nth-child(1)';
  companyDataEmployeesNoClickElement: string = '[data-label-id*="LA_IF25914_33332"] .radioList > label:nth-child(2)';
  companyDataHouseNumberInputElement: string = '#_Form_IF25914_3694';
  companyDataHouseNumberAddingInputElement: string = '#_Form_IF25914_3695';
  companyDataPhoneNumberInputElement: string = '#_Form_IF25914_3699';
  companyDataEmailAddressInputElement: string = '#_Form_IF25914_3701';
  companyDataZipCodeInputElement: string = '#_Form_IF25914_3693';

  companyDataLegalSelectElement: string = '#_Form_IF25914_33330';
  companyDataLegalEenmanszaakSelectElement: string = 'string:eenmanszaak';
  companyDataLegalVOFSelectElement: string = 'string:vof';
  companyDataLegalCVSelectElement: string = 'string:cv';
  companyDataLegalMaatschapSelectElement: string = 'string:maatschap';
  companyDataLegalBVSelectElement: string = 'string:bv';
  companyDataLegalNVSelectElement: string = 'string:nv';
  companyDataLegalStichtingSelectElement: string = 'string:stichting';
  companyDataLegalVMVRSelectElement: string = 'string:vmvr';
  companyDataLegalVZVRSelectElement: string = 'string:vzvr';
  companyDataLegalCOWSelectElement: string = 'string:cow';
  companyDataLegalBuitenalandseRechtsvormSelectElement: string = 'string:buitenlandseRechtsvorm';

  //CONTACT DATA
  contactDataInitialsInputElement: string = '#_Form_IF25915_3688';
  contactDataPrefixInputElement: string = '#_Form_IF25915_3689';
  contactDataLastNameInputElement: string = '#_Form_IF25915_3690';
  contactDataGenderMaleClickElement: string = '[data-label-id*="LA_IF25915_3691"] .radioList > label:nth-child(1)';
  contactDataGenderFemaleClickElement: string = '[data-label-id*="LA_IF25915_3691"] .radioList > label:nth-child(2)';
  contactDataZorgeloosOnlineInitialsInputElement: string = '#_Form_IF30707_3688';
  contactDataZorgeloosOnlinePrefixInputElement: string = '#_Form_IF30707_3689';
  contactDataZorgeloosOnlineLastNameInputElement: string = '#_Form_IF30707_3690';
  contactDataZorgeloosOnlineGenderMaleClickElement: string = '[data-label-id*="LA_IF30707_3691"] .radioList > label:nth-child(1)';
  contactDataZorgeloosOnlineGenderFemaleClickElement: string = '[data-label-id*="LA_IF30707_3691"] .radioList > label:nth-child(2)';
  contactDataZorgeloosOnlineBirthdateInputElement: string = '#_Form_IF30707_3692';

  //RISC ADDRESS
  riscAddressZipcodeInputElement: string = '#_Form_IF17707_3693';
  riscAddressHouseNumberInputElement: string = '#_Form_IF17707_3694';
  riscAddressHouseNumberAddingInputElement: string = '#_Form_IF17707_3695';


}
