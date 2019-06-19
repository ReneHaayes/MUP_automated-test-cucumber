@verhuizingDoorgeven

Feature: Changing data for moving to a new house

  Scenario Outline: Filling in the moving form and sending it to Unive
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer changes move details with:
      | movingDate  | 12062019    |
      | zipCode     | 8011TS      |
      | houseNumber | 126         |
      | street      | Nieuwstraat |
      | city        | Zwolle      |


    Examples:
      | persona |
      | annie   |
