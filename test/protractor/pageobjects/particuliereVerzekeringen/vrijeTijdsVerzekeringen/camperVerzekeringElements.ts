export class CamperVerzekeringElements {

  // LICENSEPLATE
  licensePlateInputElement = '#_Form_IF6606_9934';
  brandNameElementXpath = '//*[@class="entry camper_db"]/descendant::*';

  // NEW OR USED
  camperBoughtNewClickElement = '[data-label-id*="LA_IF6609_9920"] .radioList > label:nth-child(1)';
  camperBoughtUsedClickElement = '[data-label-id*="LA_IF6609_9920"] .radioList > label:nth-child(2)';
  newPriceInputElement = '#_Form_IF6609_9921';

  // DATE
  boughtDateInputElement = '#_Form_IF6609_9924';
  nameDateInputElement = '#_Form_IF6625_9983';

  // STRUCTURE
  structureBrandNameInputElement = '#_Form_IF29512_9913';
  structureBrandModelInputElement = '#_Form_IF29512_9914';

  // USE
  recreativeUseClickElement = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(1)';
  dailyRecreativeUseClickElement = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(2)';
  businessUseClickElement = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(3)';
  rentUseClickElement = '[data-label-id*="LA_IF6632_9991"] .radioList > label:nth-child(4)';

  tot10000kmClickElement = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(1)';
  between10000and20000kmClickElement = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(2)';
  moreThen20000kmClickElement = '[data-label-id*="LA_IF6634_9993"] .radioList > label:nth-child(3)';

  // INSURANCE TYPE
  waClickElement = '[data-label-id*="LA_IF6607_9910"]  label';
  allRiskClickElement = '[data-label-id*="LA_IF6607_9911"]  label';
  waPlusClickElement = '[data-label-id*="LA_IF6607_9912"]  label';

  // MELDCODE
  meldCodeInputElement = '#_Form_IF6625_3682';

}
