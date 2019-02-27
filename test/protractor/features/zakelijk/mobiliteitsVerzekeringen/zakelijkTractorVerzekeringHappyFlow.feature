@zakelijkTractorVerzekering
@regressie
Feature: Happy flow for 'zakelijk tractor verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zakelijk tractorverzekering page of the Unive website
    When I enter step one page and click next on step two of zakelijk tractorverzekeringen with:
      | value    | 15000 |
      | maxSpeed | 31-40 |
    And I enter step three page of zakelijk tractorverzekeringen with:
      | licensePlate  | <licensePlate> |
      | chassisNumber | 1234           |
    And I enter step four page of zakelijk tractorverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | licensePlate | company         | persona |
      | GV-12-34     | rg timmerwerken | ronaldo |


