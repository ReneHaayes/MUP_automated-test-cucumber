import {When, Then } from 'cucumber';
import { browser } from 'protractor';
import { genericMethods, zorgWizardElements, zorgWizardCrossSellElements, zorgWizardMethods, personaData } from '@support';
import { crossSellEnum, genderBedanktPaginaEnum, pakkettenEnum, eigenRisicoEnum, moduleEnum } from '../../pageobjects/enum/zorgEnum';
import { personaName } from 'protractor/support/enum';

When(/^I do nothing$/, async() => {
    await browser.sleep(500);
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
    await genericMethods.clickOnElement(zorgWizardElements.closeOverlayButtonClickElement);
});

When(/^I add a collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.addCollective(
        dataTable.collective
    );
});

Then (/^select basic insurance and validate that all aanvullende packages and tand packages are visible and clickable with correct discount with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.CheckPakkettenThuiszorgEnNietThuiszorgCollectief(
        dataTable.collective,
        dataTable.insuranceBasis,
        dataTable.discountBasis,
        dataTable.discountAanvullend
    );
});

Then(/^verify show all basic insurance is not visible$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement, 250);
});

Then(/^verify it is not possible to choose zorg select$/, async () => {
    await browser.sleep(15000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVerzekeringSelectNietMogelijkElement, 250);
});

When(/^I delete the collective in wizard$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.collectiveDeleteButtonClickElement);
});

Then(/^I select basic insurance including collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectInsuranceBasisWithCollective(
        dataTable.insuranceBasis,
        dataTable.collective
    );
});

Then(/^I select basic insurance no collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectInsuranceBasisNoCollective(
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

When(/^I click on Pakketten button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.pakkettenButtonClickElement);
});

When(/^I click on Volgende page one$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement);
});

When(/^I click on Volgende page two$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await genericMethods.waitForElementIsInvisibleClassName(zorgWizardElements.spinnerButtonClickElement, 15000);
    await genericMethods.waitForElementClickable(zorgWizardElements.bijnaVerzekerdControlerenClickElement, 15000);
});

When(/^I click on Volgende page two no wait$/, async () => {
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
});

When(/^I enter BSN on step 3 with (.*)$/, async (persona: string) => {
    await genericMethods.typeText(zorgWizardElements.bijnaVerzekerdBSNTextElement, personaData.getPersonaBsn(persona));
});

When(/^I click on bevestigen step 3$/, async () => {  
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement1, 25000);
    await genericMethods.waitForElementClickable(zorgWizardElements.bedanktMijnUniveZorgClickElement, 15000);
});

When(/^I click on bevestigen step 3 without bedankpagina check$/, async () => {  
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
});

Then(/^validate that doorlopende reis crossSell is visible and shows correct data$/, async () => {
    await browser.sleep(2500);  
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement1, 2500);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1TitleH3TextElement, zorgWizardElements.bedanktCrossSellItem1TitleH3Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1SubtitleTextElement, crossSellEnum.VOORUZELF);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement2, 250);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem2TitleH3TextElement, zorgWizardElements.bedanktCrossSellitem2TitleH3Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem2SubtitleTextElement, crossSellEnum.VOORUZELF);
});

When(/^I select Aanvullend Beter$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
});

Then(/^validate that crossSell is visible and shows correct data$/, async () => {
    await browser.sleep(1000);  
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bedanktCrossSellElement1, 250);
    await zorgWizardMethods.checkCrossSell();
});

When(/^I validate that all legends are visible on step 2$/, async () => {
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensH1TextElement, zorgWizardElements.uwGegevensH1Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensVerzekeringsVerledenTextElement, zorgWizardElements.uwGegevensVerzekeringsVerledenText);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensIngangsdatumTextElement, zorgWizardElements.uwGegevensIngangsdatumText);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensUwgegevensTextElement, zorgWizardElements.uwGegevensUwGegevensText);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensUwBetaalgegevensTextElement, zorgWizardElements.uwGegegevensUwBetaalgegevensText);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensInkomstenTextElement, zorgWizardElements.uwGegevensInkomstenText);
});

When(/^I select geen verzekering overstapreden in dropdown$/, async () => {
    await genericMethods.clickOnElementWithXpath(zorgWizardElements.uwGegevensVerzekeringsVerledenDropdownClickElement);
});

When(/^I validate that all legends are visible on step 3$/, async () => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bijnaVerzekerdH1TextElement, 150);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdBurgerservicenummerTextElement, zorgWizardElements.bijnaVerzekerdBurgerservicenummerText);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});

