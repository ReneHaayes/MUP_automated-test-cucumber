import {genericEnum} from "../enum/genericEnum";

export class AfspraakMakenElements {

  selectVerzekeringenAsSubjectClickElement: string = '#field_0 > div:nth-child(2) > div > label:nth-child(1)';
  selectGenderMaleClickElement: string = '#field_3 > div:nth-child(7) > div > label:nth-child(1)';
  selectAlreadyCustomerClickElementFor: string = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';

  selectAlreadyCustomerClickElement(input: string){
    switch (input) {
      case genericEnum.YES: {
        return '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
      }
      case genericEnum.NO: {
        return '#field_3 > div:nth-child(2) > div > label:nth-child(2)';
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  selectAlreadyCustomerNoHiddenElement: string = '#field_3 > [class="eforms-field hidden"]';

  confirmationTextElement: string = '[class="eforms-container"] > p';
  confirmationText: string = 'Hartelijk dank';

}
