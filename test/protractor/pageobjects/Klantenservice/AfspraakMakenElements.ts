import {genericEnum} from '../enum/genericEnum';

export class AfspraakMakenElements {
  selectPostcodeElement = 'label > input';
  selectKiesAfspraakNaPostcodeElement = '[class="postal-code__button"]';
  selectVerzekeringenAsSubjectClickElement = '[class="unive-radio-button__checkmark"]';
  selectKiesUwWinkelButtonElement = '[class="button button--secondary button--icon"]';
  selectUwHiglightedWinkelElement = '[class="list__radio-highlighted"]';
  selectKiesUwDatumButtonElement = '[class="button button--secondary button--icon"]';
  selectNextMonthButtonElement = '[aria-label="Next month"]';
  select15thDayButtonElement = 'tr:nth-child(4) > td:nth-child(3) > div.mat-calendar-body-cell-content.mat-focus-indicator';
  selectTimeButtonElement = 'div:nth-child(2) > ui-radio-button > label > span.unive-radio-button__label > div';
  selectVulUwGegevensInButtonElement = '[class="button button--secondary button--icon"]';
  selectGenderMaleClickElement = 'ui-radio-button:nth-child(3) > label > span.unive-radio-button__label';
  selectAlreadyCustomerClickElementFor = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
  selectAfspraakBevestigenButtonElement = '[class="button button--secondary button--icon"]';

  selectAlreadyCustomerClickElement(input: string) {
    switch (input) {
      case genericEnum.YES: {
        return '.eforms-radio-container > [value="true"]~span';
      }
      case genericEnum.NO: {
        return '.eforms-radio-container > [value="false"]~span';
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  selectAlreadyCustomerNoHiddenElement = '.eforms-radio-container > [value="false"]~span';

  confirmationTextElement = '[class="base__title"]';
  confirmationText = 'Uw afspraak is ingepland';

  // AFSPRAAK MAKEN MIJN UNIVE
  afspraakMakenWinkelDetailClickElement = '[class="page-content__block"] [class="button"]';

}
