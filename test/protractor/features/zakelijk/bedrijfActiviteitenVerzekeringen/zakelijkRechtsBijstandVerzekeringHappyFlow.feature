@zakelijkRechtsBijstandVerzekering
@regressie
Feature: Happy flow for 'zakelijk rechtsbijstand verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zakelijk rechtsbijstandverzekering page of the Unive website
    When I enter step one page and click next on step two of zakelijk rechtsbijstand verzekering with:
      | activity | fotograaf |
    And I enter step three page of zakelijk rechtsbijstand verzekering with:
      | activityInformation | fotos maken |
    And I enter step four page of zakelijk rechtsbijstandverzekering for <company> with <persona>
    And I enter almost insured question for zakelijk rechtsbijstand verzekering with no
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |

