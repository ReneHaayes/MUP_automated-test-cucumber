import {GenericElements} from './genericElements';
import {environmentUrl} from "../enum/genericEnum";

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  async getUrlUnive(input: string): Promise<string> {
    switch (input) {
      case environmentUrl.HOME_PAT: {
        return genericElements.patUnive;
      }
      case environmentUrl.AUTOVERZEKERING_PAT: {
        return genericElements.autoVerzUrlPat;
      }
      case environmentUrl.AUTOVERZEKERING_TSTPROJ: {
        return genericElements.autoVerzUrlTstProj;
     }
      case environmentUrl.ZZPFLEX_PAT: {
        return genericElements.zzpFlexPat;
      }
      case environmentUrl.AANSPRAKELIJKHEIDSVERZEKERING_PAT: {
        return genericElements.aansprakelijkheidsVerzekeringPat;
      }
      case environmentUrl.AUTOVERZEKERING_PRODUCT_PAGE_PAT: {
        return genericElements.autoVerzProductPagePat;
      }
      case environmentUrl.WOONVERZEKERING_PAT: {
        return genericElements.woonVerzPat;
      }
      case environmentUrl.WOONVERZEKERING_PRODUCT_PAGE_PAT: {
        return genericElements.woonVerzPatProductPage;
      }
      case environmentUrl.BROMFIETSVERZEKERING_PAT: {
        return genericElements.bromfietsVerzekeringPat;
      }
      case environmentUrl.SCOOTERVERZEKERING_PAT: {
        return genericElements.scooterVerzekeringPat;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
