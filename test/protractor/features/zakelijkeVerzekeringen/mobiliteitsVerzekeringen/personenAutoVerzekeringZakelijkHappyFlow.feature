@personenAutoVerzekeringZakelijk

Feature: Happy flow for 'personen auto verzekering zakelijk'

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
    And I enter step four page of personenautoverzekering zakelijk for <company> with driver <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | company         | persona |
      | 06-HN-DL     | rg timmerwerken | ronaldo |
    # op de bedankpagina staat 'Zakelijke personenautoAUTOverzekering' ipv personenautoverzekering


  Scenario Outline: Add specific driver to personen autoverzekering zakelijk.
    Given I am on the personen autoverzekering zakelijk page of the Unive website
    When I enter step one page of personen autoverzekeringen zakelijk for <company> with different <persona> driver:
      | licensePlate    | <licensePlate> |
      | yearlyMileage   | 20000tot25000  |
      | damageFreeYears | 2              |
    And I enter step two page of personen autoverzekering zakelijk with
      | basisDekking   | allRisk       |
      | carAccessoires | autoAccTm5000 |
    And I enter step three page of personen autoverzekering zakelijk with
      | licensePlate        | <licensePlate> |
      | startDateOnYourName | today          |
      | mainDriver          | mainDriverYes  |
      | ownerCar            | ownerCarYes    |
    And I enter step four page of personenautoverzekering zakelijk for <company> with different <persona> driver
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | company         | persona |
      | 06-HN-DL     | rg timmerwerken | ronaldo |
    # op de bedankpagina staat 'Zakelijke personenautoAUTOverzekering' ipv personenautoverzekering




