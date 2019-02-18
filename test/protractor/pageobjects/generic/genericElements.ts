export class GenericElements {

  autoVerzUrlPat: string = 'autoverzekering/premieberekenen-en-afsluiten';
  zzpFlexPat: string = 'zakelijk/zzp-inkomensverzekering/premieberekenen-en-afsluiten#/uw-premie';
  aansprakelijkheidsVerzekeringPat: string = 'aansprakelijkheidsverzekering/premieberekenen-en-afsluiten/';
  autoVerzProductPagePat: string = 'autoverzekering';
  woonVerzPat: string = 'woonverzekering/premieberekenen-en-afsluiten';
  woonVerzPatProductPage: string = 'woonverzekering';
  bromfietsVerzekeringPat: string = 'bromfietsverzekering/premieberekenen-en-afsluiten';
  scooterVerzekeringPat: string = 'scooterverzekering/premieberekenen-en-afsluiten';
  motorVerzekeringPat: string = 'motorverzekering/premieberekenen-en-afsluiten';
  quadVerzekeringPat: string = 'motorverzekering/premieberekenen-en-afsluiten-quad';
  trikeVerzekeringPat: string = 'motorverzekering/premieberekenen-en-afsluiten-trike';
  zorgeloosOnlineVerzekeringPat: string = 'zorgeloosonline/premieberekenen-en-afsluiten';
  bedrijfsAutoVerzekering: string = 'zakelijk/bedrijfsautoverzekering/premieberekenen-en-afsluiten';
  businessHomePage: string = 'zakelijk';
  doorlopendeReisVerzekering: string = 'doorlopende-reisverzekering/premieberekenen-en-afsluiten';
  kortlopendeReisVerzekering: string = 'kortlopende-reisverzekering/premieberekenen-en-afsluiten';
  personenAutoVerzekeringZakelijk: string = 'zakelijk/personenautoverzekering/premieberekenen-en-afsluiten';
  roerendeZakenVerzekeringZakelijk: string = 'zakelijk/roerendezakenverzekering/premieberekenen-en-afsluiten';
  kortlopendeAnnuleringsVerzekering: string = 'annuleringsverzekering/premieberekenen-en-afsluiten-kav';
  zorgeloosOnlineVerzekeringZakelijk: string = 'zakelijk/zorgeloosonline/premieberekenen-en-afsluiten';
  bootVerzekering: string = 'bootverzekering/premieberekenen-en-afsluiten';


  //COOKIE
  cookieElement: string = '#consent-popup-close-modal';

  //BUTTONS
  nextButton: string = '#_Form_next';
  finishButton: string = '#_Form_finishSave>span';

  //LOADER
  loader: string = 'body > div.blockUI.blockMsg.blockPage';

  //ACCOUNTNUMBER
  accountNumberElement: string = '#_Form_IF2533_3702';

  //AUTHORIZATION
  authorizationUniveElement: string = '[ng-class*="IF2533_10213"] > label';

  //THANK YOU
  thankYouH2Element: string = '.thanks_content > h2';
  thankYouH1Element: string = '.banner--thanks h1';
  errorMessageElement: string = '.mainMessage';


  //HISTORY
  insuranceHistoryNoElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(1)';
  insuranceHistoryYesElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(2)';
  insuranceHistoryYesExplanationElement: string = '#_Form_IF2535_33524';

  criminalHistoryYesElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(2)';
  criminalHistoryNoElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(1)';
  criminalHistoryInformationElement: string = '#_Form_verificationLightbox';

  damageHistoryYesElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(2)';
  damageHistoryNoElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(1)';

  //SIDEBAR
  sideBarElement: string = '//*[@class="rbcontainer"]//*';


}
