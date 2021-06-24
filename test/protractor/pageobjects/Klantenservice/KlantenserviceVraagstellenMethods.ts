import {genericMethods, klantenserviceVraagStellenElements} from '@support';

export class KlantenserviceVraagstellenMethods {

  async fillInKlantenServiceVraagstellenForm() {
    await genericMethods.clickOnElement(klantenserviceVraagStellenElements.bentUKlantBijUniveJaPrive);
    await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'AB');
    await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
    await genericMethods.clickOnElement(klantenserviceVraagStellenElements.geslachtContactpersoonMan);
    await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-2000');
    await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
    await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
    await genericMethods.typeText(klantenserviceVraagStellenElements.emailAdresInputElements, 'info@univee.nl');
  }

  async verifyValuesForPrefillVraagstellenForm() {
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'G.');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Illing - van Bruggen ');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '28-10-1962');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '9939 PA');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '27');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenStraatNaamInputElement, 'Hoofdweg');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenPlaatsInputElement, 'TJUCHEM');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'illing@kpnplanet.nl');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagstellenTelefoonnummerInputElement, '+31596623632');
    await genericMethods.verifyValueTextInElement(klantenserviceVraagStellenElements.vraagStellenClientNummerInputElement, '1763239');
  }
}
