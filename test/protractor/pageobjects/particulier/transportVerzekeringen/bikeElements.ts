export class BikeElements {

  //TYPE OF BIKE
  electricBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(1)';
  normalBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(2)';
  raceBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(3)';
  mountainBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(4)';
  layDownBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(5)';
  adjustedBikeClickElement: string = '[data-label-id*="LA_IF6915_10449"] .radioList > label:nth-child(6)';

  //PURCHASE
  purchasePriceInputElement: string = '#_Form_IF6915_10450';
  purchaseDateInputElement: string = '#_Form_IF6924_10465';

  //USER ELEMENTS
  zipCodeUserInputElement: string = '#_Form_IF6915_10451';

  //RENT OR GAMES
  rentedBikeYesElement: string = '[data-label-id*="LA_IF6917_10464"] .radioList > label:nth-child(1)';
  rentedBikeNoElement: string = '[data-label-id*="LA_IF6917_10464"] .radioList > label:nth-child(2)';

  //NEW OR USED
  boughtNewClickElement: string = '[data-label-id*="LA_IF6924_10466"] .radioList > label:nth-child(1)';
  boughtUsedClickElement: string = '[data-label-id*="LA_IF6924_10466"] .radioList > label:nth-child(2)';

  //BIKE INFO
  brandNameInputElement: string = '#_Form_IF6924_10467';
  brandModelInputElement: string = '#_Form_IF6924_10468';
  frameNumberInputElement: string = '#_Form_IF6924_10469';

  //ART
  artApprovedLockYesClickElement: string = '[data-label-id*="LA_IF6924_10470"] .radioList > label:nth-child(1)';
  artApprovedLockNoClickElement: string = '[data-label-id*="LA_IF6924_10470"] .radioList > label:nth-child(2)';

  //SMART BIKE
  smartBikeYesClickElement: string = '[data-label-id*="LA_IF6924_36422"] .radioList > label:nth-child(1)';
  smartBikeNoClickElement: string = '[data-label-id*="LA_IF6924_36422"] .radioList > label:nth-child(2)';


}
