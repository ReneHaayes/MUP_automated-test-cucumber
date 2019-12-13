export class ZorgWizardElements {
    
    //ZORGWIZARD PAGINA 1
zorgverzekeringTitelH1Text: string = 'Uw zorgverzekering afsluiten';
zorgverzekeringTitelH1TextElement: string = 'div > h1';
zorgverzekeringAddCollectiveButtonOpenOverlayClickElement: string = 'unive-collective > div > div > button';
collectiveDeleteButtonClickElement: string = '[class="unive-collective__delete"]';
volgendeUwGegevensSubmitButtonClickElement: string = '[class="button button--secondary"][type="submit"]';
eigenRisicoEersteText: string = "van";
eigenRisicoTweedeText: string = "voor";
eigenRisicoTextElement: string = 'unive-deductible-excess > p';
eigenRisicoText: string = 'U kiest voor een vrijwillig eigen risico. De korting is in de premie verwerkt.';
eigenRisicoBasisVerzekeringSelectTextElement: string = 'unive-basic-insurances-coverage:nth-child(1) > div > div.unive-basic-insurances-coverage__top > ' + 
                                                       'div.unive-basic-insurances-coverage__currency.unive-basic-insurances-coverage__currency--discount';
eigenRisicoBasisVerzekeringGeregeldTextElement: string = 'unive-basic-insurances-coverage:nth-child(2) > div > div.unive-basic-insurances-coverage__top > ' + 
                                                         'div.unive-basic-insurances-coverage__currency.unive-basic-insurances-coverage__currency--discount';
eigenRisico385DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="0"]';
eigenRisico485DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="1"]';
eigenRisico585DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="2"]';
eigenRisico685DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="3"]';
eigenRisico785DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="4"]';
eigenRisico885DropdownClickElement: string = '(//div[@formarrayname="applicants"]//*[@class="unive-applicants"])[1]//select/option[@value="5"]';
premiePerMaandClickElement: string = 'div > select > option:nth-child(1)';
premiePerJaarClickElement: string = 'div > select > option:nth-child(2)';
bekijkOpbouwPremieButtonClickElement: string = 'div.unive-total-price-detail__row.unive-total-price-detail__row--right > div > button';
bekijkOpbouwPremieFirstTextElement: string = 'unive-summary-item > div > div:nth-child(1)';
addPartnerButtonClickElement: string = 'unive-partner-child > div > div:nth-child(1) > button';
addKindButtonClickElement: string = 'unive-partner-child > div > div:nth-child(2) > button';

    //OVERLAY PARTNER KIND
switchToKindTabButtonClickElement: string = 'unive-partner-child-modal > unive-button-switch > div > button:nth-child(2)';
switchToPartnerTabButtonClickElement: string = 'unive-partner-child-modal > unive-button-switch > div > button:nth-child(1)';
geboortedatumPartnerKindTextElement: string = '[id="dateOfBirthPartnerChild"]';
sameInsurancePartnerChildCheckBoxClickElement: string = '[for="copyInsurance"]';
uwGekozenPakketPartnerChildTextElement: string = 'form > unive-usp-list > div > ul';
partnerKindToevoegenButtonClickElement: string = 'unive-partner-child-modal > form > button';

    //OVERLAY COLLECTIEF TOEVOEGEN
addCollectiveTitelH2TextElement: string = 'div.unive-modal__header > div > h2';
addCollectiveTitelH2Text: string = 'Bekijk of u voordeel heeft op uw zorgverzekering';
addCollectiveTitelSubtextElement: string = 'unive-collective-modal > unive-search-collective > p';
addCollectiveTitelSubtext: string = 'Mogelijk kunt u via uw werkgever of vereniging profiteren van collectieve korting en extra voordelen. Vul hieronder de naam ' + 
                                    'in van het collectief of de internetcode.';
addCollectiveTextInputElement: string = '[placeholder="Naam collectief of internetcode"][type="text"]';
addCollectiveFirstSearchResultClickElement: string = 'div.unive-search-collective__results > ul > li';
addCollectiveButtonClickElement: string = 'unive-search-collective > button';
closeOverlayButtonClickElement: string = 'div.unive-modal__footer > button';

    //PAKKETTEN
