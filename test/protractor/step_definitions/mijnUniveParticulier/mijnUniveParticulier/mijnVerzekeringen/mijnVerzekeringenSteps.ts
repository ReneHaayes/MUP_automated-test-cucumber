import {Then, When} from 'cucumber';
import {browser} from 'protractor';
import {
  genericMethods,
  mijnSchadeEnClaimElements,
  mijnSchadeEnClaimMethods,
  mijnVerzekeringElements
} from '@support';
import {selectSchadeEnNuEnum, statusEnum} from '@enum';

When(/^Customer selects algemene voorwaarden$/, async () => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.algemeneVoorwaardenClickElement);
});

When(/^Customer select polis with polis number: (.*)$/, async (polisNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polisNumber));
});

When(/^Customer clicks on (.*) on Polisdetailpage to show Schade en nu flow$/, async (verzekeringSchadeEnNu: string) => {

  switch (verzekeringSchadeEnNu) {
    case selectSchadeEnNuEnum.AUTOVERZEKERING: {
      await genericMethods.clickOnElement(mijnVerzekeringElements.kiesVerzekeringAutoClickElement);
      await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.schadeEnNuClickElement, browser.getPageTimeout);
      await genericMethods.clickOnElement(mijnVerzekeringElements.schadeEnNuClickElement);
      break;
    }
    case selectSchadeEnNuEnum.BOOTVERZEKERING: {
      await genericMethods.clickOnElement(mijnVerzekeringElements.kiesVerzekeringBootClickElement);
      await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.schadeEnNuClickElement, browser.getPageTimeout);
      await genericMethods.clickOnElement(mijnVerzekeringElements.schadeEnNuClickElement);
      break;
    }
    case selectSchadeEnNuEnum.CAMPERVERZEKERING: {
      await genericMethods.clickOnElement(mijnVerzekeringElements.kiesVerzekeringCamperClickElement);
      await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.schadeEnNuClickElement, browser.getPageTimeout);
      await genericMethods.clickOnElement(mijnVerzekeringElements.schadeEnNuClickElement);
      break;
    }
    default: {
      throw new Error('The input: "" ' + verzekeringSchadeEnNu + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
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

When(/^Customer goes to verzekeringskaarten for (.*)$/, async (polis: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(polis));
  await genericMethods.clickOnElement(mijnVerzekeringElements.verzekeringKiesAutoClickElement);
  await genericMethods.clickOnElement(mijnVerzekeringElements.verzekeringsKaartenUrlClickElement);
});

When(/^Customer selects damage claim with damage number: (.*)$/, async (damageNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.schadeDetailsClickElement(damageNumber));
});

When(/^Customer uploads (.*) for claim with damage number: (.*)$/, async (filename: string, damageNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(damageNumber));
  await browser.sleep(2000);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.uploadingDocumentsLinkClickElement);
  await genericMethods.uploadFile(mijnSchadeEnClaimElements.uploadingDocumentsFileUploadInputElement, mijnSchadeEnClaimMethods.uploadingDocumentFileName(filename));
  await genericMethods.typeText(mijnSchadeEnClaimElements.uploadingDocumentsDescriptionInputElement, 'test123');
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.uploadingDocumentUploadButtonClickElement);
});

When(/^Customer claims a (.*) damage by filling in the form for polis$/, async (polis: string) => {
  // STEP ONE
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimClickElement);
  await genericMethods.acceptAlertWhenAvailable();
  // STEP TWO to SIX
  await mijnSchadeEnClaimMethods.chooseInsuranceTypeForDamage(polis);
  // STEP SEVEN-SLOTVRAGEN
  await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimAgreementClickElement, browser.getPageTimeout);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimAgreementClickElement);
  await genericMethods.clickOnElement(mijnSchadeEnClaimElements.damageClaimSaveAndCommitButtonClickElement);
  // STEP EIGHT-BEVESTIGEN
  await genericMethods.waitForElementIsVisible(mijnSchadeEnClaimElements.damageClaimSuccesMessageTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextContainsInElement(mijnSchadeEnClaimElements.damageClaimSuccesMessageTextElement, mijnSchadeEnClaimElements.damageClaimSuccesMessageText, browser.getPageTimeout);
});

Then(/^Verify uploaded (.*) is show in the list beneath$/, async (filename: string) => {
  await genericMethods.verifyTextInElement(mijnSchadeEnClaimElements.uploadingDocumentFileNameTextElement, filename);
});

Then(/^Verify thank you message for creating a change is correctly shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnVerzekeringElements.changeInsuranceThankYouTextElement, mijnVerzekeringElements.changeInsuranceThankYouText, browser.getPageTimeout);
});

Then(/^Verify text for SchadeEnNu is correctly shown$/, async () => {
  await genericMethods.waitForElementIsVisible(mijnVerzekeringElements.schadeEnNuTextElement, browser.getPageTimeout);
  await genericMethods.verifyTextContainsInElement(mijnVerzekeringElements.schadeEnNuTextElement, mijnVerzekeringElements.schadeEnNuText, browser.getPageTimeout);
});

Then(/^Verify url for verzekeringskaarten contains the following (.*)$/, async (urlToVerify: string) => {
  await browser.sleep(2500);
  await browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
  });
  await genericMethods.verifyUrlContainsIgnoreCase('verzekeringskaarten');
  await genericMethods.verifyUrlContainsIgnoreCase(urlToVerify);
});

Then(/^Verify algemene voorwaarden is available on screen as a pdf$/, async () => {
  const handles_3 = await browser.getAllWindowHandles();
  await browser.switchTo().window(handles_3[handles_3.length - 1]);
  const handles_4 = await browser.getAllWindowHandles();
  await browser.switchTo().window(handles_4[handles_4.length - 1]);
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
  await genericMethods.clickOnElement(mijnSchadeEnClaimMethods.wijzigenVerzekeringSelectSnelLinkPolisClickElement(polisNumber));
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
