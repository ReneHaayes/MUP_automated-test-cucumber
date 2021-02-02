@licensePlateWidget  @hippo @particulierHippo @widget

Feature: Check the license plate widget on the homepage.

  @licensePlatePrivatePageWidget
  Scenario Outline: Enter a license plate number for the private page and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <willWont> appears for Particuliere autoverzekering

    Examples:
      | pageName                   | licensePlate | button                        | willWont |
      | Home                       | 06-HN-DL     | license plate                 | will     |
      | Home                       | 06-HN-DL     | no license plate              | wont     |
      | Home                       | 06-HN-DL     | dont know                     | wont     |
      | autoverzekeringProductPage | 06-HN-DL     | license plate product page    | will     |
      | autoverzekeringProductPage | 06-HN-DL     | no license plate product page | wont     |
      | autoverzekeringProductPage | 06-HN-DL     | dont know product page        | wont     |

  @licensePlateBusinessPageWidget
  Scenario Outline: Enter a license plate number for the business page and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <willWont> appears for Bedrijfs autoverzekering

    Examples:
      | pageName | licensePlate | button                    | willWont |
      | business | 48-VDS-3     | license plate business    | will     |
      | business | 48-VDS-3     | dont know business        | wont     |
      | business | 48-VDS-3     | no license plate business | wont     |
