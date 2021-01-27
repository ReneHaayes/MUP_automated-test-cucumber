import {Then, When} from "cucumber";
import {
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  rechtsBijstandVerzekeringElements,
  rechtsBijstandVerzekeringMethods,
  stickyBalkElements,
  stickyBalkMethods
} from "@support";
import {homePageEnum} from "../../../pageobjects/enum/woonVerzekeringEnum";

When(/^I enter step one page of rechtsbijstandverzekering for family composition of: (.*)$/, async (familyCompositionInput: string) => {
  await rechtsBijstandVerzekeringMethods.clickFamilyComposition(familyCompositionInput);
  await genericMethods.clickOnNextButton();
  //Click on Next at step two page
  await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.verkeerEnvoertuigen);
  await genericMethods.clickOnElement('[data-label-id="LA_IF32509_40517"] > label');
  await genericMethods.scrollTilTop();
  await stickyBalkMethods.verifyStickyBalkAndOpbouwVanBerekening(homePageEnum.RECHTSBIJSTAND);
  await genericMethods.clickOnNextButton();
});

Then(/^Customer can select bekijk controleer gegevens for rechtsbijstandverzekering in almost insured page with correct data$/, async () => {
  await genericMethods.clickOnElement(stickyBalkElements.controleerGegevensClickElement);
  await stickyBalkMethods.verifySummaryRechtsbijstandVerzekering();
  await genericMethods.clickOnElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingCloseClickElement);
  await genericMethods.clickOnTakeOutInsuranceNowButton();
});

When(/^I enter details of (.*) in your data page of rechtsbijstand verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataHouseNumberAdditionElement);
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
  //Click no on are there special facts and circumstances, at next page.
  await genericMethods.clickOnElement(rechtsBijstandVerzekeringElements.specialFactsNoClickElement);
});
