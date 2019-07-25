export class MijnSchadeEnClaimElements {

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

  //DAMAGE CLAIM STEP FIVE
  damageClaimContactThroughPhoneClickElement: string = '#_Form_IF31405_39308_telefoon';
  damageClaimContactThroughPhoneInputElement: string = '#_Form_IF31405_39309';
  damageClaimContactThroughEmailClickElement: string = '#_Form_IF31405_39308_email';
  damageClaimTotalDamageAmountInputElement: string = '#_Form_IF27719_35141';

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
}
