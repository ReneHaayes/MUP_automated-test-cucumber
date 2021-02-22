@motor @motorfietsverzekering @quadverzekering @trikeverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for motorfietsverzekering, quadverzekering and trikeverzekering.

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the <page> page of the Unive website
    When I enter step one page for motorcycle with license plate <licensePlate> with:
      | persona         | <persona>        |
      | purchaseDate    | 01-01-2019       |
      | alarmSystem     | startonderbreker |
      | damageFreeYears | 2                |
    And I enter step two page of motorcycle with
      | basisDekking      | waPlus                |
      | aanvullendeOpties | Ongevallenverzekering |
      | accessoires       | acc tm 2500           |
      | ownRisk           | ownRisk500            |
    And I enter step three page of motorcycle with
      | licensePlate                    | <licensePlate> |
      | kindOfInsurance                 | new            |
      | dateOfName                      | 01-01-2019     |
      | meldCode                        | 0000           |
      | purchasePrice                   | 1999           |
      | damageFreeYearsDifferentCompany | no             |
      | mainDriver                      | yes            |
      | owner                           | yes            |
    And I enter details of <persona> in step four page of motorcycle
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | page                  | persona | licensePlate |
      | Motorverzekering | ronaldo | MP-TT-99     |
      | Quadverzekering       | ronaldo | 97-XF-TK     |
      | Trikeverzekering      | ronaldo | 21-PLN-1     |
