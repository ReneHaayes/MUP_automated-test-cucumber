@kostbaarhedenverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'kostbaarhedenverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Kostbaarhedenverzekering page of the Unive website
    When I enter step one and step two page of kostbaarheden verzekeringen with:
      | persona       | <persona> |
      | estimateValue | 15000     |
    And I enter step three page of kostbaarheden verzekeringen with:
      | material    | gold        |
      | posession   | 01-2018     |
      | description | weddingring |
    And I enter details of <persona> in your data page of kostbaarheden verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
