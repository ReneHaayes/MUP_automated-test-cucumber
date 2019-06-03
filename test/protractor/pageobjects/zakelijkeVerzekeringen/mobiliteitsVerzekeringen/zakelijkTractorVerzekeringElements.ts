export class ZakelijkTractorVerzekeringElements {

  //TRACTOR DATA
  searchTractorDataClickElement: string = '#_Form_IF21823_28551';
  valueInputElement: string = '#_Form_IF21834_28558';
  trackAndTraceSystemYesClickElement: string = '[data-label-id*="LA_IF21835_28560"] .radioList > label:nth-child(1)';
  trackAndTraceSystemNoClickElement: string = '[data-label-id*="LA_IF21835_28560"] .radioList > label:nth-child(2)';
  chassisNumberInputElement: string = '#_Form_IF21862_28619';

  //ACCESSOIRES
  accessoiresSelectElement: string = '#_Form_IF21835_28559';
  accessoiresTm1000SelectElement: string = 'string:tm1000';

  //SELECT MAX SPEED
  maxSpeedSelectElement: string = '#_Form_IF21835_28561';
  maxSpeedTot30SelectElement: string = 'string:tot30';
  maxSpeed31Tot40SelectElement: string = 'string:31-40';
  maxSpeed41Tot50SelectElement: string = 'string:41-50';
  maxSpeed51Tot60SelectElement: string = 'string:51-60';
  maxSpeedOver60SelectElement: string = 'string:60over';

  //SELECT ENGINE POWER
  enginePowerSelectElement: string = '#_Form_IF21835_28562';
  enginePower100PkSelectElement: string = 'string:100pk';

  //USAGE
  usageOwnLawnClickElement: string = '[data-label-id*="LA_IF21845_28575"] label';

  //LICENSEPLATE
  licensePlateInputElement: string = '#_Form_IF21862_28618';

  //OWNER
  ownerYesClickElement: string = '[data-label-id*="LA_IF21863_28621"] .radioList > label:nth-child(1)';
  ownerNoClickElement: string = '[data-label-id*="LA_IF21863_28621"] .radioList > label:nth-child(2)';

}
