@ampAutoverzekering
@regressie
Feature: Check if the AMP page shows correctly

  Scenario: Check the elements on the page and click premie berekenen
    Given I am on the amp page of the Unive website
    When I press the button premie berekenen on the amp autoverzekering page
    Then Verify elements on premie berekenen amp page is shown
