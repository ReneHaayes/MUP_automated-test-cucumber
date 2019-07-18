import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {MijnVerzekeringenElements} from "../../../../pageobjects/mijnUniveParticulier/mijnVerzekeringen/mijnVerzekeringenElements";
import {browser} from "protractor";
import {statusEnum} from "../../../../pageobjects/enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let mijnVerzekeringElements: MijnVerzekeringenElements = new MijnVerzekeringenElements();

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

When(/^Customer selects damage claim with damage number: (.*)$/, async (damageNumber: string) => {
  await genericMethods.clickOnElement(mijnVerzekeringElements.polisDetailsClickElement(damageNumber));
});

Then(/^Verify thank you message for creating a change is correctly shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(mijnVerzekeringElements.changeInsuranceThankYouTextElement, mijnVerzekeringElements.changeInsuranceThankYouText,
    browser.getPageTimeout);
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

Then(/^Verify insurance company (.*) and polis number (.*) is shown correctly$/, async (insuranceCompany: string, polisNumber: string) => {
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.polisNumberTextElement, polisNumber);
  await genericMethods.verifyTextInElementWithXpath(mijnVerzekeringElements.insuranceCompanyExternTextElement, insuranceCompany);
});
