@camperVerzekering
@regressie
Feature: Happy flow for 'Camperverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Camperverzekering page of the Unive website
    When I enter step one and click next on step two of camperverzekering for <licensePlate> with
    And I enter step three page of camperverzekering for <licensePlate> with
    And I enter step four page of camperverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona |
      | BL-JL-41     | ronaldo |
