export class MijnSchadeEnClaimElements {

  // UPLOADING DOCUMENTS
  uploadingDocumentsLinkClickElement = '[ng-click*="handleActionGoToUploadDocuments"]';
  uploadingDocumentsFileUploadInputElement = '#_AddMyClaimCommunicationWithAttachments__4';
  uploadingDocumentsDescriptionInputElement = '#_AddMyClaimCommunicationWithAttachments__6';
  uploadingDocumentUploadButtonClickElement = '#_AddMyClaimCommunicationWithAttachments_null';
  uploadingDocumentFileNameTextElement = '[data-label-id="LA__12"] > span';
  uploadingDocumentFileName(filename: string): string {
    return '../../../' + filename;
  }

  // WIJZIGEN VERZEKERING
  polisDetailsTitleTextElement = '[class="page-content__block__title"] > h1';
  polisDetailsTitleText = 'Polisdetails';
  wijzigenVerzekeringSnelLinkClickElement = '[class="page-links"] > li:nth-child(2) > [class*="link"]';

  wijzigenVerzekeringSelectSnelLinkPolisClickElement(polisNumber: string): string {
    return '[class="modal-content__block"] [class="tile__link media"][href*="' + polisNumber + '"][href*="polisdetails"]';
  }

  // DAMAGE CLAIM STEP ONE
  damageClaimClickElement = '[href*="add-my-claim-by-policies"]';
  damageClaimDateInputElement = '#_AddClaimStepGeneralClaimData_dateDamageField';
  damageClaimStepOneNextButtonClickElement = '#_AddClaimStepGeneralClaimData_Next';

  // DAMAGE CLAIM STEP TWO
  damageClaimSelectPolisClickElement(polisNumber: string): string {
    return '//*[contains(text(),\'' + polisNumber + '\')]/preceding::td[1]/descendant::input';
  }

  damageClaimStepTwoNextButtonClickElement = '#_AddClaimStepSelectPoliciesView_Next';

  // DAMAGE CLAIM STEP THREE
  damageClaimCityInputElement = '#_Form_IF28905_36811';
  damageClaimInfluenceOfAlcoholFalseClickElement = '#_Form_IF3623_33280_false';
  damageClaimOtherPartyDamageTrueClickElement = '#_Form_IF7257_5228_true';
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

  damageClaimSelectCauseClickElement(question: string, cause: string): string {
    return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + cause + '\')]/preceding::span[1]/descendant::input';
  }

  damageClaimSelectSituationClickElement(question: string, situation: string): string {
    return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + situation + '\')]/preceding::span[1]/descendant::input';
  }

  damageClaimWhatIsDamaged(option: string) {
    return '//*[contains(text(),\'' + option + '\')]/preceding::span[1]/input';
  }

  // DAMAGE CLAIM STEP FOUR
  damageClaimLicensePlateInputElement = '#_Form_IF7263_35019';
  damageClaimResponsibilityOtherPartyClickElement = '#_Form_IF27613_35018_tegenpartij';
  damageClaimDamageToOwnVehicleTrueClickElement = '#_Form_IF7264_5240_true';
  damageClaimTravelDocumentsStolenClickElement = '#_Form_IF12550_16854_reispapieren';

  // DAMAGE CLAIM STEP FIVE
  damageClaimContactThroughPhoneClickElement = '#_Form_IF31405_39308_telefoon';
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
  damageClaimAgreementClickElement = '#_AddClaimStepConfirmation__25';
  damageClaimSaveAndCommitButtonClickElement = '#_AddClaimStepConfirmation_Save';
  damageClaimOtherCompanyInvolvementFalseClickElement = '#_Form_IF14830_19688_false';

  // DAMAGE CLAIM SUMMARY
  damageClaimSuccesMessageTextElement = '[class="success message"] >p';
  damageClaimSuccesMessageText = 'Wij gaan voor u aan de slag';
  // damageClaimSuccesMessageText = 'Melden schade is voltooid';

  // PREMIEGEVOLGEN BEREKENEN PAGE
  polisForPremiegevolgenPageWithPolisNumber(polisNumber: string): string {
    return '[href="/mumq/QIS_Customer/my-ncbm-prognosis/' + polisNumber + '"]';
  }
  ncbmPrognoseH1TextElement = '[id="viewPartMyNcbmPrognosis"] > h1';
  ncbmPrognoseH1Text = 'Ncbm prognose';
  ncbmTableClassElement = '[class="ncbmTable"]';
}
