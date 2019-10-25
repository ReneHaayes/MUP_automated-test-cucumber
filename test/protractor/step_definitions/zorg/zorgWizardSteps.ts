import {When, Then } from 'cucumber';
import { browser } from 'protractor';
import { genericMethods, zorgWizardElements, zorgWizardMethods, personaData} from '../../support';
import { crossSellEnum } from '../../pageobjects/enum/zorgEnum';

When(/^I do nothing$/, async() => {
    await browser.sleep(250);
});

Then (/^validate the Zorgverzekering page is correctly loaded$/, async() => {
    await genericMethods.verifyTextInElement(zorgWizardElements.zorgverzekeringTitelH1TextElement, zorgWizardElements.zorgverzekeringTitelH1Text);
});

When(/^I click on add collective button in wizard$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.zorgverzekeringAddCollectiveButtonOpenOverlayClickElement);
});

Then (/^validate that the collective overlay shows with correct elements$/, async() => {
    await genericMethods.verifyTextInElement(zorgWizardElements.addCollectiveTitelH2TextElement, zorgWizardElements.addCollectiveTitelH2Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.addCollectiveTitelSubtextElement, zorgWizardElements.addCollectiveTitelSubtext);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.addCollectiveTextInputElement, 250);
    await genericMethods.clickOnElement(zorgWizardElements.addCollectiveCloseOverlayButtonClickElement);
});

When(/^I add a collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.addCollective(
        dataTable.collective
    );
});

Then (/^select basic insurance and validate that all aanvullende packages -not thuiszorgcollective- and tand packages are visible and clickable with correct discount with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.CheckPakkettenNietThuiszorgCollectief(
        dataTable.collective,
        dataTable.insuranceBasis,
        dataTable.discountBasis,
        dataTable.discountAanvullend
    );
});

When(/^I select basic insurance Zorg Vrij$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
});

Then(/^verify show all basic insurance is not visible$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement, 250);
});

Then(/^verify it is not possible to choose zorg select$/, async () => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVerzekeringSelectNietMogelijkElement, 250);
});

When(/^I delete the collective in wizard$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.collectiveDeleteButtonClickElement);
});

Then(/^select basic insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectInsuranceBasis(
        dataTable.insuranceBasis
    );
});

Then(/^verify that all aanvullende packages and tand packages -not collective- are clickable$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandOngevallenClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBeterClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
});

When(/^I select basic insurance Zorg Select$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
});

Then(/^Verify I am not able to add collective$/, async () => {
    await genericMethods.verifyTextInElement(zorgWizardElements.collectiefNietMogelijkTextElement, zorgWizardElements.collectiefNietMogelijkText);
});

Then(/^Verify that all modules are clickable$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.modulesButtonClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleFysio9ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleFysio18ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTandOngevallenClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTand250ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTand500ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleBuitenlanddekkingClickElement);
});

When(/^Click on Pakketten button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.pakkettenButtonClickElement);
});

When(/^I select insurances on step 1 of wizard$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.pakkettenButtonClickElement);
});

When(/^I click on Volgende page one$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement);
});

When(/^I click on Volgende page two$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
});

When(/^I enter personal data on step 2 of wizard with (.*)$/, async (persona: string) => {
    await genericMethods.typeText(zorgWizardElements.uwGegevensBirthdateTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensInitalsTextElement, personaData.getPersonaInitials(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPrefixTextElement, personaData.getPersonaPrefix(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensLastnameTextElement, personaData.getPersonaLastName(persona));
    await zorgWizardMethods.clickDataGender(personaData.getPersonaGender(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPostalcodeTextElement, personaData.getPersonaZipcode(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensHousenumberTextElement, personaData.getPersonaHouseNumber(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensHousenumberAdditionTextElement, personaData.getPersonaHouseNumberAddition(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensEmailaddressTextElement, personaData.getPersonaEmailAddress(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPhoneNumberTextElement, personaData.getPersonaPhoneNumber(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensIBANTextElement, personaData.getPersonaAccountNumber(persona));
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensAutomatischeIncassoClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionOneRadioNoClickElement);
});

When(/^I enter BSN on step 3 with (.*)$/, async (persona: string) => {
    await genericMethods.typeText(zorgWizardElements.bijnaVerzekerdBSNTextElement, personaData.getPersonaBsn(persona));
});

When(/^I click on bevestigen before crossSell$/, async () => {  
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await browser.sleep(1000);
});

Then(/^validate that doorlopende reis crossSell is visible and shows correct data$/, async () => {
    await browser.sleep(1000);  
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement1, 250);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1TitleH3TextElement, crossSellEnum.DOORLOPENDEREISVERZEKERING);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1SubtitleTextElement, crossSellEnum.VOORUZELF);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement2, 250);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem2TitleH3TextElement, crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem2SubtitleTextElement, crossSellEnum.VOORUZELF);
});

When(/^I select basic insurance Zorg Vrij with Aanvullend Goed$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
});

Then(/^validate that crossSell is visible and shows correct data$/, async () => {
    await browser.sleep(1000);  
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement1, 250);
    await zorgWizardMethods.checkCrossSell();
});