export class HmPageElements {

  // MENUPAGE
  menuPageVerzekeringenButtonClickElement = '[class*="mainMenu_link"][title*="Verzekeringen"]';
  menuPageKlantenserviceButtonClickElement = '[class*="mainMenu_link"][title*="Klantenservice"]';

  // INSURANCE BUTTONS HOMEPAGE
  homePageAutoverzekeringElement = '[href*="/autoverzekering"][class*="insurances_tabLinkAction"]';
  homePageWoonverzekeringElement = '[href*="/woonverzekering"][class*="insurances_tabLinkAction"]';
  homePageAlleVerzekeringElement = '[href*="/verzekeringen"][class*="insurances_tabButtonAction"]';

  homePageBusinessArbeidsongeschiktheidClickElement = '[href*="/zakelijk/arbeidsongeschiktheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessArbeidsongeschiktheidPremieBerekenenClickElement = '[class*="inlineAnchor_button"][href*="/zakelijk/arbeidsongeschiktheidsverzekering-zzp/premieberekenen-en-afsluiten"]';
  homePageBusinessRechtsbijstandClickElement = '[href*="/zakelijk/rechtsbijstandverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessRechtsbijstandPremieBerekenenClickElement = '[class*="inlineAnchor_button"][href*="/zakelijk/rechtsbijstandverzekering/premieberekenen-en-afsluiten"]';
  homePageBusinessAansprakelijkheidClickElement = '[href*="/zakelijk/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessAansprakelijkheidPremieBerekenenClickElement = '[class*="inlineAnchor_button"][href*="/zakelijk/aansprakelijkheidsverzekeringbedrijven/premieberekenen-en-afsluiten"]';
  homePageBusinessBedrijfsautoClickElement = '[href*="/zakelijk/bedrijfsautoverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessBedrijfsautoPremieBerekenenClickElement = '[car-insurance-type="bedrijfsautoverzekering"] ::sr [textofbutton="Bereken uw premie"] ::sr button';
  homePageBusinessPersonenautoZakelijkClickElement = '[href*="/zakelijk/personenautoverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessPersonenautoZakelijkPremieBerekenenClickElement = '[car-insurance-type="zakelijke personenautoverzekering"] ::sr [textofbutton="Bereken uw premie"] ::sr button';
  homePageBusinessEigenVervoerClickElement = '[href*="/zakelijk/eigenvervoerverzekering"][class*="insurances_tabLinkAction"]';
  homePageBusinessEigenVervoerPremieBerekenenClickElement = '[class*="inlineAnchor_button"][href*="/zakelijk/eigenvervoerverzekering/premieberekenen-en-afsluiten"]';

  homePageCompanyCarClickElement = '[href="/zakelijk/personenautoverzekering"][title="Personenautoverzekering"]';

  // LICENSE PLATE
  licensePlateWidgetInputElement = 'car-widget ::sr licence-plate ::sr #kenteken';
  licensePlateWidgetButtonElement = 'car-widget ::sr custom-button ::sr button';
  licensePlateWidgetBusinessButtonElement = '[class*="simpleWidget_submit"]';
  licensePlateWidgetButtonProductPageElement = '[class*="simpleWidget_submit"]';
  licensePlateWidgetDontKnowElement = 'car-widget ::sr licence-plate.w-40 ::sr a';
  licensePlateWidgetDontKnowProductPageElement = '[class="simpleWidget_link"]';

  // WOONVERZEKERING
  woonVerzekeringButtonElement = '[data-funnel="/woonverzekering/premieberekenen-en-afsluiten"] [class="simpleWidget_submit"]';
  woonWidgetButtonProductPageElement = '[class*="simpleWidget_submit"]';
  woonVerzekeringZipCodeElement = '#woonPostcode';
  woonVerzekeringHouseNumberElement = '#woonHuisnummerNr';
  woonVerzekeringHouseNumberAddingElement = '#woonHuisnummerToevoegingAn';
  woonVerzekeringCheckTekstStepTwoElement = '[ng-class*="R22109_0"] span';
  woonVerzekeringCheckTekstStepOneElement = '[class*="headerText"]';

  // AANSPRAKELIJKHEIDSVERZEKERING
  homePageAansprakelijkheidsverzekeringElement = '[href*="/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieAansprakelijkheidsVerzekeringClickButton = '[class*="inlineAnchor_button"][href*="/aansprakelijkheidsverzekering/premieberekenen-en-afsluiten"]';
  zakelijkAansprakelijkheidsVerzekeringTextElement = '[class*="banner_title"]';
  zakelijkAansprakelijkheidsVerzekeringText = 'Aansprakelijkheidsverzekering voor zzp\'ers';

