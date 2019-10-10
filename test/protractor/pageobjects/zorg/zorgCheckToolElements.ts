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
firstAdviceKiesDezeVerzekeringClickElement: string = 'health-check-result-item:nth-child(1) div.health-check-result-top__row.health-check-result-top__row--button > ui-button > button';
secondAdviceKiesDezeVerzekeringClickElement: string = 'health-check-result-item:nth-child(2) div.health-check-result-top__row.health-check-result-top__row--button > ui-button > button';

//I-BUTTONS
questionInformationClickElement: string = '[class="ui-info ui-info--after ui-info--desktoplarge"]';
questionInformationHeaderElement: string = '[class = "ui-modal__header"]';
questionInformationElement: string = '[class = "ui-modal__text ng-star-inserted"]';
question2InformationText: string = 'Bekende alternatieve geneeswijzen zijn: Acupunctuur, chiropractie, osteopathie of homeopathie.';
question2InformationHeaderText: string = 'Maakt u wel eens gebruik van alternatieve zorg?';
question3InformationText: string = 'Bekende anticonceptiemiddelen zijn een spiraaltje, pessarium of de pil.';
question3InformationHeaderText: string = 'Gebruikt u anticonceptie en bent u ouder dan 21 jaar?';
question8InformationText: string = 'Het scheelt ongeveer € 20 premie per maand als u alleen gebruik maakt van gecontracteerde zorgverleners.';
question8InformationHeaderText: string = 'Bent u bereid om meer te betalen zodat u zelf uw zorgverlener kunt kiezen?';
closeInformationOverlayClickElement: string = 'div.ui-modal__footer.ng-star-inserted > ui-button > button';
question5answerDInformationText: string = 'Let op: Voor deze vergoeding geldt een jaar wachttijd. Als u in 2019 de verzekering afsluit, kunt u in 2021 gebruik maken van deze vergoeding.';
question5InformationHeaderText: string = 'Verwacht u dat uw kind een beugel nodig heeft?';
question6AnswerDInformationText: string = 'Let op: Voor de vergoeding van kronen, bruggen, gedeeltelijke protheses en implantaten geldt een jaar wachttijd. Als u in 2019 de verzekering afsluit, kunt u in 2021 gebruik maken van deze vergoeding.';
question6InformationHeaderText: string = 'Gaat u naar de tandarts?';

//I-TEXTS BELOW SELECTED ANSWERS
informationBelowSelectedAnswersTextElement: string = '[class="health-check-question__infotext ng-tns-c3-1 ng-star-inserted"]';

//E-MAIL DIT ADVIES
emailDitAdviesButtonAdvicePageClickElement: string = 'div.health-check-result__top > ui-button > button';
emailDitAdviesOverlayHeaderElement: string = '[class="ui-modal__title ng-star-inserted"]';
emailDitAdviesOverlayHeaderText: string = 'Mail uw zorgadvies';
emailDitAdviesOverlayDataEmailAddressElement: string = '[id="resultEmail"]';
emailDitAdviesOverlayVerstuurMijnAdviesClickElement: string = ' form > ui-button > button';
emailDitAdviesOverlayVerstuurMijnAdviesInvalidEmailClickElement: string = '[class="button button--secondary button--icon button--disabled"]';
emailDitAdviesOverlayCloseClickElement: string = ' div.ui-modal__footer.ng-star-inserted > ui-button > button';
emailDitAdviesOverlayIncorrectEmailMessageText: string = 'Vul een geldig e-mailadres in (j.jansen@unive.nl).';
emailDitAdviesOverlayIncorrectEmailMessageElement: string = '[class="health-check-result-email__error ng-star-inserted"]';
emailDitAdviesOverlaySuccessElement: string = '[class="health-check-result-email__intro ng-star-inserted"]';
emailDitAdviesOverlaySuccessText: string = 'Het ZorgCheck advies is verzonden naar';

//PREFILLS WIZARD
zorgSelectActiveElement: string = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="ZVSU"]';
zorgGeregeldActiveElement: string = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="GER"]';
ZorgVrijActiveElement: string = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="VRY"]';
aanvullendGoedActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="BAVU"]';
aanvullendBeterActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="UAVU"]';
aanvullendBestActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="PZU"]';
tandGoedActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="GTU"]';
tandBeterActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="BTU"]';
tandBestActiveElement: string = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="UTU"]';

