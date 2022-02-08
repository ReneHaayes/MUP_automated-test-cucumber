@createMijnUniveAccountMUZ @onegini

Feature: Deleting an Account and afterwards creating an account.

  Scenario Outline: Create new mijn Unive account
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer deletes account
    And Customer <persona> creates an account for mijn Unive
    Then Aanmelden gelukt shows on screen for persona: <persona>

    Examples:
      | persona |
      | ako     |
      # boekwijt ook gebruiken na reparatie account