  // ZORGVERZEKERING
  homePageZorgverzekeringElement = '[href*="/zorgverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieZorgVerzekeringClickButton = '[class="insurances_tabContent _is_active"] [href*="/zorgverzekering/premieberekenen-en-afsluiten"]';
  zorgPremieBerekenPageCheckElement = 'unive-basic-insurances-coverage:nth-child(1) ';

  // REISVERZEKERING
  homePageReisverzekeringElement = '[href*="/doorlopende-reisverzekering"][class*="insurances_tabLinkAction"]';
  berekenUwPremieReisVerzekeringClickButton = '[class*="inlineAnchor_button"][href*="/doorlopende-reisverzekering/premieberekenen-en-afsluiten"]';
  doorlopendeReisverzekeringProductPageBerekenUwPremieButton = 'travel-widget ::sr custom-button ::sr button';

  // WINKELS
  homePageWinkelsButtonClickElement = '[title="Winkels"]';

  menuPageAutoverzekeringClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/autoverzekering"]';
  menuPageWoonverzekeringClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/woonverzekering"]';
  menuPageCaravanverzekeringClickElement = '[aria-hidden*="false"] [class*="mainSiteNav_categoryLink"][href*="/caravanverzekering"]';
  menuPageZorgnotaDeclarerenClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zorgverzekering/declareren"]';
  menuPageVerzekeringWijzigenClickElement = '[class="mainHeader_subLevel _is_expanded"] li:nth-child(1) [href="https://pat.unive.nl/klantenservice/wijzigingen-doorgeven"]';
  menuPageUniveAlarmcentraleClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice/alarmcentrale"]';

  // ZAKELIJK MENU PAGE
  zakelijkMenuPageUniveZzpClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/zzp"]';
  zakelijkMenuPageUniveAgrarierClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/agrariers"]';
  zakelijkMenuPageUniveGebouwenClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/gebouwenverzekering"]';
  zakelijkMenuPageKlantenserviceAfspraakMakenClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/afspraak"]';
  zakelijkMenuPageKlantenserviceKlachtIndienenClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/klachtindienen"]';
  zakelijkMenuPageKlantenserviceInloggenClickElement = '[class="mainHeader_subLevel _is_expanded"] li:nth-child(1) [href="https://zakelijk.unive.nl/QIS_Customer/my-customer"]';

  // KLANTENSERVICE
  gaNaarKlantenserviceButtonClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice"][title="Ga naar klantenservice"]';
  gaNaarZakelijkKlantenserviceButtonClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/klantenservice"][title="Naar Klantenservice"]';
  gaNaarMijnUniveButtonClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/mijnunive"][title="Ga naar Mijn Univé"]';
  gaNaarMijnUniveZakelijkButtonClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/zakelijk/mijnunive/inloggen"][title="Naar Mijn Univé Zakelijk"]';
  bekijkAlleContactMogelijkhedenButtonClickElement = '[class="mainHeader_subLevel _is_expanded"] [href="/klantenservice"][title="Bekijk alle contactmogelijkheden"]';

  zorgNotaDeclarerenTitleTextElement = '[class="component-content"] > h1';
  zorgNotaDeclarerenTitleText = 'Declaratie indienen';
  buttonNaarUniveZorg = '[class="button button-primary"]';
  zorgNotaDeclarerenBreadcrumbElement = '[class*= "breadcrumb_link"][title="Declareren"]';
  alarmCentraleTitleTextElement = '[class*="action_title"]';
  alarmCentraleTitleText = 'Alarmcentrale';
  alarmCentraleBreadcrumbElement = '[class*= "breadcrumb_link"][title="Alarmcentrale"]';
  mijnUniveLoginTitleTextElement = '[id="loginForm"] [class="login-headline"]';
  mijnUniveLoginTitleText = 'Inloggen met uw account';
    mijnUniveEmailInputElement = '#emailphone';
  mijnUnivePasswordInputElement = '#password';

