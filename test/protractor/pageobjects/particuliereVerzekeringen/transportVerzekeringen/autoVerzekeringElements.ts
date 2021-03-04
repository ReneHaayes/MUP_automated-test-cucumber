export class AutoVerzekeringElements {

  // LICENSEPLATE ELEMENT
  licensePlateElement = '#_Form_IF2506_3611';

  // OVERVIEW OF LICENSEPLATE INFORMATION
  validationElement = '.fieldValidationAfterInputField';
  brandElementXpath = '//*[@class="entry auto_db"]/descendant::*';
  brandElement = '[data-label-id="LA_IF2509_3613"]';
  typeElement = '[data-label-id="LA_IF2509_3614"]';
  constructionYearElement = '[data-label-id="LA_IF2509_3615"] [class*="textValue"]';
  modelElement = '[data-label-id="LA_IF2509_3616"]';
  bodyTypeElement = '[data-label-id="LA_IF2509_3617"]';
  fuelTypeElement = '[data-label-id="LA_IF2509_3618"]';
  meldCodeErrorElement = 'div:nth-child(4) > div.values > div > span';


  // Who drives the car the most
  mySelf = '[ng-repeat="option in applicationFormQuestions.IF28608_36322._list"][class="ng-scope checked"]';
  myPartner = ''; // can be added later
  myChild = ''; // can be added later
  someOneElse = ''; // can be added later

  // ALREADYINSURED CAR
  alreadyInsuredCarTrue = '[data-label-id*="IF28205_35610"] .radioList > label:nth-child(1)';
  alreadyInsuredCarFalse = '[data-label-id*="IF28205_35610"] .radioList > label:nth-child(2)';

  // DAMAGE FREE YEARS
  damageFreeYearsElement = '#_Form_IF2510_3620';

  // HOW MUCH DO YOU DRIVE IN A YEAR
  driveInYearElement = '#_Form_IF8306_12411';
  driveInYearTot12000km = 'string:tot12000';
  driveInYear12000tot20000 = 'string:12000tot20000';
  driveInYear20000tot25000 = 'string:20000tot25000';
  driveInYear25000tot35000 = 'string:25000tot35000';
  driveInYearMeerDan25000 = 'string:meerDan35000';

  // BASISDEKKING
  waElement = '[data-label-id="LA_IF28207_3624"]';
  waPlusElement = '[data-label-id="LA_IF28208_35626"]';
  allRiskElement = '[data-label-id="LA_IF28209_35625"]';


  // AANVULLENDE OPTIES
  inzittendenVerzekering = 'div:nth-child(4) .kolomAanwezigheid.column label';
  pechHulpNl = '[ng-class*="IF2518_3648"]';
  pechHulpAbroad = '[q-information-block*="_Form_HT_IF2520_3652_1"]';
  pechHulpAbroadAndNl = '[q-information-block*="_Form_HT_IF2520_3652_2"]';
  rechtsHulpVerkeer = '[ng-class*="IF2516_3646"]';
  eigenKeuzeSchadeHerstelBedrijf = '[ng-class*="IF28216_35644"]';

  // AUTOACCESSOIRES
  autoAccElement = '#_Form_IF28217_3855';
  autoAccTm1000 = 'string:tm1000';
  autoAccTm5000 = 'string:tm5000';
  autoAccTm10000 = 'string:tm10000';

  // OWN RISK
  ownRiskElement = '#_Form_IF28218_36108';
  ownRiskElementBromfiets = '#_Form_IF29509_37521';
  ownRiskGeenEigenRisico = 'string:geenEigenRisico';
  ownRisk100 = 'string:100';
  ownRisk250 = 'string:250';
  ownRisk500 = 'string:500';

  // TOTAL VALUES
  totalAmountPerMonth = '[data-label-id="LA_IF2521_3667"]';
  totalPremieSelectionElement = '#_Form_IF2521_3665';
  totalPremieSelectionMonth = 'string:maand';
  totalPremieSelectionAnnual = 'string:jaar';

  // CHECK ELEMENTS SIDEBAR BASISGEGEVENS
  sideBarGeenEigenRisico = 'Geen eigen risico';
  sideBarOwnRisk100 = 'Met € 100,- eigen risico';
  sideBarOwnRisk250 = 'Met € 250,- eigen risico';
  sideBarOwnRisk500 = 'Met € 500,- eigen risico';
  sideBarHerstelBedrijf = 'Eigen keuze herstelbedrijf';
  sideBarInzittendenVerzekering = 'Inzittendenverzekering';
  sideBarPechHulp = 'Pechhulp';
  sideBarWa = 'WA';
  sideBarWaPlus = 'WA+';
  sideBarAllRisk = 'All Risk';
  sideBarRechtsHulpVerkeer = 'Rechtshulp Verkeer';
  sideBarCarAcc1000 = 'Accessoires t/m € 1.000,- meeverzekerd';
  sideBarCarAcc5000 = 'Accessoires t/m € 5.000,- meeverzekerd';
  sideBarCarAcc10000 = 'Accessoires t/m € 10.000,- meeverzekerd';
  sideBarTotalPremieAnnual = 'Totaalpremie per jaar';
  sideBarTotalPremieMonthly = 'Totaalpremie per maand';

  // PERSONENEN AUTO VERZEKERING ZAKELIJK ELEMENTS
  sameDriverYesClickElement = '[data-label-id*="LA_IF31207_39218"] .radioList > label:nth-child(1)';
  sameDriverNoClickElement = '[data-label-id*="LA_IF31207_39218"] .radioList > label:nth-child(2)';
  sameDriverZipCodeCompanyElement = '#_Form_IF31207_39214';

  // COLLECTIVE
  collectiveInputElement = '.collectiveSearch_query';
  collectiveAutoCompleteClickElement = '[class="autocomplete-items"] > div:nth-child(1)';
  collectiveResultTextElement = '#_Form_IF4105_6208';

}
