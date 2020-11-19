@eigenVervoerVerzekering

Feature: Happy flow for 'zakelijk eigen vervoer verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Eigen vervoerverzekering page of the Unive website
    When I enter step one page and click next on step two of eigen vervoer verzekering with:
      | activity | fotograaf     |
      | typeCar  | passenger car |
      | howMany  | 1             |
    And I enter step four page of eigen vervoer verzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown
    
    Examples:
      | persona | company  |
      | ronaldo | facebook |