Then(/^validate that bedanktpagina and all elements are correct with (.*)$/, async (persona: string) => {
    await genericMethods.waitForElementIsPresent(zorgWizardElements.bedanktPaginaCustomerNameTextElement, 5000);
    await genericMethods.waitForElementNotVisible(zorgWizardCrossSellElements.unibolStapEenElement, 5000);
    if(persona == personaName.RONALDO) {
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, genderBedanktPaginaEnum.HEER, 100);
    }  
    else {
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, genderBedanktPaginaEnum.MEVROUW, 100);
    }
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, personaData.getPersonaInitials(persona), 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, personaData.getPersonaPrefix(persona), 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, personaData.getPersonaLastName(persona), 100);
});

Then(/^I answer inkomstenvragen with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.inkomstenCheckbox(
        dataTable.inkomstenNietNL,
        dataTable.inkomstenNL
    );
});

Then(/^validate errormessage inkomstenvragen and it is not possible to navigate to step 3$/, async () => {  
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await genericMethods.verifyTextInElement(zorgWizardElements.uwGegevensInkomstenFoutmeldingTextElement, zorgWizardElements.uwGegevensInkomstenFoutmeldingText);
});

Then(/^validate the introtexts are correctly shown$/, async () => {  
    await genericMethods.verifyTextInElement(zorgWizardElements.introTextAanvullendeVerzekeringenH2TextElement, zorgWizardElements.introTextAanvullendeVerzekeringenH2Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.introTextAanvullendeVerzekeringenTextElement, zorgWizardElements.introTextAanvullendeVerzekeringenText);
    await genericMethods.verifyTextInElement(zorgWizardElements.introTextPartnerKindH2TextElement, zorgWizardElements.introTextPartnerKindH2Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.introTextPartnerKindTextElement, zorgWizardElements.introTextPartnerKindText);
});

When(/^I select eigen risico and validate that the eigen risico text is shown in basis verzekering blok with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.checkEigenRisico(
        dataTable.insuranceBasis,
        dataTable.eigenRisico
    );
});

When(/^I click on show all basic insurances$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement);
});

When(/^I select premie per jaar optie$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.premiePerJaarClickElement);
});

Then(/^Verify that payment by acceptgiro option is not visible and automatische incasso is visible$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.uwGegevensUwBetaalgegevensAcceptgiroClickElement, 250);
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensAutomatischeIncassoClickElement);
});

When(/^I click on Bekijk de vergoedingen button of basic insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.openBasisVergoedingenOverlay(
        dataTable.insuranceBasis
    );
});

Then(/^validate basic insurances are shown correctly in overlay with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.checkBasisVergoedingenOverlay(
        dataTable.insuranceBasis
    );
});

When(/^I click on Bekijk de vergoedingen button of aanvullende insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.openAanvullendVergoedingenOverlay(
        dataTable.insuranceAanvullend
    );
});

Then(/^validate aanvullende insurances are shown correctly in overlay$/, async () => {
    await zorgWizardMethods.checkAanvullendVergoedingenOverlay();
});

When(/^I click on Bekijk de vergoedingen button of tand insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.openTandVergoedingenOverlay(
        dataTable.insuranceTand
    );
});

Then(/^validate tand insurances are shown correctly in overlay$/, async () => {
    await zorgWizardMethods.checkTandVergoedingenOverlay();
});

Then(/^close the overlay$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.closeOverlayButtonClickElement);
    await genericMethods.verifyTextInElement(zorgWizardElements.zorgverzekeringTitelH1TextElement, zorgWizardElements.zorgverzekeringTitelH1Text);
});

Then(/^select basic insurance from overlay with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectBasisVergoedingenOverlay(
        dataTable.insuranceBasis
    );
});

Then(/^select aanvullende insurance from overlay with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectAanvullendVergoedingenOverlay(
        dataTable.insuranceAanvullend
    );
});

Then(/^select tand insurance from overlay with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectTandVergoedingenOverlay(
        dataTable.insuranceTand
    );
});

Then(/^validate overlay is closed and page 1 of wizard is shown$/, async () => {
    await genericMethods.verifyTextInElement(zorgWizardElements.zorgverzekeringTitelH1TextElement, zorgWizardElements.zorgverzekeringTitelH1Text);
});

Then(/^Verify that active policy pop-up is shown$/, async () => {
    await genericMethods.verifyTextInElement(zorgWizardElements.actievePolisOverlayHeaderTextElement, zorgWizardElements.actievePolisOverlayHeaderText);
});

Then (/^validate button navigates to MijnUnive$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.actievePolisOverlayWijzigButtonClickElement);
    await browser.sleep(500);
    await browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    await browser.sleep(500);
    await genericMethods.verifyUrlContains(zorgWizardElements.actievePolisOverlayWijzigMijnUniveURL);
    await genericMethods.verifyTextInElement(zorgWizardElements.mijnUniveH1TextElement, zorgWizardElements.mijnUniveH1Text);
});

When(/^I click on the floating button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.floatingButtonClickElement);
});

