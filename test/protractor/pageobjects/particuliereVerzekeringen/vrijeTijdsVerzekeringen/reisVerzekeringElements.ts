export class ReisVerzekeringElements {

  //DOORLOPENDE REISVERZEKERING
  whoToInsureMySelfClickElement: string = '[data-label-id*="LA_IF9207_19310"]  > label';
  whoToInsureMyPartnerClickElement: string = '[data-label-id*="LA_IF9207_19311"]  > label';
  whoToInsureMyChildrenClickElement: string = '[data-label-id*="LA_IF9207_19312"]  > label';

  //KORTLOPENDE REISVERZEKERING
  leavingDateInputElement: string = '#_Form_IF11807_16112';
  returnDateInputElement: string = '#_Form_IF11807_16113';

  cancelationCoverageYesClickElement: string = '[data-label-id*="LA_IF11808_16114"] .radioList > label:nth-child(1)';
  cancelationCoverageNoClickElement: string = '[data-label-id*="LA_IF11808_16114"] .radioList > label:nth-child(2)';

  childrenTillFourYearsSelectElement: string = '#_Form_IF11806_16110';
  childrenTillFourYearsZeroChildrenSelectElement: string = 'string:0 kinderen';
  childrenTillFourYearsOneChildSelectElement: string = 'string:1kind';
  childrenTillFourYearsTwoChildrenSelectElement: string = 'string:2kind';
  childrenTillFourYearsThreeChildrenSelectElement: string = 'string:3kind';
  childrenTillFourYearsFourChildrenSelectElement: string = 'string:4kind';
  childrenTillFourYearsFiveChildrenSelectElement: string = 'string:5kind';
  childrenTillFourYearsSixChildrenSelectElement: string = 'string:6kind';
  childrenTillFourYearsSevenChildrenSelectElement: string = 'string:7kind';
  childrenTillFourYearsEightChildrenSelectElement: string = 'string:8kind';
  childrenTillFourYearsNineChildrenSelectElement: string = 'string:9kind';
  childrenTillFourYearsTenChildrenSelectElement: string = 'string:10kind';

  //KORTLOPENDE ANNULERINGSVERZEKERING
  bookdateTripInputElement: string = '#_Form_IF11808_16115';
  totalValueOfTripInputElement: string = '#_Form_IF11808_16116';

  //DOORLOPENDE REISVERZEKERING WIDGET PRODUCTPAGE
  myselfWidgetClickElement: string = '[for="verzekerenMijzelf"]';
  myPartnerWidgetClickElement: string = '[for="verzekerenMijnPartner"]';
  myChildrenWidgetClickElement: string = '[for="verzekerenMijnKinderen"]';
  myselfCheckboxChecked: string = '[data-input-field-id="IF9207_19310"][class*="ng-not-empty"]';
  myPartnerCheckboxChecked: string = '[data-input-field-id="IF9207_19311"][class*="ng-not-empty"]';
  myChildrenCheckboxChecked: string = '[data-input-field-id="IF9207_19312"][class*="ng-not-empty"]';
  myselfCheckboxNotChecked: string = '[data-input-field-id="IF9207_19310"][class*="ng-empty"]';
  myPartnerCheckboxNotChecked: string = '[data-input-field-id="IF9207_19311"][class*="ng-empty"]';
  myChildrenCheckboxNotChecked: string = '[data-input-field-id="IF9207_19312"][class*="ng-empty"]';
  summarySpaceMyself: string = 'Uzelf';
  summarySpaceMyPartner: string = 'Uw partner';
  summarySpaceMychildren: string = 'Uw kinderen';

  //EMAIL MIJ DEZE PREMIEBEREKENING
  emailMijDezePremieBerekeningButtonClickElement = '#_Form_IF2523_3671';
  emailMijDezePremieBerekeningEmailAddressInputElement = '#_EmailPremiumCalculation__1';
  emailMijDezePremieBerekeningSendButtonClickElement = '#_EmailPremiumCalculation_send';
  emailMijDezePremieBerekeningWrongTrueMessageTextElement = '[class="mainMessage"] > p';
  emailMijDezePremieBerekeningWrongTrueMessageText = 'Er is een fout opgetreden.'


}
