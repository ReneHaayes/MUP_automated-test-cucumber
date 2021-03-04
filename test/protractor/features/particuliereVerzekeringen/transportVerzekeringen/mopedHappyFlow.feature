@moped @bromfietsverzekering @scooterverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'Bromfietsverzekering' and 'Scooterverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the <page> page of the Unive website
    When I enter step one page of moped for persona <persona> with license plate <licensePlate> and 3 damage free years
    And I enter step two page of moped with <coverage>
#      | basisDekking | <coverage> |
      | accessoires | acc tm 500 |
      | ownRisk     | ownRisk500 |
    And I enter step three page of moped with <coverage>
      | kindOfInsurance                 | new   |
      | dateOfName                      | today |
      | meldCode                        | 0000  |
      | purchasePrice                   | 1999  |
      | damageFreeYearsDifferentCompany | no    |
      | mainDriver                      | yes   |
      | owner                           | yes   |
    And I enter details of <persona> in step four page of moped
    And I fill in almost insured page with:
      | insuranceHistory | no             |
      | criminalHistory  | no             |
      | damageHistory    | no             |
# Door op licensePlate te controleren kan gekeken worden of er nog een extra stap genomen moet worden
      | licensePlate     | <licensePlate> |
    Then The thank you page for <persona> is shown

    Examples:
      | page                 | persona | licensePlate | coverage |
      | Bromfietsverzekering | ronaldo | 12-FRP-3     | wa       |
      | Scooterverzekering   | ronaldo | F-169-NS     | wa   |
      | Scooterverzekering   | ronaldo | F-169-NS     | waPlus   |
      | Bromfietsverzekering | neymar  | DKR-97-R     | allRisk  |



