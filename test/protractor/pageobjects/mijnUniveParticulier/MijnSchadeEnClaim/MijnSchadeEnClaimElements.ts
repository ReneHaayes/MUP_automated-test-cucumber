export class MijnSchadeEnClaimElements {

  // UPLOADING DOCUMENTS
  uploadingDocumentsLinkClickElement = '[ng-click*="handleActionGoToUploadDocuments"]';
  uploadingDocumentsFileUploadInputElement = '#_AddMyClaimCommunicationWithAttachments__4';
  uploadingDocumentsDescriptionInputElement = '#_AddMyClaimCommunicationWithAttachments__6';
  uploadingDocumentUploadButtonClickElement = '#_AddMyClaimCommunicationWithAttachments_null';
  uploadingDocumentFileNameTextElement = '[data-label-id="LA__12"] > span';

  // WIJZIGEN VERZEKERING
  polisDetailsTitleTextElement = '[class="page-content__block__title"] > h1';
  polisDetailsTitleText = 'Polis';
  wijzigenVerzekeringSnelLinkClickElement = '[class="page-links"] > li:nth-child(2) > [class*="link"]';
  slotvragenNextButton = '[id="_Form_finishSave"]';

  // DAMAGE CLAIM STEP ONE
  damageClaimClickElement = 'li:nth-child(1) > a > div.page-links-item__body.media__body > div';
  damageClaimDateInputElement = '#_AddClaimStepGeneralClaimData_dateDamageField';
  damageClaimStepOneNextButtonClickElement = '[id="_AddClaimStepGeneralClaimData_Next"]';

  // DAMAGE CLAIM STEP TWO
  damageClaimAutoInsuranceClickElement = '[href*="product=auto"]';
  damageClaimWoonInsuranceClickElement = '[href*="product=woon"]';

  // DAMAGE CLAIM STEP THREE AUTO
  damageClaimCityInputElement = '#_Form_IF28905_36811';
  damageClaimInfluenceOfAlcoholFalseClickElement = '[id="_Form_IF3623_33280_false"]';
  damageClaimOtherPartyDamageTrueClickElement = '[id="_Form_IF7257_5228_true"]';
  damageClaimReedAchteruitTrueClickElement = '#_Form_IF3623_39320_true';
  damageClaimOtherPartyVoetgangerFietserFalseClickElement = '#_IF3623_39008_false';
    // DAMAGE CLAIM STEP THREE WOON
  damageClaimSoortWoonSchade = 'div:nth-child(1) > div.values > div > div > label:nth-child(1)';
  damageClaimOorzaakWoonSchade = 'div:nth-child(3) > div.values > div > div > label:nth-child(2)';
  damageClaimDescriptionWoonSchade = '[id="_Form_IF14617_19466"]';
  // DAMAGE CLAIM STEP FOUR WOON
  damageClaimSlotvragenWoonSlotvraagNee = 'div.values > div > div > label:nth-child(2)';
  damageClaimSlotvragenVerifyText = 'fieldset.hasHeader.entryGroup.active-group > legend > span';
  // DAMAGE CLAIM STEP FOUR AUTO
  damageClaimLicensePlateInputElement = '#_Form_IF7263_35019';
  damageClaimOtherPartyPhoneNumber = '#_Form_IF7263_39009';
  damageClaimOtherPartyEmailAdress = '#_Form_IF7263_8535';
  damageClaimResponsibilityOtherPartyClickElement = '[data-label-id="LA_IF27613_35018"] > div > label:nth-child(2)';
  damageClaimDamageToOwnVehicleTrueClickElement = '[data-label-id="LA_IF7264_5240"] > div > label:nth-child(1)';
  // DAMAGE TYPES
  damageClaimTypeRuitschade = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(1)';
  damageClaimTypeParkeerschade = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(2)';
  damageClaimTypeAanrijdingZonderAnder = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(3)';
  damageClaimTypeAanrijdingMetAnder = 'fieldset:nth-child(2) > div > div:nth-child(2) > div.values > div > div > label:nth-child(4)';
  // DAMAGE SITUATION PARKEERSCHADE
  damageSituationParkeerschadeOtherPartyParked = '[id="_Form_IF3623_5229_tegenpartijStondGeparkeerd"]';
  // DAMAGE CLAIM STEP FIVE AUTO/WOON
  damageClaimContactThroughPhoneClickElement = '[data-label-id="LA_IF31405_39308"] > div > label:nth-child(1)';
  damageClaimContactThroughPhoneInputElement = '#_Form_IF31405_39309';
  damageClaimContactThroughEmailClickElement = '#_Form_IF31405_39308_email';
  damageClaimTotalDamageAmountInputElement = '#_Form_IF27719_35141';
  damageClaimCancelDateInputElement = '#_Form_IF12805_16943';
  // DAMAGE CLAIM STEP SIX
  damageClaimDescriptionOfDamageInputElement = '#_Form_IF27824_35250';
  damageClaimNextButtonAfterExpertiseOpdrachtClickElement = '#_AddClaimStepAssessmentCar_Next';
  // DAMAGE CLAIM STEP SEVEN
  damageClaimAgreementClickElement = '#_AddClaimStepConfirmation_agreementCheckbox > fieldset > div > div > div.values > div';
  damageClaimSaveAndCommitButtonClickElement = '#_AddClaimStepConfirmation_Save';
  // damageClaimOtherCompanyInvolvementFalseClickElement = '#_Form_IF14830_19688_false';
  // DAMAGE CLAIM SUMMARY
  damageClaimSuccesMessageTextElement = '[id="_AddClaimStepThankYouGeneral_thankYouScreenContents"] p:nth-child(1)';
  damageClaimSuccesMessageText = 'Wij gaan voor u aan de slag';

  // PREMIEGEVOLGEN BEREKENEN PAGE
  ncbmPrognoseH1TextElement = '[id="viewPartMyNcbmPrognosis"] > h1';
  ncbmPrognoseH1Text = 'NCBM-prognose';
  ncbmTableClassElement = '[class="ncbmTable"]';
}
