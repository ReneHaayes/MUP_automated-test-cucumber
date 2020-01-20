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
  homePageBusinessArbeidsongeschiktheidPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href="/zakelijk/arbeidsongeschiktheidsverzekering-zzp/premieberekenen-en-afsluiten"]';
  homePageBusinessRechtsbijstandClickElement: string = '[href*="/zakelijk/rechtsbijstandverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessRechtsbijstandPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/rechtsbijstandverzekering/premieberekenen-en-afsluiten"]';
  homePageBusinessEigenVervoerClickElement: string = '[href*="/zakelijk/eigenvervoerverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessEigenVervoerPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/eigenvervoerverzekering/premieberekenen-en-afsluiten"]';
  homePageBusinessAansprakelijkheidClickElement: string = '[href*="/zakelijk/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessAansprakelijkheidPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/aansprakelijkheidsverzekeringbedrijven/premieberekenen-en-afsluiten"]';


  //LICENSE PLATE
  licensePlateWidgetInputElement: string = '#kenteken';
  licensePlateWidgetButtonElement: string = '[data-funnel-personenauto="/autoverzekering/premieberekenen-en-afsluiten"] [class*="simpleWidget_submit"]';
  licensePlateWidgetBusinessButtonElement = '[class*="simpleWidget_submit"]';
  licensePlateWidgetButtonProductPageElement: string = '[class*="simpleWidget_submit"]';
  licensePlateWidgetDontKnowElement: string = '[class="simpleWidget_link"]';
  licensePlateWidgetDontKnowProductPageElement: string = '[class="simpleWidget_link"]';

  //WOONVERZEKERING
  woonVerzekeringButtonElement: string = '[data-funnel="/woonverzekering/premieberekenen-en-afsluiten"] [class="simpleWidget_submit"]';
  woonWidgetButtonProductPageElement: string = '[class*="simpleWidget_submit"]';
  woonVerzekeringZipCodeElement: string = '#woonPostcode';
  woonVerzekeringHouseNumberElement: string = '#woonHuisnummerNr';
  woonVerzekeringHouseNumberAddingElement: string = '#woonHuisnummerToevoegingAn';
  woonVerzekeringCheckTekstStepTwoElement: string = '[ng-class*="R22109_0"] span';
  woonVerzekeringCheckTekstStepOneElement: string = '[class*="headerText"]';

  //AANSPRAKELIJKHEIDSVERZEKERING
  homePageAansprakelijkheidsverzekeringElement: string = '[href*="/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieAansprakelijkheidsVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/aansprakelijkheidsverzekering/premieberekenen-en-afsluiten"]';
  zakelijkAansprakelijkheidsVerzekeringTextElement: string = '[class*="banner_title"]';
  zakelijkAansprakelijkheidsVerzekeringText: string = "Aansprakelijkheidsverzekering voor zzp'ers";

  //ZORGVERZEKERING
  homePageZorgverzekeringElement: string = '[href*="/zorgverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieZorgVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/zorgverzekering/premieberekenen-en-afsluiten"]';
  zorgPremieBerekenPageCheckElement: string = '[class="unive-basic-insurances-coverage"]';

  //REISVERZEKERING
  homePageReisverzekeringElement: string = '[href*="/doorlopende-reisverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieReisVerzekeringClickButton: string = '[class*="inlineAnchor_button"][href*="/doorlopende-reisverzekering/premieberekenen-en-afsluiten"]';
  doorlopendeReisverzekeringProductPageBerekenUwPremieButton: string = '[class*="simpleWidget_submit"]';

  menuPageAutoverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/autoverzekering"]';
  menuPageWoonverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/woonverzekering"]';
  menuPageCaravanverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/caravanverzekering"]';
  menuPageZorgnotaDeclarerenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zorgverzekering/declareren"]';
  menuPageVerzekeringWijzigenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="klantenservice/wijzigingen-doorgeven"]';
  menuPageUniveAlarmcentraleClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/klantenservice/alarmcentrale"]';

  //ZAKELIJK MENU PAGE
  zakelijkMenuPageUniveZzpClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zakelijk/zzp"]';
  zakelijkMenuPageUniveAgrarierClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zakelijk/agrariers"]';
  zakelijkMenuPageUniveGebouwenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zakelijk/gebouwenverzekering"]';
  zakelijkMenuPageKlantenserviceAfspraakMakenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zakelijk/afspraak"]';
  zakelijkMenuPageKlantenserviceKlachtIndienenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/zakelijk/klachtindienen"]';
  zakelijkMenuPageKlantenserviceInloggenClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryMenu"] li:nth-child(1) [href*="https://zakelijk.unive.nl/QIS_Customer/my-customer"]';

  //KLANTENSERVICE
  gaNaarKlantenserviceButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Ga naar klantenservice"]';
  gaNaarZakelijkKlantenserviceButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Naar Klantenservice"]';
  gaNaarMijnUniveButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Ga naar Mijn Univé"]';
  gaNaarMijnUniveZakelijkButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Naar Mijn Univé Zakelijk"]';
  bekijkAlleContactMogelijkhedenButtonClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_category"] [class*="mainSiteNav_button"][title*="Bekijk alle contactmogelijkheden"]';


  zorgNotaDeclarerenTitleTextElement: string = 'section:nth-child(1) > h4';
  zorgNotaDeclarerenTitleText: string = "Via de Univé App";
  zorgNotaDeclarerenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Declareren"]';
  alarmCentraleTitleTextElement: string = '[class*="action_title"]';
  alarmCentraleTitleText: string = 'Alarmcentrale';
  alarmCentraleBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Alarmcentrale"]';
  mijnUniveLoginTitleTextElement: string = '[id="loginForm"] [class="login-headline"]';
  mijnUniveLoginTitleText: string = 'Inloggen met uw account';
  mijnUniveEmailInputElement: string = '#emailphone';
  mijnUnivePasswordInputElement: string = '#password';

  //HEADER
  headerZoekenInputElement: string = '[class="searchBar_input"]';
  zoekenPageButtonInputElement: string = '[class="banner_searchBarSubmit"]';
  zoekenPageButtonClickElement: string = '[class="searchBar_submit"]';
  headerMijnUniveClickElement: string = '[data-toggle-menu="mijnunive"]';
  mijnUniveLoggedInUserClickElement: string = '[class="mainUserStatus__name"]';
  headerMijnUniveZorgClickElement: string = '[class*="mainMijnUnive_block"] [title="Mijn Univé Zorg"]';
  headerMijnUniveParticulierClickElement: string = '[class*="mainMijnUnive_block"] [title="Mijn Univé Particulier"]';
  headerMijnUniveZakelijkClickElement: string = '[class*="mainMijnUnive_block"] [title="Mijn Univé Zakelijk"]';

  //FOOTER
  footerZorgNotaDeclarenClickElement: string = '[class="mainFooterContent_menuLink"][href*="zorgverzekering/declareren"]';
  footerOverUniveClickElement: string = '[class="mainFooterContent_menuLink"][href*="overunive"]';
  overUniveBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Over Univé"]';
  overUniveTitleTextElement: string = '[class="actionSidebar_title"]';
  overUniveTitleText: string = 'Over Univé';
  footerZipcodeInputElement: string = '[class="mainFooterContent_contactOptionQuery"]';
  footerZipcodeClickElement: string = '[class="mainFooterContent_contactOptionSubmitForm"]';
  footerKlantenServiceClickElement: string = '[class="inlineAnchor_button--primary"][href*="klantenservice"]';
  klantenServiceBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Klantenservice"]';
  klantenServiceTitleTextElement: string = '[class="clientService_title"]';
  klantenServiceTitleText: string = 'Klantenservice';
  zipcodePlaceTitleTextElement: string = '[class="locationFinder_title"]';
  zipcodePlaceTitleText: string = 'Zoek een Univé-winkel bij u in de buurt';
  zipcodePlaceTableZwolleTextElement: string = '[class="locationFinder_locationList _search_complete"] li:nth-child(1) [class=location_title]';
  footerOndernemersScanClickElement: string = '[class="mainFooterContent_menuLink"][href*="ondernemersscan"]';
  footerOndernemersScanH1TextElement: string = '[class="action_title"]';
  footerKlantenServiceZakelijkTitleTextElement: string = '[class="mainFooterContent_contactOptionPhone"]';
  footerKlantenServiceZakelijkTitleText: string = '0592 349 649';

  //ZAKELIJK
  gebouwH2TextElement: string = '[class="productsMain_title"]';
  gebouwH2Text: string = 'Kies de dekking van uw gebouwenverzekering';
  gebouwenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Gebouwenverzekering"]';
  agrarierH1TextElement: string = '[class="action_title"]';
  agrarierH1Text: string = 'Bedrijfsverzekeringen voor agrariërs';
  agrariersBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Agrariers"]';
  zzpH2TextElement: string = '[class="detailContent_section"] h2';
  zzpH2Text: string = "Verzeker uzelf tegen zakelijke risico's";
  zzpBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="ZZP"]';
  afspraakMakenH1TitleTextElement: string = '[class="boxed_title"]';
  afspraakMakenTitleText: string = 'Afspraak zakelijk';
  afspraakMakenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Afspraak"]';
  klachtIndienenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Klachtindienen"]';
  klachtIndienenH1TitleTextElement: string = '[class="detailContent_title"]';
  klachtIndienenH1TitleText: string = 'Een klacht indienen als ondernemer';
  mijnUniveZakelijkUsernameInputElement: string = '#_MyQISLogonEnterCredentials__1';
  mijnUniveZakelijkPasswordInputElement: string = '#_MyQISLogonEnterCredentials__2';
  mijnUniveZakelijkSubmitButtonClickElement: string = '#_MyQISLogonEnterCredentials_logonButton';
  mijnUniveZakelijkHomePageH3TextElement: string = '[href="https://pat.unive.nl/zakelijk/mijnunive/inloggen"][class="button--primary mainMijnUnive_action"]';
  mijnUniveZakelijkHomePageH4Text: string = 'Mijn Univé Zakelijk';
}
