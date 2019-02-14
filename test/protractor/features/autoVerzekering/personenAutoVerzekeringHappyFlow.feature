@personenAutoVerzekering
@regressie
Feature: Happy flow for 'Autoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the autoverzekering page of the Unive website
    When I enter step one page of autoverzekeringen for <persona> with
      | licensePlate    | <licensePlate>    |
      | alreadyMember   | <alreadyMember>   |
      | yearlyMileage   | <yearlyMileage>   |
      | damageFreeYears | <damageFreeYears> |
    And I enter step two page of autoverzekering with
      | basisDekking      | <basisDekking>      |
      | aanvullendeOpties | <aanvullendeOpties> |
      | ownRisk           | <ownRisk>           |
      | carAccessoires    | <carAccessoires>    |
      | totalPremie       | annual              |
      | collective        | SC Heerenveen       |
    And I enter step three page of autoverzekering with
      | licensePlate        | <licensePlate> |
      | startDate           | 01-06-2019     |
      | startDateOnYourName | 01-01-2019     |
      | mainDriver          | mainDriverYes  |
      | ownerCar            | ownerCarYes    |
    And I enter step four page of autoverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona | yearlyMileage | damageFreeYears | alreadyMember | basisDekking | aanvullendeOpties      | ownRisk    | carAccessoires |
      | 06-HN-DL     | ronaldo | 20000tot25000 | 2               | no            | waPlus       | Inzittendenverzekering | ownRisk500 | autoAccTm5000  |
