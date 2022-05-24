export class MijnVerzekeringenElements {

  // ALGEMENE VOORWAARDEN
  algemeneVoorwaardenClickElement = '[href="/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"]';
  algemeneVoorwaardenUrlCheckText = 'algemene_voorwaarden.pdf';

  // SCHADE_EN_NU_FLOW_AUTO
  kiesVerzekeringAutoClickElement = 'div:nth-child(5) > a > div.tile__body > div.tile__title';

  // SCHADE_EN_NU_FLOW_BOOT
  kiesVerzekeringBootClickElement = 'div:nth-child(4) > a > div.tile__body > div.tile__title';

  // SCHADE_EN_NU_FLOW_CAMPER
  kiesVerzekeringCamperClickElement = 'div:nth-child(1) > a > div.tile__body > div.tile__title'; // camper_product css';

  // Schade-en-nu pagina
  schadeEnNuClickElement = 'li:nth-child(1) > a > div.page-links-item__body.media__body > div';
  schadeEnNuTextElement = '[class="h-page-title"]';
  schadeEnNuText = 'Schade en nu?';

  // VERZEKERINGSOVERZICHT
  polisDetailsClickElement(polis: string): string {
    return '[class=\'tile__link media\'][href*=\'' + polis + ']';
  }

  // VERZEKERINGSKAARTEN_TEST
  verzekeringskaartTestClickAuto = '[class="tile__title"]';

  // SCHADEDETAILS
  schadeDetailsClickElement(polisNumber: string): string {
    return 'class="tile__description-damage__item--visible-desktop"\'][href*=\'' + polisNumber + ']';
  }

  // VERZEKERINGSKAARTEN
  verzekeringKiesAutoInsuranceClickElement = '[href*="product=auto"]';
  verzekeringKiesAutoClickElement = 'li:nth-child(7) > a > div.page-links-item__body.media__body > div';
  verzekeringsKaartenUrlClickElement = '[class="page-links"] [href*="verzekeringskaarten"]';

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
