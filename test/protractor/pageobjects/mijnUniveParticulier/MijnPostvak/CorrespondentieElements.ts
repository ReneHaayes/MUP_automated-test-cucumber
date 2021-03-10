export class CorrespondentieElements {

  // MIJN POSTVAK
  correspondentieButtonClickElement = '[href="/mumq/QIS_Customer/my-communications"]';
  firstCorrespondenceClickElement = '#_myCommunications_manageMyCommunications > div:nth-child(2) > div > table > tbody:nth-child(3) .colDateSent.locked > a > span';
  correspondenceHeaderH3TextElement = '[class="hasHeader entryGroup"] > h3 > span';
  correspondenceHeaderH3Text = 'Gegevens correspondentie';

  // PERSOONLIJK ADVIES
  persoonlijkAdviesButtonClickElement = '[href="/mijnunive/mijn-postvak/persoonlijk-advies"]';
  persoonlijkAdviesH1HeaderTextElement = '[class="h-page-title"] Persoonlijk advies';
  persoonlijkAdviesBreadCrumbElement = '[class="list is-visible-desktop-only"] li:nth-child(3)';
  PERSOONLIJK_ADVIES = 'Persoonlijk advies';
}
