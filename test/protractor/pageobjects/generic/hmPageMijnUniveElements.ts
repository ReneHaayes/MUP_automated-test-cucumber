export class HmPageMijnUniveElements {

  // MENUPAGE
  menuPageVerzekeringenButtonClickElement = '[class*="mainMenu_link"][title*="Verzekeringen"]';
  menuPageKlantenserviceButtonClickElement = '[class*="mainMenu_link"][title*="Klantenservice"]';

  // HEADER
  headerZoekenClickElement = '[class*="site-header-desktop-header__button site-header-desktop-header__button--search"]';
  headerZoekenInputElement = '[class="site-header-search__input"]';
  zoekenPageButtonInputElement = '[class="banner_searchBarSubmit"]';
  zoekenPageButtonClickElement = '[class="svg-icon svg-icon--m-or-s svg-icon--white"]';

  // headerMijnUniveClickElement: string = '[data-toggle-menu="mijnunive"]';

  headerKlantenserviceClickElement = '[data-menu-trigger="site-nav+accordion:customerservice"]';
  headerVerzekeringenClickElement = '[data-menu-trigger="site-nav+accordion:insurances"]';

  headerMijnUniveClickElement = '[class="button-icon-text site-header-desktop-header__button"]';
  headerMijnUniveZorgTitleTextElement = '[class="button site-header-mu-nav-block__button"][href="https://services.mijnunivezorg.nl/inloggen"]';
  headerMijnUniveZorgTitleText = 'Mijn Univé Zorg';
  headerMijnUniveParticulierTitleTextElement = '[class="site-header-mu-nav-block__title"][href="/mijnunive/inloggen"]';
  headerMijnUniveParticulierTitleText = 'Mijn Univé Particulier';
  headerMijnUniveZakelijkTitleTextElement = '[class="button site-header-mu-nav-block__button"][href="/mijnunivezakelijk/inloggen"]';
  headerMijnUniveZakelijkTitleText = 'Mijn Univé Zakelijk';

  headerMijnUniveVerzekeringenTitleTextElement = '[data-menu-trigger="site-nav+accordion:insurances"]';
  headerMijnUniveVerzekeringenTitleText = 'Verzekeringen';

  headerMijnUniveKlantenserviceTitleTextElement = '[data-menu-trigger="site-nav+accordion:customerservice"]';
  headerMijnUniveKlantenserviceTitleText = 'Klantenservice';


  footerBekijkDeVeelGesteldeVragenClickElement = '[class="footer__help"] [href="/klantenservice/veelgesteldevragen"]';

  footerBekijkDeVeelGesteldeVragenTextElement = '[class="decisiontree_title"]';
  footerBekijkDeVeelGesteldeVragenTitleText = 'Veelgestelde vragen overzicht';

}
