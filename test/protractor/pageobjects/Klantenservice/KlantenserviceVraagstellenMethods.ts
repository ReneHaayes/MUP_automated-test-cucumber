import {genericMethods, klantenserviceVraagStellenElements} from "@support";

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

}
