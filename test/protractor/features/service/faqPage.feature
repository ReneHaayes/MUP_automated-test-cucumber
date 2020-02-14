@faqPageService

Feature:

  Scenario Outline:
    Given I am on the <page> page of the Unive website
    When Customer selects lees meer button
    Then verify the autoverzekering page is shown

    Examples:
      | page                          |
      | wat is een wa autoverzekering |
