@changeEmailAndPasswordMijnUniveParticulier

Feature: Changing data for persona when logged in.

  Scenario Outline: Change password after logged in.
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer changes password for <persona> with <newPassword>
    Then Verify <persona> is logged in with <newPassword> for new password

    Examples:
      | persona | newPassword |
      | annie   | Test123!    |


  Scenario Outline: Change emailadres for login.
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Customer changes email address with <newEmailAddress>
    Then Verify <persona> is logged in with <newEmailAddress> for new email address

    Examples:
      | persona | newEmailAddress    |
      | annie   | test123@test123.nl |
