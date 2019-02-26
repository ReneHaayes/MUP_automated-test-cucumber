@zakelijkAansprakelijkheidsVerzekering
@regressie
Feature: Happy flow for 'zakelijk aansprakelijkheids verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zakelijk aansprakelijkheidsverzekering page of the Unive website
    When I enter step one page and click next on step two for zakelijk aansprakelijkheidsverzekering with company <company>
    And I enter step three page and click next on step four for zakelijk aansprakelijkheidsverzekering with:
      | tools | geen |
    And I enter step five page of zakelijk aansprakelijkheidsverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |
