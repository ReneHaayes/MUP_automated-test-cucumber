@autoverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'personenautoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Autoverzekering page of the Unive website
    When I enter step one page of autoverzekeringen for <persona> with
      | licensePlate     | <licensePlate>     |
      | whoDrivesCarMost | <whoDrivesCarMost> |
      | alreadyMember    | <alreadyMember>    |
      | yearlyMileage    | <yearlyMileage>    |
      | damageFreeYears  | <damageFreeYears>  |
    And I enter step two page of autoverzekering with
      | basisDekking      | <basisDekking>      |
      | aanvullendeOpties | <aanvullendeOpties> |
      | ownRisk           | <ownRisk>           |
      | carAccessoires    | <carAccessoires>    |
      | totalPremie       | annual              |
      | collective        | aut                 |
    And I enter step three page of autoverzekering with
      | licensePlate        | <licensePlate> |
      | startDate           | 12-12-2019     |
      | startDateOnYourName | 11-06-2019     |
      | mainDriver          | mainDriverYes  |
      | ownerCar            | ownerCarYes    |
    And I enter step four page of autoverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona | yearlyMileage | damageFreeYears | alreadyMember | basisDekking | aanvullendeOpties      | ownRisk    | carAccessoires | whoDrivesCarMost |
      | 06-HN-DL     | ronaldo | 20000tot25000 | 2               | no            | waPlus       | Inzittendenverzekering | ownRisk500 | autoAccTm5000  | mySelf           |
