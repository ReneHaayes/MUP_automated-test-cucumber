import {When, Then} from 'cucumber';
import {
  genericMethods, klantenserviceVraagStellenElements, klantenserviceVraagstellenMethods, loginPageElements
} from "@support";
import {browser} from "protractor";
import {homePageEnum} from "../../pageobjects/enum/verzekeringenEnum";

When(/^Customer fills in form for schadeverzekeringen vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.schadeverzekeringenButtonClickElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.uwVraagOfOpmerkingInputElements, 'Vraag');
  await klantenserviceVraagstellenMethods.fillInKlantenServiceVraagstellenForm();
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

Then(/^Customer navigates to vraagstellen page for schadeverzekeringen and fills in correctly with prefill$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.goToPage(homePageEnum.VRAAGSTELLEN);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.schadeverzekeringenButtonClickElement);
  await genericMethods.verifyUrlContainsIgnoreCase(homePageEnum.VRAAGSTELLEN);
  await genericMethods.typeText(klantenserviceVraagStellenElements.uwVraagOfOpmerkingInputElements, 'Vraag of opmerking');
  await klantenserviceVraagstellenMethods.verifyValuesForPrefillVraagstellenForm();
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer wait 2 minutes and fills in form for schadeverzekeringen vraag stellen$/, {timeout: 200000}, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.schadeverzekeringenButtonClickElement);
  await browser.sleep(125000);
  await genericMethods.typeText(klantenserviceVraagStellenElements.uwVraagOfOpmerkingInputElements, 'Vraag');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.bentUKlantBijUniveJaPrive);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'AB');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.geslachtContactpersoonMan);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-2000');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.emailAdresInputElements, 'info@univee.nl');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for schadeverzekeringen vraag stellen and double clicks on button$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.schadeverzekeringenButtonClickElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.uwVraagOfOpmerkingInputElements, 'Vraag');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.bentUKlantBijUniveJaPrive);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'AB');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.geslachtContactpersoonMan);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-2000');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.emailAdresInputElements, 'info@univee.nl');
  await genericMethods.doubleClickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for zorgverzekeringen vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.zorgverzekeringenButtonClickElement);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.zorgrubriekDropdownValueVerzekeringenElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.zorgVraagOfOpmerkingInputElement, 'Vraag of opmerking');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.zorgBentUKlantBijUniveJa);
  await genericMethods.typeText(klantenserviceVraagStellenElements.zorgClientOfInschrijfNummerInputElement, '1234');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  await genericMethods.typeText(klantenserviceVraagStellenElements.zorgPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-1990');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'info@univee.nl');
  await genericMethods.typeText(klantenserviceVraagStellenElements.zorgTelefoonnummerInputElement, '0109084598');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for levensverzekeringen vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.levensverzekeringenButtonClickElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.levensverzekeringVraagOfOpmerkingInputElement, 'Vraag of opmerking');
  await klantenserviceVraagstellenMethods.fillInKlantenServiceVraagstellenForm();
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  // await genericMethods.clickOnElement(klantenserviceVraagStellenElements.levensverzekeringBentUKlantJa);
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'TE');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  // await genericMethods.clickOnElement(klantenserviceVraagStellenElements.levensverzekeringGeslachtMan);
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-1990');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'info@univee.nl');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for rechtsbijstandverzekering vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.rechtsbijstandverzekeringButtonClickElement);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.rechtsbijstandRubriekDropdownValueVraag);
  await genericMethods.typeText(klantenserviceVraagStellenElements.rechtsbijstandVraagOfOpmerkingInputElement, 'vraag');
  await klantenserviceVraagstellenMethods.fillInKlantenServiceVraagstellenForm();
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  // await genericMethods.clickOnElement(klantenserviceVraagStellenElements.rechtsbijstandBentUKlantJa);
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'TE');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  // await genericMethods.clickOnElement(klantenserviceVraagStellenElements.rechtsbijstandGeslachtMan);
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-1990');
  // await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'infoo@univee.nl');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for verzekeringspakket vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.verzekeringspakketButtonClickElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.verzekeringspakketVraagOfOpmerkingInputElement, 'Vraag of opmerking');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.verzekeringspakketBentUKlantJa);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'TE');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.verzekeringspakketGeslachtMan);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-1990');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'infoo@univee.nl');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for wijziging vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.wijzigingButtonClickElement);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.wijzigingRubriekDrobdownValueAdresgegevensWijzigen);
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenHuidigePostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenHuidigeHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenVerhuizenNaarPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenVerhuizenNaarHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenVoorlettersInputElement, 'TE');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenAchternaamInputElement, 'Test');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.wijzigingAdresWijzigenGeslachtMan);
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenGeboortedatumInputElement, '01-01-1980');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenEMailAdresInputElement, 'infoo@univee.nl');
  await genericMethods.typeText(klantenserviceVraagStellenElements.wijzigingAdresWijzigenVerhuisDatumInputElement, '01-01-2022');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.wijzigingAdresWijzigenMeeverzekerdenJa);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

When(/^Customer fills in form for overig vraag stellen$/, async () => {
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.overigButtonClickElement);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenPostcodeInputElement, '8017 JC');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenHuisnummerInputElement, '1');
  await genericMethods.typeText(klantenserviceVraagStellenElements.overigVraagOfOpmerkingInputElement, 'Vraag of opmerking');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.overigBentUKlantJa);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenVoorlettersInputElement, 'TE');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenAchternaamInputElement, 'Test');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.overigGeslachtMan);
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenGeboortedatumInputElement, '01-01-1990');
  await genericMethods.typeText(klantenserviceVraagStellenElements.vraagStellenEMailAdresInputElement, 'infoo@univee.nl');
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

Then(/^Customer navigates to vraagstellen page for overig and fills in correctly with prefill$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.goToPage(homePageEnum.VRAAGSTELLEN);
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.overigButtonClickElement);
  await genericMethods.verifyUrlContainsIgnoreCase(homePageEnum.VRAAGSTELLEN);
  await genericMethods.typeText(klantenserviceVraagStellenElements.overigVraagOfOpmerkingInputElement, 'Vraag of opmerking');
  await klantenserviceVraagstellenMethods.verifyValuesForPrefillVraagstellenForm();
  await genericMethods.clickOnElement(klantenserviceVraagStellenElements.buttonSendClickElement);
});

Then(/^Verify Compaint question is accepted with a confirmation text$/, async () => {
  await genericMethods.verifyTextInElement(klantenserviceVraagStellenElements.vraagStellenConfirmationTextElement, klantenserviceVraagStellenElements.vraagStellenKlachtConfirmationText);
});

Then(/^Verify question is accepted with a confirmation text$/, async () => {
  await genericMethods.verifyTextContainsInElement(klantenserviceVraagStellenElements.vraagStellenConfirmationPrefillTextElement, klantenserviceVraagStellenElements.vraagStellenConfirmationText, browser.getPageTimeout);
});
