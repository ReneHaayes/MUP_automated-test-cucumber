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
    
    @vergoedingenOverlay
    Scenario Outline: valideer overlay basisverzekeringen
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