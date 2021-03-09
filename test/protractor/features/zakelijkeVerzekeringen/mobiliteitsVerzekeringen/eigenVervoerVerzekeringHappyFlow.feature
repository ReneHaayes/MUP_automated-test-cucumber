@eigenVervoerVerzekering

Feature: Happy flow for 'zakelijk eigen vervoer verzekering'

 # Nieuwe inrichting sinds Sprint 21-02
  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Eigen vervoerverzekering page of the Unive website
    When I enter the first step of Eigen vervoersverzekering with <company> and click next
    And I answer the questions on step one with:
      | typeCar                | passenger car |
      | howMany                | 1             |
    And I enter the third step of eigen vervoer verzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |


    # Eigen vervoer Widget toegevoegd aan Eigen vervoer pagina in sprint 21-03
  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Eigen vervoerverzekering PP page of the Unive website
    When I fill in eigen vervoersverzekering widget with <company> and click Bereken uw Premie
    And I answer the questions on step one with:
      | typeCar                | passenger car |
      | howMany                | 1             |
    And I enter the third step of eigen vervoer verzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |



