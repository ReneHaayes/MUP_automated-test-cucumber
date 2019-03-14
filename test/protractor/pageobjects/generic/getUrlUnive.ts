import {GenericElements} from './genericElements';
import {verzekeringPaginasEnum} from "../enum/genericEnum";
import {browser} from "protractor";
import {homePageEnum} from "../enum/woonVerzekeringEnum";

let genericElements: GenericElements = new GenericElements();

export class GetUrlUnive {

  getUrlUnive(input: string): string {
    switch (input) {
      case verzekeringPaginasEnum.HOME: {
        return this.getEnv();
      }
      case verzekeringPaginasEnum.ALLE_VERZEKERINGEN: {
        return this.getEnv() + genericElements.alleVerzekeringen;
      }
      case verzekeringPaginasEnum.ALLE_VERZEKERINGEN_ZAKELIJK: {
        return this.getEnv() + genericElements.alleVerzekeringenZakelijk;
      }
      case verzekeringPaginasEnum.HOME_BUS: {
        return this.getEnv() + genericElements.businessHomePage;
      }
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        return this.getEnv() + genericElements.autoVerzUrlPat;
      }
      case verzekeringPaginasEnum.ZZPFLEX_PAT: {
        return this.getEnv() + genericElements.zzpFlexPat;
      }
      case verzekeringPaginasEnum.AANSPRAKELIJKHEIDSVERZEKERING_PAT: {
        return this.getEnv() + genericElements.aansprakelijkheidsVerzekeringPat;
      }
      case verzekeringPaginasEnum.AUTOVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv() + genericElements.autoVerzProductPagePat;
      }
      case verzekeringPaginasEnum.WOONVERZEKERING_PAT: {
        return this.getEnv() + genericElements.woonVerzPat;
      }
      case verzekeringPaginasEnum.WOONVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv() + genericElements.woonVerzPatProductPage;
      }
      case verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT: {
        return this.getEnv() + genericElements.bromfietsVerzekeringPat;
      }
      case verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT: {
        return this.getEnv() + genericElements.scooterVerzekeringPat;
      }
      case verzekeringPaginasEnum.MOTORVERZEKERING_PAT: {
        return this.getEnv() + genericElements.motorVerzekeringPat;
      }
      case verzekeringPaginasEnum.QUADVERZEKERING_PAT: {
        return this.getEnv() + genericElements.quadVerzekeringPat;
      }
      case verzekeringPaginasEnum.TRIKEVERZEKERING_PAT: {
        return this.getEnv() + genericElements.trikeVerzekeringPat;
      }
      case verzekeringPaginasEnum.ZORGELOOSONLINEVERZEKERING_PAT: {
        return this.getEnv() + genericElements.zorgeloosOnlineVerzekeringPat;
      }
      case verzekeringPaginasEnum.BEDRIJFSAUTOVERZEKERING: {
        return this.getEnv() + genericElements.bedrijfsAutoVerzekering;
      }
      case verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING: {
        return this.getEnv() + genericElements.kortlopendeReisVerzekering;
      }
      case verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING: {
        return this.getEnv() + genericElements.doorlopendeReisVerzekering;
      }
      case verzekeringPaginasEnum.ROERENDEZAKENVERZEKERING_ZAKELIJK: {
        return this.getEnv() + genericElements.roerendeZakenVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.PERSONENAUTOVERZEKERING_ZAKELIJK: {
        return this.getEnv() + genericElements.personenAutoVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.KORTLOPENDEANNULERINGSVERZEKERING: {
        return this.getEnv() + genericElements.kortlopendeAnnuleringsVerzekering;
      }
      case verzekeringPaginasEnum.ZORGELOOSONLINE_ZAKELIJK: {
        return this.getEnv() + genericElements.zorgeloosOnlineVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.BOOTVERZEKERING: {
        return this.getEnv() + genericElements.bootVerzekering;
      }
      case verzekeringPaginasEnum.CAMPERVERZEKERING: {
        return this.getEnv() + genericElements.camperVerzekering;
      }
      case verzekeringPaginasEnum.CARAVANVERZEKERING: {
        return this.getEnv() + genericElements.caravanVerzekering;
      }
      case verzekeringPaginasEnum.CARAVANVERZEKERING_PP: {
        return this.getEnv() + genericElements.caravanVerzekeringPp;
      }
      case verzekeringPaginasEnum.DOORLOPENDE_ANNULERINGSVERZEKERING: {
        return this.getEnv() + genericElements.doorlopendeAnnuleringsVerzekering;
      }
      case verzekeringPaginasEnum.FIETSVERZEKERING: {
        return this.getEnv() + genericElements.fietsVerzekering;
      }
      case verzekeringPaginasEnum.KOSTBAARHEDEN_VERZEKERING: {
        return this.getEnv() + genericElements.kostbaarhedenVerzekering;
      }
      case verzekeringPaginasEnum.OLDTIMERVERZEKERING: {
        return this.getEnv() + genericElements.oldtimerVerzekering;
      }
      case verzekeringPaginasEnum.ONGEVALLENVERZEKERING: {
        return this.getEnv() + genericElements.ongevallenVerzekering;
      }
      case verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv() + genericElements.rechtsBijstandVerzekering;
      }
      case verzekeringPaginasEnum.SCOOTMOBIELVERZEKERING: {
        return this.getEnv() + genericElements.scootMobielVerzekering;
      }
      case verzekeringPaginasEnum.EIGENVERVOERVERZEKERING: {
        return this.getEnv() + genericElements.eigenVervoerVerzekering;
      }
      case verzekeringPaginasEnum.ZAKELIJK_RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkRechtsBijstandVerzekering;
      }
      case verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkAansprakelijkheidsVerzekering;
      }
      case verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING: {
        return this.getEnv() + genericElements.zakelijkTractorVerzekering;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERING: {
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
      case verzekeringPaginasEnum.AMP: {
        return this.getEnv() + genericElements.ampAutoverzekering;
      }
      case verzekeringPaginasEnum.COLLECTIEVE_ZORGVERZEKERING: {
        return this.getEnv() + genericElements.collectieveZorgVerzekering;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getEnv(): string {
    switch (browser.params.env.environment) {
      case verzekeringPaginasEnum.HOME_PAT: {
        return 'https://pat.unive.nl/'
      }
      case verzekeringPaginasEnum.HOME_TSTPROJ: {
        return 'https://tstproj.unive.nl/'
      }
      default: {
        throw new Error('The input: "" ' + browser.params.env.environment + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
