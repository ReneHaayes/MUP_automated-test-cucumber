export class AfspraakMakenElements {
  selectPostcodeElement = 'label > input';
  selectKiesAfspraakNaPostcodeElement = '[class="postal-code__button"]';
  selectVerzekeringenAsSubjectClickElement = '[class="unive-radio-button__checkmark"]';
  selectKiesUwLocatieClickElement = 'div.appointment-type__type-wrapper > div > ui-radio-button > label';
  // await element(by.xpath('/html/body/main/am-root/div/am-appointment/ui-page/div/funnel-wizard/am-appointment-type/section/funnel-base/article/ui-wrapper/div/div/div/ui-card/div/div/ui-fieldset/fieldset/ui-fieldset/fieldset/div[1]/div/ui-radio-button/label/span[1]/div')).click(); // kies uw locatie
  selectKiesUwWinkelButtonElement = '[class="button button--secondary button--icon"]';
  selectUwHiglightedWinkelElement = '[class="list__radio-highlighted"]';
  selectKiesUwDatumButtonElement = '[class="button button--secondary button--icon"]';
  selectNextMonthButtonElement = '[aria-label="Next month"]';
  select15thDayButtonElement = 'tr:nth-child(4) > td:nth-child(3) > div.mat-calendar-body-cell-content.mat-focus-indicator';
  selectTimeButtonElement = 'div:nth-child(1) > ui-radio-button > label > span.unive-radio-button__label > div';
  selectVulUwGegevensInButtonElement = '[class="button button--secondary button--icon"]';
  selectGenderMaleClickElement = 'ui-radio-button:nth-child(3) > label > span.unive-radio-button__label';
  selectAfspraakBevestigenButtonElement = '[class="button button--secondary button--icon"]';
  confirmationTextElement = '[class="base__title"]';
  confirmationText = 'Uw afspraak is ingepland';

  // AFSPRAAK MAKEN MIJN UNIVE
  afspraakMakenWinkelDetailClickElement = '[class="page-content__block"] [class="button"]';

}
