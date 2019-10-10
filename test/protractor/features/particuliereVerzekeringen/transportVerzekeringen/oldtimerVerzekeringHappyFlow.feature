@oldtimerverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'oldtimerverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Oldtimerverzekering page of the Unive website
    When I enter step one and click next on step three of oldtimerverzekering with:
      | licensePlate | <licensePlate> |
    And I enter step three page of oldtimerverzekering for <licensePlate>
    And I enter step four page of oldtimerverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona |
      | RG-81-HX     | ronaldo |


