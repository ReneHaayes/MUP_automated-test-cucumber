@kortlopendeAnnuleringsVerzekering
@regressie
Feature: Happy flow for 'kortlopende annulerings verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the kortlopende annuleringsverzekering page of the Unive website
    When I enter step one and step two page of kortlopende annuleringsverzekering for myself with:
      | childrenTillFourYears | 0    |
      | totalValue            | 1500 |
    And I enter details of <persona> in your data page of reis verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
