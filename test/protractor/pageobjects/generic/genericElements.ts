export class GenericElements {

  //PAGES

  patUnive: string = 'https://pat.unive.nl/';
  tstProjUnive: string = 'https://tstproj.unive.nl/';
  autoVerzUrlPat: string = this.patUnive + 'autoverzekering/premieberekenen-en-afsluiten';
  autoVerzUrlTstProj: string = this.tstProjUnive + 'autoverzekering/premieberekenen-en-afsluiten';
  zzpFlexPat: string = this.patUnive + 'zakelijk/zzp-inkomensverzekering/premieberekenen-en-afsluiten#/uw-premie';
  aansprakelijkheidsVerzekeringPat: string = this.patUnive + 'aansprakelijkheidsverzekering/premieberekenen-en-afsluiten';

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




}
