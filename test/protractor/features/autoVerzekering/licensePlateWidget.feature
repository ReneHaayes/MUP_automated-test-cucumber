@licensePlateWidget
@regressie
Feature: Check the widget on the homepage.

  Scenario Outline: Enter a license plate number and check if the correct data appears.
    Given I am on the homePat page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the home page for autoverzekering
    Then The <licensePlate> data <dodont> appears

    Examples:
      | licensePlate | button           | dodont |
      | 06-HN-DL     | license plate    | do     |
      | 06-HN-DL     | no license plate | dont   |
      | 06-HN-DL     | dont know        | dont   |
