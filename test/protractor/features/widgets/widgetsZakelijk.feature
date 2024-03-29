@widgetsZakelijk

Feature: Check if the zakelijke widgets and product pages are correctly shown.

  @aovZzpWidget
  # Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)
  Scenario Outline: Check if the Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers) on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I apply for aansprakelijkheidsverzekering and fill in the KVK number for <company>
    Then I check if the KVK number for <company> is present on the next page of aansprakelijkheidsverzekering

    Examples:
      | company         |
      | rg timmerwerken |

  @rbZzpWidget
  # rechtsbijstandverzekering ZZP
  Scenario Outline: Check if the rechtsbijstandverzekering Zakelijk on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I apply for rechtsbijstandverzekering and fill in the KVK number for <company>
    Then I check if the KVK number for <company> is present on the next page of rechtsbijstandsverzekering

    Examples:
      | company         |
      | rg timmerwerken |

  @eigenVervoerWidget
  # eigen vervoer
  Scenario Outline: Check if the eigen vervoer verzekering Zakelijk on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I apply for eigen vervoer verzekering and fill in the KVK number for <company>
    Then I check if the KVK number for <company> is present on the next page of eigen vervoer verzekering

    Examples:
      | company         |
      | rg timmerwerken |

  @autoZakelijkWidget
  # personenautoverzekering zakelijk
  Scenario Outline: Enter a license plate number for autoverzekering particulier and check if the correct data appears.
    Given I am on the salesWidgets page of the Unive website
    When I enter the zakelijke personenauto <licensePlate> and press <button>
    Then The <licensePlate> data <willWont> appears for Zakelijke autoverzekering

    Examples:
      | button                       | licensePlate | willWont |
      | license plate company car    | KH-801-P     | will     |
      | no license plate company car | KH-801-P     | wont     |
      | dont know company car        | KH-801-P     | wont     |
      | dont know company car        | KH-801-P     | wont     |


