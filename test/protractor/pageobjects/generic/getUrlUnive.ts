import {GenericElements} from './genericElements';

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  async getUrlUnive(url: string): Promise<string> {
      if (url === 'homePat') {
        return genericElements.patUnive;
      } else if (url === 'autoverzekeringPat') {
        return genericElements.autoVerzUrlPat;
      } else if (url === 'autoverzekeringTstProj') {
        return genericElements.autoVerzUrlTstProj;
      } else if (url === 'zzpFlexPat') {
        return genericElements.zzpFlexPat;
      } else if (url === 'aansprakelijkheidsVerzekeringPat') {
        return genericElements.aansprakelijkheidsVerzekeringPat;
      } else if (url === 'autoverzekeringProductPagePat') {
        return genericElements.autoVerzProductPagePat;
      } else if (url === 'woonVerzekeringPat') {
        return genericElements.woonVerzPat;
      } else if (url === 'woonVerzekeringPatPp') {
        return genericElements.woonVerzPatProductPage;
      }
    }
}
