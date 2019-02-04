@licensePlateWidget
@regressie
Feature: Check the license plate widget on the homepage.

  Scenario Outline: Enter a license plate number and check if the correct data appears.
    Given I am on the <pageName> page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <dodont> appears

    Examples:
      | pageName                      | licensePlate | button                        | dodont |
      | HomePat                       | 06-HN-DL     | license plate                 | do     |
      | HomePat                       | 06-HN-DL     | no license plate              | dont   |
      | HomePat                       | 06-HN-DL     | dont know                     | dont   |
      | autoverzekeringProductPagePat | 06-HN-DL     | license plate product page    | do     |
      | autoverzekeringProductPagePat | 06-HN-DL     | no license plate product page | dont   |
      | autoverzekeringProductPagePat | 06-HN-DL     | dont know product page        | dont   |
