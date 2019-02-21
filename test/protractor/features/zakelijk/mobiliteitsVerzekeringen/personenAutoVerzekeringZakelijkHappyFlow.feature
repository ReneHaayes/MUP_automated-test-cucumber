@personenAutoVerzekeringZakelijk
@regressie
Feature: Happy flow for 'Autoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the personen autoverzekering zakelijk page of the Unive website
    When I enter step one page of personen autoverzekeringen zakelijk for <company> with:
      | licensePlate    | <licensePlate> |
      | yearlyMileage   | 20000tot25000  |
      | damageFreeYears | 3              |
    And I enter step two page of personen autoverzekering zakelijk with
      | basisDekking   | allRisk       |
      | carAccessoires | autoAccTm5000 |
    And I enter step three page of personen autoverzekering zakelijk with
      | licensePlate        | <licensePlate> |
      | startDateOnYourName | today          |
      | mainDriver          | mainDriverYes  |
      | ownerCar            | ownerCarYes    |
    And I enter step four page of personenautoverzekering zakelijk for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | licensePlate | company         | persona |
      | 06-HN-DL     | rg timmerwerken | ronaldo |