introTextAanvullendeVerzekeringenH2TextElement: string = 'unive-additional-insurances > unive-wizard-subtitle > div > h2';
introTextAanvullendeVerzekeringenH2Text: string = 'Aanvullende verzekeringen';
introTextAanvullendeVerzekeringenTextElement: string = 'unive-applicants-content > unive-additional-insurances > unive-wizard-subtitle > div > p';
introTextAanvullendeVerzekeringenText: string = 'Kies voor losse modules per zorgsoort. Of verzeker de meest voorkomende zorg met een ruim aanvullend pakket.';
introTextPartnerKindH2TextElement: string = 'unive-partner-child > unive-wizard-subtitle > div > h2';
introTextPartnerKindH2Text: string = 'Partner of kind meeverzekeren';
introTextPartnerKindTextElement: string = 'unive-partner-child > unive-wizard-subtitle > div > p';
introTextPartnerKindText: string = 'Kies minimaal eerst voor uzelf een basisverzekering. Vervolgens kunt u partner en kinderen toevoegen.';
basisVerzekeringVrijClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="VRY"]';
basisVerzekeringGeregeldClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="GER"]';
basisVerzekeringSelectClickElement: string = '[class="unive-basic-insurances-coverage"][data-basic-insurance-code="ZVSU"]';
basisVerzekeringSelectNietMogelijkElement: string = '[class="unive-basic-insurances-coverage__inactive-text"]';
basisVerzekeringShowAllBasicInsurancesClickElement: string = 'unive-basic-insurances > button';
aanvullendeVerzekeringAanvullendGoedClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BAVU"]';
aanvullendeVerzekeringCollectiefAanvullendGoedClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BAVZU"]';
aanvullendGoedTextElement: string = 'unive-additional-insurances-group:nth-child(2) unive-additional-insurances-item:nth-child(1) label';
aanvullendeVerzekeringAanvullendGoedKortingTextElement: string = 'unive-additional-insurances-item:nth-child(1) > div.unive-additional-insurances-item__inside > div > span';
aanvullendeVerzekeringAanvullendBeterClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="UAVU"]';
aanvullendeVerzekeringCollectiefAanvullendBeterClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="UAVZU"]';
aanvullendBeterTextElement: string = 'unive-additional-insurances-group:nth-child(2) unive-additional-insurances-item:nth-child(2) label';
aanvullendeVerzekeringAanvullendBeterKortingTextElement: string = 'unive-additional-insurances-item:nth-child(2) > div.unive-additional-insurances-item__inside > div > span';
aanvullendeVerzekeringAanvullendBestClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="PZU"]';
aanvullendeVerzekeringCollectiefAanvullendBestClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="PZZU"]';
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
basisVerzekeringCollectiefKortingTextElement: string = 'unive-basic-insurances-coverage.unive-basic-insurances-coverage.unive-basic-insurances-coverage--active > div > ' +
                                                       'div.unive-basic-insurances-coverage__top > div.unive-basic-insurances-coverage__collective';
collectiefKortingText: string = '% korting via';
collectiefNietMogelijkTextElement: string = '[class="unive-collective__inactive-text"]';
collectiefNietMogelijkText: string = 'U heeft voor uzelf of een medeverzekerde gekozen voor Zorg Select. Daarmee profiteert u direct van de laagste premie, er is geen ' + 
                                     'collectief mogelijk.';
modulesButtonClickElement: string = '[data-type-button="modules"]';
pakkettenButtonClickElement: string = '[data-type-button="pakketten"]';
moduleFysio9ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BFG"]';
moduleFysio18ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BFB"]';
moduleTandOngevallenClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="TOM"]';
moduleTand250ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTG"]';
moduleTand500ClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BTB"]';
moduleBuitenlanddekkingClickElement: string = '[class="unive-additional-insurances-item"][data-additional-insurance-code="BBB"]';
basisVrijActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="VRY"]';
basisGeregeldActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="GER"]';
basisSelectActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active"][data-basic-insurance-code="ZVSU"]';
aanvullendGoedActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="BAVU"]';
aanvullendBeterActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="UAVU"]';
aanvullendBestActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="PZU"]';
tandOngevallenActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="BTO"]';
tandGoedActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="GTU"]';
tandBeterActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="BTU"]';
tandBestActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active"][data-additional-insurance-code="UTU"]';
kindOnder18BasisVrijActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active unive-basic-insurances-coverage--plain"]' + 
                             '[data-basic-insurance-code="VRY"]';
kindOnder18BasisGeregeldActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active unive-basic-insurances-coverage--plain"]'+ 
                                 '[data-basic-insurance-code="GER"]';
