@doorlopendeReisVerzekeringWidget

Feature: Check the doorlopende resiverzekering widget on the productpage.

  Scenario Outline: Enter the family members and check if the correct data appears on the correct step.
    Given I am on the doorlopendereisverzekeringpp page of the Unive website
    When I click on the <family members> to insure
    Then the <family members> I have checked are present on the page

    Examples:
      | family members                                 |
      | Mijzelf, Mijn Partner en Mijn kinderen checked |
      | Mijzelf en Mijn Partner checked                |
      | Mijzelf en Mijn kinderen checked               |
      | Mijzelf checked                                |
      | Mijn Partner en Mijn kinderen checked          |
      | Mijn Partner checked                           |
      | Mijn kinderen checked                          |
      | Nothing is checked                             |
