export class MijnVerzekeringenElements {

  //ALGEMENE VOORWAARDEN
  algemeneVoorwaardenClickElement: string = '[href="/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"]';
  algemeneVoorwaardenPdfElement: string = '[src="https://pat.unive.nl/binaries/content/assets/pdfs/algemeen/algemene_voorwaarden.pdf"][type="application/pdf"]';
  algemeneVoorwaardenUrlCheckText: string = 'algemene_voorwaarden.pdf';

  //VERZEKERINGSOVERZICHT
  aansprakelijkheidsVerzekeringParticulierClickElement(polisNumber: string): string {
    return "[class='tile__link media'][href*='" + polisNumber + "']"
  }


  //POLIS DETAILS
  polisNumberTextElement: string = '//*[contains(text(),"Polisnummer")]/following-sibling::div';
}