kindOnder18BasisSelectActive = '[class="unive-basic-insurances-coverage unive-basic-insurances-coverage--active unive-basic-insurances-coverage--plain"]' + 
                               '[data-basic-insurance-code="ZVSU"]';
kindOnder18AanvullendGoedActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' + 
                                  '[data-additional-insurance-code="BAVU"]';
kindOnder18AanvullendBeterActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' +
                                   '[data-additional-insurance-code="UAVU"]';
kindOnder18AanvullendBestActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' +
                                  '[data-additional-insurance-code="PZU"]';
kindOnder18TandOngevallenActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' + 
                                  '[data-additional-insurance-code="BTO"]';
kindOnder18TandGoedActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' + 
                            '[data-additional-insurance-code="GTU"]';
kindOnder18TandBeterActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' + 
                             '[data-additional-insurance-code="BTU"]';
kindOnder18TandBestActive = '[class="unive-additional-insurances-item unive-additional-insurances-item--active unive-additional-insurances-item--plain"]' + 
                            '[data-additional-insurance-code="UTU"]';

//VERGOEDINGENOVERLAY
bekijkVergoedingenOverlayZorgSelectClickElement: string = '//unive-basic-insurances-coverage[@data-basic-insurance-code="ZVSU"]/.//button[@class="button button--plain"]';
bekijkVergoedingenOverlayZorgVrijClickElement: string = '//unive-basic-insurances-coverage[@data-basic-insurance-code="VRY"]/.//button[@class="button button--plain"]';
bekijkVergoedingenOverlayZorgGeregeldClickElement: string = '//unive-basic-insurances-coverage[@data-basic-insurance-code="GER"]/.//button[@class="button button--plain"]';
vergoedingenOverlayZorgSelectTextElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="ZVSU"]' + 
                                                   '/.//label[@class="unive-basic-insurances-coverage__label"])[2]';
vergoedingenOverlayZorgVrijTextElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="VRY"]' +
                                                 '/.//label[@class="unive-basic-insurances-coverage__label"])[2]';
vergoedingenOverlayZorgGeregeldTextElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="GER"]' + 
                                                     '/.//label[@class="unive-basic-insurances-coverage__label"])[2]';
selecteerVergoedingZorgSelectButtonClickElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="ZVSU"]/.//button)[2]';
selecteerVergoedingZorgVrijButtonClickElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="VRY"]/.//button)[2]';
selecteerVergoedingZorgGeregeldButtonClickElement: string = '(//unive-basic-insurances-coverage[@data-basic-insurance-code="GER"]/.//button)[2]';

//ZORGWIZARD PAGINA 2 UW GEGEVENS
uwGegevensBirthdateTextElement: string = '[id="dateofbirth"]';
uwGegevensInitalsTextElement: string = '[id="initials"]';
uwGegevensPrefixTextElement: string = '[id="namePrefix"]';
uwGegevensLastnameTextElement: string = '[id="lastName"]';
uwGegevensGenderMaleRadioButtonElement: string = '[id="gender_man"]';
uwGegevensGenderFemaleRadioButtonElement: string = '[id="gender_vrouw"]';
uwGegevensPostalcodeTextElement: string = '[id="zipCode"]';
uwGegevensHousenumberTextElement: string = '[id="houseNumber"]';
uwGegevensHousenumberAdditionTextElement: string = '[id="toevoeging"]';
uwGegevensEmailaddressTextElement: string = '[id="email"]';
uwGegevensPhoneNumberTextElement: string = '[id="phone"]';
uwGegevensIBANTextElement: string = '[id="iban"]';
uwGegevensAutomatischeIncassoClickElement: string = '[id="paymentMethod_true"]';
uwGegevensInkomstenQuestionOneRadioYesClickElement: string = '[id="inkomstenBuitenland_true"]';
uwGegevensInkomstenQuestionOneRadioNoClickElement: string = '[id="inkomstenBuitenland_false"]';
uwGegevensInkomstenQuestionTwoRadioYesClickElement: string = '[id="inkomstenNL_true"]';
uwGegevensInkomstenQuestionTwoRadioNoClickElement: string = '[id="inkomstenNL_false"]';
uwGegevensVolgendeSubmitButtonClickElement: string = '[class="button button--primary"][type="submit"]';
uwGegevensH1Text: string = 'Uw gegevens';
uwGegevensH1TextElement: string = '[class="unive-wizard-accordion-panel_title unive-wizard-accordion-panel_title--active"]';
uwGegevensVerzekeringsVerledenText: string = 'Verzekeringsverleden';
uwGegevensVerzekeringsVerledenTextElement: string = 'unive-fieldset:nth-child(1) > fieldset > legend';
uwGegevensIngangsdatumText: string = 'Ingangsdatum';
uwGegevensIngangsdatumTextElement: string = 'unive-fieldset:nth-child(2) > fieldset > legend';
uwGegevensUwGegevensText: string = 'Uw gegevens';
uwGegevensUwgegevensTextElement: string = 'unive-fieldset:nth-child(3) > fieldset > legend';
uwGegegevensUwBetaalgegevensText: string = 'Uw betaalgegevens';
uwGegevensUwBetaalgegevensTextElement: string = 'unive-fieldset:nth-child(4) > fieldset > legend';
uwGegevensUwBetaalgegevensAcceptgiroClickElement: string = '[id="paymentMethod_acceptgiro"]';
uwGegevensInkomstenText: string = 'Inkomsten';
uwGegevensInkomstenTextElement: string = 'unive-fieldset:nth-child(5) > fieldset > legend';
uwGegevensInkomstenFoutmeldingTextElement: string = '[class="unive-form-input-error"]';
uwGegevensInkomstenFoutmeldingText: string = 'Zonder inkomsten uit Nederland kunt u online geen zorgverzekering afsluiten. Neem voor meer informatie telefonisch contact ' + 
                                             'met ons op via 072 52 77 595.';
