import {When, Then } from 'cucumber';
import { browser } from 'protractor';
import { genericMethods, zorgWizardElements, zorgWizardMethods, personaData} from '../../support';
import { crossSellEnum, genderBedanktPaginaEnum, pakkettenEnum } from '../../pageobjects/enum/zorgEnum';

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
    await genericMethods.clickOnElement(zorgWizardElements.closeOverlayButtonClickElement);
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

Then(/^verify show all basic insurance is not visible$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement, 250);
});

Then(/^verify it is not possible to choose zorg select$/, async () => {
    await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVerzekeringSelectNietMogelijkElement, 250);
});

When(/^I delete the collective in wizard$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.collectiveDeleteButtonClickElement);
});

Then(/^I select basic insurance including collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.selectInsuranceBasisWithCollective(
        dataTable.insuranceBasis
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
    await browser.sleep(250);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdBurgerservicenummerTextElement, zorgWizardElements.bijnaVerzekerdBurgerservicenummerText);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});

Then(/^validate that bedanktpagina and all elements are correct with (.*)$/, async (persona: string) => {
    await browser.sleep(250);  
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.bedanktPaginaCustomerNameTextElement, genderBedanktPaginaEnum.MEVROUW, 100);
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

Then(/^Verify that payment by acceptgiro option is visible$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.uwGegevensUwBetaalgegevensAcceptgiroClickElement);
});

When(/^I click on Bekijk de vergoedingen button of basic insurance with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.openBasisVergoedingenOverlay(
        dataTable.insuranceBasis
    );
});

Then(/^validate basic insurances are shown correctly with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgWizardMethods.checkBasisVergoedingenOverlay(
        dataTable.insuranceBasis
    );
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
    await genericMethods.verifyUrlIs(zorgWizardElements.actievePolisOverlayWijzigMijnUniveURL);
    await genericMethods.verifyTextInElement(zorgWizardElements.mijnUniveH1TextElement, zorgWizardElements.mijnUniveH1Text);
});

When(/^I click on the floating button$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.floatingButtonClickElement);
});

Then(/^Validate the floating button is not present$/, async () => {
    await genericMethods.waitForElementNotVisible(zorgWizardElements.floatingButtonClickElement, 100);
});

Then(/^validate that customer is redirected to wizard with the correct products prefilled$/, async () => {
    await genericMethods.clickOnElement(zorgWizardElements.bekijkOpbouwPremieButtonClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.bekijkOpbouwPremieFirstTextElement, pakkettenEnum.ZORGSELECT, 100);
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
    await browser.sleep(250);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdH1TextElement, zorgWizardElements.bijnaVerzekerdH1Text);
    await genericMethods.waitForElementNotVisible(zorgWizardElements.bijnaVerzekerdBurgerservicenummerTextElement, 100);
    await genericMethods.verifyTextInElement(zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdTextElement, zorgWizardElements.bijnaVerzekerdUBentBijnaVerzekerdText);
});