Then(/^Validate the floating button is not present$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.floatingButtonClickElement, 100);
});

Then(/^validate that customer is redirected to wizard with the correct products prefilled with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.validateOpbouwPremieBasis(
        dataTable.insuranceBasis
    );
});

When(/^I click on the close floating button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.floatingButtonCloseClickElement);
});

When(/^I click on partner toevoegen button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.addPartnerButtonClickElement);
});

When(/^I click on kind toevoegen button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.addKindButtonClickElement);
});

When(/^I navigate to child tab$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.switchToKindTabButtonClickElement);
});

When(/^I navigate to partner tab$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.switchToPartnerTabButtonClickElement);
});

When(/^I select aanvullende insurance no collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectAanvullendInsurance(
        dataTable.insuranceAanvullend
    );
});

When(/^I select tand insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectTandInsurance(
        dataTable.insuranceTand
    );
});

When(/^I add a partner or child -same insurance checkbox checked- with (.*)$/, async (persona: string) => {
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.sameInsurancePartnerChildCheckBoxClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    await browser.sleep(1500);
});

When(/^I add a partner or child -not same insurance checkbox checked- with (.*)$/, async (persona: string) => {
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
});

When(/^validate partner has the same insurance as policyholder with:$/, async (data) => {
    await browser.sleep(250);
    const dataTable = data.rowsHash();
    await zorgWizardMethods.validateBasisInsurance(
        dataTable.insuranceBasis
    );
    await zorgWizardMethods.validateAanvullendInsurance(
        dataTable.insuranceAanvullend
    );
    await zorgWizardMethods.validateTandInsurance(
        dataTable.insuranceTand
    );
});

When(/^validate child under 18 has the same insurance as policyholder with:$/, async (data) => {
    await browser.sleep(250);
    const dataTable = data.rowsHash();
    await zorgWizardMethods.validateBasisInsuranceUnder18(
        dataTable.insuranceBasis
    );
    await zorgWizardMethods.validateAanvullendInsuranceUnder18(
        dataTable.insuranceAanvullend
    );
    await zorgWizardMethods.validateTandInsuranceUnder18(
        dataTable.insuranceTand
    );
});

Then(/^validate child has no insurance selected$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVrijActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisGeregeldActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisSelectActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.aanvullendGoedActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.aanvullendBeterActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.aanvullendBestActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.tandOngevallenActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.tandGoedActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.tandBeterActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.tandBestActive, 100);
});

Then(/^validate I am able to open accordion for both$/, async () => {
    await zorgWizardMethods.accordeonOpenClose("1");
});

Then(/^validate I am able to close accordion for partner$/, async () => {
    await zorgWizardMethods.accordeonOpenClose("2");
});

Then(/^validate all active insurances are visible$/, async () => {
    await zorgWizardMethods.accordeonProductCheckVisible("2");
    await zorgWizardMethods.accordeonProductCheckVisible("1");
});

Then(/^validate no active insurance is visible for partner$/, async () => { 
    await zorgWizardMethods.accordeonProductCheckNotVisible("2");
});

Then(/^validate that BSN field is not visible on step 3$/, async () => {
    await browser.sleep(500);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.bijnaVerzekerdBurgerservicenummerTextElement, 100);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});

Then(/^I select (.*) for (.*)$/, async (insuranceBasis: string, persona: string) => { 
    //voeg basisverzekering en aanvullende verzekering toe toe
    await zorgWizardMethods.selectInsuranceBasisNoCollective(insuranceBasis);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement);
    //voeg persoonsgegevens op stap 2 toe
    await genericMethods.clickOnElementWithXpath(zorgWizardElements.uwGegevensVerzekeringsVerledenDropdownClickElement);
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
    //navigeer naar stap 3
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
});

Then(/^I change birthdate of policyholder (.*)$/, async (persona: string) => { 
    //navigeer van stap 3 naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //wijzig geboortedatum
    await genericMethods.clearText(zorgWizardElements.uwGegevensBirthdateTextElement, 10);
    await genericMethods.typeText(zorgWizardElements.uwGegevensBirthdateTextElement, personaData.getPersonaBirthDate(persona));
    //navigeer naar stap 3
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await browser.sleep(500);
});

Then(/^validate there is one BSN field on step 3$/, async () => {
    await browser.sleep(500);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bijnaVerzekerdBSN1TextElement, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bijnaVerzekerdBSNPersonaPolicyHolderLabelElement, 100);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});

Then(/^validate there are two BSN fields on step 3$/, async () => {
    await browser.sleep(500);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bijnaVerzekerdBSNPersonaPolicyHolderLabelElement, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.bijnaVerzekerdBSNPersonaFirstAfterPolicyHolderLabelElement, 100);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});

