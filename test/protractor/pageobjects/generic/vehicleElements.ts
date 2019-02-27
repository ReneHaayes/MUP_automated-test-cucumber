export class VehicleElements {

  //START DATE
  startDateElement: string = '#_Form_IF2512_3623';

  //STEP ONE
  licensePlateInputElement: string = '#_Form_IF9707_9934';
  licensePlateInfoBrandNameElement: string = '[data-label-id*="LA_IF9733_13978"] span';
  licensePlateInfoModelElement: string = '[data-label-id*="LA_IF9733_13980"] span';
  licensePlateInfoConstructionYearElement: string = '[data-label-id*="LA_IF9733_13974"] span';
  licensePlateInfoVersionElement: string = '[data-label-id*="LA_IF9733_13979"] span';

  //XPATH is necessarry to get the text out of this element.
  licensePlateBrandNameElementWithXpath: string = '//*[@class="entry bromfiets_db"]/descendant::*';

  vehicleKindSelectElement: string = '#_Form_IF9706_13915';
  vehicleKindBromfietsSelectElement: string = 'string:bromfiets';
  vehicleKindBromscooterSelectElement: string = 'string:bromscooter';
  vehicleKindHighSpeedEbikeSelectElement: string = 'string:highSpeedEbike';
  vehicleKindBakfietsSelectElement: string = 'string:bakfiets';
  vehicleKindTrikeSelectElement: string = 'string:trike';
  vehicleKindQuadSelectElement: string = 'string:quad';
  vehicleKindBromMobielSelectElement: string = 'string:brommobiel';
  vehicleKindOverigSelectElement: string = 'string:overig';
  vehicleKindSnorfietsElement: string = 'string:snorfiets';
  vehicleKindSnorscooterElement: string = 'string:snorscooter';
  vehicleKindFietsMetHulpmotorElement: string = 'string:fietsMetHulpmotor';

  zipCodeElement: string = '#_Form_IF29510_3622';
  birthDateElement: string = '#_Form_IF29510_37527';
  damageFreeYearsElement: string = '#_Form_IF29511_37526';

  //BASISDEKKING
  waElement: string = '[data-label-id="LA_IF29405_37408"]';
  waPlusElement: string = '[data-label-id="LA_IF29406_37418"]';
  allRiskElement: string = '[data-label-id="LA_IF29407_37421"]';

  //AANVULLENDE OPTIES
  pechHulpNlElement: string = '[ng-class*="IF9720_13937"]';
  rechtsHulpVerkeerElement: string = '[ng-class*="IF9718_13935"]';
  ongevallenVerzekeringElement: string = '[ng-class*="IF9719_13936"]';
  aanschafWaardeRegelingElement: string = '[ng-class*="IF29705_37610"]';

  //ACCESSOIRES
  accElement: string = '#_Form_IF29706_13949';
  accTm150: string = 'string:tm150';
  accTm250: string = 'string:tm250';
  accTm500: string = 'string:tm500';

  //SIDEBAR
  sideBarPechHulp: string = 'Pechhulp Binnenland';
  sideBarOngevallenVerzekering: string = 'Ongevallenverzekering';
  sideBarAanschafWaardeRegeling: string = 'Aanschafwaarderegeling';
  sideBarAcc150: string = 'Accessoires verzekerd t/m € 150,-';
  sideBarAcc250: string = 'Uitbreiding accessoires t/m € 250,-';
  sideBarAcc500: string = 'Uitbreiding accessoires t/m € 500,-';
  sideBarOwnRisk100: string = 'Met € 100,-  eigen risico';
  sideBarOwnRisk250: string = 'Met € 250,-  eigen risico';
  sideBarOwnRisk500: string = 'Met € 500,-  eigen risico';

  //OWN RISK
  ownRiskElement: string = '#_Form_IF29509_37521';

  //KIND OF INSURANCE
  newMopedElement: string = '[data-label-id*="LA_IF10373_14814"]';
  replacementMopedElement: string = '[data-label-id*="LA_IF10373_14815"]';
  extraMopedElement: string = '[data-label-id*="LA_IF10373_14816"]';

  //DATE ELEMENTS
  dateOfNameMopedElement: string = '#_Form_IF10374_13991';

  //MELDCODE
  meldCodeElement: string = '#_Form_IF10374_3682';

  //PURCHASE PRICE
  purchasePriceElement: string = '#_Form_IF10374_13999';

  //DAMAGE FREE YEARS DIFFERENT COMPANY
  damageFreeYearsDifferentCompanyYesElement: string = '[data-label-id*="LA_IF10374_14111"] label:nth-child(1)';
  damageFreeYearsDifferentCompanyNoElement: string = '[data-label-id*="LA_IF10374_14111"] label:nth-child(2)';

  //MAIN DRIVER
  mainDriverYesElement: string = '[data-label-id*="LA_IF9710_13927"] label:nth-child(1)';
  mainDriverNoElement: string = '[data-label-id*="LA_IF9710_13927"] label:nth-child(2)';

  //OWNER
  ownerYesElement: string = '[data-label-id*="LA_IF9739_14724"] label:nth-child(1)';
  ownerNoElement: string = '[data-label-id*="LA_IF9739_14724"] label:nth-child(2)';

  //SELECT VEHICLE DATA
  constructionYearSelectElement: string = '#_VehicleBrandModelType__2';
  constructionYearSelect2018Element: string = 'string:2018';
  brandNameSelectElement: string = '#_VehicleBrandModelType__4';
  brandNameSelectFerrariElement: string = 'string:35';
  brandNameSelectAceElement: string = 'string:350';
  brandModelSelectElement: string = '#_VehicleBrandModelType__5';
  brandModelSelect304WElement: string = 'string:746';
  brandModelSelectChampsElement: string = 'string:1403';
  brandTypeSelectElement: string = '#_VehicleBrandModelType__6';
  brandTypeSelectChamps330DDBasicElement: string = 'string:12778';
  confirmationButtonClickElement: string = '#_VehicleBrandModelType_confirm';


}
