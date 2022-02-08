export enum statusEnum {
  ACTIVE = 'active',
  ENDED = 'ended'
}

export enum gender {
  MALE = 'male',
  FEMALE = 'female'
}

export enum dateEnum {
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  SEVEN_DAY_TRIP = 'seven days'
}

export enum prefix {
  NO_PREFIX = ''
}

export enum houseNumberAddition {
  NO_HOUSENUMBER_ADDITION = ''
}

export enum phoneNumber {
  NO_PHONENUMBER = ''
}

export enum specificIdentification {
  PASSPORT = 'passport',
  ID_CARD = 'Id card',
  DRIVER_LICENSE = 'Driver license',
  SOMETHING_ELSE = 'Something else',
  NO_NUMBER = ''
}

export enum personaName {
  ILLING = 'illing',
  BOEKWIJT = 'boekwijt',
  WOESTENBURG = 'woestenburg',
  RONALDO = 'ronaldo',
  MESSI = 'messi',
  SALAH = 'salah',
  NEYMAR = 'neymar',
  POGBA = 'pogba',
  TESTVROUWCUSTOMERRECOGNITION = 'testvrouwCustomerRecognition',
  TESTMANACTIVEPOLICY = 'testmanActivePolicy',
  TESTKINDCUSTOMERRECOGNITION = 'testkindCustomerRecognition',
  TESTKINDONDER18EEN = 'testkindOnder18Een',
  TESTKINDBOVEN18EEN = 'testkindBoven18Een',
  TESTPARTNER = 'testPartner',
  AAKOEK = 'aakoek',
  AKO = 'ako',
  AVONK = 'avonk',
  ERICHTERS = 'erichters',
  KNOPPERS = 'knoppers',
  DARTHVADER = 'darthvader',
  SKYWALKER = 'skywalker',
  UniPAT_Corp_9 = 'UniPAT_Corp_9'
}

export enum companyNameEnum {
  FACEBOOK = 'facebook',
  RG_TIMMERWERKEN = 'rg timmerwerken',
  GRONDVERZET_MACHINE_VERHUUR_SPRINGER = 'Grondverzet_machine_verhuur_Springer',
  PEEJ = 'peej'
}

export enum genericEnum {
  YES = 'yes',
  NO = 'no',
  EMPTY = '',
  DONT_KNOW = 'dont know',
  WILL = 'will',
  WONT = 'wont',
  UNKNOWN = 'unknown',
  TEMP = 'temp',
  TOTAL = 'total',
  NEW = 'new',
  SECONDHAND = 'secondhand',
  REPLACEMENT = 'replacement',
  EXTRA = 'EXTRA',
  GEEN = 'Geen',
  GOED = 'goed',
  BETER = 'beter',
  BEST = 'best'
}

export enum verzekeringPaginasEnum {
  // Op een later moment nog eens op Alfabetische volgorde zetten

  // Home pages
  HOME = 'Home',
  HOME_BUS = 'business',
  HOME_PAT = 'pat',
  HOME_OPA = 'opa',
  HOME_TSTPROJ = 'tstProj',
  HOME_PI = 'pi',
  HOME_TST = 'tst',
  HOME_ZAKELIJK = 'zakelijktest',
  HOME_SALES = 'sales',
  HOME_SERVICE = 'service',
  HOME_ATE = 'ate',
  HOME_SALES_OT_DAAS = 'salesDaas',
  HOME_SERVICE_OT_DAAS = 'serviceDaas',
  HOME_DRIVE_OT_DAAS = 'driveDaas',
  HOME_HIPPO_SAAS_ACC = 'hippoAccSaaS',
  HOME_ACC = 'acc',

  // Algemene pagina's
  KLANTENSERVICE = 'Klantenservice',
  WIJZIGINGEN_DOORGEVEN = 'Wijzigingen doorgeven',
  ALLE_VERZEKERINGEN = 'alle verzekeringen',
  ALLE_VERZEKERINGEN_ZAKELIJK = 'alle verzekeringen zakelijk',
  PREFILL_OMRING_PASHOUDERS = 'prefill omring pashouders',
  SALESWIDGETS = 'salesWidgets',
  CALAMITEITEN = 'calamiteiten',
  MAILHOG = 'mailhog',
  OAUTH = 'oauth',
  BEKIJK_DE_VEEL_GESTELDE_VRAGEN = 'bekijk de veelgestelde vragen',
  VERZEKERINGEN = 'verzekeringen',

