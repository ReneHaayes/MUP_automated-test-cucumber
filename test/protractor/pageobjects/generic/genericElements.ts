export class GenericElements {

  //PAGES
  patUnive: string = 'https://pat.unive.nl/';
  tstProjUnive: string = 'https://tstproj.unive.nl/';
  autoVerzUrlPat: string = this.patUnive + 'autoverzekering/premieberekenen-en-afsluiten';
  autoVerzUrlTstProj: string = this.tstProjUnive + 'autoverzekering/premieberekenen-en-afsluiten';
  zzpFlexPat: string = this.patUnive + 'zakelijk/zzp-inkomensverzekering/premieberekenen-en-afsluiten#/uw-premie';
  aansprakelijkheidsVerzekeringPat: string = this.patUnive + 'aansprakelijkheidsverzekering/premieberekenen-en-afsluiten';
  autoVerzProductPagePat: string = this.patUnive + 'autoverzekering';
  woonVerzPat: string = this.patUnive + 'woonverzekering/premieberekenen-en-afsluiten';
  woonVerzPatProductPage: string = this.patUnive + 'woonverzekering';
  bromfietsVerzekeringPat: string = this.patUnive + 'bromfietsverzekering/premieberekenen-en-afsluiten';
  scooterVerzekeringPat: string = this.patUnive + 'scooterverzekering/premieberekenen-en-afsluiten';
  zorgeloosOnlineVerzekeringPat: string = this.patUnive + 'zorgeloosonline/premieberekenen-en-afsluiten';

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

  //HISTORY
  insuranceHistoryNoElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(1)';
  insuranceHistoryYesElement: string = '[data-label-id*="LA_IF2535_3710"] .radioList > label:nth-child(2)';
  insuranceHistoryYesExplanationElement: string = '#_Form_IF2535_33524';

  criminalHistoryYesElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(2)';
  criminalHistoryNoElement: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(1)';
  criminalHistoryInformationElement: string = '#_Form_verificationLightbox';

  damageHistoryYesElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(2)';
  damageHistoryNoElement: string = '[data-label-id*="LA_IF2535_33953"] .radioList > label:nth-child(1)';

  //DIFFERENT ELEMENTS ON STEP HISTORY FOR ZORGELOOS ONLINE
  damageHistoryYesElementZorgeloosOnline: string = '[data-label-id*="LA_IF30005_37912"] .radioList > label:nth-child(2)';
  damageHistoryNoElementZorgeloosOnline: string = '[data-label-id*="LA_IF30005_37912"] .radioList > label:nth-child(1)';

  insuranceHistoryNoElementZorgeloosOnline: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(1)';
  insuranceHistoryYesElementZorgeloosOnline: string = '[data-label-id*="LA_IF2535_3711"] .radioList > label:nth-child(2)';

  //SIDEBAR
  sideBarElement: string = '//*[@class="rbcontainer"]//*';


}
