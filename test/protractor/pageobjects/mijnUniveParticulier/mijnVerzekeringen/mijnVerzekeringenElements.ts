export class MijnVerzekeringenElements {

  // ALGEMENE VOORWAARDEN
  algemeneVoorwaardenClickElement = '[href="/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"]';
  algemeneVoorwaardenUrlCheckText = 'algemene_voorwaarden.pdf';

  // VERZEKERINGSOVERZICHT
  polisDetailsClickElement(polisNumber: string): string {
    return '[class=\'tile__link media\'][href*=\'' + polisNumber + ']';
  }

  // SCHADEDETAILS
  schadeDetailsClickElement(polisNumber: string): string {
    return 'class="tile__description-damage__item--visible-desktop"\'][href*=\'' + polisNumber + ']';
  }

  // VERZEKERINGSKAARTEN
  verzekeringsKaartenUrlClickElement = '[class="page-links"] [href*="verzekeringskaarten"]';
  verzekeringsKaartenWaitElement = '[src*="verzekeringskaarten"]';

  // POLIS DETAILS
  polisNumberTextElement = '//*[contains(text(),"Polisnummer")]/following-sibling::div';
  damageNumberTextElement = '//*[contains(text(),"Schadenummer")]/following::span[1]';
  statusPolisTextElement = '//*[contains(text(),"Status polis")]/following-sibling::div';
  insuranceCompanyExternTextElement = '//*[contains(text(),"Verzekeraar")]/following-sibling::div';
  statusEndedText = 'Beëindigd';
  showEndedAndActiveInsurancesClickElement = '[class="is-visible-desktop-only"]';

  changeInsuranceClickElement = '[href*="poliswijzigen"]';
  changeInsuranceDescriptionAreaInputElement = '[title="Beschrijving van de wijziging"]';
  changeInsuranceSubmitButtonClickElement = '[class="button form-buttons__button"]';
  changeInsuranceThankYouTextElement = '[class="form-container"] > p';
  changeInsuranceThankYouText = 'Hartelijk dank voor het doorgeven van uw wijzigingen.';

  // LOADER
  blockingLoaderSpinningElement = '[class*="blockUI"]';

  // VOERTUIG WIJZIGEN
  voertuigWijzigenClickElement = '[href*="changeVehicle"]';
  verzekeringWijzigenClickElement = '[href*="changeCoverageDetails"]';
  perEersteMogelijkheidClickElement = '#_AddMyPolicyChangeStepDetails_dateStart_minDate';
  nextButtonClickElement = '[id="_AddMyPolicyChangeStepDetails_null"]';

  // VOERTUIG WIJZIGEN UW AUTO
  licensePlateInputElement = '#_Form_IF2506_3611';

  // AANVULLENDE GEGEVENS
  meldCodeInputElement = '#_Form_IF2526_3682';
  correctEmailAdresTrueClickElement = '#_Form_IF28234_35678_true';
  finishAndSaveButtonClickElement = '#_Form_finishSaveAndSend';

  // SUCCESS
  succesMessageTextElement = '[class="success message"] > p > span';
  succesMessageText = 'Wij hebben de wijziging doorgevoerd op de polis.';


}
