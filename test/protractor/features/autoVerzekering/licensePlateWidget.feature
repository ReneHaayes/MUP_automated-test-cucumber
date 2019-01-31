  @licensePlateWidget
  @regressie
Feature: Check the widget on the car insurance page.

  Scenario Outline: Enter a license plate number and check if the correct data appears.
    Given I am on the autoVerzekeringPat page of the Unive website
    When I enter the following license plate <licensePlate>
    Then The <licensePlate> data correctly appears

    Examples:
      | licensePlate |
      | 06-HN-DL     |

