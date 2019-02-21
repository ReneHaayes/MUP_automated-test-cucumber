@doorlopendeVerzekeringen
  @regressie
  Feature: Happy flow for 'doorlopendeReisVerzekering and doorlopendeAnnuleringsVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the <page> page of the Unive website
    When I enter step one and step two page of doorlopende verzekeringen for myself
    And I enter details of <persona> in your data page of reis verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona | page                               |
      | ronaldo | doorlopende reisverzekering        |
      | ronaldo | doorlopende annuleringsverzekering |
