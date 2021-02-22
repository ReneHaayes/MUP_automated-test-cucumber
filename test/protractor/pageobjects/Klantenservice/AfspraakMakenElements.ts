import {genericEnum} from "../enum/genericEnum";

export class AfspraakMakenElements {

  selectVerzekeringenAsSubjectClickElement: string = '.eforms-radio-container > [value="verzekeringen"]~span';
  selectGenderMaleClickElement: string = '.eforms-radio-container > [value="Man"]~span';
  selectAlreadyCustomerClickElementFor: string = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';

  selectAlreadyCustomerClickElement(input: string){
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

  selectAlreadyCustomerNoHiddenElement: string = '.eforms-radio-container > [value="false"]~span';

  confirmationTextElement: string = '[class="eforms-container"] > p';
  confirmationText: string = 'Hartelijk dank';

  //AFSPRAAK MAKEN MIJN UNIVE
  afspraakMakenWinkelDetailClickElement = '[class="page-content__block"] [class="button"]';

}
