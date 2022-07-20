import {
  genericElements,
  genericMethods,
  mijnSchadeEnClaimElements,
  mijnSchadeEnClaimMethods,
} from '@support';
import {verzekeringPaginasEnum} from '../../enum/genericEnum';
import {browser} from 'protractor';

export class MijnSchadeEnClaimMethods {

  async damageClaimFillInSchadeGegevens(polisNumber: string) {
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimClickElement);
    // STEP ONE
    await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('today'));
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement);
    await genericMethods.acceptAlertWhenAvailable();
    // STEP TWO
    await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimMethods.damageClaimSelectPolisClickElement(polisNumber));
  }

  async chooseInsuranceTypeForDamage(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimAutoInsuranceClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAutoInsuranceClickElement);
        await genericMethods.verifyUrlContainsIgnoreCase('product=auto');
        // STEP THREE
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('today'));
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement);
        // STEP FOUR
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCityInputElement, 'Zwolle');
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimTypeParkeerschade);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageSituationParkeerschadeOtherPartyParked, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageSituationParkeerschadeOtherPartyParked);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimInfluenceOfAlcoholFalseClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimInfluenceOfAlcoholFalseClickElement);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimOtherPartyDamageTrueClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOtherPartyDamageTrueClickElement);
        await genericMethods.clickOnNextButton();
        // STEP FIVE
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimResponsibilityOtherPartyClickElement);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimLicensePlateInputElement, '06-HN-DL');
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimOtherPartyPhoneNumber, '0612345678');
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimOtherPartyEmailAdress, 'mail@adres.nl');
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimDamageToOwnVehicleTrueClickElement);
        await genericMethods.clickOnNextButton();
        // STEP SIX
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneClickElement);
        await genericMethods.clickOnTAB(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneClickElement);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneInputElement, '0612345678');
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.slotvragenNextButton);
        break;
      }
      case verzekeringPaginasEnum.PARTICULIERE_WOONVERZEKERING: {
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimWoonInsuranceClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimWoonInsuranceClickElement);
        await genericMethods.verifyUrlContainsIgnoreCase('product=woon');
        // STEP THREE
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimDateInputElement, browser.getPageTimeout);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('yesterday'));
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement);
        // STEP FOUR
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimCityInputElement, browser.getPageTimeout);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCityInputElement, 'Zwolle');
        await genericMethods.clickOnTAB(mijnSchadeEnClaimElements.damageClaimCityInputElement);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimSoortWoonSchade, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSoortWoonSchade);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimOorzaakWoonSchade, browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOorzaakWoonSchade);
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimDescriptionWoonSchade, browser.getPageTimeout);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDescriptionWoonSchade, 'Die rotkat gooit weer een vaas om.');
        await genericMethods.clickOnTAB(mijnSchadeEnClaimElements.damageClaimDescriptionWoonSchade);
        await genericMethods.clickOnNextButton();
        // STEP FIVE
        await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimSlotvragenWoonSlotvraagNee, browser.getPageTimeout);
        await genericMethods.verifyTextContainsInElement(mijnSchadeEnClaimElements.damageClaimSlotvragenVerifyText, 'Gemelde schade', browser.getPageTimeout);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSlotvragenWoonSlotvraagNee);
        await genericMethods.clickOnElement(genericElements.takeOutInsuranceNowButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  uploadingDocumentFileName(filename: string): string {
    return '../../../' + filename;
  }

  wijzigenVerzekeringSelectSnelLinkPolisClickElement(polisNumber: string): string {
    return '[class="modal-content__block"] [class="tile__link media"][href*="' + polisNumber + '"][href*="polisdetails"]';
  }

  damageClaimSelectPolisClickElement(polisNumber: string): string {
    return '//*[contains(text(),\'' + polisNumber + '\')]/preceding::td[1]/descendant::input';
  }

  // damageClaimSelectCauseClickElement(question: string, cause: string): string {
  //   return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + cause + '\')]/preceding::span[1]/descendant::input';
  // }
  //
  // damageClaimSelectSituationClickElement(question: string, situation: string): string {
  //   return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + situation + '\')]/preceding::span[1]/descendant::input';
  // }
  //
  // damageClaimWhatIsDamaged(option: string) {
  //   return '//*[contains(text(),\'' + option + '\')]/preceding::span[1]/input';
  // }

  polisForPremiegevolgenPageWithPolisNumber(polisNumber: string): string {
    return '[href="/mijnunive/schade/premiegevolgen-berekenen/ncbm-prognosis?pnr=' + polisNumber + '&type=prognosis"]';
  }
}