Then(/^I add a partner step 1 and 3 with (.*)$/, async (persona: string) => { 
    //navigeer van stap 3 naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //navigeer van stap 2 naar stap 1
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //voeg partner toe
    await genericMethods.clickOnElement(zorgWizardElements.addPartnerButtonClickElement);
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.sameInsurancePartnerChildCheckBoxClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    //navigeer naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement)
    //voeg persoonsgegevens op stap 2 toe
    await genericMethods.clickOnElementWithXpath(zorgWizardElements.uwGegevensVerzekeringsVerledenDropdownClickElement);
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerInitialsTextElement, personaData.getPersonaInitials(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerPrefixTextElement, personaData.getPersonaPrefix(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerLastnameTextElement, personaData.getPersonaLastName(persona));
    await zorgWizardMethods.clickDataGenderPartner(personaData.getPersonaGender(persona));
    //navigeer naar stap 3
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await browser.sleep(500);
});

Then(/^I add a child (.*)$/, async (persona: string) => { 
    //navigeer van stap 3 naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //navigeer van stap 2 naar stap 1
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //voeg kind toe
    await genericMethods.clickOnElement(zorgWizardElements.addKindButtonClickElement);
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.sameInsurancePartnerChildCheckBoxClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    //navigeer naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement)
    //voeg persoonsgegevens op stap 2 toe
    await genericMethods.clickOnElementWithXpath(zorgWizardElements.uwGegevensVerzekeringsVerledenDropdownClickElement);
    await genericMethods.typeText(zorgWizardElements.uwGegevensKindInitialsTextElement, personaData.getPersonaInitials(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensKindPrefixTextElement, personaData.getPersonaPrefix(persona));
    await genericMethods.typeText(zorgWizardElements.uwGegevensKindLastnameTextElement, personaData.getPersonaLastName(persona));
    await zorgWizardMethods.clickDataGenderKind(personaData.getPersonaGender(persona));
    //navigeer naar stap 3
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
    await browser.sleep(500);
});

Then(/^delete partner$/, async () => { 
    //navigeer van stap 3 naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //navigeer van stap 2 naar stap 1
    await genericMethods.clickOnElement(zorgWizardElements.backButtonEachStepClickElement);
    //delete partner
    await genericMethods.clickOnElement(zorgWizardElements.deletePartnerButtonClickElement);
    //navigeer naar stap 2
    await genericMethods.clickOnElement(zorgWizardElements.volgendeUwGegevensSubmitButtonClickElement)
    //navigeer naar stap 3
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensVolgendeSubmitButtonClickElement);
});

When(/^validate correct basic insurance is active with:$/, async (data) => {
    await browser.sleep(250);
    const dataTable = data.rowsHash();
    await zorgWizardMethods.validateBasisInsurance(
        dataTable.insuranceBasis
    );
});

When (/^I close the opbouw premieberekening overlay$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.closeOpbouwPremieBerekeningButtonClickElement);
});

When (/^I add children with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.addNumberofChildren(
        dataTable.count,
        dataTable.persona2
    );
});

When (/^validate kind toevoegen button is not available$/, async() => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.addKindButtonClickElement, 150);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.achtKinderenMeldingTextElement, 150);
});

When (/^validate partner toevoegen button is not available$/, async() => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.partnerKindToevoegenButtonClickElement, 150);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.partnerAlToegevoegdMeldingTextElement, 150);
});

Then(/^I enter personal data on step 2 of wizard for partner with (.*)$/, async (persona1: string) => { 
    //voeg persoonsgegevens op stap 2 toe
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerInitialsTextElement, personaData.getPersonaInitials(persona1));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerPrefixTextElement, personaData.getPersonaPrefix(persona1));
    await genericMethods.typeText(zorgWizardElements.uwGegevensPartnerLastnameTextElement, personaData.getPersonaLastName(persona1));
    await zorgWizardMethods.clickDataGenderPartner(personaData.getPersonaGender(persona1));
});

When (/^I enter personal data on step 2 of wizard for children with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.enterPersonalDataNumberOfChildren(
        dataTable.count,
        dataTable.persona2
    );
});

When (/^I select zorg geregeld, eigen risico 885, aanvullend beter and tand beter$/, async () => { 
    //toevoegen van geregeld, eigen risico 885, aanvullend beter en tand beter voor hoofdverzekerde
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await zorgWizardMethods.eigenRisicoMultipleApplicants(1, 5);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBeterClickElement);
});

When (/^I select zorg select, eigen risico 485, aanvullend best and tand goed partner (.*)$/, async (persona: string) => { 
    //voeg partner toe
    await genericMethods.clickOnElement(zorgWizardElements.addPartnerButtonClickElement);
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    //toevoegen van select, eigen risico 485, aanvullend best en tand goed voor partner
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
    await zorgWizardMethods.eigenRisicoMultipleApplicants(2, 1);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
});

