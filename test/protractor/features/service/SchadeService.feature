@SchadeService @WinkelZoeker

Feature: Check if schade service is functioning correctly

  Scenario Outline: Verify schade service and winkelzoeker selecting correct city
    Given I am on the <page> page of the Unive website
    When Customer selects <city> for schade service <carCaravanCamper>
    Then Verify <servicePoint> is available on location <location>

    Examples:
      | page           | carCaravanCamper | servicePoint                 | location | city     |
      | winkelzoeker   | auto             | Univé Zwolle                 | 1        | Zwolle   |
      | schade service | auto             | UAS Pouw Zwolle              | 1        | Zwolle   |
      | schade service | auto             | Autoschadebedrijf Kroes      | 6        | Zwolle   |
      | schade service | camper           | Van den Elzen Caravanservice | 1        | Helmond  |
      | schade service | caravan          | Van Duinkerken Rekreatie     | 2        | Nijmegen |

  Scenario Outline: Verify schade service and winkelzoeker for clicking on map
    Given I am on the <page> page of the Unive website
    When Customer selects schadehersteller with <servicePoint> on the map in city <city>
    Then Verify <address> and <openingHours> are shown correctly when schadeservice is selected

    Examples:
      | page           | servicePoint    | city   | address                       | openingHours |
      | schade service | UAS Pouw Zwolle | Zwolle | Lippestraat 5                 | 08:00-17:15  |
      | winkelzoeker   | Univé Zwolle    | Zwolle | Burgemeester Drijbersingel 15 | 09:00-17:30  |

    #ANALYTICS

  Scenario: Check analytics for schadeservice and winkelzoeker pages.
    Given I am on the schade service page of the Unive website
    When Clicked on the first search element for the city zwolle
    Then Verify that the correct knop interactie anlytics is shown for page schadeservice

  Scenario: Check analytics for schadeservice and winkelzoeker pages.
    Given I am on the winkelzoeker page of the Unive website
    When Clicked on the first search element for the city zwolle
    Then Verify that the correct knop interactie anlytics is shown for page winkelzoeker
