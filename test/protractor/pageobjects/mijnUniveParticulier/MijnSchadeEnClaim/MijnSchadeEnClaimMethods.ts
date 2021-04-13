import {genericMethods, mijnSchadeEnClaimElements, mijnSchadeEnClaimMethods} from '@support';

export class MijnSchadeEnClaimMethods {

  async damageClaimFillInSchadeGegevens(polisNumber: string) {
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimClickElement);
    // STEP ONE
    await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDateInputElement, genericMethods.getDate('today'));
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepOneNextButtonClickElement);
    await genericMethods.acceptAlertWhenAvailable();
    // STEP TWO
    await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimMethods.damageClaimSelectPolisClickElement(polisNumber));
    await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepTwoNextButtonClickElement);
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
