export class HmPageMijnUniveElements {

  //MENUPAGE
  menuPageVerzekeringenButtonClickElement: string = '[class*="mainMenu_link"][title*="Verzekeringen"]';
  menuPageKlantenserviceButtonClickElement: string = '[class*="mainMenu_link"][title*="Klantenservice"]';

  //HEADER
  headerZoekenClickElement: string = '[class*="site-header-desktop-header__button site-header-desktop-header__button--search"]';
  headerZoekenInputElement: string = '[class="site-header-search__input"]';
  zoekenPageButtonInputElement: string = '[class="banner_searchBarSubmit"]';
  zoekenPageButtonClickElement: string = '[class="svg-icon svg-icon--m-or-s svg-icon--white"]';

  // headerMijnUniveClickElement: string = '[data-toggle-menu="mijnunive"]';

  headerKlantenserviceClickElement: string = '[data-menu-trigger="site-nav+accordion:customerservice"]';
  headerVerzekeringenClickElement: string = '[data-menu-trigger="site-nav+accordion:insurances"]';

  headerMijnUniveClickElement: string = '[class="button-icon-text site-header-desktop-header__button"]';
  headerMijnUniveZorgTitleTextElement: string = '[class="site-header-mu-nav-block__title"][href="https://pat.unive.nl/mijnunivezorg/inloggen"]';
  headerMijnUniveZorgTitleText: string = 'Mijn Univé Zorg';
  headerMijnUniveParticulierTitleTextElement: string = '[class="site-header-mu-nav-block__title"][href="/mijnunive/inloggen"]';
  headerMijnUniveParticulierTitleText: string = 'Mijn Univé Particulier';
  headerMijnUniveZakelijkTitleTextElement: string = '[class="site-header-mu-nav-block__title"][href="https://pat.unive.nl/zakelijk/mijnunive/inloggen"]';
  headerMijnUniveZakelijkTitleText: string = 'Mijn Univé Zakelijk';

  headerMijnUniveVerzekeringenTitleTextElement: string = '[data-menu-trigger="site-nav+accordion:insurances"]';
  headerMijnUniveVerzekeringenTitleText: string = 'Verzekeringen';

  headerMijnUniveKlantenserviceTitleTextElement: string = '[data-menu-trigger="site-nav+accordion:customerservice"]';
  headerMijnUniveKlantenserviceTitleText: string = 'Klantenservice';


  footerBekijkDeVeelGesteldeVragenClickElement: string ='[class="footer__help"] [href="/klantenservice/veelgesteldevragen"]';

  footerBekijkDeVeelGesteldeVragenTextElement: string = '[class="decisiontree_title"]';
  footerBekijkDeVeelGesteldeVragenTitleText: string = 'Veelgestelde vragen overzicht';

}
