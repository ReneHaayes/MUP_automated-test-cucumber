@woonVerzekeringWidget
@regressie
Feature: Check the woonverzekering widget on the homepage.

  Scenario Outline: Enter a zipcode and housenumber and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following persona <persona> on the page for woonverzekering
    Then House data for woonverzekering <dodont> appears

    Examples:
      | pageName             | button                                     | dodont | persona |
      | homePat              | postcode en huisnummer homepage filled     | do     | ronaldo |
      | homePat              | homepage not filled                        | dont   | ronaldo |
      | woonVerzekeringPatPp | postcode en huisnummer product page filled | do     | ronaldo |
      | woonVerzekeringPatPp | product page not filled                    | dont   | ronaldo |

