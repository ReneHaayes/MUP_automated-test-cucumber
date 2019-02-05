export class BromfietsVerzekeringElements {

  //STEP ONE
  licensePlateInputElement: string = '#_Form_IF9707_9934';
  licensePlateInfoBrandNameElement: string = '[data-label-id*="LA_IF9733_13978"] span';
  licensePlateInfoModelElement: string = '[data-label-id*="LA_IF9733_13980"] span';
  licensePlateInfoConstructionYearElement: string = '[data-label-id*="LA_IF9733_13974"] span';
  licensePlateInfoVersionElement: string = '[data-label-id*="LA_IF9733_13979"] span';

  //XPATH is necessarry to get the text out of this element.
  licensePlateBrandNameElementWithXpath: string = '//*[@id="_Form_FormSection"]/ul/li[1]/div[2]/fieldset[1]/div/div[4]/div[2]/div[1]/span';

  vehicleKindSelectElement: string = '#_Form_IF9706_13915';
  vehicleKindBromfietsSelectElement: string = 'string:bromfiets';
  vehicleKindBromscooterSelectElement: string = 'string:bromscooter';
  vehicleKindHighSpeedEbikeSelectElement: string = 'string:highSpeedEbike';
  vehicleKindBakfietsSelectElement: string = 'string:bakfiets';
  vehicleKindTrikeSelectElement: string = 'string:trike';
  vehicleKindQuadSelectElement: string = 'string:quad';
  vehicleKindBromMobielSelectElement: string = 'string:brommobiel';
  vehicleKindOverigSelectElement: string = 'string:overig';

  zipCodeElement: string = '#_Form_IF29510_3622';
  birthDateElement: string = '#_Form_IF29510_37527';
  damageFreeYearsElement: string = '#_Form_IF29511_37526';


}
