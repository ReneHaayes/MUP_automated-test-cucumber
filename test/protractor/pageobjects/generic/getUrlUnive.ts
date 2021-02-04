import {browser} from 'protractor';
import {breadCrumbEnum,
  homePageEnum,
  polisDetailsUrlEnum,
  verzekeringPaginasEnum} from '@enum';
import {apiElements,
  genericElements} from '@support';
import {faqPage} from '../enum/genericEnum';

export class GetUrlUnive {

  getUrlUnive(input: string): string {
    switch (input) {
      case verzekeringPaginasEnum.HOME: {
        return this.getEnv(browser.params.env.environment);
      }
      case verzekeringPaginasEnum.ALLE_VERZEKERINGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.alleVerzekeringen;
      }
      case verzekeringPaginasEnum.ALLE_VERZEKERINGEN_ZAKELIJK: {
        return this.getEnv(browser.params.env.environment) + genericElements.alleVerzekeringenZakelijk;
      }
      case verzekeringPaginasEnum.HOME_BUS: {
        return this.getEnv(browser.params.env.environment) + genericElements.businessHomePage;
      }
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.autoVerzUrlPat;
      }
      case verzekeringPaginasEnum.AOVZZP_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.aovZzpPat;
      }
      case verzekeringPaginasEnum.AANSPRAKELIJKHEIDSVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.aansprakelijkheidsVerzekeringPat;
      }
      case verzekeringPaginasEnum.AUTOVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.autoVerzProductPagePat;
      }
      case verzekeringPaginasEnum.WOONVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.woonVerzPat;
      }
      case verzekeringPaginasEnum.WOONVERZEKERING_PRODUCT_PAGE_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.woonVerzPatProductPage;
      }
      case verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.bromfietsVerzekeringPat;
      }
      case verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.scooterVerzekeringPat;
      }
      case verzekeringPaginasEnum.MOTORFIETSVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.motorVerzekeringPat;
      }
      case verzekeringPaginasEnum.QUADVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.quadVerzekeringPat;
      }
      case verzekeringPaginasEnum.TRIKEVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.trikeVerzekeringPat;
      }
      case verzekeringPaginasEnum.ZORGELOOS_ONLINEVERZEKERING_PAT: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgeloosOnlineVerzekeringPat;
      }
      case verzekeringPaginasEnum.BEDRIJFSAUTOVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.bedrijfsAutoVerzekering;
      }
      case verzekeringPaginasEnum.KORTLOPENDE_REISVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.kortlopendeReisVerzekering;
      }
      case verzekeringPaginasEnum.DOORLOPENDE_REISVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.doorlopendeReisVerzekering;
      }
      case verzekeringPaginasEnum.DOORLOPENDE_REISVERZEKERING_PRODUCTPAGE: {
        return this.getEnv(browser.params.env.environment) + genericElements.doorlopendeReisVerzekeringPp;
      }
      case verzekeringPaginasEnum.ROERENDEZAKENVERZEKERING_ZAKELIJK: {
        return this.getEnv(browser.params.env.environment) + genericElements.roerendeZakenVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.PERSONENAUTOVERZEKERING_ZAKELIJK: {
        return this.getEnv(browser.params.env.environment) + genericElements.personenAutoVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.KORTLOPENDE_ANNULERINGSVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.kortlopendeAnnuleringsVerzekering;
      }
      case verzekeringPaginasEnum.ZORGELOOSONLINE_ZAKELIJK: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgeloosOnlineVerzekeringZakelijk;
      }
      case verzekeringPaginasEnum.BOOTVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.bootVerzekering;
      }
      case verzekeringPaginasEnum.CAMPERVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.camperVerzekering;
      }
      case verzekeringPaginasEnum.CARAVANVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.caravanVerzekering;
      }
      case verzekeringPaginasEnum.CARAVANVERZEKERING_PP: {
        return this.getEnv(browser.params.env.environment) + genericElements.caravanVerzekeringPp;
      }
      case verzekeringPaginasEnum.DOORLOPENDE_ANNULERINGSVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.doorlopendeAnnuleringsVerzekering;
      }
      case verzekeringPaginasEnum.FIETSVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.fietsVerzekering;
      }
      case verzekeringPaginasEnum.FIETSVERZEKERING_PP: {
        return this.getEnv(browser.params.env.environment) + genericElements.fietsVerzekeringPp;
      }
      case verzekeringPaginasEnum.KOSTBAARHEDEN_VERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.kostbaarhedenVerzekering;
      }
      case verzekeringPaginasEnum.OLDTIMERVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.oldtimerVerzekering;
      }
      case verzekeringPaginasEnum.ONGEVALLENVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.ongevallenVerzekering;
      }
      case verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.rechtsBijstandVerzekering;
      }
      case verzekeringPaginasEnum.SCOOTMOBIELVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.scootMobielVerzekering;
      }
      case verzekeringPaginasEnum.EIGENVERVOERVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.eigenVervoerVerzekering;
      }
      case verzekeringPaginasEnum.CALAMITEITEN: {
        return this.getEnv(browser.params.env.environment) + verzekeringPaginasEnum.CALAMITEITEN;
      }
      case verzekeringPaginasEnum.ZAKELIJK_RECHTSBIJSTANDVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkRechtsBijstandVerzekering;
      }
      case verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkAansprakelijkheidsVerzekering;
      }
      case verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING_PP: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkAansprakelijkheidsVerzekeringPp;
      }
      case verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkTractorVerzekering;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekering;
      }
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        return genericElements.zorgNotaDeclareren;
      }
      case homePageEnum.UNIVE_ALARMCENTRALE: {
        return this.getEnv(browser.params.env.environment) + genericElements.univeAlarmCentrale;
      }
      case homePageEnum.VERZEKERING_WIJZIGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.wijzigingenDoorgeven;
      }
      case homePageEnum.MIJN_UNIVE: {
        return genericElements.mijnUnive;
      }
      case homePageEnum.ZOEKEN: {
        return this.getEnv(browser.params.env.environment) + homePageEnum.ZOEKEN;
      }
      case homePageEnum.OVER_ONS: {
        return genericElements.overUnive;
      }
      case homePageEnum.KLANTENSERVICE: {
        return this.getEnv(browser.params.env.environment) + homePageEnum.KLANTENSERVICE;
      }
      case homePageEnum.KLACHTENFORMULIER: {
        return this.getEnv(browser.params.env.environment) + genericElements.klachtenFormulier;
      }
      case homePageEnum.VRAAGSTELLEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.vraagStellen;
      }
      case homePageEnum.SCHADE: {
        return this.getEnv(browser.params.env.environment) + genericElements.schade;
      }
      case homePageEnum.SCHADE_SERVICE: {
        return this.getEnv(browser.params.env.environment) + genericElements.schadeService;
      }
      case homePageEnum.WINKELZOEKER: {
        return this.getEnv(browser.params.env.environment) + genericElements.winkelzoeker;
      }
      case homePageEnum.WINKELDETAILS: {
        return this.getEnv(browser.params.env.environment) + genericElements.winkelDetails;
      }
      case homePageEnum.ZIPCODE_PLACE: {
        return this.getEnv(browser.params.env.environment) + genericElements.zipcodePlaceZoeken;
      }
      case homePageEnum.ZZP_ER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkZzp;
      }
      case homePageEnum.CMS: {
        return this.getEnv(browser.params.env.environment) + genericElements.cms;
      }
      case homePageEnum.AGRARIER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkAgrarier;
      }
      case homePageEnum.GEBOUWEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.zakelijkGebouwen;
      }
      case homePageEnum.AFSPRAAK_MAKEN_ZAKELIJK: {
        return this.getEnv(browser.params.env.environment) + genericElements.afspraakMakenZakelijk;
      }
      case homePageEnum.AFSPRAAK_MAKEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.afspraakMaken;
      }
      case homePageEnum.KLACHT_INDIENEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.klachtIndienen;
      }
      case homePageEnum.SCHADE_BESLISBOOM: {
        return this.getEnv(browser.params.env.environment) + genericElements.schadeBeslisboom;
      }
      case homePageEnum.MIJN_UNIVE_ZAKELIJK: {
        return genericElements.mijnUniveZakelijk;
      }
      case homePageEnum.MIJN_UNIVE_ZAKELIJK_HOMEPAGE: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveZakelijkHomePage;
      }
      case homePageEnum.ONDERNEMERSSCAN: {
        return this.getEnv(browser.params.env.environment) + genericElements.ondernemersScan;
      }
      case verzekeringPaginasEnum.COLLECTIEVE_ZORGVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.collectieveZorgVerzekering;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_PARTICULIER: {
        return this.getEnv(browser.params.env.environment) + genericElements.loginMijnUniveParticulierURL;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_MIJN_GEGEVENS: {
        return this.getEnv((browser.params.env.environment) + genericElements.mijnUniveMijnGegevens);
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_BETAALGEGEVENS_WIJZIGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveBetaalgegevensWijzigen;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_CONTACTVOORKEUREN_DOORGEVEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveContactVoorkeurenDoorgeven;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_VERHUISGEGEVENS_DOORGEVEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveVerhuisGegevensDoorgeven;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_GEZINSSITUATIE_WIJZIGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveGezinssituatieWijzigen;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_MIJN_VERZEKERINGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveMijnVerzekeringen;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_MIJN_SCHADE_EN_CLAIM: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveMijnSchadeEnClaim;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_PREMIEGEVOLGEN_BEREKENEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUnivePremiegevolgenBerekenen;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_VERZEKERING_BIJSLUITEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveVerzekeringBijsluiten;
      }
      case verzekeringPaginasEnum.MIJN_UNIVE_MIJN_POSTVAK: {
        return this.getEnv(browser.params.env.environment) + genericElements.mijnUniveMijnPostvak;
      }
      case breadCrumbEnum.PENSIOEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.pensioen;
      }
      case polisDetailsUrlEnum.POLISDETAILS_DERDEN_1600478601: {
        return this.getEnv(browser.params.env.environment) + genericElements.polisDetailsNumber1600478601Url;
      }
      case verzekeringPaginasEnum.MAILHOG: {
        return genericElements.mailhogPatURL;
      }
      case verzekeringPaginasEnum.OAUTH: {
        return apiElements.oauthtestUrl;
      }
      case verzekeringPaginasEnum.BEKIJK_DE_VEEL_GESTELDE_VRAGEN: {
        return this.getEnv(browser.params.env.environment) + genericElements.veelgesteldevragenURL;
      }
      case verzekeringPaginasEnum.ZORGCHECKTOOL: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgchecktool;
      }
      case verzekeringPaginasEnum.ZORGCHECKTOOLBKPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgchecktoolBekendeKlantParameter;
      }
      case verzekeringPaginasEnum.ZORGCHECKTOOLTHUISZORGCOLLECTIEFPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgchecktoolThuiszorgCollectiefParameter;
      }
      case verzekeringPaginasEnum.ZORGCHECKTOOLNIETTHUISZORGCOLLECTIEFPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgchecktoolNietThuiszorgCollectiefParameter;
      }
      case verzekeringPaginasEnum.EIGENRISICO: {
        return this.getEnv(browser.params.env.environment) + genericElements.eigenRisico;
      }
      case verzekeringPaginasEnum.ZORGVRIJ: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVrij;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGTHUISZORGCOLLECTIEFPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringThuiszorgCollectiefParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGNIETTHUISZORGCOLLECTIEFPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringNietThuiszorgCollectiefParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGTHUISZORGCOLLECTIEFZORGSELECTPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringThuiszorgCollectiefZorgSelectParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGNIETTHUISZORGCOLLECTIEFZORGSELECTPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringNietThuiszorgCollectiefZorgSelectParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGBASISSELECTPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringBasisSelectParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGBASISGEREGELDPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringBasisGeregeldParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGBASISVRIJPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringBasisVrijParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGCROSSSELLINWIZARDPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringCrossSellInWizardParameter;
      }
      case verzekeringPaginasEnum.ZORGVERZEKERINGCROSSELLBEDANKPAGINAPARAMETER: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgVerzekeringCrossSellBedankpaginaParameter;
      }
      case verzekeringPaginasEnum.PREFILL_OMRING_PASHOUDERS: {
        return this.getEnv(browser.params.env.environment) + genericElements.prefillOmringPashoudersUrl;
      }
      case faqPage.WAT_IS_EEN_WA_AUTOVERZEKERING: {
        return this.getEnv(browser.params.env.environment) + genericElements.faqPageWatIsEenWaAutoVerzekering;
      }
      case verzekeringPaginasEnum.ZORGPREMIEALERT: {
        return this.getEnv(browser.params.env.environment) + genericElements.zorgPremieAlert;
      }
      case verzekeringPaginasEnum.SALESWIDGETS: {
        return this.getEnv(browser.params.env.environment) + genericElements.salesWidgets;
      }
      case verzekeringPaginasEnum.ZZP_PAKKET: {
        return this.getEnv(browser.params.env.environment) + genericElements.zzpPakket;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getEnv(input: string): string {
    switch (input) {
      case verzekeringPaginasEnum.HOME_PAT: {
        return 'https://pat.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_OPA: {
        return 'https://opa.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_TSTPROJ: {
        return 'https://tstproj.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_PI: {
        return 'https://pi.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_TST: {
        return 'https://tst.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_ZAKELIJK: {
        return 'https://zakelijktest.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_SALES: {
        return 'https://sales.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_SERVICE: {
        return 'https://service.unive.nl/';
      }
      case verzekeringPaginasEnum.GEZONDHEID: {
        return 'https://gezondheid.unive.nl/';
      }
      case verzekeringPaginasEnum.HOME_ATE: {
        return 'https://qis-ate.unive.nl/';
      }
      default: {
        throw new Error('The input: "" ' + browser.params.env.environment + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
