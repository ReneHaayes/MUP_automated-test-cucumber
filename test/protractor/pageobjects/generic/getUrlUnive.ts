import {GenericElements} from './genericElements';
import {environmentUrl} from "../enum/genericEnum";
import {browser} from "protractor";
import {homePageEnum} from "../enum/woonVerzekeringEnum";

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  getUrlUnive(input: string): string {
    switch (input) {
      case environmentUrl.HOME: {
        return this.getEnv();
      }
      case environmentUrl.HOME_BUS: {
        return this.getEnv() + genericElements.businessHomePage;
      }
      case environmentUrl.AUTOVERZEKERING_PAT: {
        return this.getEnv() + genericElements.autoVerzUrlPat;
      }
      case environmentUrl.ZZPFLEX_PAT: {
        return this.getEnv() + genericElements.zzpFlexPat;
      }
      case environmentUrl.AANSPRAKELIJKHEIDSVERZEKERING_PAT: {
        return this.getEnv() + genericElements.aansprakelijkheidsVerzekeringPat;
      }
      case environmentUrl.AUTOVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv() + genericElements.autoVerzProductPagePat;
      }
      case environmentUrl.WOONVERZEKERING_PAT: {
        return this.getEnv() + genericElements.woonVerzPat;
      }
      case environmentUrl.WOONVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv() + genericElements.woonVerzPatProductPage;
      }
      case environmentUrl.BROMFIETSVERZEKERING_PAT: {
        return this.getEnv() + genericElements.bromfietsVerzekeringPat;
      }
      case environmentUrl.SCOOTERVERZEKERING_PAT: {
        return this.getEnv() + genericElements.scooterVerzekeringPat;
      }
      case environmentUrl.MOTORVERZEKERING_PAT: {
        return this.getEnv() + genericElements.motorVerzekeringPat;
      }
      case environmentUrl.QUADVERZEKERING_PAT: {
        return this.getEnv() + genericElements.quadVerzekeringPat;
      }
      case environmentUrl.TRIKEVERZEKERING_PAT: {
        return this.getEnv() + genericElements.trikeVerzekeringPat;
      }
      case environmentUrl.ZORGELOOSONLINEVERZEKERING_PAT: {
        return this.getEnv() + genericElements.zorgeloosOnlineVerzekeringPat;
      }
      case environmentUrl.BEDRIJFSAUTOVERZEKERING: {
        return this.getEnv() + genericElements.bedrijfsAutoVerzekering;
      }
      case environmentUrl.KORTLOPENDEREISVERZEKERING: {
        return this.getEnv() + genericElements.kortlopendeReisVerzekering;
      }
      case environmentUrl.DOORLOPENDEREISVERZEKERING: {
        return this.getEnv() + genericElements.doorlopendeReisVerzekering;
      }
      case environmentUrl.ROERENDEZAKENVERZEKERING_ZAKELIJK: {
        return this.getEnv() + genericElements.roerendeZakenVerzekeringZakelijk;
      }
      case environmentUrl.PERSONENAUTOVERZEKERING_ZAKELIJK: {
        return this.getEnv() + genericElements.personenAutoVerzekeringZakelijk;
      }
      case environmentUrl.KORTLOPENDEANNULERINGSVERZEKERING: {
        return this.getEnv() + genericElements.kortlopendeAnnuleringsVerzekering;
      }
      case environmentUrl.ZORGELOOSONLINE_ZAKELIJK: {
        return this.getEnv() + genericElements.zorgeloosOnlineVerzekeringZakelijk;
      }
      case environmentUrl.BOOTVERZEKERING: {
        return this.getEnv() + genericElements.bootVerzekering;
      }
      case environmentUrl.CAMPERVERZEKERING: {
        return this.getEnv() + genericElements.camperVerzekering;
      }
      case environmentUrl.CARAVANVERZEKERING: {
        return this.getEnv() + genericElements.caravanVerzekering;
      }
      case environmentUrl.CARAVANVERZEKERING_PP: {
        return this.getEnv() + genericElements.caravanVerzekeringPp;
      }
      case environmentUrl.DOORLOPENDE_ANNULERINGSVERZEKERING: {
        return this.getEnv() + genericElements.doorlopendeAnnuleringsVerzekering;
      }
      case environmentUrl.FIETSVERZEKERING: {
        return this.getEnv() + genericElements.fietsVerzekering;
      }
      case environmentUrl.KOSTBAARHEDEN_VERZEKERING: {
        return this.getEnv() + genericElements.kostbaarhedenVerzekering;
      }
      case environmentUrl.OLDTIMERVERZEKERING: {
        return this.getEnv() + genericElements.oldtimerVerzekering;
      }
      case environmentUrl.ONGEVALLENVERZEKERING: {
        return this.getEnv() + genericElements.ongevallenVerzekering;
      }
      case environmentUrl.RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv() + genericElements.rechtsBijstandVerzekering;
      }
      case environmentUrl.SCOOTMOBIELVERZEKERING: {
        return this.getEnv() + genericElements.scootMobielVerzekering;
      }
      case environmentUrl.EIGENVERVOERVERZEKERING: {
        return this.getEnv() + genericElements.eigenVervoerVerzekering;
      }
      case environmentUrl.ZAKELIJK_RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkRechtsBijstandVerzekering;
      }
      case environmentUrl.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkAansprakelijkheidsVerzekering;
      }
      case environmentUrl.ZAKELIJK_TRACTORVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkTractorVerzekering;
      }
      case environmentUrl.ZORGVERZEKERING: {
        return this.getEnv() + genericElements.zorgVerzekering;
      }
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        return genericElements.zorgNotaDeclareren;
      }
      case homePageEnum.UNIVE_ALARMCENTRALE: {
        return this.getEnv() + genericElements.univeAlarmCentrale;
      }
      case homePageEnum.VERZEKERING_WIJZIGEN: {
        return genericElements.mijnUnive;
      }
      case homePageEnum.MIJN_UNIVE: {
        return genericElements.mijnUnive;
      }
      case homePageEnum.ZOEKEN: {
        return this.getEnv() + homePageEnum.ZOEKEN;
      }
      case homePageEnum.OVER_ONS: {
        return genericElements.overUnive;
      }
      case homePageEnum.KLANTENSERVICE: {
        return this.getEnv() + homePageEnum.KLANTENSERVICE;
      }
      case homePageEnum.ZIPCODE_PLACE: {
        return this.getEnv() + genericElements.zipcodePlaceZoeken;
      }
      case homePageEnum.ZZP_ER: {
        return this.getEnv() + genericElements.zakelijkZzp;
      }
      case homePageEnum.AGRARIER: {
        return this.getEnv() + genericElements.zakelijkAgrarier;
      }
      case homePageEnum.GEBOUWEN: {
        return this.getEnv() + genericElements.zakelijkGebouwen;
      }
      case homePageEnum.AFSPRAAK_MAKEN: {
        return this.getEnv() + genericElements.afspraakMaken;
      }
      case homePageEnum.KLACHT_INDIENEN: {
        return this.getEnv() + genericElements.klachtIndienen;
      }
      case homePageEnum.MIJN_UNIVE_ZAKELIJK: {
        return genericElements.mijnUniveZakelijk;
      }
      case homePageEnum.MIJN_UNIVE_ZAKELIJK_HOMEPAGE: {
        return this.getEnv() + genericElements.mijnUniveZakelijkHomePage;
      }
      case homePageEnum.ONDERNEMERSCAN: {
        return this.getEnv() + genericElements.ondernemersScan;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getEnv(): string {
    switch (browser.params.env.environment) {
      case environmentUrl.HOME_PAT: {
        return 'https://pat.unive.nl/'
      }
      case environmentUrl.HOME_TSTPROJ: {
        return 'https://tstproj.unive.nl/'
      }
      default: {
        throw new Error('The input: "" ' + browser.params.env.environment + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