When (/^I select zorg vrij en eigen risico 885 kind >18 één (.*)$/, async (persona: string) => { 
    //voeg eerste kind boven 18 toe
    await genericMethods.clickOnElement(zorgWizardElements.addKindButtonClickElement);
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    //toevoegen van vrij en eigen risico 885 voor eerste kind onder 18
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await zorgWizardMethods.eigenRisicoMultipleApplicants(3, 5);
});

When (/^I select zorg select, eigen risico 385, fysio18, tand ongevallen and werelddekking kind >18 twee (.*)$/, async (persona: string) => { 
    //voeg tweede kind boven 18 toe
    await genericMethods.clickOnElement(zorgWizardElements.addKindButtonClickElement);
    await genericMethods.typeText(zorgWizardElements.geboortedatumPartnerKindTextElement, personaData.getPersonaBirthDate(persona));
    await genericMethods.clickOnElement(zorgWizardElements.partnerKindToevoegenButtonClickElement);
    //toevoegen van select, eigen risico 385, fysio18, tand ongevallen en werelddekking voor tweede kind onder 18
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
    await zorgWizardMethods.eigenRisicoMultipleApplicants(4, 0);
    await genericMethods.clickOnElement(zorgWizardElements.modulesButtonClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleFysio18ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTandOngevallenClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleBuitenlanddekkingClickElement);
});

Then (/^validate I am able to open and close all accordions$/, async() => {
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("5");
    await zorgWizardMethods.accordeonOpenClose("4");
    await zorgWizardMethods.accordeonOpenClose("3");
    await zorgWizardMethods.accordeonOpenClose("2");
    await zorgWizardMethods.accordeonOpenClose("1");
    await zorgWizardMethods.accordeonOpenClose("1");
    await zorgWizardMethods.accordeonOpenClose("2");
    await zorgWizardMethods.accordeonOpenClose("3");
    await zorgWizardMethods.accordeonOpenClose("4");
    await zorgWizardMethods.accordeonOpenClose("5");
    await zorgWizardMethods.accordeonOpenClose("6");
});

Then (/^open premie opbouw overlay$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.bekijkOpbouwPremieButtonClickElement);
    await browser.sleep(500);
});

Then (/^validate data of all subscriptions in premie opbouw overlay$/, async() => {
    //valideer pakketten van hoofdverzekerde
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGGEREGELD);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[1]', 
    eigenRisicoEnum.EigenRisico_885);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[2]', 
    pakkettenEnum.AANVULLENDBETER);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[3]', 
    pakkettenEnum.TANDBETER);
    //valideer pakketten van partner
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[2]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGSELECT);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[2]//div[@class="unive-summary-item__col"])[1]', 
    eigenRisicoEnum.EigenRisico_485);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[2]//div[@class="unive-summary-item__col"])[2]', 
    pakkettenEnum.AANVULLENDBEST);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[2]//div[@class="unive-summary-item__col"])[3]', 
    pakkettenEnum.TANDGOED);
    //valideer pakketten van eerste kind >18
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[3]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGVRIJ);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[3]//div[@class="unive-summary-item__col"])[1]', 
    eigenRisicoEnum.EigenRisico_885);
    //valideer pakketten van tweede kind >18
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[4]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGSELECT);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[4]//div[@class="unive-summary-item__col"])[1]', 
    eigenRisicoEnum.EigenRisico_385);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[4]//div[@class="unive-summary-item__col"])[2]', 
    moduleEnum.FYSIO18);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[4]//div[@class="unive-summary-item__col"])[3]', 
    moduleEnum.TANDONGEVALLENMODULE);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[4]//div[@class="unive-summary-item__col"])[4]', 
    moduleEnum.BUITENLANDDEKKING);    
    //valideer pakketten van eerste kind <18
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[5]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGGEREGELD);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[5]//div[@class="unive-summary-item__col"])[2]', 
    pakkettenEnum.AANVULLENDBEST); 
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[5]//div[@class="unive-summary-item__col"])[3]', 
    pakkettenEnum.TANDBETER);   
    //valideer pakketten van tweede kind <18
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[6]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGGEREGELD);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[6]//div[@class="unive-summary-item__col"])[2]', 
    pakkettenEnum.AANVULLENDBEST); 
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[6]//div[@class="unive-summary-item__col"])[3]', 
    pakkettenEnum.TANDBETER);  
});

Then (/^validate overlay wachttijd Tand Best opens$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.actievePolisOverlayHeaderTextElement, 150);
    await genericMethods.verifyTextInElement(zorgWizardElements.actievePolisOverlayHeaderTextElement, zorgWizardElements.tandBestWachttijdOverlayHeaderText);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.tandBestWachttijdOverlayPakketWijzigenButtonClickElement, 150);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.tandBestWachttijdOverlayVolgendeUwGegevensButtonClickElement, 150);
});

