import {
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
    // await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepTwoNextButtonClickElement);
  }

  async chooseInsuranceTypeForDamage(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAutoInsuranceClickElement);
        await genericMethods.verifyTextContainsInElement('div:nth-child(2) > div > div > h2', 'Autoverzekering', browser.getPageTimeout);
        await genericMethods.clickOnElement('div.l-content > div > div > div > div:nth-child(2) > div > a > div.button__text');
        // STEP THREE
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('today'));
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCityInputElement, 'Zwolle');
        await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimMethods.damageClaimSelectCauseClickElement('Wat is er gebeurd?', 'Parkeerschade'));
        await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimMethods.damageClaimSelectSituationClickElement('Welke situatie is voor u van toepassing?', 'De andere partij stond geparkeerd'));
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimInfluenceOfAlcoholFalseClickElement);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOtherPartyDamageTrueClickElement);
        await genericMethods.clickOnNextButton();
// STEP FOUR
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimLicensePlateInputElement, '06-HN-DL');
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimOtherPartyPhoneNumber, '0612345678');
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimOtherPartyEmailAdress, 'mail@adres.nl');
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimResponsibilityOtherPartyClickElement);
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimDamageToOwnVehicleTrueClickElement);
        await genericMethods.clickOnNextButton();
        // STEP FIVE
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneClickElement);
        await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneInputElement, '0612345678');
        await genericMethods.clickOnTakeOutInsuranceNowButton();
        break;
      }
      case verzekeringPaginasEnum.PARTICULIERE_WOONVERZEKERING: {
        await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimWoonInsuranceClickElement);
        await genericMethods.verifyTextContainsInElement('div:nth-child(2) > div > div > h2', 'Autoverzekering', browser.getPageTimeout);
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

  damageClaimSelectCauseClickElement(question: string, cause: string): string {
    return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + cause + '\')]/preceding::span[1]/descendant::input';
  }

  damageClaimSelectSituationClickElement(question: string, situation: string): string {
    return '//*[contains(text(),\'' + question + '\')]/following::*[contains(text(),\'' + situation + '\')]/preceding::span[1]/descendant::input';
  }

  damageClaimWhatIsDamaged(option: string) {
    return '//*[contains(text(),\'' + option + '\')]/preceding::span[1]/input';
  }

  polisForPremiegevolgenPageWithPolisNumber(polisNumber: string): string {
    return '[href="/mumq/QIS_Customer/my-ncbm-prognosis/' + polisNumber + '"]';
  }
}
