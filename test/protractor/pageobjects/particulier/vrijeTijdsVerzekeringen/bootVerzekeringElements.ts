export class BootVerzekeringElements {
  //////////////////////////////////
  // STEP ONE                     //
  //////////////////////////////////
  //TYPE OF BOOT
  typeOfBootSelectElement: string = '#_Form_IF11836_16153';
  typeOfBootMotorbootSelectElement: string = 'string:motorboot';
  typeOfBootZeilbootSelectElement: string = 'string:zeilboot';
  typeOfBootSloepSelectElement: string = 'string:sloep';
  typeOfBootRubberbootSelectElement: string = 'string:rubberboot';
  typeOfBootRoeibootKanoSelectElement: string = 'string:roeibootKano';
  typeOfBootSpeedbootSelectElement: string = 'string:speedboot';
  typeOfBootCatamaranSelectElement: string = 'string:catamaran';
  //VALUE BOAT
  boatValueInputElement: string = '#_Form_IF11837_16155';
  //DATE ELEMENTS
  purchaseDateInputElement: string = '#_Form_IF11837_16162';
  //LENGTHBOAT
  lengthBoatInputElement: string = '#_Form_IF11837_16163';
  //NEW OR USED
  boatIsNewClickElement: string = '[data-label-id*="LA_IF11837_16165"] .radioList > label:nth-child(1)';
  boatIsUsedClickElement: string = '[data-label-id*="LA_IF11837_16165"] .radioList > label:nth-child(2)';
  //FOLLOWBOAT
  followBoatYesClickElement: string = '[data-label-id*="LA_IF11838_16159"] .radioList > label:nth-child(1)';
  followBoatNoClickElement: string = '[data-label-id*="LA_IF11838_16159"] .radioList > label:nth-child(2)';
  //TRAILER
  trailerYesClickElement: string = '[data-label-id*="LA_IF11838_16160"] .radioList > label:nth-child(1)';
  trailerNoClickElement: string = '[data-label-id*="LA_IF11838_16160"] .radioList > label:nth-child(2)';

  //////////////////////////////////
  // STEP THREE                   //
  //////////////////////////////////
  boatNameInputElement: string = '#_Form_IF11863_16201';
  boatBrandNameInputElement: string = '#_Form_IF11863_16202';
  boatConstructionYearInputElement: string = '#_Form_IF11863_16203';

  boatMaterialSelectElement: string = '#_Form_IF11863_16206';
  boatMaterialKunststofPolyesterSelectElement: string = 'string:kunststofPolyester';
  boatMaterialPolyesterHoutSelectElement: string = 'string:polyesterHout';
  boatMaterialHoutSelectElement: string = 'string:hout';
  boatMaterialStaalSelectElement: string = 'string:staal';
  boatMaterialStaalHoutSelectElement: string = 'string:staalHout';
  boatMaterialAluminiumSelectElement: string = 'string:aluminium';
  boatMaterialRubberSelectElement: string = 'string:rubber';
  boatMaterialFerrocementSelectElement: string = 'string:ferrocement';

  engineTypeInsideClickElement: string = '[data-label-id*="LA_IF11866_16215"] .radioList > label:nth-child(1)';
  engineTypeOutsideClickElement: string = '[data-label-id*="LA_IF11866_16215"] .radioList > label:nth-child(2)';

  boatMotorBrandnameInputElement: string = '#_Form_IF11866_16216';
  boatMotorNumberInputElement: string = '#_Form_IF11866_16217';
  boatMotorConstructionYearInputElement: string = '#_Form_IF11866_16218';
  boatMotorPurchaseYearInputElement: string = '#_Form_IF11866_16219';

  boatFueltypeSelectElement: string = '#_Form_IF11866_16220';
  boatFueltypeBenzineSelectElement: string = 'string:benzine';
  boatFueltypeDieselSelectElement: string = 'string:diesel';
  boatFueltypeElektrischSelectElement: string = 'string:elektrisch';
  boatFueltypeLPGSelectElement: string = 'string:lpg';

  boatPowerInputElement: string = '#_Form_IF11866_16221';
  boatPowerPkClickElement: string = '[data-label-id*="LA_IF11866_16222"] .radioList > label:nth-child(1)';
  boatPowerKwClickElement: string = '[data-label-id*="LA_IF11866_16222"] .radioList > label:nth-child(2)';

}