  // Particuliere pagina's
  AUTOVERZEKERING_PAT = 'Autoverzekering',
  ANNULERINGSVERZEKERING = 'Annuleringsverzekering',
  AANSPRAKELIJKHEIDSVERZEKERING_PAT = 'aansprakelijkheidsverzekering',
  AUTOVERZEKERING_PRODUCT_PAGE_PAT = 'autoverzekeringProductPage',
  WOONVERZEKERING_PAT = 'Woonverzekering',
  PARTICULIERE_WOONVERZEKERING = 'Particuliere Woonverzekering',
  WOONVERZEKERING_PRODUCT_PAGE_PAT = 'woonVerzekeringPp',
  BROMFIETSVERZEKERING_PAT = 'Bromfietsverzekering',
  SCOOTERVERZEKERING_PAT = 'Scooterverzekering',
  MOTORFIETSVERZEKERING_PAT = 'Motorverzekering',
  QUADVERZEKERING_PAT = 'Quadverzekering',
  TRIKEVERZEKERING_PAT = 'Trikeverzekering',
  REISVERZEKERING = 'Reisverzekering',
  DOORLOPENDE_REISVERZEKERING_PP = 'doorlopende-reisverzekering',
  DOORLOPENDE_REISVERZEKERING_PRODUCTPAGE = 'doorlopendereisverzekeringpp',
  DOORLOPENDE_REISVERZEKERING = 'Doorlopende reisverzekering',
  KORTLOPENDE_REISVERZEKERING = 'Kortlopende reisverzekering',
  KORTLOPENDE_REISVERZEKERING_PP = 'kortlopende-reisverzekering',
  KORTLOPENDE_ANNULERINGSVERZEKERING = 'kortlopende annuleringsverzekering',
  BOOTVERZEKERING = 'Bootverzekering',
  CAMPERVERZEKERING = 'Camperverzekering',
  CARAVANVERZEKERING = 'Caravanverzekering',
  CARAVANVERZEKERING_PP = 'caravanverzekering product page',
  DOORLOPENDE_ANNULERINGSVERZEKERING = 'doorlopende annuleringsverzekering',
  FIETSVERZEKERING = 'Fietsverzekering',
  FIETSVERZEKERING_PP = 'fietsverzekering pp',
  ELEKTRISCHE_FIETSVERZEKERING = 'Elektrische fietsverzekering',
  ELEKTRISCHE_FIETSVERZEKERING_PP = 'elektrische-fietsverzekering',
  KOSTBAARHEDEN_VERZEKERING = 'Kostbaarhedenverzekering',
  OLDTIMERVERZEKERING = 'Oldtimerverzekering',
  ONGEVALLENVERZEKERING = 'Ongevallenverzekering',
  RECHTSBIJSTANDVERZEKERING = 'Rechtsbijstandverzekering',
  RECHTSBIJSTANDVERZEKERING_PP = 'rechtsbijstandverzekering',
  SCOOTMOBIELVERZEKERING = 'Scootmobielverzekering',
  HIGH_SPEED_E_BIKE_VERZEKERING = 'High speed e-bikeverzekering',
  INBOEDELVERZEKERING = 'Inboedelverzekering',
  OPSTALVERZEKERING = 'Opstalverzekering',
  HYPOTHEEK = 'Hypotheek',
  PENSIOEN = 'pensioen',
  UITVAARTVERZEKERING = 'uitvaartverzekering',
  OVERLIJDENSRISICOVERZEKERING = 'overlijdensrisicoverzekering',
  MIJNGEMAK = 'MijnGemak',

