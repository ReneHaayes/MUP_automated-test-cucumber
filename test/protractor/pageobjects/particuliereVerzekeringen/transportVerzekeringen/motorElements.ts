export class MotorElements {
  //LICENSEPLATE
  licensePlateMotorInputElement: string = '#_Form_IF9914_9934';
  licensePlateTrikeInputElement: string = '#_Form_IF9914_9934';
  licensePlateQuadInputElement: string = '#_Form_IF9913_9934';


  //PRICE
  consumerPriceInputElement: string = '#_Form_IF7207_10914';

  //PURCHASE DATE
  purchaseDateElement: string = '#_Form_IF7208_10915';

  //KIND OF VEHICLE
  selectQuadElement: string = '[data-label-id*="LA_IF7208_14225"] .radioList > label:nth-child(1)';
  selectTrikeElement: string = '[data-label-id*="LA_IF7208_14225"] .radioList > label:nth-child(2)';

  //NEW OR SECONDHAND MOTOR
  clickNewElement: string = '[data-label-id*="LA_IF7208_10950"] .radioList > label:nth-child(1)';
  clickSecondHandElement: string = '[data-label-id*="LA_IF7208_10950"] .radioList > label:nth-child(2)';

  //ALARMSYSTEM
  noAlarmSystemElement: string = '[data-label-id*="LA_IF7208_10916"] .radioList > label:nth-child(1)';
  startOnderbrekerAlarmSystemElement: string = '[data-label-id*="LA_IF7208_10916"] .radioList > label:nth-child(2)';
  scmCertifiedAlarmSystemElement: string = '[data-label-id*="LA_IF7208_10916"] .radioList > label:nth-child(3)';

  //BASISDEKKING
  waElement: string = '[data-label-id="LA_IF30306_38112"]';
  waPlusElement: string = '[data-label-id="LA_IF30307_38115"]';
  allRiskElement: string = '[data-label-id="LA_IF30308_38120"]';

  //AANVULLENDE OPTIES
  pechHulpNlElement: string = '[ng-class*="IF7219_10937"]';
  rechtsHulpVerkeerElement: string = '[ng-class*="IF7218_10934"]';
  ongevallenVerzekeringElement: string = '[ng-class*="IF7238_10972"]';

  //ACCESSOIRES
  expandAccElement: string = '#_Form_IF30505_10926'
  expandAccTm500Element: string = 'string:tm500';
  expandAccTm1500Element: string = 'string:tm1500';
  expandAccTm2500Element: string = 'string:tm2500';

  sideBarAcc500: string = 'Accessoires verzekerd t/m €500,-';
  sideBarAcc1500: string = 'Accessoires verzekerd t/m €1.500,-';
  sideBarAcc2500: string = 'Accessoires verzekerd t/m €2.500,-';

  //KIND OF INSURANCE
  newMopedElement: string = '[data-label-id*="LA_IF10206_14612"]';
  replacementMopedElement: string = '[data-label-id*="LA_IF10206_14613"]';
  extraMopedElement: string = '[data-label-id*="LA_IF10206_14614"]';

  //DATE ELEMENTS
  dateOfNameMopedElement: string = '#_Form_IF7221_10944';

  //MELDCODE
  meldCodeElement: string = '#_Form_IF7221_3682';

  //MAIN DRIVER
  mainDriverYesElement: string = '[data-label-id*="LA_IF7209_10917"] label:nth-child(1)';
  mainDriverNoElement: string = '[data-label-id*="LA_IF7209_10917"] label:nth-child(2)';

  //OWNER
  ownerYesElement: string = '[data-label-id*="LA_IF7223_10948"] label:nth-child(1)';
  ownerNoElement: string = '[data-label-id*="LA_IF7223_10948"] label:nth-child(2)';

  //REBUILD TRIKE
  rebuildTrikeNoElement: string = '[data-label-id*="LA_IF7221_10942"] label:nth-child(2)';

}



