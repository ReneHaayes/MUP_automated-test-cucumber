import { genericMethods, zorgWizardElements } from "../../support";
import { pakkettenEnum } from "../enum/zorgEnum";

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

    async selectInsuranceBasis(insuranceBasis: string){
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
}