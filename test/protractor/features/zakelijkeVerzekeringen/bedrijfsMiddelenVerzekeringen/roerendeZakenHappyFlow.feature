@roerendeZakenVerzekering

Feature: Happy flow for 'roerende zaken verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Roerende zakenverzekering page of the Unive website
    When I enter step one and step two page of roerende zakenverzekering for <company> myself with:
      | activity | webdesign |
    And I enter your data page of roerende zakenverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |
