@zorgWizardCrossSell

Feature: Check cross sell op stap 2 en op bedankpagina
    
    @BedankpaginaDRV
    Scenario Outline: doorlopen van de zorgwizard (geen aanvullende pakketten) en check of doorlopende reis crosssell wordt getoond
        Given I am on the zorgVerzekeringCrossSellBedankpaginaParameter page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        And I select geen verzekering overstapreden in dropdown
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        |inkomstenNL    |<inkomstenNL>    |        
        And I click on Volgende page two
        And I enter BSN on step 3 with <persona>
        And I click on bevestigen step 3
        Then validate that doorlopende reis crossSell is visible and shows correct data

        Examples:
        |persona|inkomstenNietNL|inkomstenNL|insuranceBasis|
        |ronaldo|Nee            |           |Zorg Vrij     |

    @oudBedankpaginaOVPAVPRBV    
    Scenario Outline: doorlopen van de zorgwizard (met aanvullende pakketten) en check of rechtsbijstand crosssell wordt getoond
        Given I am on the zorgVerzekering page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I select Aanvullend Beter
        And I click on Volgende page one
        And I enter personal data on step 2 of wizard with <persona>
        And I answer inkomstenvragen with:
        |inkomstenNietNL|<inkomstenNietNL>|
        |inkomstenNL    |<inkomstenNL>    |
        And I click on Volgende page two
        And I enter BSN on step 3 with <persona>
        And I click on bevestigen step 3
        Then validate that crossSell is visible and shows correct data

        Examples:
        |persona|inkomstenNietNL|inkomstenNL|insuranceBasis|
        |ronaldo|Ja             |Ja         |Zorg Vrij     |
    
    @buitenlandStap
    Scenario Outline: check of buitenland stap wordt getoond en alle elementen aanwezig zijn bij binnenkomst met cs=1 parameter
        Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
        Then validate step 2 is buitenland step and all elements are present
    
    Examples:
    |insuranceBasis|
    |Zorg Vrij     |

    @buitenlandStap
    Scenario Outline: doorlopen van de wizard en cross sell bijsluiten vanuit de wizard
    Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
    When I select basic insurance no collective with:
    |insuranceBasis|<insuranceBasis>|
    And I select Aanvullend Beter
    And I click on Volgende page one
    Then I validate that all legends are visible on step 2
    And there are only 3 unibols present
    
    Examples:
    |insuranceBasis|
    |Zorg Vrij     |

    @buitenlandStap
    Scenario Outline: check of geen cross sell op bedankpagina wordt getoond wanneer er in de wizard geen product wordt geselecteerd op buitenland stap
    Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
    And I select basic insurance no collective with:
    |insuranceBasis|<insuranceBasis>|
    And I click on Volgende page one
    When I click on Volgende Buitenland page
    And I select geen verzekering overstapreden in dropdown
    And I enter personal data on step 2 of wizard with <persona>
    And I answer inkomstenvragen with:
    |inkomstenNietNL|<inkomstenNietNL>|
    |inkomstenNL    |<inkomstenNL>    |
    And I click on Volgende page two
    And I enter BSN on step 3 with <persona>
    And I click on bevestigen step 3 without bedankpagina check
    Then validate that doorlopende reis crossSell is not visible
    And validate that bedanktpagina and all elements are correct with <persona>
    
    Examples:
    |insuranceBasis|persona|inkomstenNietNL|inkomstenNL|
    |Zorg Vrij     |ronaldo|Nee            |           |

    @buitenlandStap
    Scenario Outline: check of DRV op buitenland stap goed gaat door de hele front-end
    Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
    And I select basic insurance no collective with:
    |insuranceBasis|<insuranceBasis>|
    And I click on Volgende page one
    When I select reisproduct with:
    |reisProduct|<reisProduct>|
    And I click on Volgende Buitenland page
    And I select geen verzekering overstapreden in dropdown
    And adjust startdate of cross sell product
    And I enter personal data on step 2 of wizard with <persona>
    And I answer inkomstenvragen with:
    |inkomstenNietNL|<inkomstenNietNL>|
    |inkomstenNL    |<inkomstenNL>    |
    And I click on Volgende page two
    And I answer acceptatiequestions with:
    |verzekeringsVerleden   |<verzekeringsVerleden>   |
    |strafrechtelijkVerleden|<strafrechtelijkVerleden>|
    |schadeVerleden         |<schadeVerleden>         |
    And I enter BSN on step 3 with <persona>
    And I validate text geen voorlopige dekking is correct
    And I validate overlay controleren has correct zorg and DRV information
    And I click on bevestigen step 3 without bedankpagina check
    Then validate that doorlopende reis crossSell is not visible
    And validate all elements for zorg and <reisProduct> are correct
    And validate that bedanktpagina and all elements are correct with <persona>
    
    Examples:
    |insuranceBasis|reisProduct                |persona|inkomstenNietNL|inkomstenNL|verzekeringsVerleden|strafrechtelijkVerleden|schadeVerleden|
    |Zorg Vrij     |doorlopende reisverzekering|ronaldo|Nee            |           |Ja                  |Ja                     |Ja            |

    @buitenlandStap
    Scenario Outline: check of DRV met annulering op buitenland stap goed gaat door de hele front-end
    Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
    And I select basic insurance no collective with:
    |insuranceBasis|<insuranceBasis>|
    And I click on Volgende page one
    When I select reisproduct with:
    |reisProduct|<reisProduct>|
    And I click on Volgende Buitenland page
    And I select geen verzekering overstapreden in dropdown
    And I enter personal data on step 2 of wizard with <persona>
    And I answer inkomstenvragen with:
    |inkomstenNietNL|<inkomstenNietNL>|
    |inkomstenNL    |<inkomstenNL>    |
    And I click on Volgende page two
    And I answer acceptatiequestions with:
    |verzekeringsVerleden   |<verzekeringsVerleden>   |
    |strafrechtelijkVerleden|<strafrechtelijkVerleden>|
    |schadeVerleden         |<schadeVerleden>         |
    And I enter BSN on step 3 with <persona>
    And I validate text voorlopige dekking is correct
    And I validate overlay controleren has correct zorg and DRV met annulering information
    And I click on bevestigen step 3 without bedankpagina check
    Then validate that doorlopende reis crossSell is not visible
    And validate all elements for zorg and <reisProduct> are correct
    And validate that bedanktpagina and all elements are correct with <persona>
    
    Examples:
    |insuranceBasis|reisProduct                                |persona|inkomstenNietNL|inkomstenNL|verzekeringsVerleden|strafrechtelijkVerleden|schadeVerleden|
    |Zorg Vrij     |doorlopende reis- en annuleringsverzekering|ronaldo|Nee            |           |Nee                 |Nee                    |Nee           |