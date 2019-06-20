@verhuizingDoorgeven
@WIP

Feature: Changing data for moving to a new house

  Scenario Outline: Filling in the moving form and sending it to Unive
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer changes move details with:
      | movingDate  | today       |
      | zipCode     | 8017JC      |
      | houseNumber | 1           |
      | street      | Nieuwstraat |
      | city        | Zwolle      |


    Examples:
      | persona |
      | annie   |
