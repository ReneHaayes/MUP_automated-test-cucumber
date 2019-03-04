export class HmPageElements {

  //MENUPAGE
  menuPageVerzekeringenButtonClickElement: string = '[class*="mainMenu_link"][title*="Verzekeringen"]';
  menuPageKlantenserviceButtonClickElement: string = '[class*="mainMenu_link"][title*="Klantenservice"]';


  //INSURANCE BUTTONS HOMEPAGE
  homePageAutoverzekeringElement: string = '[href*="/autoverzekering"][class*="insurances_tabLinkAction"]';
  homePageWoonverzekeringElement: string = '[href*="/woonverzekering"][class*="insurances_tabLinkAction"]';
  homePageAlleverzekeringElement: string = '[href*="/verzekeringen"][class*="insurances_tabButtonAction"]';

  homePageBusinessBedrijfsAutoverzekeringClickElement: string = '[href*="/zakelijk/bedrijfsautoverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessArbeidsongeschiktheidClickElement: string = '[href*="/zakelijk/arbeidsongeschiktheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessRechtsbijstandClickElement: string = '[href*="/zakelijk/rechtsbijstandverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessEigenVervoerClickElement: string = '[href*="/zakelijk/eigenvervoerverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessAansprakelijkheidClickElement: string = '[href*="/zakelijk/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';


  //LICENSE PLATE
  licensePlateWidgetInputElement: string = '#kenteken';
  licensePlateWidgetButtonElement: string = '[class*="premiumCalculator_boxSubmit"]';
  licensePlateWidgetButtonProductPageElement: string = '[class*="premiumCalculatorShort_submit"]';
  licensePlateWidgetDontKnowElement: string = '[class*="premiumCalculatorRationalisatie_boxKentekenLink"]';
  licensePlateWidgetDontKnowProductPageElement: string = '[class*="premiumCalculatorShort_directLink"]';

  //WOONVERZEKERING
  woonVerzekeringButtonElement: string = '[class*="simpleWidget_submit"]';
  woonVerzekeringZipCodeElement: string = '#woonPostcode';
  woonVerzekeringHouseNumberElement: string = '#woonHuisnummerNr';
  woonVerzekeringHouseNumberAddingElement: string = '#woonHuisnummerToevoegingAn';
  woonVerzekeringCheckTekstStepTwoElement: string = '[ng-class*="R22109_0"] span';
  woonVerzekeringCheckTekstStepOneElement: string = '[class*="headerText"]';

  //AANSPRAKELIJKHEIDSVERZEKERING
  homePageAansprakelijkheidsverzekeringElement: string = '[href*="/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieAansprakelijkheidsVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/aansprakelijkheidsverzekering/premieberekenen-en-afsluiten"]';

  //ZORGVERZEKERING
  homePageZorgverzekeringElement: string = '[href*="/zorgverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieZorgVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/zorgverzekering/premieberekenen-en-afsluiten"]';
  zorgPremieBerekenPageCheckElement: string = '[class="unive-basic-insurances-coverage"]';

  //REISVERZEKERING
  homePageReisverzekeringElement: string = '[href*="/zorgservice/alternatievezorg"][class*="insurances_tabLinkAction"]';
  berekenUwPremieReisVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/doorlopende-reisverzekering/premieberekenen-en-afsluiten"]';

  menuPageAutoverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/autoverzekering"]';
  menuPageWoonverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/woonverzekering"]';
  menuPageCaravanverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/caravanverzekering"]';
  menuPageZorgnotaDeclarerenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zorgverzekering/declareren"]';
  menuPageVerzekeringWijzigenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/mijnunive/polisoverzicht"]';
  menuPageUniveAlarmcentraleClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/klantenservice/alarmcentrale"]';

  //KLANTENSERVICE
  gaNaarKlantenserviceButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Ga naar klantenservice"]';
  gaNaarMijnUniveButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Ga naar Mijn Univé"]';
  bekijkAlleContactMogelijkhedenButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Bekijk alle contactmogelijkheden"]';

  zorgNotaDeclarerenTitleTextElement: string = '[class*="detailContent_title"]';
  zorgNotaDeclarerenTitleText: string = "Uw zorgnota's declareren bij Univé";
  zorgNotaDeclarerenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Declareren"]';
  alarmCentraleTitleTextElement: string = '[class*="action_title"]';
  alarmCentraleTitleText: string = 'Alarmcentrale';
  alarmCentraleBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Alarmcentrale"]';
  mijnUniveLoginTitleTextElement: string = '[class*="login-box"] [class="headline"]';
  mijnUniveLoginTitleText: string = 'Inloggen met uw account';
  mijnUniveEmailInputElement: string = '#email';
  mijnUnivePasswordInputElement: string = '#password';

  //HEADER
  headerZoekenInputElement: string = '[class="searchBar_input"]';
  zoekenPageButtonInputElement: string = '[class="banner_searchBarSubmit"]';
  zoekenPageButtonClickElement: string = '[class="searchBar_submit"]';
  headerMijnUniveClickElement: string = '[data-toggle-menu="mijnunive"]';
  headerMijnUniveZorgClickElement: string = '[title="Mijn Univé Zorg"]';
  headerMijnUniveParticulierClickElement: string = '[title="Mijn Univé Particulier"]';
  headerMijnUniveZakelijkClickElement: string = '[title="Mijn Univé Zakelijk"]';

  //FOOTER
  footerZorgNotaDeclarenClickElement: string = '[class="mainFooterContent_menuLink"][href*="zorgverzekering/declareren"]';
  footerOverUniveClickElement: string = '[class="mainFooterContent_menuLink"][href*="overunive"]';
  overUniveBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Over Univé"]';
  overUniveTitleTextElement: string = '[class="actionSidebar_title"]';
  overUniveTitleText: string = 'Over Univé';
  footerZipcodeInputElement: string = '[class="mainFooterContent_contactOptionQuery"]';
  footerZipcodeClickElement: string = '[class="mainFooterContent_contactOptionSubmitForm"]';
  footerKlantenServiceClickElement: string = '[class="mainFooterContent_contactOptionTitle"] [href*="klantenservice"]';
  klantenServiceBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Klantenservice"]';
  klantenServiceTitleTextElement: string = '[class="clientService_title"]';
  klantenServiceTitleText: string = 'Klantenservice';
  zipcodePlaceTitleTextElement: string = '[class="locationFinder_title"]';
  zipcodePlaceTitleText: string = 'Zoek een Univé-winkel bij u in de buurt';

}
