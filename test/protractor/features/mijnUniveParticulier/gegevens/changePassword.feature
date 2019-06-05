@changePasswordMijnUniveParticulier

Feature: Changing data for persona when logged in.

  Scenario Outline: Change password after logged in.
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer changes password for <persona> with <newPassword>
    Then Verify <persona> is logged in with <newPassword>

    Examples:
      | persona | newPassword |
      | annie   | Test123!    |
