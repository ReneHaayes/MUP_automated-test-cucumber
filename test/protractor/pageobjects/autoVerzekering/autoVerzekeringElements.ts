export class AutoVerzekeringElements {

  //LICENSEPLATE ELEMENT
  licensePlateElement: string = '#_Form_IF2506_3611';

  //OVERVIEW OF LICENSEPLATE INFORMATION
  validationElement: string = '.fieldValidationAfterInputField';
  brandElementXpath: string = '//*[@class="entry auto_db"]/descendant::*';
  brandElement: string = '[data-label-id="LA_IF2509_3613"]';
  typeElement: string = '[data-label-id="LA_IF2509_3614"]';
  constructionYearElement: string = '[data-label-id="LA_IF2509_3615"] [class*="textValue"]';
  modelElement: string = '[data-label-id="LA_IF2509_3616"]';
  bodyTypeElement: string = '[data-label-id="LA_IF2509_3617"]';
  fuelTypeElement: string = '[data-label-id="LA_IF2509_3618"]';

  //ALREADYINSURED CAR
  alreadyInsuredCarTrue: string = '[data-label-id*="IF28205_35610"] .radioList > label:nth-child(1)';
  alreadyInsuredCarFalse: string = '[data-label-id*="IF28205_35610"] .radioList > label:nth-child(2)';

  //DAMAGE FREE YEARS
  damageFreeYearsElement: string = '#_Form_IF2510_3620';

  //HOW MUCH DO YOU DRIVE IN A YEAR
  driveInYearElement: string = '#_Form_IF8306_12411';
  driveInYearTot12000km: string = 'string:tot12000';
  driveInYear12000tot20000: string = 'string:12000tot20000';
  driveInYear20000tot25000: string = 'string:20000tot25000';
  driveInYear25000tot35000: string = 'string:25000tot35000';
  driveInYearMeerDan25000: string = 'string:meerDan35000';

  //BASISDEKKING
  waElement: string = '[data-label-id="LA_IF28207_3624"]';
  waPlusElement: string = '[data-label-id="LA_IF28208_35626"]';
  allRiskElement: string = '[data-label-id="LA_IF28209_35625"]';


  //AANVULLENDE OPTIES
  inzittendenVerzekering: string = 'div:nth-child(4) .kolomAanwezigheid.column label';
  pechHulpNl: string = '[ng-class*="IF2518_3648"]';
  pechHulpAbroad: string = '[q-information-block*="_Form_HT_IF2520_3652_1"]';
  pechHulpAbroadAndNl: string = '[q-information-block*="_Form_HT_IF2520_3652_2"]';
  rechtsHulpVerkeer: string = '[ng-class*="IF2516_3646"]';
  eigenKeuzeSchadeHerstelBedrijf: string = '[ng-class*="IF28216_35644"]';

  //AUTOACCESSOIRES
  autoAccElement: string = '#_Form_IF28217_3855';
  autoAccTm1000: string = 'string:tm1000';
  autoAccTm5000: string = 'string:tm5000';
  autoAccTm10000: string = 'string:tm10000';

  //OWN RISK
  ownRiskElement: string = '#_Form_IF28218_36108';
  ownRiskElementBromfiets: string = '#_Form_IF29509_37521';
  ownRiskGeenEigenRisico: string = 'string:geenEigenRisico';
  ownRisk100: string = 'string:100';
  ownRisk250: string = 'string:250';
  ownRisk500: string = 'string:500';

  //TOTAL VALUES
  totalAmountPerMonth: string = '[data-label-id="LA_IF2521_3667"]';
  totalPremieSelectionElement: string = '#_Form_IF2521_3665';
  totalPremieSelectionMonth: string = 'string:maand';
  totalPremieSelectionAnnual: string = 'string:jaar';

  //CHECK ELEMENTS SIDEBAR BASISGEGEVENS
  sideBarGeenEigenRisico: string = 'Geen eigen risico';
  sideBarOwnRisk100: string = 'Met € 100,- eigen risico';
  sideBarOwnRisk250: string = 'Met € 250,- eigen risico';
  sideBarOwnRisk500: string = 'Met € 500,- eigen risico';
  sideBarHerstelBedrijf: string = 'Eigen keuze herstelbedrijf';
  sideBarInzittendenVerzekering: string = 'Inzittendenverzekering';
  sideBarPechHulp: string = 'Pechhulp';
  sideBarWa: string = 'WA';
  sideBarWaPlus: string = 'WA+';
  sideBarAllRisk: string = 'All Risk';
  sideBarRechtsHulpVerkeer: string = 'Rechtshulp Verkeer';
  sideBarCarAcc1000: string = 'Accessoires t/m € 1.000,- meeverzekerd';
  sideBarCarAcc5000: string = 'Accessoires t/m € 5.000,- meeverzekerd';
  sideBarCarAcc10000: string = 'Accessoires t/m € 10.000,- meeverzekerd';
  sideBarTotalPremieAnnual: string = 'Totaalpremie per jaar';
  sideBarTotalPremieMonthly: string = 'Totaalpremie per maand';

  //PERSONENEN AUTO VERZEKERING ZAKELIJK ELEMENTS
  sameDriverYesClickElement: string = '[data-label-id*="LA_IF31207_39218"] .radioList > label:nth-child(1)';
  sameDriverNoClickElement: string = '[data-label-id*="LA_IF31207_39218"] .radioList > label:nth-child(2)';
  sameDriverZipCodeCompanyElement: string = '#_Form_IF31207_39214';


}
