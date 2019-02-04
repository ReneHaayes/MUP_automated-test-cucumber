@woonVerzekeringWidget
@regressie
Feature: Check the woonverzekering widget on the homepage.

  Scenario Outline: Enter a zipcode and housenumber and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following persona <persona> on the page for woonverzekering
    Then House data for woonverzekering <dodont> appears

    Examples:
      | pageName | button                        | dodont | persona |
      | homePat  | postcode en huisnummer filled | do     | ronaldo |
      | homePat  | not filled                    | dont     | ronaldo |
#      | autoverzekeringProductPagePat | dont know product page        | dont   | ronaldo |
