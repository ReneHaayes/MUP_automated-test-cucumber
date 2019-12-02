export enum anaEnum {
  FIRST = 'first', SECOND = 'second', THIRTH = 'thirth', FOURTH = 'fourth', FIFTH = 'fifth', SIXTH = 'sixth'

}

export class AnalyticsGenericElements {

  //GENERIC
  advEventHistoryPageview(input: string): string {
    switch (input) {
      case anaEnum.FIRST: {
        return 'window.adv_event.history[0][1].'
      }
      case anaEnum.SECOND: {
        return 'window.adv_event.history[8][1].'
      }
      case anaEnum.THIRTH: {
        return 'window.adv_event.history[13][1].'
      }
      case anaEnum.FOURTH: {
        return 'window.adv_event.history[18][1].'
      }
      case anaEnum.FIFTH: {
        return 'window.adv_event.history[23][1].'
      }
      case anaEnum.SIXTH: {
        return 'window.adv_event.history[28][1].'
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  //PAGEVIEW
  pageviewPaginaNaam(input: string): string {
    return this.advEventHistoryPageview(input) + 'paginanaam';
  }

  //QIS_PAGEVIEW
  qisPageviewPaginaId(input: string): string {
    return this.advEventHistoryPageview(input) + 'pagina_id';
  }

  qisPageviewTransactieId(input: string): string {
    return this.advEventHistoryPageview(input) + 'verzekeringen[0].contract.transactie_id';
  }

}
