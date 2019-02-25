import {GenericElements} from './genericElements';
import {environmentUrl} from "../enum/genericEnum";
import {browser} from "protractor";

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
