@woonverzekeringWidget @hippo @particulierHippo @widget

Feature: Check the woonverzekering widget on the homepage.

  Scenario Outline: Enter a zipcode and house number and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following persona <persona> on the page for woonverzekering
    Then House data for woonverzekering <willWont> appears

    Examples:
      | pageName          | button                                     | willWont | persona |
      | Home              | postcode en huisnummer homepage filled     | will     | ronaldo |
      | Home              | homepage not filled                        | wont     | ronaldo |
      | woonVerzekeringPp | postcode en huisnummer product page filled | will     | ronaldo |
      | woonVerzekeringPp | product page not filled                    | wont     | ronaldo |

