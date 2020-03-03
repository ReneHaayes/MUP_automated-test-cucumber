@zorgWizardCrossSell

Feature: Check of na het doorlopen van de wizard de 4 verschillende crossSell opties worden getoond
    
    @BedankpaginaDRV
    Scenario Outline: doorlopen van de zorgwizard (geen aanvullende pakketten) en check of doorlopende reis crosssell wordt getoond
        Given I am on the zorgVerzekeringCrossSellBedankpaginaParameter page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
        And I click on Volgende page one
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
    
    @crossSellInWizard
    Scenario Outline: doorlopen van de wizard en cross sell bijsluiten vanuit de wizard
        Given I am on the zorgVerzekeringCrossSellInWizardParameter page of the Unive website
        When I select basic insurance no collective with:
        |insuranceBasis|<insuranceBasis>|
    
    Examples:
    |insuranceBasis|
    |Zorg Vrij     |