  // HEADER
  headerZoekenInputElement = '[class="searchBar_input"]';
  zoekenPageButtonInputElement = '[class="banner_searchBarSubmit"]';
  zoekenPageButtonClickElement = '[class="searchBar_submit"]';
  headerMijnUniveClickElement = '[data-toggle-menu="mijnunive"]';
  mijnUniveLoggedInUserClickElement = '[class="mainUserStatus__name"]';
  headerMijnUniveZorgClickElement = '[class*="mainMijnUnive_block"] [title="Mijn Univé Zorg"]';
  headerMijnUniveParticulierClickElement = '[class*="mainMijnUnive_block"] [title="Mijn Univé Particulier"]';
  headerMijnUniveZakelijkClickElement = '[class*="mainMijnUnive_block"] [title="Mijn Univé Zakelijk"]';

  // FOOTER
  footerZorgNotaDeclarenClickElement = '[class="mainFooterContent_menuLink"][href*="/zorgkosten/declareren"]';
  footerOverUniveClickElement = '[class="mainFooterContent_menuLink"][href*="overunive"]';
  overUniveBreadcrumbElement = '[class*= "breadcrumb_link"][title="Over Univé"]';
  overUniveTitleTextElement = '[class="actionSidebar_title"]';
  overUniveTitleText = 'Over Univé';
  footerZipcodeInputElement = '[class="mainFooterContent_contactOptionQuery"]';
  footerZipcodeClickElement = '[class="mainFooterContent_contactOptionSubmitForm"]';
  footerKlantenServiceClickElement = '[class="inlineAnchor_button--primary"][href*="klantenservice"]';
  klantenServiceBreadcrumbElement = '[class*= "breadcrumb_link"][title="Klantenservice"]';
  klantenServiceTitleTextElement = 'large-title';
  klantenServiceTitleText = 'Klantenservice';
  zipcodePlaceTitleTextElement = 'map-search ::sr [class="pb-4 text-2xl font-semibold"]';
  zipcodePlaceTitleText = 'Zoek een Univé-winkel bij u in de buurt';
  zipcodePlaceTableZwolleTextElement = 'map-search ::sr map-search-result-list ::sr map-search-result-item:nth-child(1) ::sr #title > a';
  footerOndernemersScanClickElement = '[class="mainFooterContent_menuLink"][href*="ondernemersscan"]';
  footerOndernemersScanH1TextElement = '[class*="heroHeader_textContent"] h1';
  footerOndernemersScanH1Text = 'Ondernemersscan van Univé';
  footerKlantenServiceZakelijkTitleTextElement = '[class="mainFooterContent_contactOptionPhone"]';
  footerKlantenServiceZakelijkTitleText = '0592 349 649';

  // ZAKELIJK
  gebouwH2TextElement = '[class="productsMain_title"]';
  gebouwH2Text = 'Kies de dekking van uw gebouwenverzekering';
  gebouwenBreadcrumbElement = '[class*= "breadcrumb_link"][title="Gebouwenverzekering"]';
  agrarierH1TextElement = '[class="action_title"]';
  agrarierH1Text = 'Bedrijfsverzekeringen voor agrariërs';
  agrariersBreadcrumbElement = '[class*= "breadcrumb_link"][title="Agrariers"]';
  zzpH2TextElement = '[class="action_title"]';
  zzpH2Text = 'Bedrijfsverzekeringen voor zzp\'ers';
  zzpBreadcrumbElement = '[class*= "breadcrumb_link"][title="ZZP"]';
  afspraakMakenH1TitleTextElement = '[class="page-title"]';
  afspraakMakenTitleText = 'Afspraak Maken';
  afspraakMakenBreadcrumbElement = '[class*= "breadcrumb_link"][title="Afspraak"]';
  klachtIndienenBreadcrumbElement = '[class*= "breadcrumb_link"][title="Klachtindienen"]';
  klachtIndienenH1TitleTextElement = '[class="detailContent_title"]';
  klachtIndienenH1TitleText = 'Een klacht indienen als ondernemer';
  mijnUniveZakelijkUsernameInputElement = '#_MyQISLogonEnterCredentials__1';
  mijnUniveZakelijkPasswordInputElement = '#_MyQISLogonEnterCredentials__2';
  mijnUniveZakelijkSubmitButtonClickElement = '#_MyQISLogonEnterCredentials_logonButton';
  mijnUniveZakelijkHomePageH3TextElement = 'div[class="generic_container"] :nth-child(2) [class="generic_contentTitle"]';
  mijnUniveZakelijkHomePageH4Text = 'Inloggen Mijn Unive Zakelijk';
}
