@licensePlateWidget
@regressie
Feature: Check the license plate widget on the homepage.

  @licensePlatePrivatePageWidget
  Scenario Outline: Enter a license plate number for the private page and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <dodont> appears for autoverzekering

    Examples:
      | pageName                   | licensePlate | button                        | dodont |
      | Home                       | 06-HN-DL     | license plate                 | do     |
      | Home                       | 06-HN-DL     | no license plate              | dont   |
      | Home                       | 06-HN-DL     | dont know                     | dont   |
      | autoverzekeringProductPage | 06-HN-DL     | license plate product page    | do     |
      | autoverzekeringProductPage | 06-HN-DL     | no license plate product page | dont   |
      | autoverzekeringProductPage | 06-HN-DL     | dont know product page        | dont   |

  @licensePlateBusinessPageWidget
  Scenario Outline: Enter a license plate number for the business page and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <dodont> appears for bedrijfs autoverzekering

    Examples:
      | pageName | licensePlate | button                    | dodont |
      | business | 48-VDS-3     | license plate business    | do     |
      | business | 48-VDS-3     | no license plate business | dont   |
      | business | 48-VDS-3     | dont know business        | dont   |
