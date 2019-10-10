import { GenericMethods } from "../generic/genericMethods";
import { ZorgCheckToolElements } from "./zorgCheckToolElements";
import { multipleChoiceEnum, genericEnum } from "../enum/genericEnum";
import { pakkettenEnum, collectievenEnum } from "../enum/zorgEnum";
import { browser } from "protractor";

let genericMethods: GenericMethods = new GenericMethods();
let zorgCheckToolElements: ZorgCheckToolElements = new ZorgCheckToolElements();

export class ZorgCheckToolMethods {

    async fillInNineQuestions(questionOne: string, questionTwo: string, questionThree: string, questionFour: string, 
        questionFive: string, questionSix: string, questionSeven: string, questionEight: string, questionNine: string) {
    await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
    //answer question 1 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 2 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 3 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionThree));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 4 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFour));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 5 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFive));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 6 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSix));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 7 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSeven));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 8 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionEight));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 9 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionNine));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    await browser.sleep(1000);
      }

    getZorgCheckToolChoice(input: string): string {
        switch (input) {
            case multipleChoiceEnum.A: {
                return zorgCheckToolElements.answerAZorgCheckToolClickElement;
            }
            case multipleChoiceEnum.B: {
                return zorgCheckToolElements.answerBZorgCheckToolClickElement;
            }
            case multipleChoiceEnum.C: {
                return zorgCheckToolElements.answerCZorgCheckToolClickElement;
            }
            case multipleChoiceEnum.D: {
                return zorgCheckToolElements.answerDZorgCheckToolClickElement;
            }
        }
    }

