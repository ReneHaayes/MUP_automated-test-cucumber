@klantenserviceDirectOnlineRegelen

Feature: Verify the direct online section on klantenservice directs correctly.

  Scenario Outline: Verify the tiles for direct online regelen correctly redirects to url.
    Given Customer illing is logged in on the mijn unive particulier page of the Unive website
    When Customer navigates to klantenservice and clicks on tile <tile> for direct online regelen
    Then Verify the page is correctly loaded with url for tile <tile>

    Examples:
      | tile                             |
      | Schade melden                    |
      | Zorgnota declareren              |
      | Persoonlijke gegevens wijzigen   |
      | Verzekering opzeggen             |
      | Verhuizing doorgeven             |
      #| Verzekeringen inzien of wijzigen | werkt niet, onduidelijk waarom niet.
