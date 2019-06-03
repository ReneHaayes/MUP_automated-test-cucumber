@kortlopendeReisVerzekering

Feature: Happy flow for 'kortlopendeReisVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Kortlopende reisverzekering page of the Unive website
    When I enter step one and step two page of kortlopende reisverzekering for myself with:
      | childrenTillFourYears | 0 |
    And I enter details of <persona> in your data page of reis verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
