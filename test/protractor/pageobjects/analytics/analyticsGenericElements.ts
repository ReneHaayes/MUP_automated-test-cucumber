export enum anaEnumLocation {
  FIRST = '0', SECOND = '1', THIRTH = '2', FOURTH = '3', FIFTH = '4', SIXTH = '5'
}

export enum anaEnumObjectName {
  QIS_PAGEVIEW = 'qis pageview', PAGEVIEW = 'pageview'
}

export enum anaEnumSearchObject {
  PAGINA_NAAM = 'pagina_naam',
  PAGINA_ID = 'pagina_id',
  TRANSACTIE_ID = 'verzekeringen[0].contract.transactie_id'
}

export class AnalyticsGenericElements {

  //GENERIC
  advEventHistory(location: string, objectName: string, searchObject: string): string {
    return 'window.adv_event.history.filter(historyItem => {return historyItem[0] == "' + objectName + '"})[' + location + '][1].' + searchObject;
  }

}