  // Zakelijke pagina's
  AOVZZP_PAT = 'aovZzp',
  ZAKELIJK_MOTORFIETSVERZEKERING = 'Zakelijke motorverzekering',
  BEDRIJFSAUTOVERZEKERING = 'Bedrijfsautoverzekering',
  BEDRIJFSSCHADEVERZEKERING = 'Bedrijfsschadeverzekering',
  BEROEPSAANSPRAKELIJKHEID = 'Beroepsaansprakelijkheid',
  BESTUURDERSAANSPRAKELIJKHEID = 'Bestuurdersaansprakelijkheid',
  PERSONENAUTOVERZEKERING_ZAKELIJK = 'personen autoverzekering zakelijk',
  ROERENDEZAKENVERZEKERING_ZAKELIJK = 'roerende zakenverzekering zakelijk',
  EIGENVERVOERVERZEKERING = 'Eigen vervoerverzekering',
  EIGENVERVOERVERZEKERING_PP = 'Eigen vervoerverzekering PP',
  ZAKELIJK_RECHTSBIJSTANDVERZEKERING = 'Zakelijke rechtsbijstandverzekering',
  ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING = 'Bedrijfsaansprakelijkheidsverzekering',
  ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING_PP = 'BedrijfsaansprakelijkheidsverzekeringPp',
  ZAKELIJK_TRACTORVERZEKERING = 'Tractorverzekering',
  CONSTRUCTIE_ALLRISK_VERZEKERING = 'Constructie All Riskverzekering',
  GEBOUWENVERZEKERING = 'Gebouwenverzekering',
  HANDELAARSKENTEKENVERZEKERING = 'Handelaarskentekenverzekering',
  MILIEUSCHADEVERZEKERING = 'Milieuschadeverzekering',
  VRACHTAUTOVERZEKERING = 'Vrachtwagenverzekering',
  WERKMATERIAALVERZEKERING = 'Werkmaterieelverzekering',
  AANHANGWAGENVERZEKERING = 'Aanhangwagenverzekering',
  ZAKELIJKE_BROMFIETSVERZEKERING = 'Zakelijke bromfietsverzekering',
  BESTELAUTOVERZEKERING = 'Bestelautoverzekering',
  ARBEIDSONGESCHIKTHEIDSVERZEKERING_ZZP = 'Arbeidsongeschiktheidsverzekering voor Zzp\'ers',
  ARBEIDSONGESCHIKTHEIDSVERZEKERING = 'Arbeidsongeschiktheidsverzekering',
  PENSIOEN_VOOR_ONDERNEMERS = 'Pensioen voor ondernemers',
  WERKNEMERSSCHADEVERZEKERING = 'Werknemersschadeverzekering',
  WERKNEMERSPENSIOEN = 'Werknemerspensioen',
  ARBEIDSONGESCHIKTHEIDSVERZEKERING_AOV = 'Arbeidsongeschiktheidsverzekering (AOV)',
  UW_PENSIOEN = 'Uw Pensioen',
  ROERENDE_ZAKEN_VERZEKERING = 'Roerende zakenverzekering',
  WERKNEMERS_SCHADE_VERZEKERING_WSV = 'Werknemersschadeverzekering (WSV)',
  PENSIOEN_VOOR_UW_PERSONEEL = 'Pensioen voor uw personeel',
  ONDERNEMERSSCAN_TITLE = 'Ondernemers-scan van Univé',

  // Zorg pagina's
  ZORGVERZEKERING = 'Zorgverzekering',
  COLLECTIEVE_ZORGVERZEKERING = 'Collectieve Zorgverzekering',
  ZORGCHECKTOOL = 'zorgCheckTool',
  GEZONDHEID = 'gezondheid',
  ZORGCHECKTOOLBKPARAMETER = 'zorgCheckToolBekendeKlantParameter',
  ZORGCHECKTOOLTHUISZORGCOLLECTIEFPARAMETER = 'zorgCheckToolThuiszorgCollectiefParameter',
  ZORGCHECKTOOLNIETTHUISZORGCOLLECTIEFPARAMETER = 'zorgCheckToolNietThuiszorgCollectiefParameter',
  EIGENRISICO = 'eigenRisico',
  ZORGVRIJ = 'zorgVrij',
  ZORGVERZEKERINGTHUISZORGCOLLECTIEFPARAMETER = 'zorgVerzekeringThuiszorgCollectiefParameter',
  ZORGVERZEKERINGNIETTHUISZORGCOLLECTIEFPARAMETER = 'zorgVerzekeringNietThuiszorgCollectiefParameter',
  ZORGVERZEKERINGTHUISZORGCOLLECTIEFZORGSELECTPARAMETER = 'zorgVerzekeringThuiszorgCollectiefZorgSelectParameter',
  ZORGVERZEKERINGNIETTHUISZORGCOLLECTIEFZORGSELECTPARAMETER = 'zorgVerzekeringNietThuiszorgCollectiefZorgSelectParameter',
  ZORGVERZEKERINGBASISSELECTPARAMETER = 'zorgVerzekeringBasisSelectParameter',
  ZORGVERZEKERINGBASISGEREGELDPARAMETER = 'zorgVerzekeringBasisGeregeldParameter',
  ZORGVERZEKERINGBASISVRIJPARAMETER = 'zorgVerzekeringBasisVrijParameter',
  ZORGVERZEKERINGCROSSSELLINWIZARDPARAMETER = 'zorgVerzekeringCrossSellInWizardParameter',
  ZORGVERZEKERINGCROSSELLBEDANKPAGINAPARAMETER = 'zorgVerzekeringCrossSellBedankpaginaParameter',
  ZORGPREMIEALERT = 'zorgPremieAlert',

  // Pakketten
  ZZP_PAKKET = 'zzp pakket',
  WOONPAKKET = 'Woonpakket',

