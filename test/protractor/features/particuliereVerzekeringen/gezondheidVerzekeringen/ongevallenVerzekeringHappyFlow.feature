@ongevallenVerzekering

Feature: Happy flow for 'ongevallen verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Ongevallenverzekering page of the Unive website
    When I enter step one page of ongevallenverzekering for family composition of: one person
    And I enter details of <persona> in your data page of ongevallen verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |

