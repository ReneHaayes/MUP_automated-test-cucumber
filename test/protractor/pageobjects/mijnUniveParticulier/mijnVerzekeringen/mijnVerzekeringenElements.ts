export class MijnVerzekeringenElements {

  //ALGEMENE VOORWAARDEN
  algemeneVoorwaardenClickElement: string = '[href="/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"]';
  algemeneVoorwaardenPdfElement: string = '[type="application/pdf"]';
  algemeneVoorwaardenUrlCheckText: string = 'algemene_voorwaarden.pdf';

  //VERZEKERINGSOVERZICHT
  polisDetailsClickElement(polisNumber: string): string {
    return "[class='package__list'] [class='tile__link media'][href*='" + polisNumber + "']"
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
  changeInsuranceSubmitButtonClickElement: string = '[class="button form-buttons__button"]';
  changeInsuranceThankYouTextElement: string = '[class="form-container"] > p';
  changeInsuranceThankYouText: string = 'Hartelijk dank voor het doorgeven van uw wijzigingen.';

  //LOADER
  blockingLoaderSpinningElement: string = '[class*="blockUI"]';

  //VOERTUIG WIJZIGEN
  voertuigWijzigenClickElement: string = '[href*="changeVehicle"]';
  verzekeringWijzigenClickElement: string = '[href*="changeCoverageDetails"]';
  perEersteMogelijkheidClickElement: string = '#_AddMyPolicyChangeStepDetails_dateStart_minDate';
  nextButtonClickElement: string = '[id="_AddMyPolicyChangeStepDetails_null"]';

  //VOERTUIG WIJZIGEN UW AUTO
  licensePlateInputElement: string = '#_Form_IF2506_3611';

  //AANVULLENDE GEGEVENS
  meldCodeInputElement: string = '#_Form_IF2526_3682';
  correctEmailAdresTrueClickElement: string = '#_Form_IF28234_35678_true';
  finishAndSaveButtonClickElement: string = '#_Form_finishSaveAndSend';

  //SUCCESS
  succesMessageTextElement: string = '[class="success message"] > p > span';
  succesMessageText: string = 'Wij hebben de wijziging doorgevoerd op de polis.';


}
