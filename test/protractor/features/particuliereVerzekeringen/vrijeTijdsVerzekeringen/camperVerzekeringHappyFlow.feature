@camperverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'Camperverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Camperverzekering page of the Unive website
    When I enter step one of camperverzekering for <licensePlate> with:
      | usage    | <usage>    |
      | mileage  | <mileage>  |
      | coverage | <coverage> |
    And I enter step two of camperverzekering
    And I enter step three page of camperverzekering for <licensePlate> with
    And I enter step four page of camperverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona | coverage | usage              | mileage       |
      | BL-JL-41     | ronaldo | wa       | recreational       | tot10000      |
      | BL-JL-41     | ronaldo | waPlus   | business           | 10000tot20000 |
      | BL-JL-41     | ronaldo | allRisk  | daily recreational | meerDan20000  |
