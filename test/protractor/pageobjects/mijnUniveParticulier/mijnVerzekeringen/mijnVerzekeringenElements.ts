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

}
