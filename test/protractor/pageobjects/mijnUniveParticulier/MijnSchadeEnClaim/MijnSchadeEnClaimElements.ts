export class MijnSchadeEnClaimElements {

  //UPLOADING DOCUMENTS
  uploadingDocumentsLinkClickElement: string = '[ng-click*="handleActionGoToUploadDocuments"]';
  uploadingDocumentsFileUploadInputElement: string = '#_AddMyClaimCommunicationWithAttachments__4';
  uploadingDocumentsDescriptionInputElement: string = '#_AddMyClaimCommunicationWithAttachments__6';
  uploadingDocumentUploadButtonClickElement: string= '#_AddMyClaimCommunicationWithAttachments_null';
  uploadingDocumentFileNameTextElement: string = '[data-label-id="LA__12"] > span';
  uploadingDocumentFileName(filename: string): string {
    return '../../../' + filename
  }


  //DAMAGE CLAIM STEP ONE
  damageClaimClickElement: string = '[href*="add-my-claim-by-policies"]';
  damageClaimDateInputElement: string = '#_AddClaimStepGeneralClaimData_dateDamageField';
  damageClaimStepOneNextButtonClickElement: string = '#_AddClaimStepGeneralClaimData_Next';

  //DAMAGE CLAIM STEP TWO
  damageClaimSelectPolisClickElement(polisNumber: string): string {
    return "//*[contains(text(),'" + polisNumber + "')]/preceding::td[1]/descendant::input"
  }

  damageClaimStepTwoNextButtonClickElement: string = '#_AddClaimStepSelectPoliciesView_Next';

  //DAMAGE CLAIM STEP THREE
  damageClaimCityInputElement: string = '#_Form_IF28905_36811';
  damageClaimInfluenceOfAlcoholFalseClickElement: string = '#_Form_IF3623_33280_false';
  damageClaimOtherPartyDamageTrueClickElement: string = '#_Form_IF7257_5228_true';
  damageClaimInboedelStolenFalseClickElement: string = '#_Form_IF27715_19620_false';
  damageClaimDamageToHouseTrueClickElement: string = '#_Form_IF27715_26133_true';
  damageClaimPermanentLivingTrueClickElement: string = '#_Form_IF27716_19473_true';
  damageClaimSelectCountrySelectElement: string = '#_Form_IF12539_33148';
  damageClaimSelectEspanaSelectElement: string = 'string:ES';
  damageClaimGoingDateInputElement: string = '#_Form_IF12539_16811';
  damageClaimReturnDateInputElement: string = '#_Form_IF12539_16812';
  damageClaimPrivateTripClickElement: string = '#_Form_IF12539_16809_prive';
  damageClaimInsuredIllingWasOnTheTripClickElement: string = '#_Form_IF12539_16816';
  damageClaimHappenedBeforeTripClickElement: string = '#_Form_IF12539_16823_vooraf';

  damageClaimSelectCauseClickElement(question: string, cause: string): string {
    return "//*[contains(text(),'" + question + "')]/following::*[contains(text(),'" + cause + "')]/preceding::span[1]/descendant::input"
  }

  damageClaimSelectSituationClickElement(question: string, situation: string): string {
    return "//*[contains(text(),'" + question + "')]/following::*[contains(text(),'" + situation + "')]/preceding::span[1]/descendant::input"
  }

  damageClaimWhatIsDamaged(option: string) {
    return "//*[contains(text(),'" + option + "')]/preceding::span[1]/input"
  }

  //DAMAGE CLAIM STEP FOUR
  damageClaimLicensePlateInputElement: string = '#_Form_IF7263_35019';
  damageClaimResponsibilityOtherPartyClickElement: string = '#_Form_IF27613_35018_tegenpartij';
  damageClaimDamageToOwnVehicleTrueClickElement: string = '#_Form_IF7264_5240_true';
  damageClaimTravelDocumentsStolenClickElement: string = '#_Form_IF12550_16854_reispapieren';

  //DAMAGE CLAIM STEP FIVE
  damageClaimContactThroughPhoneClickElement: string = '#_Form_IF31405_39308_telefoon';
  damageClaimContactThroughPhoneInputElement: string = '#_Form_IF31405_39309';
  damageClaimContactThroughEmailClickElement: string = '#_Form_IF31405_39308_email';
  damageClaimTotalDamageAmountInputElement: string = '#_Form_IF27719_35141';
  damageClaimCancelDateInputElement: string = '#_Form_IF12805_16943';
  damageClaimBookingDateInputElement: string = '#_Form_IF12805_16944';
  damageClaimOneNotaClickElement: string = '#_Form_IF12806_16945_reisorganisatie';
  damageClaimOmboekingFalseClickElement: string = '#_Form_IF12806_22610_false';
  damageClaimTotalPriceInputElement: string = '#_Form_IF12806_16946';

  //DAMAGE CLAIM STEP SIX
  damageClaimDescriptionOfDamageInputElement: string = '#_Form_IF27824_35250';
  damageClaimStepSixNextButtonClickElement: string = '#_AddClaimStepAssessmentCar_Next';

  //DAMAGE CLAIM STEP SEVEN
  damageClaimAgreementClickElement: string = '#_AddClaimStepConfirmation__25';
  damageClaimSaveAndCommitButtonClickElement: string = '#_AddClaimStepConfirmation_Save';
  damageClaimOtherCompanyInvolvementFalseClickElement: string = '#_Form_IF14830_19688_false';

  //DAMAGE CLAIM SUMMARY
  damageClaimSuccesMessageTextElement: string = '[class="success message"] >p';
  damageClaimSuccesMessageText: string = 'Melden schade is voltooid';

  //PREMIEGEVOLGEN BEREKENEN PAGE
  polisForPremiegevolgenPageWithPolisNumber(polisNumber: string): string {
    return '[href="/mumq/QIS_Customer/my-ncbm-prognosis/'+polisNumber+'"]'
  }
  ncbmPrognoseH1TextElement: string = '[id="viewPartMyNcbmPrognosis"] > h1';
  ncbmPrognoseH1Text: string = 'Ncbm prognose';
  ncbmTableClassElement: string = '[class="ncbmTable"]';
}
