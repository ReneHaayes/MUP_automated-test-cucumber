@woonVerzekering
@regressie
Feature: Happy flow for 'woonVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the woonVerzekeringPat page of the Unive website
    When I enter step one page of woonverzekering for persona <persona>
    And I fill in woningkenemerken with:
      | persona          | <persona> |
      | wallHouse        | stone     |
      | strawRoofing     | no        |
      | outHouse         | no        |
      | ownerHouseRented | total     |
      | additionalOption | monument  |
      | inhabited        | no        |

    Examples:
      | persona |
      | ronaldo |
