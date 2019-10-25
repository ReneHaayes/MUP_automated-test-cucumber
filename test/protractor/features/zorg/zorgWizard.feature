@zorgWizardCollectieven

Feature: Check of het mogelijk is om een collectief toe te voegen (zowel thuiszorg als niet-thuiszorg)

    Scenario: Valideer het laden van de pagina (door H1 te checken)
        Given I am on the Zorgverzekering page of the Unive website
        When I do nothing
        Then validate the Zorgverzekering page is correctly loaded
    
    Scenario: Valideer het laden van de collectieven overlay met alle benodigde elementen
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        Then validate that the collective overlay shows with correct elements
    
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
        |collective        |insuranceBasis|discountBasis|discountAanvullend|
        |Omring Medewerkers|Zorg Vrij     |5%           |10%               |
        |Nic Oud BV        |Zorg Geregeld |3%           |10%               |
    
    Scenario: voeg collectief toe, selecteer zorg vrij, verifieer dat "laat alle basisverzekering" niet zichtbaar is, verifieer dat niet mogelijk is om zorg select te kiezen
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        And I add a collective with:
        |collective|Omring Medewerkers|
        And I select basic insurance Zorg Vrij
        Then verify show all basic insurance is not visible
        And verify it is not possible to choose zorg select
    
    Scenario Outline: delete collectief en klik door alle pakketten heen met zorg vrij en zorg geregeld
        Given I am on the Zorgverzekering page of the Unive website
        When I click on add collective button in wizard
        And I add a collective with:
        |collective|<collective>|
        And I delete the collective in wizard
        Then select basic insurance with:
        |insuranceBasis|<insuranceBasis>|
        And verify that all aanvullende packages and tand packages -not collective- are clickable

        Examples:
        |collective        |insuranceBasis|
        |Omring Medewerkers|Zorg Vrij     |
        |Omring Medewerkers|Zorg Geregeld |
    
    Scenario: selecteer zorg select, check dat je niet collectief toe kunt voegen, check daarna of alle losse modules klikbaar zijn en alle pakketten klikbaar zijn
        Given I am on the Zorgverzekering page of the Unive website
        When I select basic insurance Zorg Select
        Then Verify I am not able to add collective
        And Verify that all modules are clickable
        And Click on Pakketten button
        And verify that all aanvullende packages and tand packages -not collective- are clickable
