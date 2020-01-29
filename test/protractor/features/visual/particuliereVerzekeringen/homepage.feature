@homePageVisual

Feature: Testing of the visual appereance of the homepage

  Scenario: Compare screenshots when at the top of the homepage.
    Given I am on the Home page of the Unive website
    When The page waits for licenseplate element is visible
    Then Verify visual elements on the homepage are the same compared to the base screenshot: homepage/homePageTop