uwGegevensVerzekeringsVerledenDropdownClickElement: string = '//select[@id="insurancePeriod"]//option[@value=6]';
actievePolisOverlayHeaderTextElement: string = 'div > div.unive-modal__header > div';
actievePolisOverlayHeaderText: string = 'Uw wijzigingen doorgeven?';
actievePolisOverlayWijzigButtonClickElement: string = 'div.unive-modal__content > a';
actievePolisOverlayWijzigMijnUniveURL: string = 'https://gezondheid.unive.nl/mijnunivezorg/inloggen';
mijnUniveH1TextElement: string = 'div > h1';
mijnUniveH1Text: string = 'Mijn Univé Zorg';

//ZORGWIZARD PAGINA 3 BIJNA VERZEKERD
bijnaVerzekerdBSNTextElement: string = '[placeholder="012345678"]';
bijnaVerzekerdH1Text: string = 'Bijna verzekerd';
bijnaVerzekerdH1TextElement: string = '[class="unive-wizard-accordion-panel_title unive-wizard-accordion-panel_title--active"]';
bijnaVerzekerdBurgerservicenummerText: string = 'Burgerservicenummer';
bijnaVerzekerdBurgerservicenummerTextElement: string = 'unive-almost-insured-bsn > unive-fieldset > fieldset > legend';
bijnaVerzekerdUBentBijnaVerzekerdText: string = 'U bent bijna verzekerd';
bijnaVerzekerdUBentBijnaVerzekerdTextElement: string = '[class="unive-legend unive-legend--plain"]';

//ZORGWIZARD BEDANKTPAGINA
bedanktCrossSellElement1: string = '[class="cross-sell-item"]';
bedanktCrossSellItem1TitleH3TextElement: string = 'unive-cross-sell-item:nth-child(3) > div > div.cross-sell-item__content > h3';
bedanktCrossSellItem1SubtitleTextElement: string = 'unive-cross-sell-item:nth-child(3) > div > div.cross-sell-item__content > span';
bedanktCrossSellElement2: string = '[class="cross-sell-item cross-sell-item--reverse"]';
bedanktCrossSellItem2TitleH3TextElement: string = 'unive-cross-sell-item:nth-child(4) > div > div.cross-sell-item__content > h3';
bedanktCrossSellItem2SubtitleTextElement: string = 'unive-cross-sell-item:nth-child(4) > div > div.cross-sell-item__content > span';
bedanktCrossSellItem1USP1TextElement: string = 'unive-usp-list > div > ul > li:nth-child(1)';
bedanktCrossSellItem1USP2TextElement: string = 'unive-usp-list > div > ul > li:nth-child(2)';
bedanktPaginaCustomerNameTextElement: string = 'div:nth-child(2) > h2';

//FLOATINGBUTTON
floatingButtonClickElement: string = 'body > div.floatingButton > a';
floatingButtonCloseClickElement: string = 'body > div.floatingButton > i';
}