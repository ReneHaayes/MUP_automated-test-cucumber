@widgetsZakelijk

Feature: Check if the zakelijke widgets and product pages are correctly shown.

  @aovZzpWidget
  # Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)
  Scenario Outline: Check if the Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers) on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I apply for aansprakelijkheidsverzekering and fill in the KVK number for <company>
    Then I check if the KVK number for <company> is present on the next page

    Examples:
      | company         |
      | peej            |
      | rg timmerwerken |

  @rbZzpWidget
  # rechtsbijstandverzekering ZZP
  Scenario Outline: Check if the rechtsbijstandverzekering Zakelijk on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I apply for rechtsbijstandverzekering and fill in the KVK number for <company>
    Then I check if the KVK number for <company> is present on the next page

    Examples:
      | company         |
      | peej            |
      | rg timmerwerken |

  @autoZakelijkWidget
  # personenautoverzekering zakelijk
  Scenario Outline: Enter a license plate number for autoverzekering particulier and check if the correct data appears.
    Given I am on the salesWidgets page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <willWont> appears for Zakelijke autoverzekering

    Examples:
      | button                       | licensePlate | willWont |
      | license plate company car    | KH-801-P     | will     |
      | no license plate company car | KH-801-P     | wont     |
      | dont know company car        | KH-801-P     | wont     |
      | dont know business           | 48-VDS-3     | wont     |