//COLLECTIEVEN
voegCollectiefToeOpenOverlayClickElement: string = '[class="button button--plain"]';
voegCollectiefToeOpenOverlaySpanElement: string = 'health-check-collectief > ui-button > button > span';
voegCollectiefToeOpenOverlayText: string = 'Voeg uw collectief toe';
voegUwCollectiefToeH1OverlayElement: string = '[class="ui-modal__title ng-star-inserted"]';
voegUwCollectiefToeH1OverlayText: string = 'Voeg uw collectief toe';
voegUwCollectiefToeInputElement: string = '[placeholder="Naam of internetcode collectief"][type="text"]';
toegevoegdCollectiefElement: string = 'div.search-collectief__selected.ng-star-inserted';
additionalInfoTextCollectiveOverlayElement: string = 'f-collectief-search-search > p';
additionalInfoTextCollectiveOverlayText: string = 'Mogelijk kunt u via uw werkgever of vereniging profiteren van collectieve korting en extra voordelen. Vul hieronder de naam in van het collectief of de internetcode.';
additionalInfoTextCollectiveOverlayNoZorgCollectiveText: string = 'De naam of internetcode die u heeft ingevuld is correct, maar helaas krijgt u voor de zorgverzekering geen collectieve korting.';
selectFirstCollectiefElement: string = 'div.search-collectief__results.ng-star-inserted > ul';
voegCollectiefToeButtonClickElement: string = 'div.search-collectief__confirm-button.ng-star-inserted > ui-button > button';
additionalInfoThuiszorgCollectiefElement: string = 'f-collectief-search-search > div.search-collectief__subtext.ng-star-inserted';
additionalInfoThuiszorgCollectiefText: string = 'Dit betreft een thuiszorg collectief. Neem contact op met een van onze adviseurs.';
deleteCollectiveClickElement: string = '[class="search-collectief__delete"]';
closeOverlay: string = 'div.ui-modal__footer.ng-star-inserted > ui-button > button';

//i-TEXTS BIJ ADVIES
aanvullendAdviesEenItjeElement: string = 'health-check-result-item:nth-child(1) > health-check-result-item-top > div > div:nth-child(3) > div.health-check-result-top__label > div > ui-info > button';
tandAdviesEenItjeElement: string = 'health-check-result-item:nth-child(1) > health-check-result-item-top > div > div:nth-child(4) > div.health-check-result-top__label > div > ui-info > button';
aanvullendAdviesTweeItjeElement: string = 'health-check-result-item:nth-child(2) > health-check-result-item-top > div > div:nth-child(2) > div.health-check-result-top__label > div > ui-info > button';
tandAdviesTweeItjeElement: string = 'health-check-result-item:nth-child(2) > health-check-result-item-top > div > div:nth-child(3) > div.health-check-result-top__label > div > ui-info > button';
itjeAanvullendGoedText: string = 'Verzekeren voor extra zorg, zoals fysiotherapie, tegen een scherpe premie';
itjeAanvullendBeterText: string = 'Uitgebreid verzekeren voor extra zorg tegen een aantrekkelijke premie, met speciale vergoedingen voor het gezin';
itjeAanvullendBestText: string = 'De meest uitgebreide aanvullende verzekering, voor maximale zekerheid';
itjeTandGoedText: string = 'Met een gerust gevoel naar de tandarts en toch niet te veel premie betalen. Tot € 250 vergoeding per jaar';
itjeTandBeterText: string = 'Tandartskosten en orthodontie goed verzekerd';
itjeTandBestText: string = 'Meest complete tandartsverzekering, zonder financiële zorgen naar tandarts, mondhygiënist en orthodontist';

//OVERLAY ELEMENTEN
overlayH2Element: string = '[class="ui-modal__title ng-star-inserted"]';
overlayAdditionalTextElement: string = '[class="ui-modal__text ng-star-inserted"]';
overlayCloseElement: string = '[class="ui-modal__close"]';

}