export class CamperVerzekeringElements {

  //LICENSEPLATE
  licensePlateInputElement: string = '#_Form_IF6606_9934';
  brandNameElementXpath: string = '//*[@class="entry camper_db"]/descendant::*';

  //NEW OR USED
  camperBoughtNewClickElement: string = '[data-label-id*="LA_IF6609_9920"] .radioList > label:nth-child(1)';
  camperBoughtUsedClickElement: string = '[data-label-id*="LA_IF6609_9920"] .radioList > label:nth-child(2)';
  newPriceInputElement: string = '#_Form_IF6609_9921';

  //DATE
  boughtDateInputElement: string = '#_Form_IF6609_9924';
  nameDateInputElement: string = '#_Form_IF6625_9983';

  //STRUCTURE
  structureBrandNameInputElement: string = '#_Form_IF29512_9913';
  structureBrandModelInputElement: string = '#_Form_IF29512_9914';

  //USE
  recreativeUseClickElement: string = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(1)';
  dailyRecreativeUseClickElement: string = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(2)';
  businessUseClickElement: string = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(3)';
  rentUseClickElement: string = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(4)';

  tot10000kmClickElement: string = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(1)';
  between10000and20000kmClickElement: string = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(2)';
  moreThen20000kmClickElement: string = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(3)';

  //INSURANCE TYPE
  waClickElement: string = '[data-label-id*="LA_IF6607_9910"]  label';
  allRiskClickElement: string = '[data-label-id*="LA_IF6607_9911"]  label';
  waPlusClickElement: string = '[data-label-id*="LA_IF6607_9912"]  label';

  //MELDCODE
  meldCodeInputElement: string = '#_Form_IF6625_3682';

}
