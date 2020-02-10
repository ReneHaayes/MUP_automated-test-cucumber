export enum anaEnumLocation {
  FIRST = '0', SECOND = '1', THIRTH = '2', FOURTH = '3', FIFTH = '4', SIXTH = '5'
}

export enum anaEnumObjectName {
  QIS_PAGEVIEW = 'qis pageview', PAGEVIEW = 'pageview', KNOP_INTERACTIE = 'knop_interactie'
}

export enum anaEnumSearchObject {
  PAGINA_NAAM = 'pagina_naam',
  PAGINA_ID = 'pagina_id',
  KLANT_ONEGINI_ID = 'klant_onegini_id',
  TRANSACTIE_ID = 'verzekeringen[0].contract.transactie_id',
  SECOND_DEKKING = 'verzekeringen[0].objecten[0].dekkingen[1].dekking',
  REGIONALE_UNIVE = 'verzekerde.regionale_unive',
  KNOP_INTERACTIE_TYPE = 'knop_interactie.type',
  KNOP_INTERACTIE_NAAM = 'knop_interactie.naam'
}

export class AnalyticsGenericElements {

  //GENERIC
  advEventHistory(location: string, objectName: string, searchObject: string): string {
    return 'window.adv_event.history.filter(historyItem => {return historyItem[0] == "' + objectName + '"})[' + location + '][1].' + searchObject;
  }

  anaSchadeServiceFirstPaginaNaam = 'Home:Schadeservice:Stap 10';
  anaSchadeServiceSecondPaginaNaam = 'Home:Schadeservice:Stap laatste';
  anaSchadeServiceKnopInteractieType = 'car windowbodywork';

  anaWinkelZoekerFirstPaginaNaam = 'Home:Contact:Zoek winkel:Stap 10';
  anaWinkelZoekerSecondPaginaNaam = 'Home:Contact:Zoek winkel:Stap laatste';
  anaWinkelZoekerKnopInteractieType = 'winkel';
  anaWinkelZoekerKnopInteractieNaam = 'Univé Zwolle'

}
