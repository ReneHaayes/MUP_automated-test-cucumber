import {genericMethods, mijnSchadeEnClaimElements} from '@support';

export class MijnSchadeEnClaimMethods {

  async damageClaimFillInSchadeGegevens(polisNumber: string) {
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimClickElement);
    // STEP ONE
    await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('today'));
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement);
    await genericMethods.acceptAlertWhenAvailable();
    // STEP TWO
    await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectPolisClickElement(polisNumber));
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepTwoNextButtonClickElement);
  }

}
