export class ZorgWizardElements {
    
    //ZORGWIZARD PAGINA 1
zorgverzekeringTitelH1Text: string = 'Uw zorgverzekering afsluiten';
zorgverzekeringTitelH1TextElement: string = 'div > h1';
zorgverzekeringAddCollectiveButtonOpenOverlayClickElement: string = 'unive-collective > div > div > button';
collectiveDeleteButtonClickElement: string = '[class="unive-collective__delete"]';

    //OVERLAY COLLECTIEF TOEVOEGEN
addCollectiveTitelH2TextElement: string = 'div.unive-modal__header > div > h2';
addCollectiveTitelH2Text: string = 'Bekijk of u voordeel heeft op uw zorgverzekering';
addCollectiveTitelSubtextElement: string = 'unive-collective-modal > unive-search-collective > p';
addCollectiveTitelSubtext: string = 'Mogelijk kunt u via uw werkgever of vereniging profiteren van collectieve korting en extra voordelen. Vul hieronder de naam in van het collectief of de internetcode.';
addCollectiveTextInputElement: string = '[placeholder="Naam collectief of internetcode"][type="text"]';
addCollectiveCloseOverlayButtonClickElement: string = 'div.unive-modal__footer > button';
addCollectiveFirstSearchResultClickElement: string = 'div.unive-search-collective__results > ul > li';
addCollectiveButtonClickElement: string = 'unive-search-collective > button';

    //PAKKETTEN
basisVerzekeringVrijClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="VRY"]';
basisVerzekeringGeregeldClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="GER"]';
basisVerzekeringSelectClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="ZVSU"]';
basisVerzekeringSelectNietMogelijkElement: string = '[class="unive-basic-insurances-coverage__inactive-text"]';
basisVerzekeringShowAllBasicInsurancesClickElement: string = 'unive-basic-insurances > button';
aanvullendeVerzekeringAanvullendGoedClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BAVU"]';
aanvullendGoedTextElement: string = 'unive-additional-insurances-group:nth-child(2) unive-additional-insurances-item:nth-child(1) label';
aanvullendeVerzekeringAanvullendGoedKortingTextElement: string = 'unive-additional-insurances-item:nth-child(1) > div.unive-additional-insurances-item__inside > div > span';
aanvullendeVerzekeringAanvullendBeterClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="UAVU"]';
aanvullendBeterTextElement: string = 'unive-additional-insurances-group:nth-child(2) unive-additional-insurances-item:nth-child(2) label';
aanvullendeVerzekeringAanvullendBeterKortingTextElement: string = 'unive-additional-insurances-item:nth-child(2) > div.unive-additional-insurances-item__inside > div > span';
aanvullendeVerzekeringAanvullendBestClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="PZU"]';
aanvullendBestTextElement: string = 'unive-additional-insurances-group:nth-child(2) unive-additional-insurances-item:nth-child(3) label';
aanvullendeVerzekeringAanvullendBestKortingTextElement: string = 'unive-additional-insurances-item:nth-child(3) > div.unive-additional-insurances-item__inside > div > span';
tandVerzekeringenTandOngevallenClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTO"]';
tandOngevallenTextElement: string = 'unive-additional-insurances-group:nth-child(3) unive-additional-insurances-item:nth-child(1) label';
tandVerzekeringenTandGoedClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="GTU"]';
tandGoedTextElement: string = 'unive-additional-insurances-group:nth-child(3) unive-additional-insurances-item:nth-child(2) label';
tandVerzekeringenTandBeterClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTU"]';
tandBeterTextElement: string = 'unive-additional-insurances-group:nth-child(3) unive-additional-insurances-item:nth-child(3) label';
tandVerzekeringenTandBestClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="UTU"]';
tandBestTextElement: string = 'unive-additional-insurances-group:nth-child(3) unive-additional-insurances-item:nth-child(4) label';
basisVerzekeringCollectiefKortingTextElement: string = 'unive-basic-insurances-coverage.unive-basic-insurances-coverage.unive-basic-insurances-coverage--active > div > div.unive-basic-insurances-coverage__top > div.unive-basic-insurances-coverage__collective';
collectiefKortingText: string = '% korting via';
collectiefNietMogelijkTextElement: string = '[class="unive-collective__inactive-text"]';
collectiefNietMogelijkText: string = 'U heeft voor uzelf of een medeverzekerde gekozen voor Zorg Select. Daarmee profiteert u direct van de laagste premie, er is geen collectief mogelijk.';
modulesButtonClickElement: string = '[data-type-button="modules"]';
pakkettenButtonClickElement: string = '[data-type-button="pakketten"]';
moduleFysio9ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BFG"]';
moduleFysio18ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BFB"]';
moduleTandOngevallenClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="TOM"]';
moduleTand250ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTG"]';
moduleTand500ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTB"]';
moduleBuitenlanddekkingClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BBB"]';
}