Then (/^I click on Volgende button in overlay wachttijd Tand Best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.tandBestWachttijdOverlayVolgendeUwGegevensButtonClickElement);
});

When (/^I add a hoofdverzekerde with zorg select, aanvullend best en tand goed$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
});

When (/^I add for partner zorg vrij, aanvullend goed en tand best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
});

When (/^I validate child under 18 has zorg vrij, aanvullend best and tand best$/, async() => {
    await browser.sleep(500);
    await genericMethods.scrollTilTop();
    await browser.sleep(500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendBestActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandBestActive, 1000);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I validate child under 18 has zorg geregeld, aanvullend best and tand goed$/, async() => {
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisGeregeldActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendBestActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandGoedActive, 1000);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I change hoofdverzekerde from zorg select to zorg geregeld$/, async() => {
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("1");
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await zorgWizardMethods.accordeonOpenClose("1");
});

When (/^I validate child under 18 has zorg vrij$/, async() => {
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 1000);
});

When (/^I add to partner collectief aanvullend goed$/, async() => {
    await zorgWizardMethods.accordeonOpenClose("2");
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringCollectiefAanvullendGoedClickElement);
    await zorgWizardMethods.accordeonOpenClose("2");
});

When (/^validate child under 18 has zorg vrij, collectief aanvullend goed$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18CollectiefAanvullendGoedActive, 1000);
});

When (/^I add a hoofdverzekerde with zorg geregeld, aanvullend best en tand goed$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
});

When (/^I add for partner zorg vrij en tand best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
});

When (/^I change hoofdverzekerde to zorg select and modules fysio18, tand ongevallen, tand250 and werelddekking$/, async() => {
    await zorgWizardMethods.accordeonOpenClose("1");
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.modulesButtonClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleFysio18ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTandOngevallenClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTand250ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleBuitenlanddekkingClickElement);
    await browser.sleep(5000);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("1");
});

When (/^I validate child under 18 has zorg select and modules fysio18, tand ongevallen, tand500 and werelddekking$/, async() => {
    await browser.sleep(500);
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisSelectActive, 1500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18ModuleFysio18Active, 1500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18ModuleTandOngevallenActive, 1500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18ModuleTand500Active, 1500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18ModuleBuitenlanddekkingActive, 1500);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I change partner to zorg select and modules fysio9, tand500 and werelddekking$/, async() => {
    await browser.sleep(500);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("2");
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.modulesButtonClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleFysio9ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleTand500ClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.moduleBuitenlanddekkingClickElement);
    await browser.sleep(5000);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("2");
});

When (/^I validate child under 18 has zorg geregeld, aanvullend best and tand best$/, async() => {
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisGeregeldActive, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendBestActive, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandBestActive, 100);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I add for child above 18 zorg vrij, aanvullend best en tand best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("4");
    await browser.sleep(500);
});

When (/^I change hoofdverzekerde and partner to zorg geregeld$/, async() => {
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("1");
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await zorgWizardMethods.accordeonOpenClose("1");
    await zorgWizardMethods.accordeonOpenClose("2");
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await zorgWizardMethods.accordeonOpenClose("2");    
});

When (/^validate child under 18 has zorg geregeld and Tand Ongevallen$/, async() => {
    await browser.sleep(500);
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisGeregeldActive, 1500);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18BasisSelectActive, 1500);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleFysio18Active, 1500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18ModuleTandOngevallenActive, 1500);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleTand500Active, 1500);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleBuitenlanddekkingActive, 1500);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^add to partner tand goed$/, async() => {
    await zorgWizardMethods.accordeonOpenClose("2");
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("2");
});

When (/^validate child under 18 has zorg geregeld and tand goed$/, async() => {
    await browser.sleep(500);
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisGeregeldActive, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandGoedActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleFysio18Active, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleTandOngevallenActive, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleTand500Active, 100);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.kindOnder18ModuleBuitenlanddekkingActive, 100);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I add a hoofdverzekerde with zorg vrij$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
});

When (/^I add for partner zorg geregeld, collectief aanvullend goed and collectief tand goed$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringCollectiefAanvullendGoedClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenCollectiefTandGoedClickElement);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("2");
});

When (/^I validate child under 18 has zorg vrij, collectief aanvullend goed and collectief tand goed extended accordeon$/, async() => {
    await browser.sleep(500);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18CollectiefAanvullendGoedActive, 100);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18CollectiefTandGoedActive, 100);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I validate child under 18 has zorg vrij, collectief aanvullend goed and collectief tand goed$/, async() => {
    await browser.sleep(500);
    await zorgWizardMethods.accordeonOpenClose("3");
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18CollectiefAanvullendGoedActive, 1000);
    await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18CollectiefTandGoedActive, 1000);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("3");
});

