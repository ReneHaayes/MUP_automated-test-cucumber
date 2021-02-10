export class ZzpGoedBeterBestElements {


  // PAGE 1
  // KVK GEGEVENS
  kvkCompanyName = 'zp-kvk-nummer > div > div > div:nth-child(1) > div';
  kvkNumberElement = '[class*="input__input-field"]';
    // QUESTIONS
  companyActivityCorrectYesElement = 'div.basic-information__form > div:nth-child(1) > ui-radio-group > div > ui-radio-button:nth-child(2) > label';
  employeesOnPayrollYesElement = 'div.basic-information__form > div:nth-child(2) > ui-radio-group > div > ui-radio-button:nth-child(2) > label ';
  hasCompanyCarYesElement = 'zp-company-car > div > div > ui-radio-group > div > ui-radio-button:nth-child(2) > label';
  hasInventoryOnOtherAdressYesElement = 'div.inventory__question > ui-radio-group > div > ui-radio-button:nth-child(2) > label';
  companyActivityCorrectNoElement = 'div.basic-information__form > div:nth-child(1) > ui-radio-group > div > ui-radio-button:nth-child(1) > label';
  employeesOnPayrollNoElement = 'div.basic-information__form > div:nth-child(2) > ui-radio-group > div > ui-radio-button:nth-child(1)';
  hasCompanyCarNoElement = 'zp-company-car > div > div > ui-radio-group > div > ui-radio-button:nth-child(1) > label';
  hasInventoryOnOtherAdressNoElement = 'div.inventory__question > ui-radio-group > div > ui-radio-button:nth-child(1) > label';
    // INPUT ELEMENTS COMPANY CAR
  companyCarLicencePlateInputElement = 'ui-license-plate > div > div:nth-child(2) > input';
  companyCarInfoElement = 'div.company-car__info > label';
  mileageBelow12000Element = 'div.company-car__mileage > ui-radio-group > div > ui-radio-button:nth-child(2) > label';
  mileage12000To20000Element = 'div.company-car__mileage > ui-radio-group > div > ui-radio-button:nth-child(3) > label';
  mileage20000To25000Element = 'div.company-car__mileage > ui-radio-group > div > ui-radio-button:nth-child(4) > label';
  mileage25000To35000Element = 'div.company-car__mileage > ui-radio-group > div > ui-radio-button:nth-child(5) > label';
  mileageAbove35000Element = 'div.company-car__mileage > ui-radio-group > div > ui-radio-button:nth-child(6) > label';
  damageFreeYearsElement = 'div.company-car__claim-free-years > ui-input > div > label > input';
    // INPUT ELEMENTS OTHER ADRESS
  otherAdressZipcodeInputElement = 'div.postal-code-house-number__postal-code > ui-input > div > label > input';
  otherAdressHouseNumberInputElement = ' div.postal-code-house-number__house-number > div > ui-input:nth-child(1) > div > label > input';
  otherAdressAdditionInputElement = 'div.postal-code-house-number__house-number > div > ui-input:nth-child(2) > div > label > input';


  // PAGE 2
  goedElement = 'div.good-better-best__packages > div:nth-child(1) > ui-product-package > div';
  beterElement = 'div.good-better-best__packages > div:nth-child(2) > ui-product-package > div';
  bestElement = 'div.good-better-best__packages > div:nth-child(3) > ui-product-package > div';


  // PAGE 3
  selectPechhulpElement = 'div:nth-child(3) > div.company-car-insurance__additional-checkbox > ui-checkbox > label';
  selectRechtsbijstandElement = 'div:nth-child(3) > zp-selectable-insurance > div > div.selectable-insurance__title-bar > ui-checkbox > label';
  // pechhulpDropDownElement = '[class="company-car-insurance__dekkingsgebied-dropdown"] mat-select' ;
  // pechhulpNederlandSelectElement = 'Nederland';
  // pechhulpBuitenlandSelectElement = 'Nederland + Buitenland';


  // PAGE 4
  startingDateElement = 'ui-datepicker > div > label > input';
    // COMPANY CAR INSURANCE QUESTIONS
  transferDate = '';
  reportingCode = '';
  ownerNoElement = '';
  ownerYesElement = '';
      // COMPANY LIABILITY INSURANCE QUESTIONS
  fireHazardousWorkYesElement = '';
  fireHazardousWorkNoElement = '';

  workMainlyAbroadNoElement = '';
  workMainlyAbroadYesElement = '';
  countriesBeLuxDuElement = '';
  countriesOtherInEuropeElement = '';
  countriesOutsideEuropeElement = '';
  explanationWorkAbroadElement = '';

  workInSpecificSectorNoElement = '';
  workInSpecificSectorYesElement = '';

  demolitionWorkNoElement = '';
  demolitionWorkYesElement = '';
  explanationDemolitionWorkElement = '';

  takeOnContractsForZZPerNoElement = '';
  takeOnContractsForZZPerYesElement = '';

  workWithAsbestosNoElement = '';
  workWithAsbestosYesElement = '';
  explanationAsbestosElement = '';

  buildScaffoldingNoElement = '';
  buildScaffoldingYesElement = '';
  explanationScaffoldingElement = '';

  useHeavyMaterialsNoElement = '';
  useHeavyMaterialsYesElement = '';
  explanationHeavyMaterialsElement = '';

  conflictsThreeYearsPriorNoElement = '';
  conflictsThreeYearsPriorYesElement = '';
  explanationConflictsElement = '';
    // LEGAL COUNCIL INSURANCE QUESTIONS
  hasOtherActivitiesNoElement = '';
  hasOtherActivitiesYesElement = '';
  explanationOtherActivitiesElement = '';

  // GENERAL BUTTONS
  nextButton = 'ui-button > button';
  bannerElement = '[class="page__title"]';

  // THANK YOU
  thankYouElement = '[class*="unive-form-text-container"] div > p:nth-child(2)';

}
