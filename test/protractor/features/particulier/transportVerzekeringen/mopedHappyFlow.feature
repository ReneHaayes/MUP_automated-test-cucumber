@moped
@regressie
Feature: Happy flow for 'Bromfiets Verzekering' and 'Scooter Verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the <page> page of the Unive website
    When I enter step one page of moped for persona <persona> with license plate <licensePlate> and 3 damage free years
    And I enter step two page of moped with
      | basisDekking      | waPlus                 |
      | aanvullendeOpties | Ongevallenverzekering |
      | accessoires       | acc tm 500             |
      | ownRisk           | ownRisk500             |
    And I enter step three page of moped with
      | kindOfInsurance                 | new        |
      | dateOfName                      | 01-01-2019 |
      | meldCode                        | 0000       |
      | purchasePrice                   | 1999       |
      | damageFreeYearsDifferentCompany | no         |
      | mainDriver                      | yes        |
      | owner                           | yes        |
    And I enter details of <persona> in step four page of moped
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | page                 | persona | licensePlate |
      | bromfietsverzekering | ronaldo | 12-FRP-3     |
      | scooterverzekering   | ronaldo | F-169-NS     |
