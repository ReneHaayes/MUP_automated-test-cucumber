@bromfietsVerzekering
@regressie
Feature: Happy flow for 'Bromfiets Verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the bromfietsVerzekeringPat page of the Unive website
    When I enter step one page of bromfiets verzekering for persona <persona> with license plate <licensePlate> and 3 damage free years
    And I enter step two page of bromfiets verzekering with
      | basisDekking      | waPlus                 |
      | aanvullendeOpties | ongevallen verzekering |
      | accessoires       | acc tm 500             |
      | ownRisk           | ownRisk500             |
    And I enter step three page of bromfiets verzekering with
      | kindOfInsurance                 | new        |
      | dateOfName                      | 01-01-2019 |
      | meldCode                        | 0000       |
      | purchasePrice                   | 1999       |
      | damageFreeYearsDifferentCompany | no         |
      | mainDriver                      | yes        |
      | owner                           | yes        |
    And I enter details of <persona> in step four page of bromfiets verzekering
    And I fill in step four of bromfiets verzekering page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona | licensePlate |
      | ronaldo | 12-FRP-3     |