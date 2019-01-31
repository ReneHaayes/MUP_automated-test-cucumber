export class AutoVerzekeringElementsStepThree {
  //DATE ELEMENTS

  startDateElement: string = '#_Form_IF2512_3623';
  firstAdmissionElement: string = '#_Form_IF2526_3680';
  startDateOnYourNameElement: string = '#_Form_IF2526_3681';

  //MELDCODE

  reportingCode: string = '#_Form_IF2526_3682'

  //CAR USAGE

  mainDriverYes: string = 'mainDriverYes';
  mainDriverYesElement: string = '[data-label-id*="LA_IF2527_3683"] .radioList > label:nth-child(1)';
  mainDriverNo: string = 'mainDriverNo';
  mainDriverNoElement: string = '[data-label-id*="LA_IF2527_3683"] .radioList > label:nth-child(2)';
  mainDriverNoMyPartner: string = 'mainDriverNoMyPartner';
  mainDriverNoMyPartnerElement: string = '[data-label-id*="LA_IF2527_3685"] .radioList > label:nth-child(1)';
  mainDriverNoMyChild: string = 'mainDriverNoMyChild';
  mainDriverNoMyChildElement: string = '[data-label-id*="LA_IF2527_3685"] .radioList > label:nth-child(2)';
  mainDriverNoSomeoneElse: string = 'mainDriverNoSomeoneElse';
  mainDriverNoSomeoneElseElement: string = '[data-label-id*="LA_IF2527_3685"] .radioList > label:nth-child(2)';

  ownerCarYes: string = 'ownerCarYes';
  ownerCarYesElement: string = '[data-label-id*="LA_IF2528_3684"] .radioList > label:nth-child(1)';
  ownerCarNo: string = 'ownerCarNo';
  ownerCarNoElement: string = '[data-label-id*="LA_IF2528_3684"] .radioList > label:nth-child(2)';
  ownerCarNoMyPartner: string = 'ownerCarNoMyPartner';
  ownerCarNoMyPartnerElement: string = '[data-label-id*="LA_IF2528_3686"] .radioList > label:nth-child(1)';
  ownerCarNoMyChild: string = 'ownerCarNoMyChild';
  ownerCarNoMyChildElement: string = '[data-label-id*="LA_IF2528_3686"] .radioList > label:nth-child(2)';
  ownerCarNoSomeoneElse: string = 'ownerCarNoSomeoneElse';
  ownerCarNoSomeoneElseElement: string = '[data-label-id*="LA_IF2528_3686"] .radioList > label:nth-child(3)';

  //HISTORY
  insuranceHistoryNoElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(1)';
  insuranceHistoryYesElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(2)';
  insuranceHistoryYesExplanationElement: string = '#_Form_IF2535_33524';

  criminalHistoryYesElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(2)';
  criminalHistoryNoElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(1)';
  criminalHistoryInformationElement: string = '#_Form_verificationLightbox';

  damageHistoryYesElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(2)';
  damageHistoryNoElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(1)';

}
