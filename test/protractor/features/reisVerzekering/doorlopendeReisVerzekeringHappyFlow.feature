@reisVerzekering
@doorlopendeReisVerzekering
@regressie
Feature: Happy flow for 'doorlopendeReisVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the doorlopende reisverzekering page of the Unive website
    When I enter step one and step two page of doorlopende reisverzekering for myself
    And I enter details of <persona> in your data page of reisverzekering
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
