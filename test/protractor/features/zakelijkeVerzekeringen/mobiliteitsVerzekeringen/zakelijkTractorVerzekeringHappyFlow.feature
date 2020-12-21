@zakelijkTractorVerzekering

Feature: Happy flow for 'zakelijk tractorverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Tractorverzekering page of the Unive website
    When I enter step one page and click next on step two of zakelijk tractorverzekeringen with:
      | value    | 15000 |
      | maxSpeed | 31-40 |
    And I enter step three page of zakelijk tractorverzekeringen with:
      | chassisNumber | 1234           |
    And I enter step four page of zakelijk tractorverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
     | company         | persona |
     | rg timmerwerken | ronaldo |


  Scenario Outline: Happy flow for 'zakelijke tractorverzekering' with different owner.
    Given I am on the Tractorverzekering page of the Unive website
    When I enter step one page and click next on step two of zakelijk tractorverzekeringen with:
      | value    | 15000 |
      | maxSpeed | 31-40 |
    And I enter step three page of zakelijk tractorverzekeringen with different owner:
      | chassisNumber | 1234           |
    And I enter step four page of zakelijke tractorverzekering for <company> with <persona> different owner <natural_person>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
     | company         | persona | natural_person |
     | rg timmerwerken | ronaldo | messi          |

