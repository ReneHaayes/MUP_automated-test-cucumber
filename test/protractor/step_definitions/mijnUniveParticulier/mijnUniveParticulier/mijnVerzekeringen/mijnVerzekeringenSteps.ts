import {Then, When} from "cucumber";
import {browser} from "protractor";
import {
  genericMethods, mijnSchadeEnClaimElements, mijnSchadeEnClaimMethods, mijnVerzekeringElements
} from "@support";
import {statusEnum} from "@enum";

When(/^Customer selects algemene voorwaarden$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.algemeneVoorwaardenClickElement);
});

When(/^Customer select polis with polis number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polisNumber));
});

When(/^Customer changes the external polis$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.changeInsuranceClickElement);
  await genericMethods.typeText(mijnVerzekeringElements.changeInsuranceDescriptionAreaInputElement, 'test123');
  await genericMethods.clickOnElement(mijnVerzekeringElements.changeInsuranceSubmitButtonClickElement);
});

When(/^Customer selects (.*) polis with polis number: (.*)$/, async (polisStatus: string, polisNumber: string) => {
  switch (polisStatus) {
    case statusEnum.ENDED: {
      await genericMethods.clickOnElement(mijnVerzekeringElements.showEndedAndActiveInsurancesClickElement);
      await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polisNumber));
      break;
    }
    case statusEnum.ACTIVE: {
      await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polisNumber));
      break;
    }
  }
});

When(/^Customer goest to verzekeringskaarten for polis with polisnumber (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polisNumber));
  await genericMethods.clickOnElement(mijnVerzekeringElements.verzekeringsKaartenUrlClickElement);
  // await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.verzekeringsKaartenWaitElement, 10000);
});

Then(/^Verify url for verzekeringskaarten contains the following (.*)$/, async (urlToVerify: string) => {
  await browser.sleep(2500);
  await browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
  });
  await genericMethods.verifyUrlContainsIgnoreCase('verzekeringskaarten');
  await genericMethods.verifyUrlContainsIgnoreCase(urlToVerify);
});

When(/^Customer selects damage claim with damage number: (.*)$/, async (damageNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(damageNumber));
});

When(/^Customer uploads (.*) for claim with damage number: (.*)$/, async (filename: string, damageNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(damageNumber));
  await browser.sleep(2000);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.uploadingDocumentsLinkClickElement);
  await genericMethods.uploadFile(mijnSchadeEnClaimElements.uploadingDocumentsFileUploadInputElement, mijnSchadeEnClaimElements.uploadingDocumentFileName(filename));
  await genericMethods.typeText(mijnSchadeEnClaimElements.uploadingDocumentsDescriptionInputElement, 'test123');
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.uploadingDocumentUploadButtonClickElement);
});

When(/^Customer claims a autoverzekering damage by filling in the form for polis (.*)$/, async (polisNumber: string) => {
  await mijnSchadeEnClaimMethods.damageClaimFillInSchadeGegevens(polisNumber);
  //STEP THREE
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCityInputElement, 'Zwolle');
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectCauseClickElement('Wat is er gebeurd?', 'Parkeerschade'));
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectSituationClickElement('Welke situatie is voor u van toepassing?', 'De andere partij stond geparkeerd'));
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimInfluenceOfAlcoholFalseClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOtherPartyDamageTrueClickElement);
  await genericMethods.clickOnNextButton();
//STEP FOUR
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimLicensePlateInputElement, '06-HN-DL');
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimResponsibilityOtherPartyClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimDamageToOwnVehicleTrueClickElement);
  await genericMethods.clickOnNextButton();
  //STEP FIVE
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneClickElement);
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimContactThroughPhoneInputElement, '0612345678');
  await genericMethods.clickOnTakeOutInsuranceNowButton();
  // await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimCloseLightBoxClickElement);
  //STEP SIX
  await genericMethods.waitForElementClickable(mijnSchadeEnClaimElements.damageClaimStepSixNextButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepSixNextButtonClickElement);
  //STEP SEVEN
  await genericMethods.waitForElementClickable(mijnSchadeEnClaimElements.damageClaimAgreementClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAgreementClickElement);
  await genericMethods.waitForElementClickable(mijnSchadeEnClaimElements.damageClaimSaveAndCommitButtonClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSaveAndCommitButtonClickElement);
});

When(/^Customer claims a woonverzekering damage by filling in the form for polis (.*)$/, async (polisNumber: string) => {
  await mijnSchadeEnClaimMethods.damageClaimFillInSchadeGegevens(polisNumber);
  //STEP THREE
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCityInputElement, 'Zwolle');
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectCauseClickElement('Wat is de oorzaak van de schade?', 'Water'));
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectSituationClickElement('Waardoor is de waterschade ontstaan?', 'Leidinglekkage'));
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectSituationClickElement('Waar is de lekkage ontstaan?', 'Ik weet het niet'));
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimInboedelStolenFalseClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimDamageToHouseTrueClickElement);
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectSituationClickElement('Waar is de schade ontstaan?', 'In of aan de woning'));
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimPermanentLivingTrueClickElement);
  await genericMethods.clickOnNextButton();
  //STEP FOUR
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimWhatIsDamaged('Muur'));
  await genericMethods.clickOnNextButton();
  //STEP FIVE
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimTotalDamageAmountInputElement, '100');
  await genericMethods.clickOnNextButton();
  //STEP SIX
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimDescriptionOfDamageInputElement, 'test123');
  await genericMethods.clickOnNextButton();
  //STEP SEVEN
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOtherCompanyInvolvementFalseClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnTakeOutInsuranceNowButton();
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimStepSixNextButtonClickElement);
  //STEP EIGHT
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAgreementClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSaveAndCommitButtonClickElement);
});

