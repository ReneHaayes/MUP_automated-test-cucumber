export class CorrespondentieElements {

  // MIJN POSTVAK
  correspondentieButtonClickElement = '[href="/mumq/mijnunive/mijn-postvak/postvak"]';
  firstCorrespondenceClickElement = 'div:nth-child(2) > div > table > tbody:nth-child(3) > tr:nth-child(1) > td.colDateSent.locked > div > a > span > span';
  correspondenceHeaderH3TextElement = '[class="hasHeader entryGroup"] > h3 > span';
  correspondenceHeaderH3Text = 'Gegevens correspondentie';

  // PERSOONLIJK ADVIES
  persoonlijkAdviesButtonClickElement = '[href="/mijnunive/mijn-postvak/persoonlijk-advies"]';
  persoonlijkAdviesH1HeaderTextElement = '[class="h-page-title"]';
  PERSOONLIJK_ADVIES = 'Persoonlijk advies';
}
