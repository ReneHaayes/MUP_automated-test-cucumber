@verhuizingDoorgeven

Feature: Changing data for moving to a new address

  Scenario Outline: Filling in the moving form and sending it to Unive
    Given Customer <persona> is logged in on the mijn unive verhuisgegevens doorgeven page of the Unive website
    When Customer changes move details with:
      | movingDate  | today   |
      | zipCode     | 7541 WH |
      | houseNumber | 22      |
    Then Verify succes message for changing address is shown

    Examples:
      | persona |
      | illing  |
