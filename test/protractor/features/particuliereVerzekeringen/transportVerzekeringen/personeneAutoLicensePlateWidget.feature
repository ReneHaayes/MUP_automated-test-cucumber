@licensePlateWidget  @hippo @particulierHippo @widget

Feature: Check the license plate widget on the homepage.

  @licensePlatePrivatePageWidget
  Scenario Outline: Enter a license plate number for the private page and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <willWont> appears for Particuliere autoverzekering

    Examples:
      | pageName                    | button                        | licensePlate| willWont |
      | Home                        | license plate                 | 06-HN-DL    | will     |
      | Home                        | no license plate              | 06-HN-DL    | wont     |
      | Home                        | dont know                     | 06-HN-DL    | wont     |
      | autoverzekeringProductPage  | license plate product page    | 06-HN-DL    | will     |
      | autoverzekeringProductPage  | no license plate product page | 06-HN-DL    | wont     |
      | autoverzekeringProductPage  | dont know product page        | 06-HN-DL    | wont     |

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
