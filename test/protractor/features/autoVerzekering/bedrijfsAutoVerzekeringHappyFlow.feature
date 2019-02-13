@bedrijfsAutoVerzekering
@regressie
Feature: Happy flow for 'Autoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the bedrijfs autoverzekering page of the Unive website
    When I enter step one page of bedrijfs autoverzekeringen for <company> with
      | licensePlate    | <licensePlate> |
      | yearlyMileage   | 12000tot20000  |
      | damageFreeYears | 3              |
    And I enter step two page of bedrijfs autoverzekering with
      | basisDekking | allRisk |
    And I enter step three page of bedrijfs autoverzekering with
      | licensePlate        | <licensePlate> |
      | startDate           | 01-06-2019     |
      | startDateOnYourName | 01-01-2019     |
    And I enter step four page of bedrijfs autoverzekering for <company> with <persona>
    And I enter step five page of autoverzekering with
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | company  | persona |
      | 48-VDS-3     | facebook | ronaldo |


