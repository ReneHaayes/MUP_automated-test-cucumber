@fietsverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'fietsverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Fietsverzekering page of the Unive website
    When I enter step one and step two page of fiets verzekeringen for persona <persona> with:
      | purchasePrice | 1200 |
    And I enter step three page of fiets verzekeringen with:
      | brandName   | test |
      | brandModel  | test |
      | frameNumber | 1234 |
    And I enter details of <persona> in your data page of fiets verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |

