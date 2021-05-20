export class MijnSchadeEnClaimElements {

  // UPLOADING DOCUMENTS
  uploadingDocumentsLinkClickElement = '[ng-click*="handleActionGoToUploadDocuments"]';
  uploadingDocumentsFileUploadInputElement = '#_AddMyClaimCommunicationWithAttachments__4';
  uploadingDocumentsDescriptionInputElement = '#_AddMyClaimCommunicationWithAttachments__6';
  uploadingDocumentUploadButtonClickElement = '#_AddMyClaimCommunicationWithAttachments_null';
  uploadingDocumentFileNameTextElement = '[data-label-id="LA__12"] > span';

  // WIJZIGEN VERZEKERING
  polisDetailsTitleTextElement = '[class="page-content__block__title"] > h1';
  polisDetailsTitleText = 'Polisdetails';
  wijzigenVerzekeringSnelLinkClickElement = '[class="page-links"] > li:nth-child(2) > [class*="link"]';

  // DAMAGE CLAIM STEP ONE
  damageClaimClickElement = 'li:nth-child(1) > a > div.page-links-item__body.media__body > div';
  damageClaimDateInputElement = '#_AddClaimStepGeneralClaimData_dateDamageField';
  damageClaimStepOneNextButtonClickElement = '[id="_AddClaimStepGeneralClaimData_Next"]';

  // DAMAGE CLAIM STEP TWO
  // damageClaimStepTwoNextButtonClickElement = '#_AddClaimStepSelectPoliciesView_Next';
  damageClaimAutoInsuranceClickElement = '[href*="product=auto"]';
  damageClaimWoonInsuranceClickElement = '[href*="product=woon"]';

  // DAMAGE CLAIM STEP THREE
  damageClaimCityInputElement = '#_Form_IF28905_36811';
  // fixen klikken alcohol en eigen schade
  damageClaimInfluenceOfAlcoholFalseClickElement = '[data-label-id="LA_IF3623_33280"] > div > label:nth-child(2)';
  damageClaimOtherPartyDamageTrueClickElement = '[data-label-id="LA_IF7257_5228"] > div > label:nth-child(1)';
  damageClaimReedAchteruitTrueClickElement = '#_Form_IF3623_39320_true';
  damageClaimOtherPartyVoetgangerFietserFalseClickElement = '#_IF3623_39008_false';
  damageClaimInboedelStolenFalseClickElement = '#_Form_IF27715_19620_false';
  damageClaimDamageToHouseTrueClickElement = '#_Form_IF27715_26133_true';
  damageClaimPermanentLivingTrueClickElement = '#_Form_IF27716_19473_true';
  damageClaimSelectCountrySelectElement = '#_Form_IF12539_33148';
  damageClaimSelectEspanaSelectElement = 'string:ES';
  damageClaimGoingDateInputElement = '#_Form_IF12539_16811';
  damageClaimReturnDateInputElement = '#_Form_IF12539_16812';
  damageClaimPrivateTripClickElement = '#_Form_IF12539_16809_prive';
  damageClaimInsuredIllingWasOnTheTripClickElement = '#_Form_IF12539_16816';
  damageClaimHappenedBeforeTripClickElement = '#_Form_IF12539_16823_vooraf';
  damageClaimCloseLightBoxClickElement = '[class="closeLightbox"] > a';
  // DAMAGE CLAIM STEP FOUR
  damageClaimLicensePlateInputElement = '#_Form_IF7263_35019';
  damageClaimOtherPartyPhoneNumber = '#_Form_IF7263_39009';
  damageClaimOtherPartyEmailAdress = '#_Form_IF7263_8535';
  damageClaimResponsibilityOtherPartyClickElement = '[data-label-id="LA_IF27613_35018"] > div > label:nth-child(2)';
  damageClaimDamageToOwnVehicleTrueClickElement = '[data-label-id="LA_IF7264_5240"] > div > label:nth-child(1)';
  damageClaimTravelDocumentsStolenClickElement = '#_Form_IF12550_16854_reispapieren';
  // DAMAGE TYPES
  damageClaimTypeRuitschade = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(1)';
  damageClaimTypeParkeerschade = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(2)';
  damageClaimTypeAanrijdingZonderAnder = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(3)';
  damageClaimTypeAanrijdingMetAnder = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(4)';
  damageClaimTypeSchadeStormHagelBrandDier = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(5)';
  damageClaimTypeInbraakVandalismeDiefstal = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(6)';
  // DAMAGE SITUATION PARKEERSCHADE
  damageSituationParkeerschadeOtherPartyParked = 'fieldset.hasHeader.entryGroup.active-group > div > div:nth-child(3) > div.values > div > div > label:nth-child(1)';
  // DAMAGE CLAIM STEP FIVE
  damageClaimContactThroughPhoneClickElement = '[data-label-id="LA_IF31405_39308"] > div > label:nth-child(1)';
  damageClaimContactThroughPhoneInputElement = '#_Form_IF31405_39309';
  damageClaimContactThroughEmailClickElement = '#_Form_IF31405_39308_email';
  damageClaimTotalDamageAmountInputElement = '#_Form_IF27719_35141';
  damageClaimCancelDateInputElement = '#_Form_IF12805_16943';
  damageClaimBookingDateInputElement = '#_Form_IF12805_16944';
  damageClaimOneNotaClickElement = '#_Form_IF12806_16945_reisorganisatie';
  damageClaimOmboekingFalseClickElement = '#_Form_IF12806_22610_false';
  damageClaimTotalPriceInputElement = '#_Form_IF12806_16946';
  // DAMAGE CLAIM STEP SIX
  damageClaimDescriptionOfDamageInputElement = '#_Form_IF27824_35250';
  damageClaimStepSixNextButtonClickElement = '#_AddClaimStepAssessmentCar_Next';
  // DAMAGE CLAIM STEP SEVEN
  damageClaimAgreementClickElement = '[data-label-id="LA__25"] label';
  damageClaimSaveAndCommitButtonClickElement = '#_AddClaimStepConfirmation_Save';
  damageClaimOtherCompanyInvolvementFalseClickElement = '#_Form_IF14830_19688_false';
  // DAMAGE CLAIM SUMMARY
  damageClaimSuccesMessageTextElement = '[id="_AddClaimStepThankYouGeneral_thankYouScreenContents"] p:nth-child(1)';
  damageClaimSuccesMessageText = 'Wij gaan voor u aan de slag';

  // PREMIEGEVOLGEN BEREKENEN PAGE
  ncbmPrognoseH1TextElement = '[id="viewPartMyNcbmPrognosis"] > h1';
  ncbmPrognoseH1Text = 'Ncbm prognose';
  ncbmTableClassElement = '[class="ncbmTable"]';
}