When (/^I add for first child above 18 zorg vrij and collectief tand best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenCollectiefTandBestClickElement);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("4");
});

When (/^I add for second child above 18 zorg vrij and collectief tand best$/, async() => {
    await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenCollectiefTandBestClickElement);
    await genericMethods.scrollTilTop();
    await zorgWizardMethods.accordeonOpenClose("5");
});

When (/^I delete child under 18$/, async() => {
    await genericMethods.scrollTilTop();
    await genericMethods.clickOnElement(zorgWizardElements.deleteFirstChildButtonClickElement);
});


//CrossSellInWizard steps hieronder

Then (/^validate step 2 is buitenland step and all elements are present$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapEenElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapTweeElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapDrieElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapVierElement, 2500);
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.H1TextElement, zorgWizardCrossSellElements.H1Text);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.crossSellFirstDRVElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.crossSellSecondDRVMetAnnuleringElement, 2500);
});

Then (/^there are only 3 unibols present$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapEenElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapTweeElement, 2500);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.unibolStapDrieElement, 2500);
    await genericMethods.waitForElementNotVisible(zorgWizardCrossSellElements.unibolStapVierElement, 2500);
});

Then(/^validate that doorlopende reis crossSell is not visible$/, async () => {
    await browser.sleep(1000);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.bedanktCrossSellElement1, 5000);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.bedanktCrossSellElement2, 5000);
});

When(/^I click on Volgende Buitenland page$/, async () => {
    await genericMethods.clickOnElement(zorgWizardCrossSellElements.nextButtonClickElement);
});

When(/^adjust startdate of cross sell product$/, async () => {
    await genericMethods.clearText(zorgWizardCrossSellElements.buitenlandUwGegevensIngangsdatumDRVDateField, 10);
    await genericMethods.typeText(zorgWizardCrossSellElements.buitenlandUwGegevensIngangsdatumDRVDateField, zorgWizardCrossSellElements.buitenlandUwGegevensIngangsdatumDRV);
});

When (/^I select reisproduct with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectReisProduct(
        dataTable.reisProduct
    );
});

When (/^I answer acceptatiequestions with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.answerAcceptatieQuestions(
        dataTable.verzekeringsVerleden,
        dataTable.strafrechtelijkVerleden,
        dataTable.schadeVerleden
    );
});

When(/^I validate text geen voorlopige dekking is correct$/, async () => {
    await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bijnaVerzekerdGeenVoorlopigeDekkingTextElement, zorgWizardCrossSellElements.bijnaVerzekerdGeenVoorlopigeDekkingText, 250);
});

When(/^I validate overlay controleren has correct zorg and DRV information$/, async () => {
    //overlay openen
    await genericMethods.clickOnElement(zorgWizardCrossSellElements.overlayControlerenClickElement);
    //valideer zorg van hoofdverzekerde
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[1]', 
    pakkettenEnum.ZORGVRIJ);
    await genericMethods.verifyTextContainsInElementWithXpath('((//div[@class="unive-summary__applicant"])[1]//div[@class="unive-summary-item__col"])[1]', 
    eigenRisicoEnum.EigenRisico_385);
    //valideer DRV hoofdverzekerde
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.overlayControlerenH2TitelTextElement, zorgWizardCrossSellElements.overlayControlerenH2TitelDRVText);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.overlayControlerenDRVDekking1TextElement, 250);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.overlayControlerenDRVDekking2TextElement, 250);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.overlayControlerenDRVDekking3TextElement, 250);
    await genericMethods.waitForElementIsVisible(zorgWizardCrossSellElements.overlayControlerenDRVPremieTextElement, 250);
    //valideer tekst GEEN voorlopige dekking
    await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.overlayControlerenDRVGeenVoorlopigeDekkingTextElement , zorgWizardCrossSellElements.bijnaVerzekerdGeenVoorlopigeDekkingText, 250);
    //sluit overlay
    await genericMethods.clickOnElement(zorgWizardCrossSellElements.overlayControlerenCloseButtonClickElement);
});

Then(/^validate all elements for zorg and (.*) are correct same startdate$/, async (reisProduct: string) => { 
    //Valideer header
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaH1DRVTextElement, zorgWizardCrossSellElements.bedankpaginaH1DRVText);
    //valideer DRV teksten op bedankpagina
    if(reisProduct == crossSellEnum.DOORLOPENDEREISVERZEKERING) {
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelZorgverzekeringTextElement, crossSellEnum.ZORGVERZEKERING);
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelDRVTextElement, crossSellEnum.DOORLOPENDEREISVERZEKERING);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumGelijkDRVText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPolisTextElement, zorgWizardCrossSellElements.bedankpaginaPolisText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPremieTextElement, zorgWizardCrossSellElements.bedankpaginaPremieText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.ZORGVERZEKERING, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.DOORLOPENDEREISVERZEKERING, 250);
    }
    //valideer DRV met annulering teksten op bedankpagina
    else if(reisProduct == crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING) {
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelZorgverzekeringTextElement, crossSellEnum.ZORGVERZEKERING);
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelDRVTextElement, crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumGelijkDRVAnnuleringText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPolisTextElement, zorgWizardCrossSellElements.bedankpaginaPolisText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPremieTextElement, zorgWizardCrossSellElements.bedankpaginaPremieText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.ZORGVERZEKERING, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING, 250);
    }
    else {
        throw new Error('There is no correct choice for' + reisProduct);
    } 
});

