export class BedrijfsAutoVerzekeringElements {

  // LICENSEPLATE ELEMENT
  licensePlateElement = '#_Form_IF20009_3611';
  licensePlatePersonenAutoElement = '#_Form_IF20009_3611';
  brandElementXpath = '//*[@data-label-id="LA_IF20011_31572"]/descendant::*';
  brandNameElement = '[data-label-id="LA_IF20011_31572"]';
  brandNamePersonenAutoElement = '[data-label-id="LA_IF20011_3614"] > span';
  brandModelElement = '[data-label-id="LA_IF20011_3614"]';

  // ZAKELIJKE PERSONENAUTO
  companyCarBrandNameElement = '[data-label-id="LA_IF2509_3613"]';
  companyCarBrandModelElement = '[data-label-id="LA_IF2509_3614"]';

  // BUSINESS OR PRIVATE
  businessClickElement = '[data-label-id*="LA_IF25913_33327"] .radioList > label:nth-child(1)';
  privateClickElement = '[data-label-id*="LA_IF25913_33327"] .radioList > label:nth-child(2)';

  // DEDUCT VAT
  deductVatYesElement = '[data-label-id*="LA_IF10006_3825"] .radioList > label:nth-child(1)';
  deductVatNoElement = '[data-label-id*="LA_IF10006_3825"] .radioList > label:nth-child(2)';

  // OWN PRODUCTS
  ownProductsYesElement = '[data-label-id*="LA_IF20015_26327"] .radioList > label:nth-child(1)';
  ownProductsNoElement = '[data-label-id*="LA_IF20015_26327"] .radioList > label:nth-child(2)';

  // ZIPCODE
  zipCodeInputElement = '#_Form_IF20015_33915';

  // YEARLY MILEAGE
  yearlyMileageTot12000Element = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(1)';
  yearlyMileage12000tot20000Element = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(2)';
  yearlyMileage20000tot25000Element = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(3)';
  yearlyMileage25000tot35000Element = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(4)';
  yearlyMileageMoreThen35000Element = '[data-label-id*="LA_IF20015_3619"] .radioList > label:nth-child(5)';

  // PERMANENT DRIVER
  permanentDriverYesElement = '[data-label-id*="LA_IF20211_26522"] .radioList > label:nth-child(1)';
  permanentDriverNoElement = '[data-label-id*="LA_IF20211_26522"] .radioList > label:nth-child(2)';

  // BASISDEKKING
  waElement = '[data-label-id*="LA_IF20017_26336"] label:nth-child(1) ';
  waPlusElement = '[data-label-id*="LA_IF20017_26337"] label:nth-child(1) ';
  allRiskElement = '[data-label-id*="LA_IF20017_26338"] label:nth-child(1) ';

  // SIDEBAR
  sideBarElement = '//*[@id="element1"]//*';
  sideBarAllRisk = 'All risk';

  // DATE ELEMENTS
  startDateOnYourNameElement = '#_Form_IF34740_3681';

  // MELDCODE
  reportingCode = '#_Form_IF20210_3682';

  // DIFFERENT USER
  differentUserYesElement = '[data-label-id*="LA_IF20213_32050"] .radioList > label:nth-child(1)';
  differentUserNoElement = '[data-label-id*="LA_IF20213_32050"] .radioList > label:nth-child(2)';

}
