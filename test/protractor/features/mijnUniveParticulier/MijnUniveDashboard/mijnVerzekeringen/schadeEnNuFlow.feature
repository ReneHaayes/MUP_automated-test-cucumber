@mijnVerzekeringenSchadeEnNuFlow

Feature: SchadeEnNuFlow for mijn verzekeringen

  Scenario Outline: Check if schade_en_nu pagina is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer clicks on <verzekering> on Polisdetailpage to show Schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown

    Examples:
      | verzekering       |
      | Autoverzekering   |
      | Bootverzekering   |
      | Camperverzekering |

    # bij uitbreiden verzekeringen ook toevoegen aan de switchcase van mijnVerzekeringSteps en element toevoegen aan mijnVerzekeringenElements
