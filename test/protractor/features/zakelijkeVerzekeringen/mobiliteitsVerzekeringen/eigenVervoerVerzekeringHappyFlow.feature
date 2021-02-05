@eigenVervoerVerzekering

Feature: Happy flow for 'zakelijk eigen vervoer verzekering'

 # Nieuwe inrichting sinds Sprint 21-02
  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Eigen vervoerverzekering page of the Unive website
    When I enter the first step of Eigen vervoersverzekering with <company> and click next
    And I answer the questions on step one with:
      | typeCar                | passenger car |
      | howMany                | 1             |
    And I enter step four page of eigen vervoer verzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |

    Then The thank you page for <persona> is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |
