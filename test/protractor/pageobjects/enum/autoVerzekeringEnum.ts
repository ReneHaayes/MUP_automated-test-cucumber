export enum yearlyMileageEnum {

  TOT_12000 = 'tot12000',
  TUSSEN_12000_EN_20000 = '12000tot20000',
  TUSSEN_20000_EN_25000 = '20000tot25000',
  TUSSEN_25000_EN_35000 = '25000tot35000',
  MORE_THAN_35000 = 'meerDan35000',

  // camper
  TOT_10000 = 'tot10000',
  TUSSEN_10000_EN_20000 = '10000tot20000',
  MORE_THAN_20000 = 'meerDan20000',
}

export enum vehicleAccEnum {
  ACC_TM_150 = 'acc tm 150',
  ACC_TM_250 = 'acc tm 250',
  ACC_TM_500 = 'acc tm 500',
  ACC_TM_1500 = 'acc tm 1500',
  ACC_TM_2500 = 'acc tm 2500',
  CARACC_TM_1000 = 'autoAccTm1000',
  CARACC_TM_5000 = 'autoAccTm5000',
  CARACC_TM_10000 = 'autoAccTm10000',
}

export enum ownRiskEnum {
  NO_OWN_RISK = 'geenEigenRisico',
  OWN_RISK_100 = 'ownRisk100',
  OWN_RISK_250 = 'ownRisk250',
  OWN_RISK_500 = 'ownRisk500',
}

export enum basisDekkingEnum {
  WA = 'wa',
  WA_PLUS = 'waPlus',
  ALL_RISK = 'allRisk'
}

export enum aanvullendeOptiesEnum {
  INZITTENDENVERZEKERING = 'Inzittendenverzekering',
  PECH_HULP_NL = 'pechHulpNl',
  PECH_HULP_ABROAD_AND_NL = 'pechHulpAbroadAndNl',
  PECH_HULP_ABROAD = 'pechHulpAbroad',
  RECHTSHULP_VERKEER = 'rechtsHulpVerkeer',
  OWN_CHOICE_DAMAGE_COMPANY = 'eigenKeuzeSchadeHerstelBedrijf',
  ONGEVALLEN_VERZEKERING = 'Ongevallenverzekering',
  AANSCHAFWAARDE_REGELING = 'aanschafwaarde regeling'
}

export enum totalPremieEnum {
  MONTHLY = 'monthly',
  ANNUAL = 'annual'
}

export enum legalEnum {
  EENMANSZAAK = 'Eenmanszaak',
  VOF = 'Vennootschap onder Firma (VOF)',
  CV = 'Commanditaire Vennootschap (CV)',
  MAATSCHAP = 'Maatschap',
  BV = 'Besloten Vennootschap',
  NV = 'Naamloze vennootschap',
  VMVR = 'Vereniging met volledige rechtsbevoegdheid',
  VZVR = 'Vereniging met Beperkte Rechtsbevoegdheid',
  COW = 'Coöperatie/ Onderlinge Waarborgmaatschappij',
  STICHTING = 'Stichting',
  GEEN_RECHTSVORM = 'Geen rechtsvorm',
  BUITENLANDS_RECHTSVORM = 'Buitenlandse Rechtsvorm',
  KERKGENOOTSCHAP = 'Kerkgenootschap',
  VVE = 'Vereniging van Eigenaren',
  PR = 'Publiekrechtelijk rechtspersoon'
}

export enum vehicleInfoEnum {
  PASSENGER_CAR = 'passenger car',
  DELIVERY_VAN = 'delivery van',
  LORRY = 'lorry',
  TRAILER = 'trailer'
}

export enum vehicleUsage {
  RECREATIONAL_USEAGE = 'recreational',
  DAILY_RECREATIONAL_USEAGE = 'daily recreational',
  BUSINESS_USEAGE = 'business',
  RENTAL_USAGE = 'rental',
}

export enum maxSpeedEnum {
  TOT_30 = 'tot 30',
  BETWEEN_31_AND_40 = '31-40',
  BETWEEN_41_AND_50 = '41-50',
  BETWEEN_51_AND_60 = '51-60',
  OVER_60 = 'over 60'

}

export enum whoDrivesCarMost {
  MYSELF = 'mySelf',
  MYPARTNER = 'myPartner',
  MYCHILD = 'myChild',
  SOMEONEELSE = 'someOneElse'

}
