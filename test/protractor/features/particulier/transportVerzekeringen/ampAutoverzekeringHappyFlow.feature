@ampAutoverzekering
@amp
@regressie
Feature: Check if the auto AMP page shows correctly

  Scenario: Check the elements on the page and click premie berekenen
    Given I am on the amp autoverzekering page of the Unive website
    When I press the button premie berekenen on the amp autoverzekering page
    Then Verify if elements on premie berekenen amp auto page are shown

