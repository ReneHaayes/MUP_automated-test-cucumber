@faqPageService

Feature: Verify the faqPage has the correct button

  Scenario Outline: Verify the faqPage has the correct button
    Given I am on the <page> page of the Unive website
    When Customer selects veelgestelde vragen button
    Then verify the veelgestelde vragen page is shown

    Examples:
      | page                          |
      | wat is een wa autoverzekering |
