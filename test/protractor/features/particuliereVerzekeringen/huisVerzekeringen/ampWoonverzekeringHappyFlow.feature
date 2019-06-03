@ampWoonverzekering
@amp

Feature: Check if the woon AMP page shows correctly

  Scenario: Check the elements on the page and click premie berekenen
    Given I am on the amp woonverzekering page of the Unive website
    When I press the button premie berekenen on the amp woonverzekering page
    Then Verify elements on premie berekenen woon page is shown
