@doorlopendeReisverzekering @doorlopendeAnnuleringsverzekering @qis @qisParticulier @qRelease

  Feature: Happy flow for 'doorlopendeReisverzekering and doorlopendeAnnuleringsverzekering'

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
      | ronaldo | Doorlopende reisverzekering        |
      | ronaldo | doorlopende annuleringsverzekering |

    Scenario: Filling in step one to check for email premie berekenen.
      Given I am on the Doorlopende reisverzekering page of the Unive website
      When I enter step one page of doorlopende verzekeringen for myself
      And I enter email test@test.com for email mij deze premie berekenen
      Then Verify the correct wrong message is shown
