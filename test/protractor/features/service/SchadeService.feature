@SchadeService

Feature: Check if schade service is functioning correctly

  Scenario Outline: Verify schade service for Auto, camper and caravan.
    Given I am on the schade service page of the Unive website
    When Customer selects <city> for schade service <carCaravanCamper>
    Then Verify <servicePoint> is available on location <location>

    Examples:
      | carCaravanCamper | servicePoint                 | location | city     |
      | auto             | UAS Pouw Zwolle              | 1        | Zwolle   |
      | auto             | Autoschadebedrijf Kroes      | 6        | Zwolle   |
      | camper           | Van den Elzen Caravanservice | 1        | Helmond  |
      | caravan          | Van Duinkerken Rekreatie     | 2        | Nijmegen |


  Scenario Outline: Verify schade service for car with selecting servicepoint.
    Given I am on the schade service page of the Unive website
    When Customer selects schadehersteller with <servicePoint> on the map in city <city>
    Then Verify <address> and <openingHours> on <day> are shown correctly when schadeservice is selected

    Examples:
      | servicePoint    | city   | address       | day     | openingHours |
      | UAS Pouw Zwolle | Zwolle | Lippestraat 5 | Maandag | 08:00-17:15  |
