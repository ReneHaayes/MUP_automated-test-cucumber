@reCaptcha

Feature: Check recaptcha doesn't show errors when non happy flows are being followed

  Scenario: Verify recaptcha doesnt fail after two minutes of waiting.
    Given I am on the vraagStellen page of the Unive website
    When Customer wait 2 minutes and fills in form for schadeverzekeringen vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify recaptcha doesnt fail after double click on send button
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for schadeverzekeringen vraag stellen and double clicks on button
    Then Verify question is accepted with a confirmation text
