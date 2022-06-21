@mijnVerzekeringenSchadeEnNuFlow

Feature: SchadeEnNuFlow for mijn verzekeringen

  Scenario Outline: Check if schade_en_nu pagina is present
    Given Customer illing is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer clicks on <verzekering> on Polisdetailpage to show Schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown

    Examples:
      | verzekering     |
      | tweedeproduct   |
      | derdeproduct    |
      | vierdeproduct   |

    # elk product heeft een schade en nu pagina. Dit is een test om te verifiëren dat de Schade en Nu? pagina wordt getoond