Then(/^validate all elements for zorg and (.*) are correct different startdate$/, async (reisProduct: string) => { 
    //Valideer header
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaH1DRVTextElement, zorgWizardCrossSellElements.bedankpaginaH1DRVText);
    //valideer DRV teksten op bedankpagina
    if(reisProduct == crossSellEnum.DOORLOPENDEREISVERZEKERING) {
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelZorgverzekeringTextElement, crossSellEnum.ZORGVERZEKERING);
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelDRVTextElement, crossSellEnum.DOORLOPENDEREISVERZEKERING);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumOngelijkZorgText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumOngelijkDRVText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPolisTextElement, zorgWizardCrossSellElements.bedankpaginaPolisText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPremieTextElement, zorgWizardCrossSellElements.bedankpaginaPremieText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.ZORGVERZEKERING, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.DOORLOPENDEREISVERZEKERING, 250);
    }
    //valideer DRV met annulering teksten op bedankpagina
    else if(reisProduct == crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING) {
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelZorgverzekeringTextElement, crossSellEnum.ZORGVERZEKERING);
        await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.bedankpaginaSubtitelDRVTextElement, crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumOngelijkZorgText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaIngangsdatumTextElement, zorgWizardCrossSellElements.bedankpaginaIngangsdatumOngelijkDRVAnnuleringText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPolisTextElement, zorgWizardCrossSellElements.bedankpaginaPolisText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaPremieTextElement, zorgWizardCrossSellElements.bedankpaginaPremieText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.ZORGVERZEKERING, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bedankpaginaHeeftUNogVragenTextElement, crossSellEnum.DOORLOPENDEREISENANNULERINGSVERZEKERING, 250);
    }
    else {
        throw new Error('There is no correct choice for' + reisProduct);
    } 
});

When(/^I validate text voorlopige dekking is correct$/, async () => {
    await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bijnaVerzekerdVoorlopigeDekkingTextElement, zorgWizardCrossSellElements.bijnaVerzekerdVoorlopigeDekkingZorgText, 250);
    await genericMethods.verifyTextContainsInElement(zorgWizardCrossSellElements.bijnaVerzekerdVoorlopigeDekkingTextElement, zorgWizardCrossSellElements.bijnaVerzekerdVoorlopigeDekkingDRVText, 250);
});

When(/^I validate overlay controleren has correct zorg and DRV met annulering information with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.validateVoorlopigeDekking(
        dataTable.verzekeringsVerleden,
        dataTable.strafrechtelijkVerleden,
        dataTable.schadeVerleden
    );
});

Then(/^validate that subtitles show correct label on buitenlandpagina$/, async () => {
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.crossSellFirstSubtitleTextElement, crossSellEnum.VOORUZELFPARTNER);
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.crossSellSecondSubtitleTextElement, crossSellEnum.VOORUZELFPARTNER);
});

When(/^I validate and close pop-up DRV ingangsdatum$/, async () => {
    await browser.sleep(1000);
    await genericMethods.verifyTextInElement(zorgWizardCrossSellElements.buitenlandUwGegevensPopupIngangsdatumDRVH2TextElement, zorgWizardCrossSellElements.buitenlandUwGegevensPopupIngangsdatumDRVH2Text);
    await genericMethods.clickOnElement(zorgWizardCrossSellElements.buitenlandUwGegevensPopupCloseButtonClickElement);
});

When(/^I validate that correct premietermijn and text are in the stickybalk$/, async () => {
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.stickyBalkJaarPremieTextElement, zorgWizardElements.stickyBalkJaarPremieText, 250);
    await genericMethods.verifyTextInElement(zorgWizardElements.stickyBalkBetalingsTextElement, zorgWizardElements.collectiefOverlayBetalingsText);
});

Then(/^validate betalingsoptie is correct on Uw Gegevens page$/, async () => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.uwGegevensBetalingsMethodeRadioButtonTextElement, 1000);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.uwGegevensBetalingsMethodeRadioButtonTextElement, zorgWizardElements.uwGegevensBetalingsMethodeRadioButtonText, 250);
});

When(/^I change to (.*) page$/, async (page: string) => {
    await genericMethods.goToPage(page);
});