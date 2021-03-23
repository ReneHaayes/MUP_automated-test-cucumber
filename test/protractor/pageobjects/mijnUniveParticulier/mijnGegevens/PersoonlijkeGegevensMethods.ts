import {genericMethods, mijnUniveAccountElements} from '@support';
import {familyCompositionEnum, PaymentData} from '@enum';

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
        await genericMethods.clickOnElement(mijnUniveAccountElements.authorisationCheckBoxAutomaticCollectionSecondClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async changeFamilyComposition(input: string) {
    switch (input) {
      case familyCompositionEnum.ONE_PERSON: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionOnePersonNoChildrenClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionIUnderstandClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      case familyCompositionEnum.LIVING_TOGETHER: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionLiveTogetherNoChildrenClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionIUnderstandClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      case familyCompositionEnum.ONE_PARENT: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionOneParentWithChildrenClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionIUnderstandClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      case familyCompositionEnum.FAMILY_WITH_CHILDREN: {
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionFamilyWithChildrenClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.familyCompositionIUnderstandClickElement);
        await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
