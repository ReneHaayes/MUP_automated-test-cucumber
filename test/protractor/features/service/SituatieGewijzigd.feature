@KlantenserviceSituatieGewijzigd @Hippo @HippoForms

Feature: Testing klantenservice page for situatie gewijzigd

  Scenario Outline: Verify correspondence overview in my inbox.
    Given I am on the klantenservice page of the Unive website
    When Customer clicks on situation <situation> to be changed
    Then Verify header with text <situation> of situation is correcly shown

    Examples:
      | situation         |
      | trouwen           |
      | verhuizing        |
      | scheiding         |
      | gezinsuitbreiding |
