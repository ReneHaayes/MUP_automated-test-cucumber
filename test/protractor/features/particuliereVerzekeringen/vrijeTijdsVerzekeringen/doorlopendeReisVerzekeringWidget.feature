@doorlopendeReisverzekeringWidget @hippo @particulierHippo @widget

Feature: Check the doorlopende reisverzekering widget on the productpage.

  Scenario Outline: Enter the family members and check if the correct data appears on the correct step.
    Given I am on the doorlopendereisverzekeringpp page of the Unive website
    When I click on the <family members> to insure
    Then the <family members> I have checked are present on the page

    Examples:
      | family members                                 |
      | Nothing is checked                             |
      | Mijzelf checked                                |
      | Mijzelf en Mijn Partner checked                |
      | Mijzelf en Mijn kinderen checked               |
      | Mijzelf, Mijn Partner en Mijn kinderen checked |
      | Mijn Partner checked                           |
      | Mijn kinderen checked                          |
      | Mijn Partner en Mijn kinderen checked          |

