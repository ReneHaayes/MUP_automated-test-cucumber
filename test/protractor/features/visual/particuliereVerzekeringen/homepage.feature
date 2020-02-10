@homePageVisual

Feature: Testing of the visual appereance of the homepage

  Scenario: Compare screenshots when at the top of the homepage.
    Given I am on the Home page of the Unive website
    When The page waits for licenseplate element is visible
    Then Verify visual elements on top of the homepage are the same compared to the base screenshot: homepage/homePageTop

  Scenario: Compare screenshots when at the bottom of the homepage.
    Given I am on the Home page of the Unive website
    When Scroll to the footer of the page
    Then Verify visual elements are the same compared to the base screenshot: homepage/homePageFooter


