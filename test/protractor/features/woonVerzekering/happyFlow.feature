@woonVerzekering
@regressie
Feature: Happy flow for 'woonVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the woonVerzekeringPat page of the Unive website
    When I enter step one page of woonverzekering for persona <persona>
    And I fill in woningkenmerken with:
      | persona          | <persona> |
      | wallHouse        | stone     |
      | strawRoofing     | no        |
      | outHouse         | no        |
      | ownerHouse       | yes       |
      | inhabited        | yes       |
    And I choose the correct premie with:
      | superficiesAndContents | contents |
    And I enter details of <persona> in step four page of woonverzekering
    Examples:
      | persona |
      | ronaldo |
