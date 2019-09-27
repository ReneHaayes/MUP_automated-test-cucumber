@test

Feature: test some scenarios and not run all

  Scenario Outline: Check i-text at question 2
    Given I am on the zorgCheckTool page of the Unive website
    When I answer 1 question with:
    |question1|A|
    Then Verify that the correct i-texts are shown

