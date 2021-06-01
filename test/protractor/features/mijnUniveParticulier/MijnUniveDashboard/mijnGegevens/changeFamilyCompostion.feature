@changeFamilyComposition

Feature: Changing family composition for persona when logged in.
@Testscenario
  Scenario Outline: Change identification data for persona when logged in
    Given Customer illing is logged in on the mijn unive gezinssituatie wijzigen page of the Unive website
    When Customer changes family composition preferences with <family composition>
    Then Verify thank you message is shown for family composition preferences

    Examples:
      | family composition   |
      | one person           |
#      | living together      |
#      | one parent           |
#      | family with children |
