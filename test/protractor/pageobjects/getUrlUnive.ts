import { GenericElements } from './generic/genericElements';

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  async getUrlUnive(url: string): Promise<string> {
    try {
      if (url === 'homePat') {
        {return genericElements.homePageUrlPat;}
      } else if (url === 'autoverzekeringPat') {
        {return genericElements.autoVerzUrlPat;}
      } else if (url === 'autoverzekeringTstProj') {
        {return genericElements.autoVerzUrlTstProj;}
      } else if (url === 'zzpFlexPat') {
        {return genericElements.zzpFlexPat;}
      }
    } catch (err) {
      err.message();
    }
  }
}
