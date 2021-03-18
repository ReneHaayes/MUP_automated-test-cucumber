import {SituatieGewijzigdMethods} from '../pageobjects/Klantenservice/SituatieGewijzigdMethods';
import {HmPageMijnUniveMethods} from '../pageobjects/generic/hmPageMijnUniveMethods';
import {LoginPageMethods} from '../pageobjects/mijnUniveParticulier/loginPage/loginPageMethods';
import {PersoonlijkeGegevensMethods} from '../pageobjects/mijnUniveParticulier/mijnGegevens/PersoonlijkeGegevensMethods';
import {MailhogMethods} from '../pageobjects/mijnUniveParticulier/mail/MailhogMethods';
import {MijnSchadeEnClaimMethods} from '../pageobjects/mijnUniveParticulier/MijnSchadeEnClaim/MijnSchadeEnClaimMethods';
import {AlleVerzekeringenMethods} from '../pageobjects/particuliereVerzekeringen/alleVerzekeringen/alleVerzekeringenMethods';
import {OngevallenVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/gezondheidsVerzekeringen/ongevallenVerzekeringMethods';
import {HmPageMethods} from '../pageobjects/generic/hmPageMethods';
import {ZorgeloosOnlineVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/onlineVeiligheidVerzekeringen/zorgeloosOnlineVerzekeringMethod';
import {AansprakelijkheidsVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/rechtVerzekeringen/aansprakelijkheidsVerzekeringMethods';
import {RechtsBijstandVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/rechtVerzekeringen/rechtsBijstandVerzekeringMethods';
import {AutoVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringMethods';
import {AutoVerzekeringMethodsStepThreeAndFour} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/autoVerzekeringMethodsStepThreeAndFour';
import {MopedMethods} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/mopedMethods';
import {LicensePlateMethod} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/licensePlateMethod';
import {MotorcycleMethods} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/motorcycleMethods';
import {OldtimerVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/transportVerzekeringen/oldtimerVerzekeringMethods';
import {BootVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/bootVerzekeringMethods';
import {MobileHomeVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/mobileHomeVerzekeringMethods';
import {ReisVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/reisVerzekeringMethods';
import {AlleVerzekeringenZakelijkMethods} from '../pageobjects/zakelijkeVerzekeringen/alleVerzekeringen/alleVerzekeringenZakelijkMethods';
import {AovZzpMethods} from '../pageobjects/zakelijkeVerzekeringen/bedrijfsActiviteitenVerzekeringen/aovZzpMethods';
import {EigenVervoerVerzekeringMethods} from '../pageobjects/zakelijkeVerzekeringen/mobiliteitsVerzekeringen/eigenVervoerVerzekeringMethods';
import {RoerendeZakenVerzekeringMethods} from '../pageobjects/zakelijkeVerzekeringen/bedrijfsMiddelenVerzekeringen/roerendeZakenVerzekeringMethods';
import {BedrijfsAutoVerzekeringMethods} from '../pageobjects/zakelijkeVerzekeringen/mobiliteitsVerzekeringen/bedrijfsAutoVerzekeringMethods';
import {ZakelijkTractorVerzekeringMethods} from '../pageobjects/zakelijkeVerzekeringen/mobiliteitsVerzekeringen/zakelijkTractorVerzekeringMethods';
import {ApiMethods} from '../pageobjects/api/apiMethods';
import {WoonVerzekeringMethods} from '../pageobjects/particuliereVerzekeringen/huisVerzekeringen/woonVerzekeringMethods';
import {OndernemersScanMethods} from '../pageobjects/zakelijkeVerzekeringen/ondernemersScan/ondernemersScanMethods';
import {ZorgCheckToolMethods} from '../pageobjects/zorg/zorgCheckToolMethods';
import {ZorgWizardMethods} from '../pageobjects/zorg/zorgWizardMethods';
import {VisualMethods} from '../pageobjects/visual/visualMethods';
import {WidgetsParticulierMethods} from '../pageobjects/particuliereVerzekeringen/widgets/widgetsParticulierMethods';
import {WidgetsZakelijkMethods} from '../pageobjects/zakelijkeVerzekeringen/widgets/widgetsZakelijkMethods';
import {ZzpGoedBeterBestMethods} from '../pageobjects/zakelijkeVerzekeringen/bedrijfsActiviteitenVerzekeringen/zzpGoedBeterBestMethods';
import {ZakelijkAansprakelijkheidsVerzekeringMethods} from '../pageobjects/zakelijkeVerzekeringen/bedrijfsActiviteitenVerzekeringen/zakelijkAansprakelijkheidsVerzekeringMethods';


export const situatieGewijzigdMethods: SituatieGewijzigdMethods = new SituatieGewijzigdMethods();
export const hmPageMijnUniveMethods: HmPageMijnUniveMethods = new HmPageMijnUniveMethods();
export const loginPageMethods: LoginPageMethods = new LoginPageMethods();
export const persoonlijkeGegevensMethods: PersoonlijkeGegevensMethods = new PersoonlijkeGegevensMethods();
export const mailhogMethods: MailhogMethods = new MailhogMethods();
export const mijnSchadeEnClaimMethods: MijnSchadeEnClaimMethods = new MijnSchadeEnClaimMethods();
export const alleVerzekeringenMethods: AlleVerzekeringenMethods = new AlleVerzekeringenMethods();
export const ongevallenVerzekeringMethods: OngevallenVerzekeringMethods = new OngevallenVerzekeringMethods();
export const hmPageMethods: HmPageMethods = new HmPageMethods();
export const zorgeloosOnlineVerzekeringMethod: ZorgeloosOnlineVerzekeringMethods = new ZorgeloosOnlineVerzekeringMethods();
export const aansprakelijkheidsVerzekeringMethods: AansprakelijkheidsVerzekeringMethods = new AansprakelijkheidsVerzekeringMethods();
export const rechtsBijstandVerzekeringMethods: RechtsBijstandVerzekeringMethods = new RechtsBijstandVerzekeringMethods();
export const autoVerzekeringMethods: AutoVerzekeringMethods = new AutoVerzekeringMethods();
export const autoVerzekeringMethodsStepThreeAndFour: AutoVerzekeringMethodsStepThreeAndFour = new AutoVerzekeringMethodsStepThreeAndFour();
export const mopedMethods: MopedMethods = new MopedMethods();
export const licensePlateMethod: LicensePlateMethod = new LicensePlateMethod();
export const motorcycleMethods: MotorcycleMethods = new MotorcycleMethods();
export const oldtimerVerzekeringMethods: OldtimerVerzekeringMethods = new OldtimerVerzekeringMethods();
export const bootVerzekeringMethods: BootVerzekeringMethods = new BootVerzekeringMethods();
export const mobileHomeVerzekeringMethods: MobileHomeVerzekeringMethods = new MobileHomeVerzekeringMethods();
export const reisVerzekeringMethods: ReisVerzekeringMethods = new ReisVerzekeringMethods();
export const alleVerzekeringenZakelijkMethods: AlleVerzekeringenZakelijkMethods = new AlleVerzekeringenZakelijkMethods();
export const aovZzpMethods: AovZzpMethods = new AovZzpMethods();
export const eigenVervoerVerzekeringMethods: EigenVervoerVerzekeringMethods = new EigenVervoerVerzekeringMethods();
export const roerendeZakenVerzekeringMethods: RoerendeZakenVerzekeringMethods = new RoerendeZakenVerzekeringMethods();
export const bedrijfsAutoVerzekeringMethods: BedrijfsAutoVerzekeringMethods = new BedrijfsAutoVerzekeringMethods();
export const zakelijkTractorVerzekeringMethods: ZakelijkTractorVerzekeringMethods = new ZakelijkTractorVerzekeringMethods();
export const apiMethods: ApiMethods = new ApiMethods();
export const woonVerzekeringMethods: WoonVerzekeringMethods = new WoonVerzekeringMethods();
export const ondernemersScanMethods: OndernemersScanMethods = new OndernemersScanMethods();
export const zorgCheckToolMethods: ZorgCheckToolMethods = new ZorgCheckToolMethods();
export const zorgWizardMethods: ZorgWizardMethods = new ZorgWizardMethods();
export const visualMethods: VisualMethods = new VisualMethods();
export const widgetsParticulierMethods: WidgetsParticulierMethods = new WidgetsParticulierMethods();
export const widgetZakelijkMethods: WidgetsZakelijkMethods = new WidgetsZakelijkMethods();
export const zzpGoedBeterBestMethods: ZzpGoedBeterBestMethods = new ZzpGoedBeterBestMethods();
export const zakelijkAansprakelijkheidsVerzekeringMethods: ZakelijkAansprakelijkheidsVerzekeringMethods = new ZakelijkAansprakelijkheidsVerzekeringMethods();
