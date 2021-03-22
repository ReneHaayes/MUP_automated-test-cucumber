export class ReisVerzekeringElements {

  // DOORLOPENDE REISVERZEKERING
  whoToInsureMySelfClickElement = '[data-label-id*="LA_IF9207_19310"]  > label';
  whoToInsureMyPartnerClickElement = '[data-label-id*="LA_IF9207_19311"]  > label';
  whoToInsureMyChildrenClickElement = '[data-label-id*="LA_IF9207_19312"]  > label';

  // KORTLOPENDE REISVERZEKERING
  leavingDateInputElement = '#_Form_IF11807_16112';
  returnDateInputElement = '#_Form_IF11807_16113';

  // cancelationCoverageYesClickElement = '[data-label-id*="LA_IF11808_16114"] .radioList > label:nth-child(1)';
  cancelationCoverageNoClickElement = '[data-label-id*="LA_IF11808_16114"] .radioList > label:nth-child(2)';

  childrenTillFourYearsSelectElement = '#_Form_IF11806_16110';
  childrenTillFourYearsZeroChildrenSelectElement = 'string:0 kinderen';
  childrenTillFourYearsOneChildSelectElement = 'string:1kind';
  childrenTillFourYearsTwoChildrenSelectElement = 'string:2kind';
  childrenTillFourYearsThreeChildrenSelectElement = 'string:3kind';
  childrenTillFourYearsFourChildrenSelectElement = 'string:4kind';
  childrenTillFourYearsFiveChildrenSelectElement = 'string:5kind';
  childrenTillFourYearsSixChildrenSelectElement = 'string:6kind';
  childrenTillFourYearsSevenChildrenSelectElement = 'string:7kind';
  childrenTillFourYearsEightChildrenSelectElement = 'string:8kind';
  childrenTillFourYearsNineChildrenSelectElement = 'string:9kind';
  childrenTillFourYearsTenChildrenSelectElement = 'string:10kind';

  // KORTLOPENDE ANNULERINGSVERZEKERING
  bookdateTripInputElement = '#_Form_IF11808_16115';
  totalValueOfTripInputElement = '#_Form_IF11808_16116';

  // DOORLOPENDE REISVERZEKERING WIDGET PRODUCTPAGE
  myselfWidgetClickElement = 'travel-widget ::sr checkbox-group ::sr #checkbox-verzekerenMijzelf';
  myPartnerWidgetClickElement = 'travel-widget ::sr checkbox-group ::sr #checkbox-verzekerenMijnPartner';
  myChildrenWidgetClickElement = 'travel-widget ::sr checkbox-group ::sr #checkbox-verzekerenMijnKinderen';
  myselfCheckboxChecked = '[class="checkbox value checked"][data-label-id="LA_IF9207_19310"]';
  myPartnerCheckboxChecked = '[class="checkbox value checked"][data-label-id="LA_IF9207_19311"]';
  myChildrenCheckboxChecked = '[class="checkbox value checked"][data-label-id="LA_IF9207_19312"]';
  chooseInsuredPopUpTextElement = '#_Form_lightboxMessageLT';

  summarySpaceMyself = 'Uzelf';
  summarySpaceMyPartner = 'Uw partner';
  summarySpaceMychildren = 'Uw kinderen';
  stepOnePageClickElement = '[class="formSequenceMenu"] [class="ng-scope performed"]';
  backToStepOneClickElement = '[data-di-id="di-id-d3374ebe-e4e3d620"]';

  // EMAIL MIJ DEZE PREMIEBEREKENING
  emailMijDezePremieBerekeningButtonClickElement = '#_Form_IF2523_3671';
  emailMijDezePremieBerekeningEmailAddressInputElement = '#_EmailPremiumCalculation__1';
  emailMijDezePremieBerekeningSendButtonClickElement = '#_EmailPremiumCalculation_send';
  emailMijDezePremieBerekeningSendSuccesfullMessageTextElement = '[class="message info ng-scope"] p';
  emailMijDezePremieBerekeningSendSuccesfullMessageText = 'De premieberekening is verzonden naar het door u ingevoerde e-mailadres.';


}
