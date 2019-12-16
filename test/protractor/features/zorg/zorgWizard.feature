@zorgWizard

Feature: Validatie van functionaliteit in de zorgwizard
    
    @collectieven
    Scenario: Valideer het laden van de pagina (door H1 te checken)
        Given I am on the Zorgverzekering page of the Unive website
        When I do nothing
        Then validate the Zorgverzekering page is correctly loaded
    
    @collectieven
    Scenario: Valideer het laden van de collectieven overlay met alle benodigde elementen
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        Then validate that the collective overlay shows with correct elements
    
    @collectieven
    Scenario Outline: Toevoegen van een niet thuiszorg collectief, selecteer zorg vrij/geregeld en verifieer dat alle aanvullende pakketten aanwezig en klikbaar zijn met juiste kortingstexten
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        And I add a collective with:
        |collective        |<collective>        |
        |discountBasis     |<discountBasis>     |
        |discountAanvullend|<discountAanvullend>|
        Then select basic insurance and validate that all aanvullende packages -not thuiszorgcollective- and tand packages are visible and clickable with correct discount with:
        |collective        |<collective>        |
        |insuranceBasis    |<insuranceBasis>    |
        |discountBasis     |<discountBasis>     |
        |discountAanvullend|<discountAanvullend>|

        Examples:
        |collective            |insuranceBasis|discountBasis|discountAanvullend|
        |Omring Medewerkers    |Zorg Vrij     |5%           |10%               |
        |Nic Oud BV            |Zorg Geregeld |3%           |10%               |
        |Carinova Servicepakket|Zorg Vrij     |5%           |10%               |
        |Carinova Servicepakket|Zorg Geregeld |5%           |10%               |
    
    @collectieven
    Scenario: voeg collectief toe, selecteer zorg vrij, verifieer dat "laat alle basisverzekering" niet zichtbaar is, verifieer dat niet mogelijk is om zorg select te kiezen
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        And I add a collective with:
        |collective|Omring Medewerkers|
        And I select basic insurance no collective with:
        |insuranceBasis|Zorg Vrij|
        Then verify show all basic insurance is not visible
        And verify it is not possible to choose zorg select
    
    @collectieven    
    Scenario Outline: delete collectief en klik door alle pakketten heen met zorg vrij en zorg geregeld
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        And I add a collective with:
        |collective|<collective>|
        And I delete the collective in wizard
        Then I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And verify that all aanvullende packages and tand packages -not collective- are clickable

        Examples:
        |collective            |insuranceBasis|
        |Omring Medewerkers    |Zorg Vrij     |
        |Carinova Servicepakket|Zorg Geregeld |
    
    @collectieven
    Scenario: selecteer zorg select, check dat je niet collectief toe kunt voegen, check daarna of alle losse modules klikbaar zijn en alle pakketten klikbaar zijn
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|Zorg Select|
        Then Verify I am not able to add collective
        And Verify that all modules are clickable
        And I click on Pakketten button
        And verify that all aanvullende packages and tand packages -not collective- are clickable
    
    @bedanktPagina
    Scenario Outline: Doorlopen van de wizard en checken of bijna verzekerd pagina en bedanktpagina de juiste elementen bevatten
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I validate that all legends are visible on step 2
        And I select geen verzekering overstapreden in dropdown
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        |inkomstenNL    |<inkomstenNL>    |
        And I click on Volgende page two
        And I validate that all legends are visible on step 3
        And I enter BSN on step 3 with <persona>
        And I click on bevestigen step 3
        Then validate that bedanktpagina and all elements are correct with <persona>

        Examples:
        |persona|inkomstenNietNL|inkomstenNL|insuranceBasis|
        |ronaldo|Ja             |Ja         |Zorg Select   |
    
    Scenario Outline: Niet mogelijk om door te navigeren naar stap 3 bij geen inkomen uit NL
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I select geen verzekering overstapreden in dropdown
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        |inkomstenNL    |<inkomstenNL>    |
        Then validate errormessage inkomstenvragen and it is not possible to navigate to step 3

        Examples:
        |persona|inkomstenNietNL|inkomstenNL|insuranceBasis|
        |ronaldo|Ja             |Nee        |Zorg Select   |
    
    Scenario: Valideer de introteksten voor aanvullende verzekeringen en partner kind op stap 1 (wanneer nog geen basisverzekering is geselecteerd)
        Given I am on the Zorgverzekering page of the Unive website
        When I do nothing
        Then validate the introtexts are correctly shown
    
    @eigenRisico
    Scenario Outline: Valideer of eigen risico juist wordt toegepast op basisverzekeringspakketten (Zorg Select)
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        Then I select eigen risico and validate that the eigen risico text is shown in basis verzekering blok with:
        |insuranceBasis|<insuranceBasis>|
        |eigenRisico   |<eigenRisico>   |

        Examples:
        |insuranceBasis|eigenRisico|
        |Zorg Select   |385        |
        |Zorg Select   |485        |
        |Zorg Select   |585        |
        |Zorg Select   |685        |
        |Zorg Select   |785        |
        |Zorg Select   |885        |
    
    @eigenRisico    
    Scenario Outline: Valideer of eigen risico juist wordt toegepast op basisverzekeringspakketten (Zorg Geregeld)
        Given I am on the Zorgverzekering page of the Unive website
        When I click on show all basic insurances
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        Then I select eigen risico and validate that the eigen risico text is shown in basis verzekering blok with:
        |insuranceBasis|<insuranceBasis>|
        |eigenRisico   |<eigenRisico>   |

        Examples:
        |insuranceBasis|eigenRisico|
        |Zorg Geregeld |385        |
        |Zorg Geregeld |485        |
        |Zorg Geregeld |585        |
        |Zorg Geregeld |685        |
        |Zorg Geregeld |785        |
        |Zorg Geregeld |885        |
    
    Scenario: selecteer premie per jaar en check of op stap 2 acceptgiro zichtbaar is
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|Zorg Select|
        And I select premie per jaar optie
        And I click on Volgende page one
        Then Verify that payment by acceptgiro option is visible
    
    @actievePolisCheck
    Scenario Outline: valideer dat de actieve polis check getriggered wordt en de klant niet door kan navigeren in de wizard op stap 2 (behalve naar MijnUnive)
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        And I click on Volgende page two
        Then Verify that active policy pop-up is shown
        And validate button navigates to MijnUnive

        Examples:
        |insuranceBasis|persona            |inkomstenNietNL|
        |Zorg Select   |testmanActivePolicy|Nee            |
    
    @actievePolisCheck
    Scenario Outline: valideer dat de actieve polis check getriggered wordt en de klant niet door kan navigeren in de wizard op stap 3 (behalve naar MijnUnive)
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I enter personal data on step 2 of wizard with <persona1>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        And I click on Volgende page two
        And I enter BSN on step 3 with <persona2>
        And I click on bevestigen step 3
        Then Verify that active policy pop-up is shown
        And validate button navigates to MijnUnive

        Examples:
        |insuranceBasis|persona1|persona2           |inkomstenNietNL|
        |Zorg Select   |pogba   |testmanActivePolicy|Nee            |

    @floatingButton
    Scenario Outline: valideer aanwezigheid floating button bij wegnavigeren uit de wizard
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        When I am on the zorgVrij page of the Unive website
        And I click on the floating button
        Then validate that customer is redirected to wizard with the correct products prefilled
        And Validate the floating button is not present
    
        Examples:
        |insuranceBasis|page    |
        |Zorg Select   |zorgVrij|

    @floatingButton
    Scenario Outline: valideer aanwezigheid floating button bij wegnavigeren uit de wizard
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        When I am on the autoverzekeringProductPage page of the Unive website
        And Validate the floating button is not present
        And I am on the eigenRisico page of the Unive website
        And I click on the floating button
        Then validate that customer is redirected to wizard with the correct products prefilled
        And Validate the floating button is not present
    
        Examples:
        |insuranceBasis|
        |Zorg Select   |

    @floatingButton
    Scenario Outline: valideer dat floating button niet meer verschijnt na wegklikken via het kruisje
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        When I am on the zorgVrij page of the Unive website
        And I click on the close floating button
        And I am on the Zorgverzekering page of the Unive website
        And I am on the zorgVrij page of the Unive website
        Then Validate the floating button is not present
    
        Examples:
        |insuranceBasis|page    |
        |Zorg Select   |zorgVrij|


    @addPartnerKind
    Scenario Outline: Valideer het openen en de werking van de partner/kind overlay
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        When I click on partner toevoegen button
        And I navigate to child tab
        And I navigate to partner tab
        And close the overlay
        Then validate overlay is closed and page 1 of wizard is shown

        Examples:
        |insuranceBasis|
        |Zorg Select   |
    
    @addPartnerKind
    Scenario Outline: Valideer het toevoegen van partner/kind
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I select aanvullende insurance no collective with:
        |insuranceAanvullend|<insuranceAanvullend>|
        And I select tand insurance with:
        |insuranceTand|<insuranceTand>|
        When I click on partner toevoegen button
        And I add a partner or child -same insurance checkbox checked- with <persona1>
        And validate partner has the same insurance as policyholder with:
        |insuranceBasis     |<insuranceBasis>     |
        |insuranceAanvullend|<insuranceAanvullend>|
        |insuranceTand      |<insuranceTand>      |
        And I click on kind toevoegen button
        And I add a partner or child -not same insurance checkbox checked- with <persona2>
        And validate child under 18 has the same insurance as policyholder with:
        |insuranceBasis     |<insuranceBasis>     |
        |insuranceAanvullend|<insuranceAanvullend>|
        |insuranceTand      |<insuranceTand>      |        
        And I click on kind toevoegen button
        And I add a partner or child -not same insurance checkbox checked- with <persona3>
        Then validate child has no insurance selected
        
        Examples:
        |insuranceBasis|insuranceAanvullend|insuranceTand|persona1   |persona2          |persona3          |
        |Zorg Select   |Aanvullend Goed    |Tand Goed    |testPartner|testkindOnder18Een|testkindBoven18Een|

    @addPartnerKind
    Scenario Outline: Valideer het in- en uitvouwen van de partner/kind headers
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        When I click on partner toevoegen button
        And I add a partner or child -same insurance checkbox checked- with <persona>
        Then validate I am able to open accordion for both
        And validate all active insurances are visible
        And validate I am able to close accordion for partner
        And validate no active insurance is visible for partner
        
        Examples:
        |insuranceBasis|persona    |
        |Zorg Select   |testPartner|

    @klantHerkenning
    Scenario Outline: valideer dat klantherkenning werkt en een bekende klant geen BSN hoeft in te voeren op stap 3
        Given I am on the Zorgverzekering page of the Unive website
        And I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        And I click on Volgende page two
        Then validate that BSN field is not visible on step 3
        And I click on bevestigen step 3
        And validate that bedanktpagina and all elements are correct with <persona>


        Examples:
        |insuranceBasis|persona                     |inkomstenNietNL|
        |Zorg Select   |testvrouwCustomerRecognition|Nee            |
    
    @klantHerkenning1
    Scenario Outline: valideer dat klantherkenning werkt en een bekende klant geen BSN hoeft in te voeren op stap 3
        Given I am on the Zorgverzekering page of the Unive website
        And I select <insuranceBasis> for <persona>
        And validate that BSN field is not visible on step 3
        And I change birthdate of policyholder <persona2>
        And validate there is one BSN field on step 3
        When I add a partner <persona3>
        And validate there are two BSN fields on step 3
        And I add a child <persona4>
        And validate there are two BSN fields on step 3
        And I change birthdate of policyholder <persona>
        And validate there is one BSN field on step 3
        And delete partner
        And I add a partner <persona4>
        Then validate that BSN field is not visible on step 3
        And I click on bevestigen step 3
        And validate that bedanktpagina and all elements are correct with <persona>

        Examples:
        |insuranceBasis|persona                     |persona2|persona3   |persona4                   |
        |Zorg Select   |testvrouwCustomerRecognition|pogba   |testPartner|testkindCustomerRecognition|

    @vergoedingenOverlay
    Scenario Outline: valideer overlay basisverzekeringen en sluiten overlay zonder selectie verzekering
        Given I am on the Zorgverzekering page of the Unive website
        When I click on Bekijk de vergoedingen button of basic insurance with:
        |insuranceBasis|<insuranceBasis>|
        Then validate basic insurances are shown correctly with:
        |insuranceBasis|<insuranceBasis>|
        And close the overlay

        Examples:
        |insuranceBasis|
        |Zorg Select   |
        |Zorg Vrij     |
        |Zorg Geregeld |
    
    @vergoedingenOverlay
    Scenario Outline: valideer overlay basisverzekeringen met selecteren van een basisverzekering
        Given I am on the Zorgverzekering page of the Unive website
        When I click on Bekijk de vergoedingen button of basic insurance with:
        |insuranceBasis|<insuranceBasis>|
        And validate basic insurances are shown correctly with:
        |insuranceBasis|<insuranceBasis>|
        And select basic insurance from overlay with:
        |insuranceBasis|<insuranceBasis>|
        Then validate overlay is closed and page 1 of wizard is shown

        Examples:
        |insuranceBasis|
        |Zorg Select   |
        |Zorg Vrij     |
        |Zorg Geregeld |