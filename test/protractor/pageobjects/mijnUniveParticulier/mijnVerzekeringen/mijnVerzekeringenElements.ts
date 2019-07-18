export class MijnVerzekeringenElements {

  //ALGEMENE VOORWAARDEN
  algemeneVoorwaardenClickElement: string = '[href="/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"]';
  algemeneVoorwaardenPdfElement: string = '[src="https://pat.unive.nl/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"][type="application/pdf"]';
  algemeneVoorwaardenUrlCheckText: string = 'algemene_voorwaarden.pdf';

  //VERZEKERINGSOVERZICHT
  polisDetailsClickElement(polisNumber: string): string {
    return "[class='tile__link media'][href*='" + polisNumber + "']"
  }

  //POLIS DETAILS
  polisNumberTextElement: string = '//*[contains(text(),"Polisnummer")]/following-sibling::div';
  damageNumberTextElement: string = '//*[contains(text(),"Schadenummer")]/following::span[1]';
  statusPolisTextElement: string = '//*[contains(text(),"Status polis")]/following-sibling::div';
  insuranceCompanyExternTextElement: string = '//*[contains(text(),"Verzekeraar")]/following-sibling::div';
  statusEndedText: string = 'Beëindigd';
  showEndedAndActiveInsurancesClickElement: string = '[class="is-visible-desktop-only"]';

  changeInsuranceClickElement: string = '[href*="poliswijzigen"]';
  changeInsuranceDescriptionAreaInputElement: string = '[title="Beschrijving van de wijziging"]';
  changeInsuranceSubmitButtonClickElement: string = '[name="btnSubmit"]';
  changeInsuranceThankYouTextElement: string = '[class="eforms-container"] > p';
  changeInsuranceThankYouText: string = 'Hartelijk dank voor het doorgeven van uw wijzigingen.';

  //DAMAGE CLAIM
  damageClaimClickElement: string = '[href*="add-my-claim-by-policies"]';
  damageClaimDateInputElement: string = '#_AddClaimStepGeneralClaimData_dateDamageField';
  damageClaimStepOneNextButtonClickElement: string = '#_AddClaimStepGeneralClaimData_Next';
  damageClaimStepTwoNextButtonClickElement: string = '#_AddClaimStepSelectPoliciesView_Next';
  damageClaimCityInputElement: string = '#_Form_IF28905_36811';
  damageClaimLicensePlateInputElement: string = '#_Form_IF7263_35019';

  damageClaimSelectPolisClickElement(polisNumber: string): string {
    return "//*[contains(text(),'" + polisNumber + "')]/preceding::td[1]/descendant::input"
  }

  damageClaimSelectCauseClickElement(cause: string): string {
    return "//*[contains(text(),'Wat is er gebeurd?')]/following::*[contains(text(),'" + cause + "')]/preceding::span[1]/descendant::input"
  }

}
