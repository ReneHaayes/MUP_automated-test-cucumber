@rechtsbijstandverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'rechtsbijstandverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Rechtsbijstandverzekering page of the Unive website
    When I enter step one page of rechtsbijstandverzekering for family composition of: one person
    And I enter details of <persona> in your data page of rechtsbijstand verzekeringen
#    Then Customer can select bekijk controleer gegevens for rechtsbijstandverzekering in almost insured page with correct data
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |

