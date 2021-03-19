@bootverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'bootverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Bootverzekering page of the Unive website
    When I enter step one of bootverzekering for boat <boatName>
    And I enter step two of bootverzekering
    And I enter step three page of bootverzekering for boat <boatName>
    And I enter details of <persona> in step four page of boot verzekering
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | boatName    | persona     |
      | azzam       | ronaldo     |
      | koegelwieck | neymar      |
