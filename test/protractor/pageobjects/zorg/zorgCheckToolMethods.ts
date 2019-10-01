import { GenericMethods } from "../generic/genericMethods";
import { ZorgCheckToolElements } from "./zorgCheckToolElements";
import { multipleChoiceEnum, genericEnum } from "../enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let zorgCheckToolElements: ZorgCheckToolElements = new ZorgCheckToolElements();

export class ZorgCheckToolMethods {

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

    async checkAdvice(adviceOneBV: string, adviceOneAVTV: string, adviceOneTV: string, adviceTwoBV: string, 
        adviceTwoAVTV: string, adviceTwoTV: string) {
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

    async fillInOneQuestionAndClickI(questionOne: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        //answer question 1 and click next button and open i-element
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async fillInTwoQuestionsAndClickI(questionOne: string, questionTwo: string) {
        await genericMethods.clickOnElement(zorgCheckToolElements.startZorgCheckToolButtonClickElement);
        //answer question 1 and click next button and open i-element
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionOne));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
        await genericMethods.clickOnElement(this.getZorgCheckToolChoice(questionTwo));
        await genericMethods.clickOnElement(zorgCheckToolElements.nextQuestionZorgCheckToolButtonClickElement);
    }

    async checkITexts() {
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationElement, zorgCheckToolElements.question2InformationText);
        await genericMethods.verifyTextInElement(zorgCheckToolElements.questionInformationHeaderElement, zorgCheckToolElements.question2InformationHeaderText);
        await genericMethods.clickOnElement(zorgCheckToolElements.CloseInformationOverlayClickElement);
    }
}