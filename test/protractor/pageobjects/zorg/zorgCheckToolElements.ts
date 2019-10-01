export class ZorgCheckToolElements {

//BUTTONS
startZorgCheckToolButtonClickElement: string = '[buttontext="Start de ZorgCheck"] > button'; 
nextQuestionZorgCheckToolButtonClickElement: string = '[class*="button button--secondary button--icon"]';
previousQuestionZorgCheckToolButtonClickElement: string = '[class="button button--plain"]';

//MULTIPLE CHOICE ANSWERS
answerAZorgCheckToolClickElement: string = '[for="A"]';
answerBZorgCheckToolClickElement: string = '[for="B"]';
answerCZorgCheckToolClickElement: string = '[for="C"]';
answerDZorgCheckToolClickElement: string = '[for="D"]';

//ADVICE
adviceBasisVerzekeringZorgCheckToolZorgVrijText: string = 'Zorg Vrij';
adviceBasisVerzekeringZorgCheckToolZorgSelectText: string = 'Zorg Select';
adviceAVZorgCheckToolAVGoedText: string = 'Aanvullend Goed';
adviceAVZorgCheckToolAVBeterText: string = 'Aanvullend Beter';
adviceAVZorgCheckToolAVBestText: string = 'Aanvullend Best';
adviceTandZorgCheckToolTandGoedText: string = 'Tand Goed';
adviceTandZorgCheckToolTandBeterText: string = 'Tand Beter';
adviceTandZorgCheckToolTandBestText: string = 'Tand Best';
firstAdviceBasisVerzekeringZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(1) div:nth-child(2) > div.health-check-result-top__label > div';
firstAdviceAVTVZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(1) div:nth-child(3) > div.health-check-result-top__label > div'
firstAdviceTandZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(1) div:nth-child(4) > div.health-check-result-top__label > div';
secondAdviceBasisVerzekeringZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(2) div:nth-child(1) > div.health-check-result-top__label > div';
secondAdviceAVTVZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(2) div:nth-child(2) > div.health-check-result-top__label > div';
secondAdviceTandZorgCheckToolTextElement: string = 'health-check-result-item:nth-child(2) div:nth-child(3) > div.health-check-result-top__label > div';

//I-BUTTONS
questionInformationClickElement: string = '[class="ui-info ui-info--after ui-info--desktoplarge"]';
questionInformationHeaderElement: string = '[class = "ui-modal__header"]';
questionInformationElement: string = '[class = "ui-modal__text ng-star-inserted"]';
question2InformationText: string = 'Bekende alternatieve geneeswijzen zijn: Acupunctuur, chiropractie, osteopathie of homeopathie.';
question2InformationHeaderText: string = 'Maakt u wel eens gebruik van alternatieve zorg?';
question3InformationText: string = 'Bekende anticonceptiemiddelen zijn een spiraaltje, pessarium of de pil.';
question3InformationHeaderText: string = 'Gebruikt u anticonceptie en bent u ouder dan 21 jaar?';
CloseInformationOverlayClickElement: string = 'div.ui-modal__footer.ng-star-inserted > ui-button > button';

//I-TEXTS BELOW SELECTED ANSWERS
informationBelowSelectedAnswersTextElement: string = '[class="health-check-question__infotext ng-tns-c4-3 ng-star-inserted"]';
//hier nog verschillende teksten toevoegen

}