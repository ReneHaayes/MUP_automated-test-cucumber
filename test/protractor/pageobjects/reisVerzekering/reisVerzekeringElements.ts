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

}
