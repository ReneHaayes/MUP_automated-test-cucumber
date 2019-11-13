@SchadeService

Feature: Check if schade service is functioning correctly

  Scenario Outline: Verify schade service for Auto, both.
    Given I am on the schade service page of the Unive website
    When Customer selects <city> for schade service <carCaravanCamper>
    Then Verify <servicePoint> is available on location <location>

    Examples:
      | carCaravanCamper | servicePoint                 | location | city     |
      | auto             | UAS Pouw Zwolle              | 1        | Zwolle   |
      | auto             | Autoschadebedrijf Kroes      | 6        | Zwolle   |
      | camper           | Van den Elzen Caravanservice | 1        | Helmond  |
      | caravan          | Van Duinkerken Rekreatie     | 2        | Nijmegen |
