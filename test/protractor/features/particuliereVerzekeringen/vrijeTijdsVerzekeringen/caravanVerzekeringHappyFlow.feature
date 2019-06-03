@caravanVerzekering

Feature: Happy flow for 'caravan verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Caravanverzekering page of the Unive website
    When I enter step one and click next on step two of caravan verzekering
    And I enter step three page of caravanverzekering for <persona> with:
      | weight        | 400  |
      | chassisNumber | 0000 |
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
