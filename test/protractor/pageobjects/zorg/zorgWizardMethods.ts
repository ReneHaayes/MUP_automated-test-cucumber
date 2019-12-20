import { genericMethods, zorgWizardElements } from "../../support";
import { pakkettenEnum, crossSellEnum, collectievenEnum, inkomstenDropdownEnum, eigenRisicoEnum } from "../enum/zorgEnum";
import { gender } from "../enum/genericEnum";

export class ZorgWizardMethods {

    async addCollective(collective: string){
        await genericMethods.typeText(zorgWizardElements.addCollectiveTextInputElement, collective);
        await genericMethods.clickOnElement(zorgWizardElements.addCollectiveFirstSearchResultClickElement);
        await genericMethods.clickOnElement(zorgWizardElements.addCollectiveButtonClickElement);
    }

    async CheckPakkettenNietThuiszorgCollectief(collective: string, insuranceBasis: string, discountBasis: string, discountAanvullend: string){
    if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
        //klik op en verifieer basisverzekering
        await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, zorgWizardElements.collectiefKortingText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, collective, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, discountBasis, 250);
    }
    else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
        //klik op en verifieer basisverzekering
        await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, zorgWizardElements.collectiefKortingText, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, collective, 250);
        await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, discountBasis, 250);
    }
    if(collective == collectievenEnum.CARINOVASERVICEPAKKET){
    //klik op en verifieer aanvullend goed
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringCollectiefAanvullendGoedClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendGoedTextElement, pakkettenEnum.COLLECTIEFAANVULLENDGOED, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, discountAanvullend, 100);
    //klik op en verifieer aanvullend beter
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringCollectiefAanvullendBeterClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendBeterTextElement, pakkettenEnum.COLLECTIEFAANVULLENDBETER, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, discountAanvullend, 100);
    //klik op en verifieer aanvullend best
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringCollectiefAanvullendBestClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendBestTextElement, pakkettenEnum.COLLECTIEFAANVULLENDBEST, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, discountAanvullend, 100);    
    }
    else if (collective != collectievenEnum.CARINOVASERVICEPAKKET){
    //klik op en verifieer aanvullend goed
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendGoedTextElement, pakkettenEnum.AANVULLENDGOED, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedKortingTextElement, discountAanvullend, 100);
    //klik op en verifieer aanvullend beter
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendBeterTextElement, pakkettenEnum.AANVULLENDBETER, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterKortingTextElement, discountAanvullend, 100);
    //klik op en verifieer aanvullend best
    await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendBestTextElement, pakkettenEnum.AANVULLENDBEST, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, zorgWizardElements.collectiefKortingText, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, collective, 100);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestKortingTextElement, discountAanvullend, 100);
    }
    //klik op en verifieer tand ongevallen
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandOngevallenClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.tandOngevallenTextElement, pakkettenEnum.TANDONGEVALLEN, 100);
    //klik op en verifieer tand goed
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.tandGoedTextElement, pakkettenEnum.TANDGOED, 100);
    //klik op en verifieer tand beter
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBeterClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.tandBeterTextElement, pakkettenEnum.TANDBETER, 100);
    //klik op en verifieer tand best
    await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
    await genericMethods.verifyTextContainsInElement(zorgWizardElements.tandBestTextElement, pakkettenEnum.TANDBEST, 100);
    }

    async selectInsuranceBasisWithCollective(insuranceBasis: string, collective: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            //klik op en verifieer basisverzekering
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
            await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, 250);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            //klik op en verifieer basisverzekering
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
            if(collective == collectievenEnum.OMRINGMEDEWERKERS){
                await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, 250);
                await genericMethods.verifyTextContainsInElement(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, collectievenEnum.OMRINGMEDEWERKERS, 100);
            }
            else {
                await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, 250);
            }
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis );
        }
    }

    async selectInsuranceBasisNoCollective(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringSelectClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async clickDataGender(input: string) {
        switch (input) {
          case gender.MALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensGenderMaleRadioButtonElement);
            break;
          }
          case gender.FEMALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensGenderFemaleRadioButtonElement);
            break;
          }
          default: {
            throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
          }
        }
    }

    async clickDataGenderPartner(input: string) {
        switch (input) {
          case gender.MALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensPartnerGenderMaleRadioButtonElement);
            break;
          }
          case gender.FEMALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensPartnerGenderFemaleRadioButtonElement);
            break;
          }
          default: {
            throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
          }
        }
    }

    async clickDataGenderKind(input: string) {
        switch (input) {
          case gender.MALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensKindGenderMaleRadioButtonElement);
            break;
          }
          case gender.FEMALE: {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensKindGenderFemaleRadioButtonElement);
            break;
          }
          default: {
            throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
          }
        }
    }

    async checkCrossSell() {
        if(await genericMethods.getText(zorgWizardElements.bedanktCrossSellItem1TitleH3TextElement) == crossSellEnum.RECHTSBIJSTANDVERZEKERING) {
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1SubtitleTextElement, crossSellEnum.VOORUZELF);
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1USP1TextElement, crossSellEnum.USP1RECHTSBIJSTAND);
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1USP2TextElement, crossSellEnum.USP2RECHTSBIJSTAND);
        }
        else if(await genericMethods.getText(zorgWizardElements.bedanktCrossSellItem1TitleH3TextElement) == crossSellEnum.ONGEVALLENVERZEKERING) {
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1SubtitleTextElement, crossSellEnum.VOORUZELF);
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1USP1TextElement, crossSellEnum.USP1ONGEVALLEN);
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1USP2TextElement, crossSellEnum.USP2ONGEVALLEN);
        }
        else if(await genericMethods.getText(zorgWizardElements.bedanktCrossSellItem1TitleH3TextElement) == crossSellEnum.AANSPRAKELIJKHEIDSVERZEKERING) {
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1SubtitleTextElement, crossSellEnum.VOORUZELF);
            await genericMethods.verifyTextInElement(zorgWizardElements.bedanktCrossSellItem1USP1TextElement, crossSellEnum.USP1AANSPRAKELIJKHEID);
        }
        else {
            throw new Error('There is no correct header for CrossSellItem');
        }
    }

    async inkomstenCheckbox(inkomstenNietNL: string, inkomstenNL: string) {
        if(inkomstenNietNL == inkomstenDropdownEnum.NEE) {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionOneRadioNoClickElement);
        }
        else if(inkomstenNietNL == inkomstenDropdownEnum.JA && inkomstenNL == inkomstenDropdownEnum.JA) {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionOneRadioYesClickElement);
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionTwoRadioYesClickElement);
        }
        else if(inkomstenNietNL == inkomstenDropdownEnum.JA && inkomstenNL == inkomstenDropdownEnum.NEE) {
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionOneRadioYesClickElement);
            await genericMethods.clickOnElement(zorgWizardElements.uwGegevensInkomstenQuestionTwoRadioNoClickElement);
        }
        else {
            throw new Error('There is no correct choice for inkomen');
        } 
    }

    async checkEigenRisico(insuranceBasis: string, eigenRisico: string) {
        await genericMethods.clickOnElementWithXpath(this.getEigenRisico(eigenRisico));
        if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            if(eigenRisico == eigenRisicoEnum.EigenRisico_385){
            await genericMethods.waitForElementNotVisible(this.checkEigenRisicoTextBasis(insuranceBasis), 100);
            await genericMethods.waitForElementNotVisible(this.checkEigenRisicoTextBasis(insuranceBasis), 100);
            }
            else if(eigenRisico != eigenRisicoEnum.EigenRisico_385){
            await genericMethods.verifyTextContainsInElement(this.checkEigenRisicoTextBasis(insuranceBasis), zorgWizardElements.eigenRisicoEersteText, 100);
            await genericMethods.verifyTextContainsInElement(this.checkEigenRisicoTextBasis(insuranceBasis), zorgWizardElements.eigenRisicoTweedeText, 100);
            await genericMethods.verifyTextInElement(zorgWizardElements.eigenRisicoTextElement, zorgWizardElements.eigenRisicoText);
            }
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            if(eigenRisico == eigenRisicoEnum.EigenRisico_385){
            await genericMethods.waitForElementNotVisible(this.checkEigenRisicoTextBasis(insuranceBasis), 100);
            await genericMethods.waitForElementNotVisible(this.checkEigenRisicoTextBasis(insuranceBasis), 100);
                }
            else if(eigenRisico != eigenRisicoEnum.EigenRisico_385){
            await genericMethods.verifyTextContainsInElement(this.checkEigenRisicoTextBasis(insuranceBasis), zorgWizardElements.eigenRisicoEersteText, 100);
            await genericMethods.verifyTextContainsInElement(this.checkEigenRisicoTextBasis(insuranceBasis), zorgWizardElements.eigenRisicoTweedeText, 100);
            await genericMethods.verifyTextInElement(zorgWizardElements.eigenRisicoTextElement, zorgWizardElements.eigenRisicoText);
            }
        }
        else {
            throw new Error('There is no correct choice for basisverzekering');
        }           
    }

    checkEigenRisicoTextBasis(input: string): string {
        switch (input) {
            case pakkettenEnum.ZORGSELECT: {
                return zorgWizardElements.eigenRisicoBasisVerzekeringSelectTextElement;
            }
        }
        switch (input) {
            case pakkettenEnum.ZORGGEREGELD: {
                return zorgWizardElements.eigenRisicoBasisVerzekeringGeregeldTextElement;
            }
        }
    }

    getEigenRisico(input: string): string {
        switch (input) {
            case eigenRisicoEnum.EigenRisico_385: {
                return zorgWizardElements.eigenRisico385DropdownClickElement;
            }
            case eigenRisicoEnum.EigenRisico_485: {
                return zorgWizardElements.eigenRisico485DropdownClickElement;
            }
            case eigenRisicoEnum.EigenRisico_585: {
                return zorgWizardElements.eigenRisico585DropdownClickElement;
            }
            case eigenRisicoEnum.EigenRisico_685: {
                return zorgWizardElements.eigenRisico685DropdownClickElement;
            }
            case eigenRisicoEnum.EigenRisico_785: {
                return zorgWizardElements.eigenRisico785DropdownClickElement;
            }
            case eigenRisicoEnum.EigenRisico_885: {
                return zorgWizardElements.eigenRisico885DropdownClickElement;
            }
            default: {
                throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
              }
        }
    }

    async openBasisVergoedingenOverlay(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.bekijkVergoedingenOverlayZorgVrijClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.bekijkVergoedingenOverlayZorgSelectClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringShowAllBasicInsurancesClickElement);
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.bekijkVergoedingenOverlayZorgGeregeldClickElement);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async checkBasisVergoedingenOverlay(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgVrijTextElement, pakkettenEnum.ZORGVRIJ);
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgSelectTextElement, pakkettenEnum.ZORGSELECT);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgVrijTextElement, pakkettenEnum.ZORGVRIJ);
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgSelectTextElement, pakkettenEnum.ZORGSELECT);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgVrijTextElement, pakkettenEnum.ZORGVRIJ);
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgSelectTextElement, pakkettenEnum.ZORGSELECT);
            await genericMethods.verifyTextInElementWithXpath(zorgWizardElements.vergoedingenOverlayZorgGeregeldTextElement, pakkettenEnum.ZORGGEREGELD);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async selectBasisVergoedingenOverlay(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.selecteerVergoedingZorgVrijButtonClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.selecteerVergoedingZorgSelectButtonClickElement);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.clickOnElementWithXpath(zorgWizardElements.selecteerVergoedingZorgGeregeldButtonClickElement);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async selectAanvullendInsurance(insuranceAanvullend: string){
        if(insuranceAanvullend == pakkettenEnum.AANVULLENDGOED){
            await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendGoedClickElement);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBETER){
            await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBeterClickElement);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBEST){
            await genericMethods.clickOnElement(zorgWizardElements.aanvullendeVerzekeringAanvullendBestClickElement);
        }
        else {
            throw new Error('No correct aanvullend insurance found for' + insuranceAanvullend);
        }
    }    

    async selectTandInsurance(insuranceTand: string){
        if(insuranceTand == pakkettenEnum.TANDONGEVALLEN){
            await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandOngevallenClickElement);
        }
        else if(insuranceTand == pakkettenEnum.TANDGOED){
            await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandGoedClickElement);
        }
        else if(insuranceTand == pakkettenEnum.TANDBETER){
            await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBeterClickElement);
        }
        else if(insuranceTand == pakkettenEnum.TANDBEST){
            await genericMethods.clickOnElement(zorgWizardElements.tandVerzekeringenTandBestClickElement);
        }
        else {
            throw new Error('No correct tand insurance found for' + insuranceTand);
        }
    }
    
    async validateBasisInsurance(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.basisVrijActive, 100);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.basisGeregeldActive, 100);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.basisSelectActive, 100);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async validateAanvullendInsurance(insuranceAanvullend: string){
        if(insuranceAanvullend == pakkettenEnum.AANVULLENDGOED){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.aanvullendGoedActive, 100);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBETER){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.aanvullendBeterActive, 100);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBEST){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.aanvullendBestActive, 100);
        }
        else {
            throw new Error('No correct aanvullende insurance found for' + insuranceAanvullend);
        }
    }

    async validateTandInsurance(insuranceTand: string){
        if(insuranceTand == pakkettenEnum.TANDONGEVALLEN){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.tandOngevallenActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDGOED){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.tandGoedActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDBETER){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.tandBeterActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDBEST){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.tandBestActive, 100);
        }
        else {
            throw new Error('No correct tand insurance found for' + insuranceTand);
        }
    }

    async validateBasisInsuranceUnder18(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisVrijActive, 100);
        }
        else if(insuranceBasis = pakkettenEnum.ZORGSELECT){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisSelectActive, 100);
        }
        else if(insuranceBasis = pakkettenEnum.ZORGGEREGELD){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18BasisGeregeldActive, 100);
        }
        else {
            throw new Error('No correct basic insurance found for' + insuranceBasis);
        }
    }

    async validateAanvullendInsuranceUnder18(insuranceAanvullend: string){
        if(insuranceAanvullend == pakkettenEnum.AANVULLENDGOED){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendGoedActive, 100);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBETER){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendBeterActive, 100);
        }
        else if(insuranceAanvullend == pakkettenEnum.AANVULLENDBEST){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18AanvullendBestActive, 100);
        }
        else {
            throw new Error('No correct aanvullende insurance found for' + insuranceAanvullend);
        }
    }

    async validateTandInsuranceUnder18(insuranceTand: string){
        if(insuranceTand == pakkettenEnum.TANDONGEVALLEN){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandOngevallenActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDGOED){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandGoedActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDBETER){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandBeterActive, 100);
        }
        else if(insuranceTand == pakkettenEnum.TANDBEST){
            await genericMethods.waitForElementIsVisible(zorgWizardElements.kindOnder18TandBestActive, 100);
        }
        else {
            throw new Error('No correct tand insurance found for' + insuranceTand);
        }
    }

    async accordeonOpenClose(data: string){
        await genericMethods.clickOnElement('unive-applicants:nth-child(' + data + ') > div > unive-applicants-heading > div > div > div');
    }

    async accordeonProductCheckVisible(data:string){
        await genericMethods.waitForElementIsVisible('unive-applicants:nth-child(' + data + ') > div > unive-applicants-content > unive-basic-insurances > div >' +
        ' unive-basic-insurances-coverage.unive-basic-insurances-coverage.unive-basic-insurances-coverage--active', 100);    
    }

    async accordeonProductCheckNotVisible(data:string){
        await genericMethods.waitForElementNotVisible('unive-applicants:nth-child(' + data + ') > div > unive-applicants-content > unive-basic-insurances > div >' +
        ' unive-basic-insurances-coverage.unive-basic-insurances-coverage.unive-basic-insurances-coverage--active', 100);    
    }


    async validateOpbouwPremieBasis(insuranceBasis: string){
        await genericMethods.clickOnElement(zorgWizardElements.bekijkOpbouwPremieButtonClickElement);
        if(insuranceBasis == pakkettenEnum.ZORGSELECT){
            await genericMethods.verifyTextContainsInElement(zorgWizardElements.bekijkOpbouwPremieFirstTextElement, pakkettenEnum.ZORGSELECT, 100);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            await genericMethods.verifyTextContainsInElement(zorgWizardElements.bekijkOpbouwPremieFirstTextElement, pakkettenEnum.ZORGVRIJ, 100);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            await genericMethods.verifyTextContainsInElement(zorgWizardElements.bekijkOpbouwPremieFirstTextElement, pakkettenEnum.ZORGGEREGELD, 100);
        }
        else{
            throw new Error('No correct basis insurance found for' + insuranceBasis);
        }
    }
}