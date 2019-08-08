export class CorrespondentieElements {

  //MIJN POSTVAK
  correspondentieButtonClickElement: string = '[href="/mumq/QIS_Customer/my-communications"]';
  firstCorrespondenceClickElement: string = '#_myCommunications_manageMyCommunications > div:nth-child(2) > div > table > tbody:nth-child(3) .colDateSent.locked > a > span';
  correspondenceHeaderH3TextElement: string = '[class="hasHeader entryGroup"] > h3 > span';
  correspondenceHeaderH3Text: string = 'Gegevens correspondentie';

  //PERSOONLIJK ADVIES
  persoonlijkAdviesButtonClickElement: string = '[href="/mijnunive/mijn-postvak/persoonlijk-advies"]';
  persoonlijkAdviesH1HeaderTextElement: string = '[class="h-page-title"]';
  persoonlijkAdviesBreadCrumbElement: string = '[class="list is-visible-desktop-only"] li:nth-child(3)';
  PERSOONLIJK_ADVIES = 'Persoonlijk advies';
}