When(/^Customer claims a doorlopende reisverzekering damage by filling in the form for polis (.*)$/, async (polisNumber: string) => {
  await mijnSchadeEnClaimMethods.damageClaimFillInSchadeGegevens(polisNumber);
  //STEP THREE
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectCauseClickElement('Wat is er gebeurd?', 'Spullen verloren, gestolen of beschadigd'));
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectCauseClickElement('Wat is er gebeurd met uw  spullen?', 'Spullen gestolen'));
  await genericMethods.clickOnElementWithXpath(mijnSchadeEnClaimElements.damageClaimSelectCauseClickElement('Welke situatie is van toepassing?', 'Diefstal'));
  await genericMethods.selectInDropdown(mijnSchadeEnClaimElements.damageClaimSelectCountrySelectElement, mijnSchadeEnClaimElements.damageClaimSelectEspanaSelectElement);
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimGoingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnTAB(mijnSchadeEnClaimElements.damageClaimGoingDateInputElement);
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimReturnDateInputElement, genericMethods.getDate('seven days'));
  await genericMethods.clickOnTAB(mijnSchadeEnClaimElements.damageClaimReturnDateInputElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimPrivateTripClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimInsuredIllingWasOnTheTripClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimHappenedBeforeTripClickElement);
  await genericMethods.clickOnNextButton();
  //STEP FOUR
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimTravelDocumentsStolenClickElement);
  await genericMethods.clickOnNextButton();
  //STEP FIVE
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimCancelDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimBookingDateInputElement, genericMethods.getDate('today'));
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOneNotaClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimOmboekingFalseClickElement);
  await genericMethods.typeText(mijnSchadeEnClaimElements.damageClaimTotalPriceInputElement, '15000');
  await genericMethods.clickOnNextButton();
  //STEP SIX
  await genericMethods.clickOnTakeOutInsuranceNowButton();
  //STEP SEVEN
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAgreementClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSaveAndCommitButtonClickElement);
});

Then(/^Verify uploaded (.*) is show in the list beneath$/, async (filename: string) => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.uploadingDocumentFileNameTextElement, filename);
});

Then(/^Verify thank you message for creating a change is correctly shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnVerzekeringElements.changeInsuranceThankYouTextElement, mijnVerzekeringElements.changeInsuranceThankYouText, browser.getPageTimeout);
});

Then(/^Verify algemene voorwaarden is available on screen as a pdf$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.algemeneVoorwaardenPdfElement, browser.getPageTimeout);
  await genericMethods.verifyUrlContains(mijnVerzekeringElements.algemeneVoorwaardenUrlCheckText);
});

Then(/^Verify polis status (.*) and polis number (.*) is shown correctly$/, async (polisStatus: string, polisNumber: string) => {
  switch (polisStatus) {
    case statusEnum.ENDED: {
      await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.polisNumberTextElement, polisNumber);
      await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.statusPolisTextElement, mijnVerzekeringElements.statusEndedText);
      break;
    }
    case statusEnum.ACTIVE: {
      await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.polisNumberTextElement, polisNumber);
      break;
    }
  }
});

Then(/^Verify damage claim with damage number (.*) is shown correctly$/, async (damageNumber: string) => {
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.damageNumberTextElement, damageNumber);
});

When(/^Customer selects wijzigen verzekering snel link for polis with polis number (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.wijzigenVerzekeringSnelLinkClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.wijzigenVerzekeringSelectSnelLinkPolisClickElement(polisNumber));
});

Then(/^Verify correct wijzigen verzekering form is loaded for polis polisnumber: (.*)$/, async (polisNumber: string) => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.polisDetailsTitleTextElement, mijnSchadeEnClaimElements.polisDetailsTitleText);
  await genericMethods.verifyUrlContainsIgnoreCase('mijnunive/polisoverzicht/polisdetails?pnr=' + polisNumber);
});

Then(/^Verify insurance company (.*) and polis number (.*) is shown correctly$/, async (insuranceCompany: string, polisNumber: string) => {
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.polisNumberTextElement, polisNumber);
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.insuranceCompanyExternTextElement, insuranceCompany);
});


Then(/^Verify damage claim succes message is shown$/, async () => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.damageClaimSuccesMessageTextElement, mijnSchadeEnClaimElements.damageClaimSuccesMessageText);
});
