import {When, Then} from "cucumber";
import {
  genericElements,
  genericMethods,
  nawElements,
  personaData,
  reisVerzekeringElements,
  reisVerzekeringMethods, stickyBalkElements,
  stickyBalkMethods
} from "@support";
import {homePageEnum} from "@enum";

When(/^I enter step one and step two page of doorlopende verzekeringen for myself$/, async () => {
  await genericMethods.clickOnElement(reisVerzekeringElements.whoToInsureMySelfClickElement);
  await genericMethods.clickOnNextButton();
  await stickyBalkMethods.verifyStickyBalkAndOpbouwVanBerekening(homePageEnum.REISVERZEKERING);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one page of doorlopende verzekeringen for myself$/, async () => {
  await genericMethods.clickOnElement(reisVerzekeringElements.whoToInsureMySelfClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter email (.*) for email mij deze premie berekenen$/, async (emailAddress: string) => {
  await genericMethods.clickOnElement(reisVerzekeringElements.emailMijDezePremieBerekeningButtonClickElement);
  await genericMethods.typeText(reisVerzekeringElements.emailMijDezePremieBerekeningEmailAddressInputElement, emailAddress);
  await genericMethods.clickOnElement(reisVerzekeringElements.emailMijDezePremieBerekeningSendButtonClickElement);
});

Then(/^Customer can select bekijk controleer gegevens for reisverzekering in almost insured page with correct data$/, async () => {
  await genericMethods.clickOnElement(stickyBalkElements.controleerGegevensClickElement);
  await stickyBalkMethods.verifySummaryReisVerzekering();
  await genericMethods.clickOnElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingCloseClickElement);
});

When(/^I enter details of (.*) in your data page of reis verzekeringen$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step one and step two page of kortlopende reisverzekering for myself with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await reisVerzekeringMethods.selectChildrenTillFourYears(dataTable.childrenTillFourYears);
  await genericMethods.typeText(reisVerzekeringElements.leavingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.returnDateInputElement, genericMethods.getDate('seven days'));
  await genericMethods.clickOnElement(reisVerzekeringElements.cancelationCoverageNoClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});


When(/^I enter step one and step two page of kortlopende annuleringsverzekering for myself with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await reisVerzekeringMethods.selectChildrenTillFourYears(dataTable.childrenTillFourYears);
  await genericMethods.typeText(reisVerzekeringElements.leavingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.returnDateInputElement, genericMethods.getDate('seven days'));
  await genericMethods.clickOnElement('[data-label-id="LA_IF11808_16114"] > div > label:nth-child(1)');
  await genericMethods.typeText(reisVerzekeringElements.bookdateTripInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(reisVerzekeringElements.totalValueOfTripInputElement, dataTable.totalValue);
  await genericMethods.clickOnNextButton();  await genericMethods.clickOnNextButton();
});

When(/^I click on the (.*) to insure$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.selectFamilyMembers(familyMembers);

});

Then(/^the (.*) I have checked are present on the page$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.checkFamilyMemberCheckedOnStepOne(familyMembers);
});

// er komt een bericht met "Er is een fout opgetreden" dit komt omdat de mailserver op PAT niet is ingesteld. Wij kunnen hieraan verifieren dat het correct is.
Then(/^Verify the correct wrong message is shown$/, async () => {
  await genericMethods.verifyTextInElement(reisVerzekeringElements.emailMijDezePremieBerekeningSendSuccesfullMessageTextElement, reisVerzekeringElements.emailMijDezePremieBerekeningSendSuccesfullMessageText);
});
