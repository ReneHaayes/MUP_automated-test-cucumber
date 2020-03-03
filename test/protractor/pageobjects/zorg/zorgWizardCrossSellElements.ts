export class ZorgWizardElements {

//ALGEMEEN    
unibolStapEenElement: string = 'unive-wizard-step:nth-child(1) > li > span';
unibolStapTweeElement: string = 'unive-wizard-step:nth-child(2) > li > span';
unibolStapDrieElement: string = 'unive-wizard-step:nth-child(3) > li > span';
unibolStapVierElement: string = 'unive-wizard-step:nth-child(4) > li > span';

//BUITENLANDPAGINA
H1TextElement: string = '[class="unive-wizard-accordion-panel_title unive-wizard-accordion-panel_title--active"]';
H1Text: string = 'Buitenland';
crossSellFirstDRVElement: string = 'unive-cross-sell-wizard-item:nth-child(1) > div';
crossSellSecondDRVMetAnnuleringElement: string = 'unive-cross-sell-wizard-item:nth-child(2) > div';
crossSellFirstDRVSubtitleTextElement: string = 'unive-cross-sell-wizard-item:nth-child(1) > div > div.cross-sell-wizard-item__content > div.cross-sell-wizard-item__top '
                                               + '> div.cross-sell-wizard-item__header > div.cross-sell-wizard-item__subtitle';
crossSellSecondDRVMetAnnuleringSubtitleTextElement: string = 'unive-cross-sell-wizard-item:nth-child(2) > div > div.cross-sell-wizard-item__content > '
                                                             + 'div.cross-sell-wizard-item__top > div.cross-sell-wizard-item__header > div.cross-sell-wizard-item__subtitle';
crossSellFirstDRVPriceElement: string = 'unive-cross-sell-wizard-item:nth-child(1) > div > div.cross-sell-wizard-item__content '
                                        + '> div.cross-sell-wizard-item__top > div.cross-sell-wizard-item__price > span';
crossSellSecondDRVMetAnnuleringPriceElement: string = 'unive-cross-sell-wizard-item:nth-child(1) > div > div.cross-sell-wizard-item__content '
                                                      + '> div.cross-sell-wizard-item__top > div.cross-sell-wizard-item__price > span';
crossSellFirstDRVVergoedingenClickElement: string = 'unive-cross-sell-wizard-item:nth-child(1) > div > div.cross-sell-wizard-item__content > button';
crossSellSecondDRVMetAnnuleringVergoedingenClickElement: string = 'unive-cross-sell-wizard-item:nth-child(2) > div > div.cross-sell-wizard-item__content > button';
crossSellFirstSubtitleTextElement: string = 'unive-cross-sell-wizard-product:nth-child(1) > div > div.cross-sell-wizard-item__content > div.cross-sell-wizard-item__top > '
                                            + 'div.cross-sell-wizard-item__header > div.cross-sell-wizard-item__subtitle';
crossSellSecondSubtitleTextElement: string = 'unive-cross-sell-wizard-product:nth-child(2) > div > div.cross-sell-wizard-item__content > div.cross-sell-wizard-item__top > '
                                            + 'div.cross-sell-wizard-item__header > div.cross-sell-wizard-item__subtitle';            
vorigeButtonClickElement: string = 'button.button.button--plain.button--back';

//UWGEGEVENS
buitenlandUwGegevensVerzekeringsVerledenText: string = 'Verzekeringsverleden';
buitenlandUwGegevensVerzekeringsVerledenTextElement: string = 'unive-fieldset:nth-child(1) > fieldset > legend';
buitenlandUwGegevensIngangsdatumZorgText: string = 'Ingangsdatum zorgverzekering';
buitenlandUwGegevensIngangsdatumZorgTextElement: string = 'unive-fieldset:nth-child(2) > fieldset > legend';
buitenlandUwGegevensIngangsdatumDRVText: string = 'Ingangsdatum doorlopende reisverzekering';
buitenlandUwGegevensIngangsdatumDRVMetAnnuleringText: string = 'Ingangsdatum doorlopende reis- en annuleringsverzekering';
buitenlandUwGegevensIngangsdatumDRVTextElement: string = 'unive-fieldset:nth-child(3) > fieldset > legend';
buitenlandUwGegevensUwGegevensText: string = 'Uw gegevens';
buitenlandUwGegevensUwgegevensTextElement: string = 'unive-fieldset:nth-child(4) > fieldset > legend';
buitenlandUwGegegevensUwBetaalgegevensText: string = 'Uw betaalgegevens';
buitenlandUwGegevensUwBetaalgegevensTextElement: string = 'unive-fieldset:nth-child(5) > fieldset > legend';
buitenlandUwGegevensInkomstenText: string = 'Inkomsten';
buitenlandUwGegevensInkomstenTextElement: string = 'unive-fieldset:nth-child(6) > fieldset > legend';

//BIJNAVERZEKERD
bijnaVerzekerdLegendAanvullendeVragenTextElement: string = 'unive-almost-insured-cross-sell > unive-fieldset > fieldset > legend';
bijnaVerzekerdLegendAanvullendeVragenText: string = 'Aanvullende vragen';
bijnaVerzekerdOverlayWaaromTextElement: string = 'unive-almost-insured-cross-sell > unive-fieldset > fieldset > div > button';
bijnaVerzekerdVerzekeringsverledenTextElement: string = 'unive-unive-formgroup:nth-child(3) > div > div.unive-form-label.unive-form-label--header';
bijnaVerzekerdVerzekeringsverledenText: string = 'Verzekeringsverleden';
bijnaVerzekerdStrafrechtelijkverledenTextElement: string = 'unive-unive-formgroup:nth-child(5) > div > div.unive-form-label.unive-form-label--header';
bijnaVerzekerdStrafrechtelijkverledenText: string = 'Strafrechtelijk verleden';
bijnaVerzekerdSchadeverledenTextElement: string = 'unive-unive-formgroup:nth-child(6) > div > div.unive-form-label.unive-form-label--header';
bijnaVerzekerdSchadeverledenText: string = 'Schadeverleden';
bijnaVerzekerdVerzekeringsverledenJaRadioButton: string = '#verzekeringsverleden_true';
bijnaVerzekerdVerzekeringsverledenNeeRadioButton: string = '#verzekeringsverleden_false';
bijnaVerzekerdVerzekeringsverledenToelichtingTextBox: string = '#verzekeringsverledenToelichting';
bijnaVerzekerdStrafrechtelijkverledenJaRadioButton: string = '#strafrechtelijkverleden_true';
bijnaVerzekerdStrafrechtelijkverledenNeeRadioButton: string = '#strafrechtelijkverleden_false';
bijnaVerzekerdStrafrechtelijkeverledenOverlayH1TextElement: string = 'unive-almost-insured-cross-sell > unive-modal:nth-child(3) > div '
                                                                     + '> div.unive-modal__container > div > div.unive-modal__header > div';
bijnaVerzekerdSchadeverledenJaRadioButton: string = '#schadeverleden_true';
bijnaVerzekerdSchadeverledenNeeRadioButton: string = '#schadeverleden_false';
bijnaVerzekerdVoorlopigeDekkingTextElement: string = 'unive-almost-insured-text-cross-sell > div > p:nth-child(1) > strong';
bijnaVerzekerdGeenVoorlopigeDekkingText: string = 'geen voorlopige dekking';
bijnaVerzekerdVerklaringAlleVragenNaarWaarheidTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(1)';
bijnaVerzekerdVerklaringAlleVragenNaarWaarheidText: string = 'alle vragen naar waarheid heeft ingevuld';
bijnaVerzekerdVerklaringAutomatischeIncassoTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(2)';
bijnaVerzekerdVerklaringAutomatischeIncassoText: string = 'akkoord gaat met automatische incasso via NL20 INGB 0000 6861 29';
bijnaVerzekerdVerklaringDRVVoorwaardenTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(3) > a:nth-child(1)';
bijnaVerzekerdVerklaringAlgemeneVoorwaardenTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(3) > a:nth-child(2)';
bijnaVerzekerdVerklaringZorgVoorwaardenTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(4)';
bijnaVerzekerdVerklaringAkkoordVoorwaardenText: string = 'akkoord gaat met de';
bijnaVerzekerdVerklaringDienstenwijzerTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(5) > a';
bijnaVerzekerdVerklaringMededelingsplichtTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(5) > span > a';
bijnaVerzekerdVerklaringKennisHeeftGenomenVanText: string = 'kennis heeft genomen van';
bijnaVerzekerdVerklaringZorgVerzekeringskaartTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(6) > a:nth-child(1)';
bijnaVerzekerdVerklaringDRVVerzekeringskaartTextElement: string = 'unive-almost-insured-text-cross-sell > div > ul > li:nth-child(6) > a:nth-child(2)';
bijnaVerzekerdTagline14DagenTextElement: string = 'unive-almost-insured-text > div > p.tagline';
//legends voor BSN en U bent bijna verzekerd komen uit zorgWizardElements

//CONTROLEREN OVERLAY BIJNA VERZEKERD PAGINA
overlayControlerenH2TitelTextElement: string = 'unive-summary-cross-sell > div > h2';
overlayControlerenH2TitelDRVAnnuleringText: string = 'Doorlopende reis- en annuleringsverzekering';
overlayControlerenH2TitelDRVText: string = 'Doorlopende reisverzekering';
overlayControlerenDRVDekking1TextElement: string = 'unive-summary-cross-sell > div > div:nth-child(3) > unive-usp-list > div > ul > li:nth-child(1)';
overlayControlerenDRVDekking2TextElement: string = 'unive-summary-cross-sell > div > div:nth-child(3) > unive-usp-list > div > ul > li:nth-child(2)';
overlayControlerenDRVDekking3TextElement: string = 'unive-summary-cross-sell > div > div:nth-child(3) > unive-usp-list > div > ul > li:nth-child(3)';
overlayControlerenDRVPremieTextElement: string = 'unive-summary-cross-sell > div > unive-summary-total > div > div:nth-child(1)';

//BEDANKPAGINA
bedankpaginaH1DRVTextElement: string = 'unive-cross-sell-confirmation > h1';
bedankpaginaH1DRVText: string = 'Uw zorg- en reisverzekering';
bedankpaginaSubtitelZorgverzekeringTextElement: string = 'unive-cross-sell-confirmation > div:nth-child(2) > p > strong:nth-child(1)';
bedankpaginaSubtitelDRVTextElement: string = 'unive-cross-sell-confirmation > div:nth-child(2) > p > strong:nth-child(2)';
bedankpaginaIngangsdatumTextElement: string = 'unive-cross-sell-confirmation > ol > li:nth-child(1) > div > p';
bedankpaginaIngangsdatumGelijkDRVText: string = 'Uw zorgverzekering en doorlopende reisverzekering gaan in op';
bedankpaginaIngangsdatumGelijkDRVAnnuleringText: string = 'Uw zorgverzerzekering en doorlopende reis- en annuleringsverzekering gaan in op';
bedankpaginaIngangsdatumOngelijkZorgText: string = 'Uw zorgverzekering gaat in op';
bedankpaginaIngangsdatumOngelijkDRVText: string = 'Uw doorlopende reisverzekering gaat in op';
bedankpaginaIngangsdatumOngelijkDRVAnnuleringText: string = 'Uw doorlopende reis- en annuleringsverzekering gaat in op';
bedankpaginaPolisTextElement: string = 'unive-cross-sell-confirmation > ol > li:nth-child(2) > div > p';
bedankpaginaPolisText: string = 'U ontvangt uw zorg- en reispolis per mail. U kunt uw zorgpolis binnenkort ook inzien en '
                                + 'downloaden via Mijn Univé Zorg. Uw reispolis kunt u inzien en downloaden via Mijn Univé.';
bedankpaginaPremieTextElement: string = 'unive-cross-sell-confirmation > ol > li:nth-child(3) > div > p';
bedankpaginaPremieText: string = 'Wij incasseren uw zorg- en reispremie automatisch van uw bankrekening als u via automatische incasso betaalt.';
bedankpaginaHeeftUNogVragenTextElement: string = 'unive-cross-sell-confirmation > div:nth-child(5) > p';

}