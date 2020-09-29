export class HmPageElements {

  //MENUPAGE
  menuPageVerzekeringenButtonClickElement: string = '[class*="mainMenu_link"][title*="Verzekeringen"]';
  menuPageKlantenserviceButtonClickElement: string = '[class*="mainMenu_link"][title*="Klantenservice"]';


  //INSURANCE BUTTONS HOMEPAGE
  homePageAutoverzekeringElement: string = '[href*="/autoverzekering"][class*="insurances_tabLinkAction"]';
  homePageWoonverzekeringElement: string = '[href*="/woonverzekering"][class*="insurances_tabLinkAction"]';
  homePageAlleverzekeringElement: string = '[href*="/verzekeringen"][class*="insurances_tabButtonAction"]';

  homePageBusinessArbeidsongeschiktheidClickElement: string = '[href*="/zakelijk/arbeidsongeschiktheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessArbeidsongeschiktheidPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/arbeidsongeschiktheidsverzekering-zzp/premieberekenen-en-afsluiten"]';
  homePageBusinessRechtsbijstandClickElement: string = '[href*="/zakelijk/rechtsbijstandverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessRechtsbijstandPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/rechtsbijstandverzekering/premieberekenen-en-afsluiten"]';
  homePageBusinessAansprakelijkheidClickElement: string = '[href*="/zakelijk/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessAansprakelijkheidPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/aansprakelijkheidsverzekeringbedrijven/premieberekenen-en-afsluiten"]';
  homePageBusinessBedrijfsautoClickElement: string = '[href*="/zakelijk/bedrijfsautoverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessBedrijfsautoPremieBerekenenClickElement: string = '[car-insurance-type="bedrijfsautoverzekering"] ::sr [textofbutton="Bereken uw premie"] ::sr button';
  homePageBusinessPersonenautoZakelijkClickElement: string = '[href*="/zakelijk/personenautoverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessPersonenautoZakelijkPremieBerekenenClickElement: string = '[car-insurance-type="zakelijke personenautoverzekering"] ::sr [textofbutton="Bereken uw premie"] ::sr button';
  homePageBusinessEigenVervoerClickElement: string = '[href*="/zakelijk/eigenvervoerverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessEigenVervoerPremieBerekenenClickElement: string = '[class*="inlineAnchor_button"][href*="/zakelijk/eigenvervoerverzekering/premieberekenen-en-afsluiten"]';

  //LICENSE PLATE
  licensePlateWidgetInputElement: string = 'car-widget ::sr licence-plate ::sr #kenteken';
  licensePlateWidgetButtonElement: string = 'car-widget ::sr custom-button ::sr button';
  licensePlateWidgetBusinessButtonElement = '[class*="simpleWidget_submit"]';
  licensePlateWidgetButtonProductPageElement: string = '[class*="simpleWidget_submit"]';
  licensePlateWidgetDontKnowElement: string = 'car-widget ::sr licence-plate.w-40 ::sr a';
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
  doorlopendeReisverzekeringProductPageBerekenUwPremieButton: string = 'travel-widget ::sr custom-button ::sr button';

  //WINKELS
  homePageWinkelsButtonClickElement = '[title="Winkels"]';

  menuPageAutoverzekeringClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/autoverzekering"]';
  menuPageWoonverzekeringClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/woonverzekering"]';
  menuPageCaravanverzekeringClickElement: string = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/caravanverzekering"]';
  menuPageZorgnotaDeclarerenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zorgverzekering/declareren"]';
  menuPageVerzekeringWijzigenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] li:nth-child(1) [href="https://pat.unive.nl/klantenservice/wijzigingen-doorgeven"]';
  menuPageUniveAlarmcentraleClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice/alarmcentrale"]';

  //ZAKELIJK MENU PAGE
  zakelijkMenuPageUniveZzpClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/zzp"]';
  zakelijkMenuPageUniveAgrarierClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/agrariers"]';
  zakelijkMenuPageUniveGebouwenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/gebouwenverzekering"]';
  zakelijkMenuPageKlantenserviceAfspraakMakenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/afspraak"]';
  zakelijkMenuPageKlantenserviceKlachtIndienenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/klachtindienen"]';
  zakelijkMenuPageKlantenserviceInloggenClickElement: string = '[class="mainHeader_subLevel _is_expanded"] li:nth-child(1) [href="https://zakelijk.unive.nl/QIS_Customer/my-customer"]';

  //KLANTENSERVICE
  gaNaarKlantenserviceButtonClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice"][title="Ga naar klantenservice"]';
  gaNaarZakelijkKlantenserviceButtonClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/klantenservice"][title="Naar Klantenservice"]';
  gaNaarMijnUniveButtonClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/mijnunive"][title="Ga naar Mijn Univé"]';
  gaNaarMijnUniveZakelijkButtonClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/mijnunive/inloggen"][title="Naar Mijn Univé Zakelijk"]';
  bekijkAlleContactMogelijkhedenButtonClickElement: string = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice"][title="Bekijk alle contactmogelijkheden"]';


  zorgNotaDeclarerenTitleTextElement: string = '[class="heroHeader_textContent"] > h1:nth-child(3)';
  zorgNotaDeclarerenTitleText: string = "Uw zorgnota declareren";
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
  klantenServiceTitleTextElement: string = 'large-title';
  klantenServiceTitleText: string = 'Klantenservice';
  zipcodePlaceTitleTextElement: string = 'map-search ::sr [class="pb-4 text-2xl font-semibold"]';
  zipcodePlaceTitleText: string = 'Zoek een Univé-winkel bij u in de buurt';
  zipcodePlaceTableZwolleTextElement: string = 'map-search ::sr map-search-result-list ::sr map-search-result-item ::sr #title > a';
  footerOndernemersScanClickElement: string = '[class="mainFooterContent_menuLink"][href*="ondernemersscan"]';
  footerOndernemersScanH1TextElement: string = '[class*="heroHeader_textContent"] h1';
  footerOndernemersScanH1Text: string = 'Ondernemersscan van Univé';
  footerKlantenServiceZakelijkTitleTextElement: string = '[class="mainFooterContent_contactOptionPhone"]';
  footerKlantenServiceZakelijkTitleText: string = '0592 349 649';

  //ZAKELIJK
  gebouwH2TextElement: string = '[class="productsMain_title"]';
  gebouwH2Text: string = 'Kies de dekking van uw gebouwenverzekering';
  gebouwenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Gebouwenverzekering"]';
  agrarierH1TextElement: string = '[class="action_title"]';
  agrarierH1Text: string = 'Bedrijfsverzekeringen voor agrariërs';
  agrariersBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Agrariers"]';
  zzpH2TextElement: string = '[class="action_title"]';
  zzpH2Text: string = "Bedrijfsverzekeringen voor zzp'ers";
  zzpBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="ZZP"]';
  afspraakMakenH1TitleTextElement: string = '[class="page-title"]';
  afspraakMakenTitleText: string = 'Afspraak maken';
  afspraakMakenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Afspraak"]';
  klachtIndienenBreadcrumbElement: string = '[class*= "breadcrumb_link"][title="Klachtindienen"]';
  klachtIndienenH1TitleTextElement: string = '[class="detailContent_title"]';
  klachtIndienenH1TitleText: string = 'Een klacht indienen als ondernemer';
  mijnUniveZakelijkUsernameInputElement: string = '#_MyQISLogonEnterCredentials__1';
  mijnUniveZakelijkPasswordInputElement: string = '#_MyQISLogonEnterCredentials__2';
  mijnUniveZakelijkSubmitButtonClickElement: string = '#_MyQISLogonEnterCredentials_logonButton';
  mijnUniveZakelijkHomePageH3TextElement: string = '[class*="generic_contentTitle"]';
  mijnUniveZakelijkHomePageH4Text: string = 'Inloggen Mijn Unive Zakelijk';
}
