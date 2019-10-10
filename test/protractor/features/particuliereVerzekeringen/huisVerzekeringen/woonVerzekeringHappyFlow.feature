@woonverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'woonverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Woonverzekering page of the Unive website
    When I enter step one page of woonverzekering for persona <persona>
    And I fill in woningkenmerken with:
      | persona      | <persona> |
      | wallHouse    | stone     |
      | strawRoofing | no        |
      | outHouse     | no        |
      | ownerHouse   | yes       |
      | inhabited    | yes       |
    And I choose the correct premie with:
      | superficiesAndContents | contents |
    And I enter details of <persona> in step four page of woonverzekering
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
