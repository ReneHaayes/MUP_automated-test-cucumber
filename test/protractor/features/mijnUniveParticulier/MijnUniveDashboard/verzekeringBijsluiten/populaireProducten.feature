@populaireProductenVerzekeringBijsluiten

Feature: Verzekering bijsluiten shows popular products on top.

  Scenario Outline: Verzekering bijsluiten shows popular products on top.
    Given Customer illing is logged in on the mijn unive verzekering bijsluiten page of the Unive website
    When Customer clicks on <wichTile> tile of the popular product on verzekering bijsluiten page
    Then Verify the tile correctly redirects url for the <wichTile> tile

    Examples:
      | wichTile |
      | first    |
      | second   |
      | thirth   |

