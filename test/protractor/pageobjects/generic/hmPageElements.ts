export class HmPageElements {

  //INSURANCE BUTTONS HOMEPAGE
  homePageAutoverzekeringElement: string = '[href*="/autoverzekering"][class*="insurances_tabLinkAction"]';
  homePageWoonverzekeringElement: string = '[href*="/woonverzekering"][class*="insurances_tabLinkAction"]';
  homePageAansprakelijkheidsverzekeringElement: string = '[href*="/aansprakelijkheidsverzekering"][class*="insurances_tabLinkAction"]';
  homePageZorgverzekeringElement: string = '[href*="/zorgverzekering"][class*="insurances_tabLinkAction"]';
  homePageReisverzekeringElement: string = '[href*="/zorgservice/alternatievezorg"][class*="insurances_tabLinkAction"]';
  homePageAlleverzekeringElement: string = '[href*="/verzekeringen"][class*="insurances_tabButtonAction"]';

  //LICENSE PLATE
  licensePlateWidgetInputElement: string = '#kenteken';
  licensePlateWidgetButtonElement: string = '[class*="premiumCalculator_boxSubmit"]';
  licensePlateWidgetButtonProductPageElement: string = '[class*="premiumCalculatorShort_submit"]';
  licensePlateWidgetDontKnowElement: string = '[class*="premiumCalculatorRationalisatie_boxKentekenLink"]';
  licensePlateWidgetDontKnowProductPageElement: string = '[class*="premiumCalculatorShort_directLink"]';

  //WOONVERZEKERING
  woonVerzekeringButtonElement: string = '[class*="simpleWidget_submit"]';
  woonVerzekeringZipCodeElement: string = '#woonPostcode';
  woonVerzekeringHouseNumberElement: string = '#woonHuisnummerNr';
  woonVerzekeringHouseNumberAddingElement: string = '#woonHuisnummerToevoegingAn';
  woonVerzekeringCheckTekstStepTwoElement: string = '[ng-class*="R22109_0"] span';
  woonVerzekeringCheckTekstStepOneElement: string = '[class*="headerText"]';
}
