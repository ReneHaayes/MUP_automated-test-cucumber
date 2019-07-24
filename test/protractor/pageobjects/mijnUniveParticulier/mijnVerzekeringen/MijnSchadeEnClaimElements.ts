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

  damageClaimSelectCauseClickElement(cause: string): string {
    return "//*[contains(text(),'Wat is er gebeurd?')]/following::*[contains(text(),'" + cause + "')]/preceding::span[1]/descendant::input"
  }

  damageClaimSelectSituationClickElement(situation: string): string {
    return "//*[contains(text(),'Welke situatie is voor u van toepassing?')]/following::*[contains(text(),'" + situation + "')]/preceding::span[1]/descendant::input"
  }

  //DAMAGE CLAIM STEP FOUR
  damageClaimLicensePlateInputElement: string = '#_Form_IF7263_35019';
  damageClaimResponsibilityOtherPartyClickElement: string = '#_Form_IF27613_35018_tegenpartij';
  damageClaimDamageToOwnVehicleTrueClickElement: string = '#_Form_IF7264_5240_true';

  //DAMAGE CLAIM STEP FIVE
  damageClaimContactThroughPhoneClickElement: string = '#_Form_IF31405_39308_telefoon';
  damageClaimContactThroughPhoneInputElement: string = '#_Form_IF31405_39309';
  damageClaimContactThroughEmailClickElement: string = '#_Form_IF31405_39308_email';

  //DAMAGE CLAIM STEP SIX
  damageClaimStepSixNextButtonClickElement: string = '#_AddClaimStepAssessmentCar_Next';

  //DAMAGE CLAIM STEP SEVEN
  damageClaimAgreementClickElement: string = '#_AddClaimStepConfirmation__25';
  damageClaimSaveAndCommitButtonClickElement: string = '#_AddClaimStepConfirmation_Save';

  //DAMAGE CLAIM SUMMARY
  damageClaimSuccesMessageTextElement: string = '[class="success message"] >p';
  damageClaimSuccesMessageText: string = 'Melden schade is voltooid';
}