    async fillInEightQuestions(questionOne: string, questionTwo: string, questionThree: string, questionFour: string, 
        questionFive: string, questionSix: string, questionSeven: string, questionEight: string) {
    await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
    //answer question 1 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 2 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 3 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionThree));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 4 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFour));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 5 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFive));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 6 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSix));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 7 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSeven));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    //answer question 8 and click next button
    await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionEight));
    await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    await browser.sleep(1000);
    }

    async checkAdvice(adviceOneBV: string, adviceOneAVTV: string, adviceOneTV: string, adviceTwoBV: string, 
        adviceTwoAVTV: string, adviceTwoTV: string) {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceKiesDezeVerzekeringClickElement, zorgCheckToolElements.adviceKiesDezeVerzekeringButtonText);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceKiesDezeVerzekeringClickElement, zorgCheckToolElements.adviceKiesDezeVerzekeringButtonText);
    //advies1    
        if(adviceOneAVTV == genericEnum.GEEN && adviceOneTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceBasisVerzekeringZorgCheckToolTextElement, adviceOneBV);
        }    
        else if(adviceOneTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceBasisVerzekeringZorgCheckToolTextElement, adviceOneBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceAVTVZorgCheckToolTextElement, adviceOneAVTV);
        }
        else if(adviceOneAVTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceBasisVerzekeringZorgCheckToolTextElement, adviceOneBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceAVTVZorgCheckToolTextElement, adviceOneTV);
        }
        else{
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceBasisVerzekeringZorgCheckToolTextElement, adviceOneBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceAVTVZorgCheckToolTextElement, adviceOneAVTV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceTandZorgCheckToolTextElement, adviceOneTV);
        }
    //advies2     
        if(adviceTwoAVTV == genericEnum.GEEN && adviceTwoTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceBasisVerzekeringZorgCheckToolTextElement, adviceTwoBV);
        }    
        else if(adviceTwoTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceBasisVerzekeringZorgCheckToolTextElement, adviceTwoBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceAVTVZorgCheckToolTextElement, adviceTwoAVTV);
        }
        else if(adviceTwoAVTV == genericEnum.GEEN){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceBasisVerzekeringZorgCheckToolTextElement, adviceTwoBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceAVTVZorgCheckToolTextElement, adviceTwoTV);
        }
        else{
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceBasisVerzekeringZorgCheckToolTextElement, adviceTwoBV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceAVTVZorgCheckToolTextElement, adviceTwoAVTV);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceTandZorgCheckToolTextElement, adviceTwoTV);
        }        
    }

    async fillInOneQuestionAndClickNext(questionOne: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async fillInOneQuestion(questionOne: string) {
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
    }

    async fillInTwoQuestionsAndClickNext(questionOne: string, questionTwo: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async fillInSevenQuestionsAndClickNext(questionOne: string, questionTwo: string, questionThree: string, questionFour: string, questionFive: string, 
        questionSix: string, questionSeven: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionThree));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFour));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFive));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSix));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionSeven));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async fillInFourQuestionsAndClickNext(questionOne: string, questionTwo: string, questionThree: string, questionFour: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionThree));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFour));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async fillInFiveQuestionsAndClickNext(questionOne: string, questionTwo: string, questionThree: string, questionFour: string, questionFive: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionThree));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFour));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionFive));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async checkITextsForQuestionTwo() {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationElement, zorgCheckToolElements.question2InformationText);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationHeaderElement, zorgCheckToolElements.question2InformationHeaderText);
        await genericMethods.clickOnElement(zorgCheckToolElements.closeInformationOverlayClickElement);
    }

    async checkITextsForQuestionThree() {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationElement, zorgCheckToolElements.question3InformationText);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationHeaderElement, zorgCheckToolElements.question3InformationHeaderText);
        await genericMethods.clickOnElement(zorgCheckToolElements.closeInformationOverlayClickElement);
    }

    async checkITextsForQuestionEight() {
        await genericMethods.verifyTextContainsInElement(zorgCheckToolElements.questionInformationElement, zorgCheckToolElements.question8InformationText, 500);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationHeaderElement, zorgCheckToolElements.question8InformationHeaderText);
        await genericMethods.clickOnElement(zorgCheckToolElements.closeInformationOverlayClickElement);
    }

    async checkITextBelowAnswerQuestionFive() {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.informationBelowSelectedAnswersTextElement, zorgCheckToolElements.question5answerDInformationText);
    }

    async checkITextBelowAnswerQuestionSix() {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.informationBelowSelectedAnswersTextElement, zorgCheckToolElements.question6AnswerDInformationText);
    }

    async fillInEmailAddress(emailaddress: string) {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.emailDitAdviesOverlayHeaderElement, zorgCheckToolElements.emailDitAdviesOverlayHeaderText);
        await genericMethods.typeText(zorgCheckToolElements.emailDitAdviesOverlayDataEmailAddressElement, emailaddress);
    }

    async checkPrefill(adviceOneBV: string, adviceOneAVTV: string, adviceOneTV: string) {
      
        if(adviceOneBV == pakkettenEnum.ZORGVRIJ){
            await genericMethods.waitForElementIsVisible(zorgCheckToolElements.ZorgVrijActiveElement, 500);

            if(adviceOneAVTV == pakkettenEnum.AANVULLENDGOED){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBETER){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBEST){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else {
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
            }
        }    
        else if(adviceOneBV == pakkettenEnum.ZORGSELECT){
            await genericMethods.waitForElementIsVisible(zorgCheckToolElements.zorgSelectActiveElement, 500);

            if(adviceOneAVTV == pakkettenEnum.AANVULLENDGOED){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBETER){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBEST){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else {
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
            }
        }
        else{
            await genericMethods.waitForElementIsVisible(zorgCheckToolElements.zorgGeregeldActiveElement, 500);

            if(adviceOneAVTV == pakkettenEnum.AANVULLENDGOED){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBETER){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else if(adviceOneAVTV == pakkettenEnum.AANVULLENDBEST){
                await genericMethods.waitForElementIsVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);

                if(adviceOneTV == pakkettenEnum.TANDGOED){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandGoedActiveElement, 500);    
                }
                else if(adviceOneTV == pakkettenEnum.TANDBETER){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                }
                else if(adviceOneTV == pakkettenEnum.TANDBEST){
                    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
                else {
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
                }
            }
            else {
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.aanvullendBestActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandGoedActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBeterActiveElement, 500);
                await genericMethods.waitForElementNotVisible(zorgCheckToolElements.tandBestActiveElement, 500);
            }
        }
    }

    async addCollective(collective: string){
        await browser.sleep(1000);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.voegUwCollectiefToeH1OverlayElement, zorgCheckToolElements.voegUwCollectiefToeH1OverlayText);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, zorgCheckToolElements.additionalInfoTextCollectiveOverlayText);
        await genericMethods.clickOnElement(zorgCheckToolElements.voegUwCollectiefToeInputElement);
        await genericMethods.typeText(zorgCheckToolElements.voegUwCollectiefToeInputElement, collective);
        await genericMethods.clickOnElement(zorgCheckToolElements.selectFirstCollectiefElement);
    }


    async collectiveCheck(collective: string) {
        if(collective == collectievenEnum.OMRINGMEDEWERKERS){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.toegevoegdCollectiefElement, collectievenEnum.OMRINGMEDEWERKERS);
            await genericMethods.waitForElementNotVisible(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, 500);
            await genericMethods.waitForElementIsVisible(zorgCheckToolElements.voegCollectiefToeButtonClickElement, 500);
        }
        else if(collective == collectievenEnum.CARINOVASERVICEPAKKET){
            await genericMethods.verifyTextInElement(zorgCheckToolElements.toegevoegdCollectiefElement, collectievenEnum.CARINOVASERVICEPAKKET);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, zorgCheckToolElements.additionalInfoThuiszorgCollectiefText);
            await genericMethods.waitForElementNotVisible(zorgCheckToolElements.voegCollectiefToeButtonClickElement, 500);
        }
        else if(collective == collectievenEnum.HUURDERSVERENIGINGIJSSELSTEIN){      
            await genericMethods.verifyTextInElement(zorgCheckToolElements.toegevoegdCollectiefElement, collectievenEnum.HUURDERSVERENIGINGIJSSELSTEIN);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, zorgCheckToolElements.additionalInfoTextCollectiveOverlayNoZorgCollectiveText);
            await genericMethods.waitForElementNotVisible(zorgCheckToolElements.voegCollectiefToeButtonClickElement, 500);
        }
    }

    async checkItjes(adviceOneBV: string, adviceOneAVTV: string, adviceOneTV: string, adviceTwoBV: string, 
        adviceTwoAVTV: string, adviceTwoTV: string) {
        if(adviceOneBV == pakkettenEnum.ZORGVRIJ && adviceOneAVTV == pakkettenEnum.AANVULLENDGOED && adviceOneTV == pakkettenEnum.TANDBETER &&
            adviceTwoBV == pakkettenEnum.ZORGVRIJ && adviceTwoAVTV == pakkettenEnum.AANVULLENDBETER && adviceTwoTV == pakkettenEnum.TANDGOED){
            //validatie voor het 1e scenario waarin na beantwoording advies 1 = vrij, aanvullend goed, tand beter en advies 2 = vrij, aanvullend beter, tand goed
            //validatie Aanvullend Goed Overlay advies 1
            await genericMethods.clickOnElement(zorgCheckToolElements.aanvullendAdviesEenItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.AANVULLENDGOED);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeAanvullendGoedText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Tand Beter Overlay advies 1
            await genericMethods.clickOnElement(zorgCheckToolElements.tandAdviesEenItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.TANDBETER);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeTandBeterText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Aanvullend Beter advies 2
            await genericMethods.clickOnElement(zorgCheckToolElements.aanvullendAdviesTweeItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.AANVULLENDBETER);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeAanvullendBeterText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Tand Goed advies 2
            await genericMethods.clickOnElement(zorgCheckToolElements.tandAdviesTweeItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.TANDGOED);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeTandGoedText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
        }
        else if (adviceOneBV == pakkettenEnum.ZORGSELECT && adviceOneAVTV == pakkettenEnum.AANVULLENDBEST && adviceOneTV == pakkettenEnum.TANDBEST &&
            adviceTwoBV == pakkettenEnum.ZORGSELECT && adviceTwoAVTV == pakkettenEnum.AANVULLENDBETER && adviceTwoTV == pakkettenEnum.TANDBETER){
            //validatie voor het 2e scenario waarin na beantwoording advies 1 = select, aanvullend best, tand best en advies 2 = select, aanvullend beter, tand beter
            //validatie Aanvullend Best Overlay advies 1
            await genericMethods.clickOnElement(zorgCheckToolElements.aanvullendAdviesEenItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.AANVULLENDBEST);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeAanvullendBestText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Tand Best Overlay advies 1
            await genericMethods.clickOnElement(zorgCheckToolElements.tandAdviesEenItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.TANDBEST);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeTandBestText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Aanvullend Beter Overlay advies 2
            await genericMethods.clickOnElement(zorgCheckToolElements.aanvullendAdviesTweeItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.AANVULLENDBETER);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeAanvullendBeterText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
            //validatie Tand Beter Overlay advies 2
            await genericMethods.clickOnElement(zorgCheckToolElements.tandAdviesTweeItjeElement);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayH2Element, pakkettenEnum.TANDBETER);
            await genericMethods.verifyTextInElement(zorgCheckToolElements.overlayAdditionalTextElement, zorgCheckToolElements.itjeTandBeterText);
            await genericMethods.clickOnElement(zorgCheckToolElements.overlayCloseElement);
        }
        else {
            throw new Error('no correct scenario');
        } 
    }

}