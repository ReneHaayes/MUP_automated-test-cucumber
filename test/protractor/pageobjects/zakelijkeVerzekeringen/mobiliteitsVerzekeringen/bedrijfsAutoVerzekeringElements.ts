export class BedrijfsAutoVerzekeringElements {

  //LICENSEPLATE ELEMENT
  licensePlateElement: string = '#_Form_IF20009_3611';
  licensePlatePersonenAutoElement: string = '#_Form_IF20009_3611';
  brandElementXpath: string = '//*[@data-label-id="LA_IF20011_31572"]/descendant::*';
  brandNameElement: string = '[data-label-id="LA_IF20011_31572"]';
  brandNamePersonenAutoElement: string = '[data-label-id="LA_IF20011_3614"] > span';
  brandModelElement: string = '[data-label-id="LA_IF20011_3614"]';

  //BUSINESS OR PRIVATE
  businessClickElement: string = '[data-label-id*="LA_IF25913_33327"] .radioList > label:nth-child(1)';
  privateClickElement: string = '[data-label-id*="LA_IF25913_33327"] .radioList > label:nth-child(2)';

  //DEDUCT VAT
  deductVatYesElement: string = '[data-label-id*="LA_IF10006_3825"] .radioList > label:nth-child(1)';
  deductVatNoElement: string = '[data-label-id*="LA_IF10006_3825"] .radioList > label:nth-child(2)';

  //OWN PRODUCTS
  ownProductsYesElement: string = '[data-label-id*="LA_IF20015_26327"] .radioList > label:nth-child(1)';
  ownProductsNoElement: string = '[data-label-id*="LA_IF20015_26327"] .radioList > label:nth-child(2)';

  //ZIPCODE
  zipCodeInputElement: string = '#_Form_IF20015_33915';

  //YEARLY MILEAGE
  yearlyMileageTot12000Element: string = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(1)';
  yearlyMileage12000tot20000Element: string = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(2)';
  yearlyMileage20000tot25000Element: string = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(3)';
  yearlyMileage25000tot35000Element: string = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(4)';
  yearlyMileageMoreThen35000Element: string = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(5)';

  //PERMANENT DRIVER
  permanentDriverYesElement: string = '[data-label-id*="LA_IF20211_26522"] .radioList > label:nth-child(1)';
  permanentDriverNoElement: string = '[data-label-id*="LA_IF20211_26522"] .radioList > label:nth-child(2)';

  //BASISDEKKING
  waElement: string = '[data-label-id*="LA_IF20017_26336"] label:nth-child(1) ';
  waPlusElement: string = '[data-label-id*="LA_IF20017_26337"] label:nth-child(1) ';
  allRiskElement: string = '[data-label-id*="LA_IF20017_26338"] label:nth-child(1) ';

  //SIDEBAR
  sideBarElement: string = '//*[@id="element1"]//*';
  sideBarAllRisk: string = 'All risk';

  //DATE ELEMENTS
  startDateOnYourNameElement: string = '#_Form_IF34740_3681';

  //MELDCODE
  reportingCode: string = '#_Form_IF20210_3682';

  //DIFFERENT USER
  differentUserYesElement: string = '[data-label-id*="LA_IF20213_32050"] .radioList > label:nth-child(1)';
  differentUserNoElement: string = '[data-label-id*="LA_IF20213_32050"] .radioList > label:nth-child(2)';

}
