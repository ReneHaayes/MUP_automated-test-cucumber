export class VehicleElements {

  // START DATE
  startDateElement = '#_Form_IF2512_3623';

  // XPATH is necessarry to get the text out of this element.
  licensePlateBrandNameElementWithXpath = '//*[@class="entry bromfiets_db"]/descendant::*';

  zipCodeElement = '#_Form_IF29510_3622';
  birthDateElement = '#_Form_IF29510_37527';
  damageFreeYearsElement = '#_Form_IF29511_37526';

  // BASISDEKKING
  waElement = '[data-label-id="LA_IF29405_37408"]';
  waPlusElement = '[data-label-id="LA_IF29406_37418"]';
  allRiskElement = '[data-label-id="LA_IF29407_37421"]';

  // AANVULLENDE OPTIES
  pechHulpNlElement = '[ng-class*="IF9720_13937"]';
  rechtsHulpVerkeerElement = '[ng-class*="IF9718_13935"]';
  ongevallenVerzekeringElement = '[ng-class*="IF9719_13936"]';
  aanschafWaardeRegelingElement = '[ng-class*="IF29705_37610"]';

  // ACCESSOIRES
  accElement = '#_Form_IF29706_13949';
  accTm150 = 'string:tm150';
  accTm250 = 'string:tm250';
  accTm500 = 'string:tm500';

  // SIDEBAR
  sideBarPechHulp = 'Pechhulp Binnenland';
  sideBarOngevallenVerzekering = 'Ongevallenverzekering';
  sideBarAanschafWaardeRegeling = 'Aanschafwaarderegeling';
  sideBarAcc150 = 'Accessoires verzekerd t/m € 150,-';
  sideBarAcc250 = 'Uitbreiding accessoires t/m € 250,-';
  sideBarAcc500 = 'Uitbreiding accessoires t/m € 500,-';
  sideBarOwnRisk100 = 'Met € 100,-  eigen risico';
  sideBarOwnRisk250 = 'Met € 250,-  eigen risico';
  sideBarOwnRisk500 = 'Met € 500,-  eigen risico';

  // OWN RISK
  ownRiskElement = '#_Form_IF29509_37521';

  // KIND OF INSURANCE
  newMopedElement = '[data-label-id*="LA_IF10373_14814"]';
  replacementMopedElement = '[data-label-id*="LA_IF10373_14815"]';
  extraMopedElement = '[data-label-id*="LA_IF10373_14816"]';

  // DATE ELEMENTS
  dateOfNameMopedElement = '#_Form_IF10374_13991';

  // MELDCODE
  meldCodeElement = '#_Form_IF10374_3682';

  // PURCHASE PRICE
  purchasePriceElement = '#_Form_IF10374_13999';

  // DAMAGE FREE YEARS DIFFERENT COMPANY
  damageFreeYearsDifferentCompanyYesElement = '[data-label-id*="LA_IF10374_14111"] label:nth-child(1)';
  damageFreeYearsDifferentCompanyNoElement = '[data-label-id*="LA_IF10374_14111"] label:nth-child(2)';

  // MAIN DRIVER
  mainDriverYesElement = '[data-label-id*="LA_IF9710_13927"] label:nth-child(1)';
  mainDriverNoElement = '[data-label-id*="LA_IF9710_13927"] label:nth-child(2)';

  // OWNER
  ownerYesElement = '[data-label-id*="LA_IF9739_14724"] label:nth-child(1)';
  ownerNoElement = '[data-label-id*="LA_IF9739_14724"] label:nth-child(2)';

  // SELECT VEHICLE DATA
  constructionYearSelectElement = '#_VehicleBrandModelType__2';
  constructionYearSelect2018Element = 'string:2018';
  brandNameSelectElement = '#_VehicleBrandModelType__4';
  brandNameSelectFerrariElement = 'string:46';
  brandNameSelectCaravanElement = 'string:100007';
  brandModelSelectCaravanElement = 'string:828';
  brandModelSelectElement = '#_VehicleBrandModelType__5';
  brandModelSelect304WElement = 'string:528';
  brandTypeSelectElement = '#_VehicleBrandModelType__6';
  brandTypeSelectCaravanElement = 'string:38634';
  confirmationButtonClickElement = '#_VehicleBrandModelType_confirm';





}