  // Mijn Unive Particulier
  ZORGELOOS_ONLINEVERZEKERING_PAT = 'zorgeloosOnlineVerzekering',           // is dit een mijn unive product (?)
  MIJN_UNIVE_PARTICULIER = 'mijn unive particulier',
  MIJN_UNIVE_BETAALGEGEVENS_WIJZIGEN = 'mijn unive betaalgegevens wijzigen',
  MIJN_UNIVE_CONTACTVOORKEUREN_DOORGEVEN = 'mijn unive contactvoorkeuren doorgeven',
  MIJN_UNIVE_VERHUISGEGEVENS_DOORGEVEN = 'mijn unive verhuisgegevens doorgeven',
  MIJN_UNIVE_MIJN_GEGEVENS = 'mijn unive mijn gegevens',
  MIJN_UNIVE_GEZINSSITUATIE_WIJZIGEN = 'mijn unive gezinssituatie wijzigen',
  MIJN_UNIVE_MIJN_VERZEKERINGEN = 'mijn unive mijn verzekeringen',
  MIJN_UNIVE_MIJN_SCHADE_EN_CLAIM = 'mijn unive mijn schade en claim',
  MIJN_UNIVE_VERZEKERING_BIJSLUITEN = 'mijn unive verzekering bijsluiten',
  MIJN_UNIVE_PREMIEGEVOLGEN_BEREKENEN = 'mijn unive premiegevolgen berekenen',
  MIJN_UNIVE_MIJN_POSTVAK = 'mijn unive mijn postvak',

  // Mijn Unive Zakelijk
  ZORGELOOSONLINE_ZAKELIJK = 'zorgeloosonline zakelijk',
  MIJN_UNIVE_ZAKELIJK = 'mijn unive zakelijk'
}

export enum faqPage {
  WAT_IS_EEN_WA_AUTOVERZEKERING = 'wat is een wa autoverzekering'
}

export enum polisDetailsUrlEnum {
  POLISDETAILS_DERDEN_1600478601 = 'polisdetails 1600478601'
}

export enum durationEntrepreneur {
  _MIN1 = 'Minder dan 1 jaar',
  _1 = '1 jaar',
  _2 = '2 jaar',
  _3 = '3 jaar',
  _4 = '4 jaar',
  _5 = '5 jaar',
  _6 = '6 jaar',
  _7 = '7 jaar',
  _8 = '8 jaar',
  _9 = '9 jaar',
  _10 = '10 jaar'
}

export enum numbersEnum {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
  _9 = '9',
  _10 = '10',
  FIRST = 'first',
  SECOND = 'second',
  THIRTH = 'thirth'
}

export enum multipleChoiceEnum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export enum activityEnum {
  ADVIESBUREAU = 'adviesbureau',
  ADVIESBUREAU_ICT = 'adviesbureau ict',
  BEDRIJFSOPLEIDING = 'bedrijfsopleiding en training',
  BEMIDDELING = 'bemiddeling',
  FOTOGRAAF = 'fotograaf',
  GLAZENWASSER = 'glazenwasser',
  HOVENIER = 'hovenier',
  KAPPER = 'kapper',
  KLUSSENBEDRIJF = 'klussenbedrijf',
  ORGANISATIE_ADVIESBUREAU = 'organisatie adviesbureau',
  PEDICURE = 'pedicure',
  RECLAMEBUREAU = 'reclame bureau',
  SCHILDER = 'schilder',
  SCHOONHEIDSSPECIALIST = 'schoonheidsspecialist',
  SCHOONMAKER = 'schoonmaker',
  SOFTWAREBEDRIJF = 'softwarebedrijf',
  STRATENMAKER = 'stratenmaker',
  STUKADOOR = 'stukadoor',
  TIMMERMAN = 'timmerman',
  TEGELZETTER = 'tegelzetter',
  WEBDESIGN = 'webdesign',
  OVERIG = 'overig'
}

export enum fuelTypEnum {
  BENZINE = 'Benzine',
  DIESEL = 'diesel',
  ELEKTRISCH = 'elektrish',
  LPG = 'lpg'
}

export enum breadCrumbEnum {
  COLLECTIEF = 'Collectief',
  AANSPRAKELIJKHEIDSVERZEKERING = 'Aansprakelijkheidsverzekering',
  PENSIOEN = 'Pensioen',
  UITVAARTVERZEKERING = 'Uitvaartverzekering',
  OVERLIJDENSRISICOVERZEKERING = 'Overlijdensrisicoverzekering',
  MIJN_GEMAK = 'Mijn gemak',
  ZAKELIJK = 'Zakelijk',
  AANSPRAKELIJKHEIDSVERZEKERINGBEDRIJVEN = 'Aansprakelijkheidsverzekering bedrijven',
  BEROEPSAANSPRAKELIJKHEIDSVERZEKERING = 'Beroepsaansprakelijkheidsverzekering',
  BESTUURDERSAANSPRAKELIJKHEIDSVERZEKERING = 'Bestuurdersaansprakelijkheidsverzekering',
  CONSTRUCTIE_ALLRISK_VERZEKERING = 'Constructie all-riskverzekering',
  PERSONENAUTOVERZEKERING = 'Personenautoverzekering',
  GEBOUWENVERZEKERING = 'Gebouwenverzekering',
  ALARMCENTRALE = 'Alarmcentrale'
}

export enum selectorEnum {
  XPATH, CSS, CSS_SR
}
