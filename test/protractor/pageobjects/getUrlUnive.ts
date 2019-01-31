import {GenericElements} from './generic/genericElements';

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  async getUrlUnive(url: string): Promise<string> {
    try {
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
      }
    } catch (err) {
      err.message();
    }
  }
}
