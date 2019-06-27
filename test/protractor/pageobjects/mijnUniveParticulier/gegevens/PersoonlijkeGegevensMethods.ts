import {PaymentData} from "../../enum/MijnUniveParticulierEnum";
import {GenericMethods} from "../../generic/genericMethods";
import {MijnUniveAccountElements} from "../mijnUniveAccount/mijnUniveAccountElements";

let genericMethods: GenericMethods = new GenericMethods();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();

export class PersoonlijkeGegevensMethods {

  async changePaymentData(input: string) {
    switch (input) {
      case PaymentData.PAYMENT_PERIOD: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.changePaymentPeriodRadioClickElement);
        await genericMethods.selectInDropdown(mijnUniveAccountElements.paymentPeriodSelectElement, mijnUniveAccountElements.paymentPeriodeSelectMaandElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      case PaymentData.PAYMENT_WAY: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.changePaymentWayRadioClickElement);
        await genericMethods.typeText(mijnUniveAccountElements.ibanAccountNumberInputElement, PaymentData.IBAN);
        await genericMethods.clickOnElement(mijnUniveAccountElements.authorisationCheckBoxAutomaticCollectionClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      case PaymentData.IBAN_ACCOUNTNUMBER: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.changeIbanRadioClickElement);
        await genericMethods.typeText(mijnUniveAccountElements.currentIbanAccountNumberInputElement, PaymentData.IBAN);
        await genericMethods.typeText(mijnUniveAccountElements.newIbanAccountnumberInputElement, PaymentData.IBAN);
        await genericMethods.typeText(mijnUniveAccountElements.startDateChangeInputElement, genericMethods.getDate('today'));
        await genericMethods.clickOnTAB(mijnUniveAccountElements.startDateChangeInputElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.authorisationCheckBoxAutomaticCollectionClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
