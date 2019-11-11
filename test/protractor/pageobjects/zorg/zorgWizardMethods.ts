import { genericMethods, zorgWizardElements } from "../../support";
import { pakkettenEnum, crossSellEnum, collectievenEnum, inkomstenDropdownEnum } from "../enum/zorgEnum";
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

    async selectInsuranceBasisWithCollective(insuranceBasis: string){
        if(insuranceBasis == pakkettenEnum.ZORGVRIJ){
            //klik op en verifieer basisverzekering
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringVrijClickElement);
            await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, 250);
        }
        else if(insuranceBasis == pakkettenEnum.ZORGGEREGELD){
            //klik op en verifieer basisverzekering
            await genericMethods.clickOnElement(zorgWizardElements.basisVerzekeringGeregeldClickElement);
            await genericMethods.waitForElementNotVisible(zorgWizardElements.basisVerzekeringCollectiefKortingTextElement, 250);
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
}