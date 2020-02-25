@klantenserviceDirectOnlineRegelen

Feature:

  Scenario Outline:
    Given Customer illing is logged in on the mijn unive particulier page of the Unive website
    When Customer navigates to klantenservice and clicks on tile <tile> for direct online regelen
    Then Verify the page is correctly loaded with url for tile <tile>

    Examples:
      | tile                      |
      | Schade melden             |
      | Zorgnota declareren       |
      | Persoonsgegevens wijzigen |
      | Verzekering wijzigen      |
      | Verzekering inzien        |
      | Mijn Univé                |
